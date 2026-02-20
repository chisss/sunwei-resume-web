import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { SKILL_CATEGORY_ICONS } from '../constants';
import { Mail, MapPin, Phone, Award, GraduationCap, Briefcase, MessageCircle, Target, Banknote, ArrowRight } from 'lucide-react';

interface HomeProps {
  data: ResumeData;
}

// 求职方向数据
const JOB_TARGET_ZH = {
  title: '求职方向',
  positions: ['资深Java开发工程师', '后端架构师', 'Tech Leader / 技术经理'],
  industries: ['互联网金融', '互联网保险', 'AI / 智能化应用'],
  salary: '35K+',
  availability: '在职，可快速到岗',
};

const JOB_TARGET_EN = {
  title: 'Career Objective',
  positions: ['Senior Java Engineer', 'Backend Architect', 'Tech Leader / Engineering Manager'],
  industries: ['Fintech', 'InsurTech', 'AI / Intelligent Applications'],
  salary: '35K+ RMB',
  availability: 'Employed, available to start quickly',
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const isZh = data.hero.name === '孙伟';
  const jobTarget = isZh ? JOB_TARGET_ZH : JOB_TARGET_EN;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // summary 图标列表 (6个)
  const summaryIcons = [Award, Briefcase, Target, GraduationCap, Award, Target];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-50"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
               <Briefcase size={14} />
               {data.hero.details.exp}
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              {data.hero.name}
            </motion.h1>

            <motion.h2 variants={item} className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 mb-6">
              {data.hero.title}
            </motion.h2>

            {/* Tagline as Tags - 统一颜色 */}
            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {data.hero.tagline.split(' · ').map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm font-medium border bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Personal Details Chips */}
            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  <GraduationCap size={16} className="text-accent" /> {data.hero.details.education}
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  <MapPin size={16} className="text-secondary" /> {data.hero.contact.location}
               </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm mb-12">
              <a href={`mailto:${data.hero.contact.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-primary" /> {data.hero.contact.email}
              </a>
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="text-secondary" /> {data.hero.contact.phone}
              </div>
              {data.hero.contact.wechat && (
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={18} className="text-accent" /> {data.hero.contact.wechat}
                </div>
              )}
            </motion.div>
          </div>

          {/* Avatar Section */}
          <motion.div
            variants={item}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Spinning Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-2xl animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-white/10 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface border-4 border-surface shadow-2xl">
                   <img
                    src={data.hero.avatar}
                    alt={data.hero.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-white/5 text-gray-500"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }}
                   />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Summary Grid - 6 blocks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.hero.summary.map((point, index) => {
            const IconComp = summaryIcons[index] || Award;
            return (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-2xl bg-surface/50 border border-white/5 hover:bg-white/5 transition-all duration-300 hover:border-white/10"
              >
                <IconComp className="mb-4 text-primary w-6 h-6" />
                <p className="text-gray-300 leading-relaxed text-base font-light">{point}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Job Target Section */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-surface to-secondary/10 border border-white/10 p-8 md:p-12"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/20 border border-primary/20">
                <Target size={22} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{jobTarget.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 目标岗位 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{isZh ? '目标岗位' : 'Target Roles'}</h4>
                <div className="space-y-2">
                  {jobTarget.positions.map((pos, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary flex-shrink-0" />
                      <span className="text-white text-sm">{pos}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 目标行业 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{isZh ? '目标行业' : 'Industries'}</h4>
                <div className="space-y-2">
                  {jobTarget.industries.map((ind, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-secondary flex-shrink-0" />
                      <span className="text-white text-sm">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 期望薪资 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{isZh ? '期望薪资' : 'Expected Salary'}</h4>
                <div className="flex items-center gap-3">
                  <Banknote size={20} className="text-accent" />
                  <span className="text-2xl font-bold text-white">{jobTarget.salary}</span>
                </div>
              </div>

              {/* 到岗状态 */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{isZh ? '到岗状态' : 'Availability'}</h4>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-white text-sm">{jobTarget.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.skills.title}</h2>
           <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(data.skills.categories).map(([category, categoryData], idx) => {
            const catData = categoryData as { icon: string; items: { name: string; icon: string }[] };
            const IconComponent = SKILL_CATEGORY_ICONS[catData.icon];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 group-hover:from-primary/20 group-hover:to-transparent transition-all">
                    {IconComponent && <IconComponent className="text-gray-300 group-hover:text-primary transition-colors" size={20} />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {catData.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="relative overflow-hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-400 border border-white/5 group-hover:text-white group-hover:border-white/20 transition-all cursor-default"
                    >
                      <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative text-sm">{skill.icon}</span>
                      <span className="relative">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
