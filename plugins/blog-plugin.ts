import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogArticle {
  slug: string;
  title: string;
  tags: string[];
  created: string;
  updated: string;
  category: string;
  content: string;
  readTime: string;
}

function estimateReadTime(content: string): string {
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const words = content.replace(/[\u4e00-\u9fa5]/g, '').split(/\s+/).filter(Boolean).length;
  const totalWords = chineseChars + words;
  const minutes = Math.max(1, Math.ceil(totalWords / 400));
  return `${minutes} min`;
}

function scanBlogDir(blogDir: string): BlogArticle[] {
  const articles: BlogArticle[] = [];

  if (!fs.existsSync(blogDir)) {
    return articles;
  }

  function walkDir(dir: string, category: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Subfolder = category
        walkDir(fullPath, entry.name);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data: frontmatter, content } = matter(raw);

        const slug = entry.name
          .replace(/\.md$/, '')
          .replace(/[:\s]+/g, '-');

        articles.push({
          slug: category ? `${category}/${slug}` : slug,
          title: frontmatter.title || entry.name.replace(/\.md$/, ''),
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
          created: frontmatter.created ? String(frontmatter.created) : '',
          updated: frontmatter.updated ? String(frontmatter.updated) : '',
          category: frontmatter.category || category || '未分类',
          content,
          readTime: estimateReadTime(content),
        });
      }
    }
  }

  walkDir(blogDir, '');
  // Sort by created date descending
  articles.sort((a, b) => (b.created > a.created ? 1 : -1));
  return articles;
}

const VIRTUAL_MODULE_ID = 'virtual:blog-data';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

export default function blogPlugin(): Plugin {
  const blogDir = path.resolve(__dirname, '../content/blog');

  return {
    name: 'vite-plugin-blog',
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID;
      }
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        const articles = scanBlogDir(blogDir);
        return `export const blogArticles = ${JSON.stringify(articles, null, 2)};`;
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('content/blog') && file.endsWith('.md')) {
        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          return [mod];
        }
      }
    },
  };
}
