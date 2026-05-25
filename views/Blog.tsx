import React, { useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ResumeData } from '../types';
import {
  BookOpen, Calendar, Clock, ArrowRight, ArrowLeft,
  FolderOpen, Tag, List, ChevronRight
} from 'lucide-react';
import { useBlogList, useBlogArticle } from '../hooks/useBlog';

interface BlogProps {
  data: ResumeData;
}

// 骨架屏组件
const SkeletonBlock = ({ className }: { className?: string }) => (
  <div className={`rounded-lg shimmer ${className}`} />
);

// 从 markdown 内容中提取目录
interface TocItem {
  level: number;
  text: string;
  id: string;
}

function extractToc(content: string, articleTitle: string): TocItem[] {
  const lines = content.split('\n');
  const toc: TocItem[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const text = match[2].replace(/[`*_~\[\]]/g, '').trim();
      // 跳过与文章标题重复的
      if (text.includes(articleTitle.slice(0, 10))) continue;
      const id = text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff]+/g, '-')
        .replace(/^-|-$/g, '');
      toc.push({ level: match[1].length, text, id });
    }
  }
  return toc;
}

// 目录组件
const TableOfContents: React.FC<{ toc: TocItem[]; isZh: boolean }> = ({ toc, isZh }) => {
  const [collapsed, setCollapsed] = useState(false);

  if (toc.length < 2) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="mb-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-5 py-3.5
          text-[13px] font-medium text-white/50 hover:text-white/70
          transition-colors duration-200"
      >
        <span className="flex items-center gap-2">
          <List size={14} strokeWidth={1.5} />
          {isZh ? '目录' : 'Table of Contents'}
          <span className="text-[11px] text-white/25">({toc.length})</span>
        </span>
        <ChevronRight
          size={14}
          strokeWidth={1.5}
          className={`transition-transform duration-200 ${collapsed ? '' : 'rotate-90'}`}
        />
      </button>

      {!collapsed && (
        <div className="px-5 pb-4 space-y-0.5">
          {toc.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              className={`block py-1.5 text-[12px] leading-relaxed transition-colors duration-150
                hover:text-primary/80 ${
                  item.level === 2
                    ? 'text-white/45 font-medium'
                    : item.level === 3
                    ? 'text-white/30 pl-4'
                    : 'text-white/25 pl-8'
                }`}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

const Blog: React.FC<BlogProps> = ({ data }) => {
  const isZh = data.blog.title.includes('技术') || data.blog.title.includes('洞见');
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSlug = searchParams.get('article');
  const currentCategory = searchParams.get('category') || 'all';
  const currentTag = searchParams.get('tag') || '';

  const { articles: blogArticles, loading: listLoading, error: listError } = useBlogList();

  const currentArticleMeta = useMemo(() => {
    if (!currentSlug) return null;
    return blogArticles.find(a => a.slug === currentSlug) || null;
  }, [currentSlug, blogArticles]);

  const { article: currentArticle, loading: articleLoading, error: articleError } =
    useBlogArticle(currentArticleMeta?.path || null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlug]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogArticles.forEach(a => cats.add(a.category));
    return Array.from(cats).sort();
  }, [blogArticles]);

  const allTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    blogArticles.forEach(a => {
      a.tags.forEach(t => {
        tagCount[t] = (tagCount[t] || 0) + 1;
      });
    });
    // 只保留出现次数 >= 2 的标签
    return Object.entries(tagCount)
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }));
  }, [blogArticles]);

  const filteredArticles = useMemo(() => {
    return blogArticles.filter(a => {
      if (currentCategory !== 'all' && a.category !== currentCategory) return false;
      if (currentTag && !a.tags.includes(currentTag)) return false;
      return true;
    });
  }, [blogArticles, currentCategory, currentTag]);

  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (currentTag) params.set('tag', currentTag);
    setSearchParams(params);
  };

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (currentCategory !== 'all') params.set('category', currentCategory);
    if (tag !== currentTag) params.set('tag', tag);
    setSearchParams(params);
  };

  const handleArticleClick = (slug: string) => {
    setSearchParams({ article: slug });
  };

  const handleBackToList = () => {
    const params = new URLSearchParams();
    if (currentCategory !== 'all') params.set('category', currentCategory);
    if (currentTag) params.set('tag', currentTag);
    setSearchParams(params);
  };

  // ========= 文章详情：加载中 =========
  if (currentSlug && (articleLoading || (!currentArticle && !articleError))) {
    return (
      <div className="min-h-screen bg-background pt-[52px] pb-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-16">
          <SkeletonBlock className="h-4 w-28 mb-10" />
          <SkeletonBlock className="h-10 w-4/5 mb-5" />
          <SkeletonBlock className="h-4 w-1/3 mb-10" />
          <div className="space-y-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <SkeletonBlock
                key={i}
                className="h-4"
                style={{ width: `${65 + Math.random() * 35}%` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ========= 文章详情：加载失败 =========
  if (currentSlug && (articleError || !currentArticle)) {
    return (
      <div className="min-h-screen bg-background pt-[52px] pb-32 flex items-center justify-center">
        <div className="text-center px-5">
          <div className="w-16 h-16 rounded-3xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-6">
            <BookOpen size={28} className="text-white/20" strokeWidth={1.5} />
          </div>
          <h3 className="text-[17px] font-semibold text-white/60 mb-2">
            {isZh ? '文章加载失败' : 'Failed to load article'}
          </h3>
          <p className="text-[13px] text-white/30 mb-8">{articleError}</p>
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium
              bg-white/[0.06] hover:bg-white/[0.1] text-white/60 hover:text-white/90
              border border-white/[0.08] hover:border-white/[0.15]
              transition-all duration-200"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            {isZh ? '返回文章列表' : 'Back to articles'}
          </button>
        </div>
      </div>
    );
  }

  // ========= 文章详情视图 =========
  if (currentSlug && currentArticle) {
    const toc = extractToc(currentArticle.content, currentArticle.title);

    return (
      <div className="min-h-screen bg-background pt-[52px] pb-32 overflow-x-hidden">
        {/* 背景光晕 */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 pt-16">
          {/* 返回按钮 */}
          <motion.button
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleBackToList}
            className="group flex items-center gap-2 mb-10
              text-[13px] font-medium text-white/40 hover:text-white/80
              transition-colors duration-200"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            {isZh ? '返回文章列表' : 'Back to articles'}
          </motion.button>

          {/* 文章头部 */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            {/* 分类标签 */}
            <div className="flex items-center gap-2 text-[12px] text-primary/70 mb-4">
              <FolderOpen size={13} strokeWidth={1.5} />
              <span className="font-medium">{currentArticle.category}</span>
            </div>

            {/* 文章标题 */}
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-[1.15] mb-6">
              {currentArticle.title}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/30 mb-5">
              <div className="flex items-center gap-1.5">
                <Calendar size={13} strokeWidth={1.5} />
                <span>{currentArticle.created}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} strokeWidth={1.5} />
                <span>{currentArticle.readTime}</span>
              </div>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {currentArticle.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium
                    bg-primary/[0.08] text-primary/75 border border-primary/[0.15]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 分割线 */}
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </motion.header>

          {/* 目录 */}
          <TableOfContents toc={toc} isZh={isZh} />

          {/* 文章正文 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-[clamp(1.5rem,3vw,2rem)] prose-h1:text-white prose-h1:mt-12 prose-h1:mb-5
              prose-h2:text-[clamp(1.25rem,2.5vw,1.625rem)] prose-h2:text-white/90 prose-h2:mt-10 prose-h2:mb-4
                prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/[0.08]
              prose-h3:text-[clamp(1rem,2vw,1.25rem)] prose-h3:text-white/80 prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-white/70 prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-white/50 prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[15px]
              prose-a:text-primary/80 prose-a:no-underline prose-a:font-medium
                hover:prose-a:text-primary hover:prose-a:underline
              prose-strong:text-white/80 prose-strong:font-semibold
              prose-em:text-white/50
              prose-code:text-primary/80 prose-code:bg-white/[0.06] prose-code:border prose-code:border-white/[0.08]
                prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[13px]
                prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/[0.08]
                prose-pre:rounded-2xl prose-pre:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                prose-pre:text-[13px]
              prose-blockquote:border-l-2 prose-blockquote:border-primary/30
                prose-blockquote:bg-white/[0.02] prose-blockquote:rounded-r-xl
                prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:my-6
                prose-blockquote:text-white/40 prose-blockquote:not-italic
              prose-li:text-white/50 prose-li:text-[15px] prose-li:leading-[1.7]
              prose-li:marker:text-primary/45
              prose-ul:my-4 prose-ol:my-4
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-white/[0.04] prose-th:text-white/70 prose-th:font-semibold
                prose-th:px-4 prose-th:py-2.5 prose-th:text-left
                prose-th:border prose-th:border-white/[0.08] prose-th:text-[13px]
              prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-white/[0.06]
                prose-td:text-white/45 prose-td:text-[13px]
              prose-hr:border-white/[0.08] prose-hr:my-8
              prose-img:rounded-2xl prose-img:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // 跳过文章正文中与标题重复的 h1
                h1: ({ children }) => {
                  const text = String(children);
                  if (
                    text
                      .replace(/[^\w\u4e00-\u9fa5]/g, '')
                      .includes(currentArticle.title.replace(/[^\w\u4e00-\u9fa5]/g, '').slice(0, 10))
                  ) {
                    return null;
                  }
                  return <h1>{children}</h1>;
                },
                // 为 h2/h3/h4 添加 id 以支持目录锚点跳转
                h2: ({ children }) => {
                  const text = String(children).replace(/[`*_~\[\]]/g, '').trim();
                  const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ children }) => {
                  const text = String(children).replace(/[`*_~\[\]]/g, '').trim();
                  const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
                  return <h3 id={id}>{children}</h3>;
                },
                h4: ({ children }) => {
                  const text = String(children).replace(/[`*_~\[\]]/g, '').trim();
                  const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/^-|-$/g, '');
                  return <h4 id={id}>{children}</h4>;
                },
                // 外部链接新标签打开
                a: ({ href, children, ...props }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                  </a>
                ),
              }}
            >
              {currentArticle.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </div>
    );
  }

  // ========= 文章列表：加载中 =========
  if (listLoading) {
    return (
      <div className="min-h-screen bg-background pt-[52px] pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-16">
          {/* 标题骨架 */}
          <div className="text-center mb-14">
            <div className="w-16 h-16 rounded-3xl shimmer mx-auto mb-6" />
            <SkeletonBlock className="h-10 w-56 mx-auto mb-4" />
            <SkeletonBlock className="h-5 w-40 mx-auto" />
          </div>
          {/* 卡片骨架 */}
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-[20px] p-7 border border-white/[0.05] bg-surface">
                <div className="flex gap-3 mb-3">
                  <SkeletonBlock className="h-5 w-16" />
                  <SkeletonBlock className="h-5 w-24" />
                </div>
                <SkeletonBlock className="h-7 w-3/4 mb-4" />
                <div className="flex gap-2">
                  <SkeletonBlock className="h-5 w-14 rounded-full" />
                  <SkeletonBlock className="h-5 w-14 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ========= 文章列表：加载失败 =========
  if (listError) {
    return (
      <div className="min-h-screen bg-background pt-[52px] flex items-center justify-center">
        <div className="text-center px-5">
          <div className="w-16 h-16 rounded-3xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-6">
            <BookOpen size={28} className="text-white/20" strokeWidth={1.5} />
          </div>
          <h3 className="text-[17px] font-semibold text-white/60 mb-2">
            {isZh ? '文章列表加载失败' : 'Failed to load articles'}
          </h3>
          <p className="text-[13px] text-white/30">{listError}</p>
        </div>
      </div>
    );
  }

  // ========= 文章列表视图 =========
  return (
    <div className="min-h-screen bg-background pt-[52px] pb-32 overflow-x-hidden">
      {/* 背景光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 pt-16">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          {/* 图标 */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl
            bg-primary/[0.08] border border-primary/[0.15] mb-7
            shadow-[0_0_32px_rgba(0,113,227,0.12)]">
            <BookOpen size={24} className="text-primary/80" strokeWidth={1.5} />
          </div>

          <span className="text-label mb-3 block">
            {isZh ? '技术分享' : 'Tech Insights'}
          </span>
          <h1 className="heading-section text-white mb-3">{data.blog.title}</h1>
          <p className="text-[15px] text-white/40 mb-2">{data.blog.subtitle}</p>
          <p className="text-[13px] text-white/25">
            {isZh ? `${blogArticles.length} 篇文章` : `${blogArticles.length} articles`}
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* 分类 Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-5"
        >
          <div className="flex items-center gap-1.5 text-white/25 mr-1">
            <FolderOpen size={14} strokeWidth={1.5} />
          </div>

          {[{ key: 'all', label: isZh ? '全部' : 'All' }, ...categories.map(c => ({ key: c, label: c }))].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                currentCategory === key
                  ? 'bg-primary/[0.14] text-primary border border-primary/[0.28] shadow-[0_0_16px_rgba(0,113,227,0.12)]'
                  : 'bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/70 border border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* 标签筛选 */}
        {allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-wrap items-center gap-1.5 mb-10 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
          >
            <div className="flex items-center gap-1.5 text-white/25 mr-2 pl-1">
              <Tag size={13} strokeWidth={1.5} />
              <span className="text-[11px] font-medium">{isZh ? '标签' : 'Tags'}</span>
            </div>
            {allTags.map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 ${
                  currentTag === tag
                    ? 'bg-primary/[0.14] text-primary/90 border border-primary/[0.25] shadow-[0_0_8px_rgba(0,113,227,0.1)]'
                    : 'bg-white/[0.04] text-white/35 hover:text-white/60 hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                #{tag}
                <span className="ml-1 text-[10px] opacity-50">{count}</span>
              </button>
            ))}
          </motion.div>
        )}

        {/* 文章列表 */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => handleArticleClick(article.slug)}
                className="group relative rounded-[20px] p-6 md:p-7
                  bg-surface border border-white/[0.07]
                  hover:border-white/[0.13] hover:bg-[#0f0f0f]
                  transition-all duration-350
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]
                  cursor-pointer overflow-hidden"
              >
                {/* hover 装饰光 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl
                  group-hover:bg-primary/[0.06] transition-colors duration-400 pointer-events-none" />
                {/* 顶部高光线 */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative z-10">
                  {/* 分类 + 元信息 */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-white/30 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-primary/70">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} strokeWidth={1.5} />
                      <span>{article.created}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} strokeWidth={1.5} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* 文章标题 */}
                  <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-white/80 mb-4 leading-snug
                    group-hover:text-white transition-colors duration-200 tracking-tight">
                    {article.title}
                  </h2>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white/[0.03] text-white/25 border border-white/[0.05]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 阅读更多 */}
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-white/25 group-hover:text-primary/70 transition-colors duration-200">
                    {isZh ? '阅读全文' : 'Read more'}
                    <ArrowRight
                      size={13}
                      strokeWidth={2}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* 空状态 */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/[0.04] border border-white/[0.06]
                flex items-center justify-center mx-auto mb-5">
                <BookOpen size={24} className="text-white/20" strokeWidth={1.5} />
              </div>
              <p className="text-[14px] text-white/30">
                {isZh ? '暂无符合条件的文章' : 'No matching articles found'}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
