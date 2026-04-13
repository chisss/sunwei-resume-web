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

// 动画配置
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const isZh = data.hero.name === '孙伟';
  const jobTarget = isZh ? JOB_TARGET_ZH : JOB_TARGET_EN;

  const summaryIcons = [Award, Briefcase, Target, GraduationCap, Award, Target];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ========= Hero Section ========= */}
      <section className="relative min-h-[100svh] flex items-center pt-16 pb-24 overflow-hidden">
        {/* 背景装饰光晕 */}
        <div
          className="absolute bg-orb w-[700px] h-[700px] bg-primary/[0.07] -top-40 -right-40"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bg-orb w-[500px] h-[500px] bg-secondary/[0.06] bottom-0 -left-32"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute bg-orb w-[300px] h-[300px] bg-accent/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: '6s' }}
        />

        {/* 细微网格背景 */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24"
          >
            {/* 文字内容区 */}
            <div className="flex-1 text-center lg:text-left">
              {/* 经验标签 */}
              <motion.div variants={itemUp}>
                <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full
                  bg-primary/[0.08] border border-primary/[0.15]
                  text-primary text-[13px] font-medium tracking-wide">
                  <Briefcase size={13} strokeWidth={2} />
                  {data.hero.details.exp}
                </span>
              </motion.div>

              {/* 姓名 */}
              <motion.h1
                variants={itemUp}
                className="text-[clamp(3.5rem,10vw,7rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-5 text-white"
              >
                {data.hero.name}
              </motion.h1>

              {/* 职位标题 */}
              <motion.h2
                variants={itemUp}
                className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium tracking-tight mb-7
                  text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/50 to-white/30"
              >
                {data.hero.title}
              </motion.h2>

              {/* 标签列表 */}
              <motion.div
                variants={itemUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              >
                {data.hero.tagline.split(' · ').map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* 基本信息 */}
              <motion.div
                variants={itemUp}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl
                  bg-white/[0.04] border border-white/[0.08] text-[13px] text-white/60">
                  <GraduationCap size={15} className="text-accent/80" strokeWidth={1.5} />
                  {data.hero.details.education}
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl
                  bg-white/[0.04] border border-white/[0.08] text-[13px] text-white/60">
                  <MapPin size={15} className="text-secondary/80" strokeWidth={1.5} />
                  {data.hero.contact.location}
                </div>
              </motion.div>

              {/* 联系方式 */}
              <motion.div
                variants={itemUp}
                className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-10"
              >
                <a
                  href={`mailto:${data.hero.contact.email}`}
                  className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  <Mail size={15} className="text-primary/70" strokeWidth={1.5} />
                  {data.hero.contact.email}
                </a>
                <div className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200 cursor-default">
                  <Phone size={15} className="text-secondary/70" strokeWidth={1.5} />
                  {data.hero.contact.phone}
                </div>
                {data.hero.contact.wechat && (
                  <div className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-200 cursor-default">
                    <MessageCircle size={15} className="text-accent/70" strokeWidth={1.5} />
                    {data.hero.contact.wechat}
                  </div>
                )}
              </motion.div>
            </div>

            {/* 头像区域 */}
            <motion.div
              variants={itemUp}
              className="relative flex-shrink-0"
            >
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* 外层光晕环 */}
                <div className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent blur-2xl animate-pulse-slow" />

                {/* 旋转渐变边框 */}
                <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-white/20">
                  {/* 头像容器 */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-surface group relative">
                    <img
                      src={data.hero.avatar}
                      alt={data.hero.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = 'none';
                        el.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                              <circle cx="12" cy="7" r="4"/>
                            </svg>
                          </div>`;
                      }}
                    />
                  </div>
                </div>

                {/* 浮动装饰点 */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent/60 blur-[2px] animate-pulse" />
                <div className="absolute -bottom-3 -left-2 w-3 h-3 rounded-full bg-primary/50 blur-[2px] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========= Summary Cards Section ========= */}
      <section className="py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* 节标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">{isZh ? '关于我' : 'About Me'}</span>
          <h2 className="heading-section text-white mb-3">
            {isZh ? '核心优势' : 'Core Strengths'}
          </h2>
          <div className="section-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.hero.summary.map((point, index) => {
            const IconComp = summaryIcons[index] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="card-base p-7 group"
              >
                {/* 图标 */}
                <div className="mb-5 w-10 h-10 rounded-2xl bg-primary/[0.08] border border-primary/[0.12]
                  flex items-center justify-center group-hover:bg-primary/[0.15] transition-colors duration-300">
                  <IconComp className="text-primary/70 group-hover:text-primary transition-colors duration-300" size={18} strokeWidth={1.5} />
                </div>
                {/* 内容 */}
                <p className="text-white/50 leading-relaxed text-[14px] group-hover:text-white/70 transition-colors duration-300">
                  {point}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========= Job Target Section ========= */}
      <section className="pb-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] p-8 md:p-12 border border-white/[0.07]"
          style={{
            background: 'linear-gradient(135deg, rgba(0,113,227,0.06) 0%, rgba(10,10,10,1) 50%, rgba(191,90,242,0.06) 100%)'
          }}
        >
          {/* 背景装饰 */}
          <div className="absolute right-0 top-0 w-72 h-72 bg-primary/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-56 h-56 bg-secondary/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            {/* 标题 */}
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2.5 rounded-2xl bg-primary/[0.1] border border-primary/[0.15]">
                <Target size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white tracking-tight">
                {jobTarget.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 目标岗位 */}
              <div className="space-y-4">
                <p className="text-label">{isZh ? '目标岗位' : 'Target Roles'}</p>
                <div className="space-y-2.5">
                  {jobTarget.positions.map((pos, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <ArrowRight size={13} className="text-primary/60 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-white/70 text-[13px] leading-snug">{pos}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 目标行业 */}
              <div className="space-y-4">
                <p className="text-label">{isZh ? '目标行业' : 'Industries'}</p>
                <div className="space-y-2.5">
                  {jobTarget.industries.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <ArrowRight size={13} className="text-secondary/60 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-white/70 text-[13px] leading-snug">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 期望薪资 */}
              <div className="space-y-4">
                <p className="text-label">{isZh ? '期望薪资' : 'Expected Salary'}</p>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent/[0.08] border border-accent/[0.12]">
                    <Banknote size={18} className="text-accent/70" strokeWidth={1.5} />
                  </div>
                  <span className="text-[1.75rem] font-bold text-white tracking-tight">{jobTarget.salary}</span>
                </div>
              </div>

              {/* 到岗状态 */}
              <div className="space-y-4">
                <p className="text-label">{isZh ? '到岗状态' : 'Availability'}</p>
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-white/70 text-[13px]">{jobTarget.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========= Skills Section ========= */}
      <section className="pb-32 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* 节标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">{isZh ? '技术能力' : 'Technical Skills'}</span>
          <h2 className="heading-section text-white mb-3">{data.skills.title}</h2>
          <div className="section-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
          {Object.entries(data.skills.categories).map(([category, categoryData], idx) => {
            const catData = categoryData as { icon: string; items: { name: string; icon: string }[] };
            const IconComponent = SKILL_CATEGORY_ICONS[catData.icon];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative flex h-full flex-col rounded-2xl p-5 border border-white/[0.07] bg-surface
                  hover:border-white/[0.12] transition-all duration-400
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1"
              >
                {/* 顶部光晕（hover时显示） */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl" />

                {/* 分类头部 */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.05]">
                  <div className="flex-shrink-0 p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]
                    group-hover:bg-primary/[0.1] group-hover:border-primary/[0.15] transition-all duration-300">
                    {IconComponent && (
                      <IconComponent
                        className="text-white/40 group-hover:text-primary transition-colors duration-300"
                        size={16}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3 className="text-[14px] font-semibold text-white/70 group-hover:text-white/90 transition-colors duration-300 tracking-tight">
                    {category}
                  </h3>
                </div>

                {/* 技能标签 */}
                <div className="mt-auto flex flex-wrap content-start gap-1.5">
                  {catData.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[12px] font-medium
                        bg-white/[0.04] text-white/40 border border-white/[0.05]
                        group-hover:text-white/60 group-hover:border-white/[0.1]
                        transition-all duration-300 cursor-default"
                    >
                      <span className="text-[11px]">{skill.icon}</span>
                      <span>{skill.name}</span>
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
