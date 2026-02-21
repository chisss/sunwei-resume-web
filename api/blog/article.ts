import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getFileContent } from './_lib/github.js';
import { parseArticle } from './_lib/parse.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { path } = req.query;

  if (!path || typeof path !== 'string') {
    return res.status(400).json({ error: 'Missing required query parameter: path' });
  }

  try {
    const rawContent = await getFileContent(path);
    const article = parseArticle(rawContent, path);

    // 文章内容缓存更久：Edge 10 分钟，后台刷新 20 分钟
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');
    return res.status(200).json(article);
  } catch (error: any) {
    console.error(`Blog article error for path "${path}":`, error);

    if (error.message.includes('404')) {
      return res.status(404).json({ error: 'Article not found' });
    }

    return res.status(500).json({
      error: 'Failed to fetch article',
      message: error.message,
    });
  }
}
