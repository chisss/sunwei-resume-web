import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRepoTree, getFileContent } from './_lib/github';
import { parseArticle, type BlogArticleMeta } from './_lib/parse';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. 获取完整文件树
    const tree = await getRepoTree();

    // 2. 过滤出 .md 文件（忽略根目录下的 README 等）
    const mdFiles = tree.filter(
      (item) => item.type === 'blob' && item.path.endsWith('.md') && item.path.includes('/')
    );

    // 3. 并发获取所有 .md 文件内容并解析 frontmatter
    const results = await Promise.allSettled(
      mdFiles.map(async (file) => {
        const rawContent = await getFileContent(file.path);
        const article = parseArticle(rawContent, file.path);
        const { content, ...meta } = article;
        return meta as BlogArticleMeta;
      })
    );

    const articles: BlogArticleMeta[] = [];
    for (const result of results) {
      if (result.status === 'fulfilled') {
        articles.push(result.value);
      }
    }

    // 4. 按 created 倒序
    articles.sort((a, b) => (b.created > a.created ? 1 : -1));

    // 5. 缓存：Edge 5 分钟，后台刷新 10 分钟
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ articles });
  } catch (error: any) {
    console.error('Blog list error:', error);
    return res.status(500).json({
      error: 'Failed to fetch blog list',
      message: error.message,
    });
  }
}
