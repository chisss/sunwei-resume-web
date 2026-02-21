import matter from 'gray-matter';

export interface BlogArticleMeta {
  slug: string;
  path: string;
  title: string;
  tags: string[];
  created: string;
  updated: string;
  category: string;
  readTime: string;
}

export interface BlogArticleFull extends BlogArticleMeta {
  content: string;
}

export function estimateReadTime(content: string): string {
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const words = content
    .replace(/[\u4e00-\u9fa5]/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  const totalWords = chineseChars + words;
  const minutes = Math.max(1, Math.ceil(totalWords / 400));
  return `${minutes} min`;
}

export function parseArticle(rawContent: string, filePath: string): BlogArticleFull {
  const { data: frontmatter, content } = matter(rawContent);

  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const category = pathParts.length > 1 ? pathParts[0] : '未分类';

  const slugBase = fileName.replace(/\.md$/, '').replace(/[:\s]+/g, '-');
  const slug = category ? `${category}/${slugBase}` : slugBase;

  return {
    slug,
    path: filePath,
    title: frontmatter.title || fileName.replace(/\.md$/, ''),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    created: frontmatter.created ? String(frontmatter.created) : '',
    updated: frontmatter.updated ? String(frontmatter.updated) : '',
    category: frontmatter.category || category || '未分类',
    content,
    readTime: estimateReadTime(content),
  };
}
