declare module 'virtual:blog-data' {
  export interface BlogArticle {
    slug: string;
    title: string;
    tags: string[];
    created: string;
    updated: string;
    category: string;
    content: string;
    readTime: string;
  }
  export const blogArticles: BlogArticle[];
}
