import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  data: ResumeData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const isZh = data.experience.title.includes('工作') || data.experience.title.includes('经历');

  return (
    <div className="min-h-screen bg-background pt-[52px] pb-32 overflow-x-hidden">
      {/* 背景光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 pt-20">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label mb-4 block">
            {isZh ? '职业经历' : 'Career History'}
          </span>
          <h1 className="heading-section text-white mb-3">{data.experience.title}</h1>
          <div className="section-divider mt-5" />
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 时间线轨道 */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-white/[0.06] to-transparent ml-[7px] md:ml-0 md:left-auto md:right-auto hidden md:block" style={{ left: '50%', transform: 'translateX(-50%)' }} />

          {/* 移动端时间线 */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-white/[0.06] to-transparent md:hidden" />

          <div className="space-y-10">
            {data.experience.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative pl-8 md:pl-0"
              >
                {/* 移动端时间线圆点 */}
                <div className="absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary/60 md:hidden z-10" />

                {/* 桌面端卡片（居中时间线布局，单列）*/}
                <div className="md:ml-8 group">
                  {/* 卡片容器 */}
                  <div
                    className="relative rounded-[24px] p-7 md:p-8 overflow-hidden
                      bg-surface border border-white/[0.07]
                      hover:border-white/[0.12]
                      transition-all duration-400
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                      hover:-translate-y-1"
                  >
                    {/* 卡片顶部高光线 */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                    {/* 悬停时的彩色顶部线 */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* 背景装饰 */}
                    <div className="absolute right-0 top-0 w-48 h-48 bg-primary/[0.03] rounded-full blur-3xl group-hover:bg-primary/[0.06] transition-colors duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                      {/* 头部：公司名 + 时间段 */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div className="flex-1">
                          {/* 序号标签 */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[11px] font-medium text-white/30 mb-3">
                            <span className="w-4 h-4 rounded-full bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            {isZh ? '工作经历' : 'Work Experience'}
                          </div>

                          <h3 className="text-[clamp(1.25rem,3vw,1.625rem)] font-bold text-white tracking-tight mb-2">
                            {item.company}
                          </h3>

                          <div className="flex items-center gap-2 text-primary/80">
                            <Briefcase size={14} strokeWidth={1.5} />
                            <span className="text-[13px] font-medium">{item.role}</span>
                          </div>
                        </div>

                        {/* 时间标签 */}
                        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl
                          bg-white/[0.04] border border-white/[0.07]
                          text-[12px] text-white/40 self-start flex-shrink-0">
                          <Calendar size={13} strokeWidth={1.5} />
                          <span className="font-medium">{item.period}</span>
                        </div>
                      </div>

                      {/* 公司描述 */}
                      {item.description && item.description.length > 0 && (
                        <div className="mb-6 pl-4 border-l-2 border-white/[0.06]">
                          {item.description.map((desc, i) => (
                            <p key={i} className="text-[13px] text-white/35 italic leading-relaxed">{desc}</p>
                          ))}
                        </div>
                      )}

                      {/* 工作成就 */}
                      <div className="space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-3 group/item">
                            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center
                              group-hover/item:bg-accent/[0.15] transition-colors duration-200">
                              <CheckCircle2 size={11} className="text-accent/60 group-hover/item:text-accent transition-colors duration-200" strokeWidth={2} />
                            </div>
                            <span className="text-[13.5px] text-white/55 leading-relaxed group-hover/item:text-white/75 transition-colors duration-200">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
