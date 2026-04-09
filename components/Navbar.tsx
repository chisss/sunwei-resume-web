import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Language, ResumeData } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  data: ResumeData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 监听滚动，增强磨砂玻璃效果
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 路由变化时关闭移动菜单
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = Object.keys(data).map((key) => ({
    key,
    ...data[key]
  }));

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          scrolled
            ? 'bg-black/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.05)]'
            : 'bg-black/40 backdrop-blur-xl border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[52px]">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex-shrink-0 flex items-center group"
              aria-label="首页"
            >
              <span
                className="text-[17px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200"
                style={{ letterSpacing: '-0.01em' }}
              >
                SW
              </span>
              <span className="text-white/30 text-[17px] font-light ml-0.5">.</span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 rounded-full ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  {/* 活跃状态指示器 */}
                  {isActive(link.path) && (
                    <span className="absolute inset-0 bg-white/10 rounded-full" />
                  )}
                  <span className="relative">{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* 语言切换 */}
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium
                  text-white/50 hover:text-white/80
                  bg-white/[0.04] hover:bg-white/[0.08]
                  border border-white/[0.06] hover:border-white/[0.12]
                  transition-all duration-200"
                aria-label="切换语言"
              >
                <Globe size={12} strokeWidth={1.5} />
                <span>{lang === 'zh' ? 'EN' : '中文'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="p-2 rounded-full text-white/50 hover:text-white/80 transition-colors"
                aria-label="切换语言"
              >
                <Globe size={16} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full text-white/50 hover:text-white/80 transition-all duration-200 hover:bg-white/[0.06]"
                aria-label={isOpen ? '关闭菜单' : '打开菜单'}
                aria-expanded={isOpen}
              >
                <span className={`transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 absolute' : 'opacity-100 rotate-0'}`}>
                  {!isOpen && <Menu size={20} strokeWidth={1.5} />}
                </span>
                {isOpen ? <X size={20} strokeWidth={1.5} /> : null}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/90 backdrop-blur-2xl border-t border-white/[0.06] px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* 移动菜单遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
