import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Blog from './views/Blog';
import { RESUME_DATA } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <p>© {new Date().getFullYear()} Sun Wei. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;