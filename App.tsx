import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Blog from './views/Blog';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';
import { RESUME_DATA } from './constants';
import { Language } from './types';
import { preloadBlogList } from './hooks/useBlog';

// 每页 SEO 配置
const PAGE_SEO: Record<string, Record<Language, { title: string; description: string }>> = {
  '/': {
    zh: { title: '孙伟 | 资深Java工程师', description: '孙伟 - 资深Java工程师，8年后端开发经验，专注微服务架构、金融科技与AI智能化，精通Spring Cloud、Kubernetes等技术栈' },
    en: { title: 'Sun Wei | Senior Java Engineer', description: 'Sun Wei - Senior Java Engineer with 8 years of backend development experience, specializing in microservices architecture, fintech, and AI integration' },
  },
  '/experience': {
    zh: { title: '工作经历 | 孙伟', description: '孙伟的工作经历 - 曾任职于度小满金融、众安保险等头部企业，深耕互联网金融与保险领域' },
    en: { title: 'Experience | Sun Wei', description: 'Work experience of Sun Wei - Previously at Du Xiaoman Finance, ZhongAn Insurance, specializing in fintech and insurance' },
  },
  '/projects': {
    zh: { title: '项目实战 | 孙伟', description: '孙伟的项目实战经验 - 微服务架构设计、AI Agent平台搭建、信贷核心系统开发等' },
    en: { title: 'Projects | Sun Wei', description: 'Project portfolio of Sun Wei - Microservices architecture, AI Agent platform, credit core system development' },
  },
  '/blog': {
    zh: { title: '技术博客 | 孙伟', description: '孙伟的技术博客 - 分享Java、微服务、AI Agent、系统架构等技术实践与思考' },
    en: { title: 'Blog | Sun Wei', description: 'Technical blog by Sun Wei - Sharing insights on Java, microservices, AI Agent, and system architecture' },
  },
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

  const data = RESUME_DATA[lang];
  const pageSeo = PAGE_SEO[location.pathname]?.[lang] || PAGE_SEO['/'][lang];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <SEO title={pageSeo.title} description={pageSeo.description} path={location.pathname} lang={lang} />
      <StructuredData />
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
