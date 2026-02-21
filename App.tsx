import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Blog from './views/Blog';
import { RESUME_DATA } from './constants';
import { Language } from './types';
import { preloadBlogList } from './hooks/useBlog';

const PAGE_TITLES: Record<string, Record<Language, string>> = {
  '/': { zh: '孙伟 | 资深Java工程师', en: 'Sun Wei | Senior Java Engineer' },
  '/experience': { zh: '工作经历 | 孙伟', en: 'Experience | Sun Wei' },
  '/projects': { zh: '项目实战 | 孙伟', en: 'Projects | Sun Wei' },
  '/blog': { zh: '技术博客 | 孙伟', en: 'Blog | Sun Wei' },
};

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const location = useLocation();

  // 首页后台预加载博客列表
  useEffect(() => {
    preloadBlogList();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dynamic page title
  useEffect(() => {
    const title = PAGE_TITLES[location.pathname]?.[lang] || PAGE_TITLES['/'][lang];
    document.title = title;
  }, [location.pathname, lang]);

  const data = RESUME_DATA[lang];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar lang={lang} setLang={setLang} data={data.nav} />

      <main className="relative z-0">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/experience" element={<Experience data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/blog" element={<Blog data={data} />} />
        </Routes>
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} {lang === 'zh' ? '孙伟' : 'Sun Wei'}. {lang === 'zh' ? '保留所有权利' : 'All rights reserved'}.</p>
        <p className="mt-2">{lang === 'zh' ? '基于 React & Tailwind CSS 构建' : 'Built with React & Tailwind CSS'}</p>
      </footer>
    </div>
  );
}

export default App;
