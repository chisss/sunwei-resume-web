import { useState, useEffect } from 'react';

// ===== 类型定义 =====
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

// ===== 内存缓存 =====
const CACHE_TTL = 5 * 60 * 1000; // 5 分钟

const listCache: { data: BlogArticleMeta[] | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

const articleCache = new Map<string, { data: BlogArticleFull; timestamp: number }>();

function isFresh(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_TTL;
}

// ===== API 调用 =====
async function fetchBlogList(): Promise<BlogArticleMeta[]> {
  if (listCache.data && isFresh(listCache.timestamp)) {
    return listCache.data;
  }

  const res = await fetch('/api/blog/list');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();

  listCache.data = json.articles;
  listCache.timestamp = Date.now();
  return json.articles;
}

async function fetchBlogArticle(path: string): Promise<BlogArticleFull> {
  const cached = articleCache.get(path);
  if (cached && isFresh(cached.timestamp)) {
    return cached.data;
  }

  const res = await fetch(`/api/blog/article?path=${encodeURIComponent(path)}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: BlogArticleFull = await res.json();

  articleCache.set(path, { data, timestamp: Date.now() });
  return data;
}

// ===== 预加载（首页后台调用） =====
export function preloadBlogList(): void {
  fetchBlogList().catch(() => {
    // 静默失败，用户访问博客页时会重试
  });
}

// ===== Hooks =====
export function useBlogList() {
  const [articles, setArticles] = useState<BlogArticleMeta[]>(listCache.data || []);
  const [loading, setLoading] = useState(!listCache.data);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchBlogList()
      .then((data) => {
        if (!cancelled) {
          setArticles(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading, error };
}

export function useBlogArticle(path: string | null) {
  const [article, setArticle] = useState<BlogArticleFull | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!path) {
      setArticle(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    // 如果缓存中有，立即设置
    const cached = articleCache.get(path);
    if (cached && isFresh(cached.timestamp)) {
      setArticle(cached.data);
      setLoading(false);
      return;
    }

    fetchBlogArticle(path)
      .then((data) => {
        if (!cancelled) {
          setArticle(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return { article, loading, error };
}
