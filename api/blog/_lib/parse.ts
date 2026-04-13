import matter from 'gray-matter';

function normalizeDatePart(value: string): string {
  return value.padStart(2, '0');
}

export function normalizeArticleDate(dateValue: unknown): string {
  if (!dateValue) {
    return '';
  }

  if (dateValue instanceof Date) {
    return Number.isNaN(dateValue.getTime()) ? '' : dateValue.toISOString().slice(0, 10);
  }

  const rawText = String(dateValue).trim();
  if (!rawText) {
    return '';
  }

  const normalizedText = rawText
    .replace(/[年./]/g, '-')
    .replace(/月/g, '-')
    .replace(/日/g, '')
    .replace(/\s+/g, ' ');

  const dateMatch = normalizedText.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(.*))?$/);
  if (dateMatch) {
    const [, year, month, day, timePart] = dateMatch;
    const safeDate = `${year}-${normalizeDatePart(month)}-${normalizeDatePart(day)}`;
    return timePart ? `${safeDate} ${timePart.trim()}` : safeDate;
  }

  return rawText;
}

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
    created: normalizeArticleDate(frontmatter.created),
    updated: normalizeArticleDate(frontmatter.updated),
    category: frontmatter.category || category || '未分类',
    content,
    readTime: estimateReadTime(content),
  };
}
