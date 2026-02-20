import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ResumeData } from '../types';
import {
  BookOpen, Calendar, Clock, ArrowRight, ArrowLeft,
  FolderOpen, Tag
} from 'lucide-react';
import { blogArticles } from 'virtual:blog-data';

interface BlogProps {
  data: ResumeData;
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  const isZh = data.blog.title.includes('技术') || data.blog.title.includes('洞见');
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSlug = searchParams.get('article');
  const currentCategory = searchParams.get('category') || 'all';
  const currentTag = searchParams.get('tag') || '';

  // Scroll to top when switching between list and detail view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogArticles.forEach(a => cats.add(a.category));
    return Array.from(cats).sort();
  }, []);

  const allTags = useMemo(() => {
    const tagCount: Record<string, number> = {};
    blogArticles.forEach(a => {
      a.tags.forEach(t => {
        tagCount[t] = (tagCount[t] || 0) + 1;
      });
    });
    return Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }));
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return blogArticles.filter(a => {
      if (currentCategory !== 'all' && a.category !== currentCategory) return false;
      if (currentTag && !a.tags.includes(currentTag)) return false;
      return true;
    });
  }, [currentCategory, currentTag]);

  // Current article for detail view
  const currentArticle = useMemo(() => {
    if (!currentSlug) return null;
    return blogArticles.find(a => a.slug === currentSlug) || null;
  }, [currentSlug]);

  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (currentTag) params.set('tag', currentTag);
    setSearchParams(params);
  };

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams();
    if (currentCategory !== 'all') params.set('category', currentCategory);
    if (tag === currentTag) {
      // Toggle off
    } else {
      params.set('tag', tag);
    }
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

  // ========= Article Detail View =========
  if (currentArticle) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl w-full mx-auto px-4">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackToList}
            className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">{isZh ? '返回文章列表' : 'Back to articles'}</span>
          </motion.button>

          {/* Article header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 text-xs text-secondary mb-3">
              <FolderOpen size={14} />
              <span>{currentArticle.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {currentArticle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{currentArticle.created}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{currentArticle.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {currentArticle.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs bg-secondary/10 text-secondary border border-secondary/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-10
              prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/10
              prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
              prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-secondary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-surface prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-lg
              prose-blockquote:border-l-secondary prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4
              prose-li:text-gray-300 prose-li:marker:text-secondary
              prose-table:border-collapse
              prose-th:bg-white/5 prose-th:text-white prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-white/10
              prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-white/10 prose-td:text-gray-300
              prose-hr:border-white/10
              prose-img:rounded-xl prose-img:shadow-lg
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Skip the first h1 (title) since we render it above
                h1: ({ children }) => {
                  const text = String(children);
                  if (text.replace(/[^\w\u4e00-\u9fa5]/g, '').includes(currentArticle.title.replace(/[^\w\u4e00-\u9fa5]/g, '').slice(0, 10))) {
                    return null;
                  }
                  return <h1>{children}</h1>;
                },
                // Open external links in new tab
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

  // ========= Article List View =========
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl w-full mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 shadow-lg shadow-purple-500/10">
            <BookOpen size={32} className="text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.blog.title}
          </h2>
          <p className="text-lg text-gray-400">{data.blog.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">
            {isZh ? `${blogArticles.length} 篇文章` : `${blogArticles.length} articles`}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <FolderOpen size={16} className="text-gray-500 mr-1" />
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentCategory === 'all'
                ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {isZh ? '全部' : 'All'}
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentCategory === cat
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <Tag size={14} className="text-gray-500 mr-1" />
          {allTags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                currentTag === tag
                  ? 'bg-secondary/20 text-secondary border border-secondary/40'
                  : 'bg-white/5 text-gray-500 hover:text-gray-300 border border-transparent hover:border-white/10'
              }`}
            >
              #{tag}
              <span className="ml-1 opacity-50">{count}</span>
            </button>
          ))}
        </motion.div>

        {/* Article list */}
        <div className="grid gap-5">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleArticleClick(article.slug)}
                className="group relative bg-surface rounded-2xl p-6 md:p-8 border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>

                <div className="relative z-10">
                  {/* Category & Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-secondary/80 border border-white/5">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{article.created}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-gray-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-secondary transition-colors">
                    {isZh ? '阅读全文' : 'Read more'}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500"
            >
              <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
              <p>{isZh ? '暂无符合条件的文章' : 'No matching articles found'}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
