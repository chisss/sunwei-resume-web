import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeData } from '../types';
import {
  Cpu, Target, Zap, ChevronDown, ChevronUp, CheckCircle2,
  UserCheck, Bot, Shield, MessageSquare, Layers, Database, Tag
} from 'lucide-react';

interface ProjectsProps {
  data: ResumeData;
}

// 根据项目ID判断项目类型标签
function getProjectTag(
  projectId: string,
  isZh: boolean
): { label: string; icon: React.ReactNode; color: string } {
  const configs: Record<string, { zh: string; en: string; icon: React.ReactNode; color: string }> = {
    'ai-assistant': {
      zh: 'AI 智能化', en: 'AI Project',
      icon: <Bot size={12} strokeWidth={1.5} />,
      color: 'from-[#30d158]/10 to-transparent border-[#30d158]/20 text-[#30d158]'
    },
    'risk-control': {
      zh: '风控系统', en: 'Risk Control',
      icon: <Shield size={12} strokeWidth={1.5} />,
      color: 'from-red-500/10 to-transparent border-red-500/20 text-red-400'
    },
    'traffic-dist': {
      zh: '流量分发', en: 'Traffic Routing',
      icon: <Layers size={12} strokeWidth={1.5} />,
      color: 'from-orange-500/10 to-transparent border-orange-500/20 text-orange-400'
    },
    'msg-platform-refactor': {
      zh: '消息中间件', en: 'Messaging',
      icon: <MessageSquare size={12} strokeWidth={1.5} />,
      color: 'from-[#bf5af2]/10 to-transparent border-[#bf5af2]/20 text-[#bf5af2]'
    },
    'trading-platform': {
      zh: '领域重构', en: 'DDD Refactor',
      icon: <Database size={12} strokeWidth={1.5} />,
      color: 'from-[#0071e3]/10 to-transparent border-[#0071e3]/20 text-[#0071e3]'
    },
    'contract-microservice': {
      zh: '微服务架构', en: 'Microservices',
      icon: <Layers size={12} strokeWidth={1.5} />,
      color: 'from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400'
    },
  };

  const config = configs[projectId];
  if (config) {
    return {
      label: isZh ? config.zh : config.en,
      icon: config.icon,
      color: config.color
    };
  }
  return {
    label: isZh ? '核心项目' : 'Core Project',
    icon: <Tag size={12} strokeWidth={1.5} />,
    color: 'from-white/5 to-transparent border-white/10 text-white/50'
  };
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const isZh = data.projects.title.includes('项目') || data.projects.title.includes('精选');

  return (
    <div className="min-h-screen bg-background pt-[52px] pb-32 overflow-x-hidden">
      {/* 背景光晕 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-secondary/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-20">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label mb-4 block">
            {isZh ? '项目经验' : 'Project Portfolio'}
          </span>
          <h1 className="heading-section text-white mb-3">{data.projects.title}</h1>
          <div className="section-divider mt-5" />
        </motion.div>

        {/* 项目列表 */}
        <div className="space-y-6">
          {data.projects.items.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const projectTag = getProjectTag(project.id, isZh);
            const isAI = project.techStack.some(t =>
              ['LangChain4J', 'Dify', 'Milvus', 'RAG'].includes(t)
            );

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative rounded-[24px] overflow-hidden
                  bg-surface border border-white/[0.07]
                  hover:border-white/[0.12]
                  transition-all duration-400
                  hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
              >
                {/* 卡片顶部高光 */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                  isAI ? 'via-[#30d158]/30' : 'via-[#bf5af2]/30'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* 背景装饰 */}
                <div className={`absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
                  isAI
                    ? 'bg-accent/[0.05] group-hover:bg-accent/[0.1]'
                    : 'bg-secondary/[0.05] group-hover:bg-secondary/[0.1]'
                }`} />

                <div className="relative z-10 p-7 md:p-9">
                  {/* 类型标签 */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 rounded-full text-[12px] font-medium
                    bg-gradient-to-r border ${projectTag.color}`}>
                    {projectTag.icon}
                    {projectTag.label}
                  </div>

                  {/* 主要内容区域 */}
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* 左列：项目信息 + 技术栈 */}
                    <div className="lg:w-[280px] flex-shrink-0 space-y-6">
                      {/* 项目标题 & 角色 */}
                      <div>
                        <h2 className="text-[clamp(1.125rem,2.5vw,1.375rem)] font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                          {project.name}
                        </h2>
                        <span className="inline-block px-3 py-1 text-[12px] rounded-full font-medium
                          bg-secondary/[0.08] text-secondary/80 border border-secondary/[0.15]">
                          {project.role}
                        </span>
                        <p className="text-[12px] text-white/25 mt-2 font-medium">{project.period}</p>
                      </div>

                      {/* 技术栈 */}
                      <div>
                        <p className="text-label mb-3">{isZh ? '技术栈' : 'Tech Stack'}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map(tech => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-medium text-white/40 bg-white/[0.04] rounded-lg border border-white/[0.06]
                                group-hover:text-white/55 group-hover:border-white/[0.1] transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 右列：项目详情 */}
                    <div className="flex-1 space-y-6">
                      {/* 项目背景 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-500/[0.08] border border-red-500/[0.12]
                          flex items-center justify-center mt-0.5">
                          <Target size={15} className="text-red-400/70" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-semibold text-white/70 mb-2 uppercase tracking-wide">
                            {isZh ? '项目背景' : 'Background'}
                          </h4>
                          <p className="text-[13.5px] text-white/45 leading-relaxed">{project.background}</p>
                        </div>
                      </div>

                      {/* 技术方案 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#0071e3]/[0.08] border border-[#0071e3]/[0.12]
                          flex items-center justify-center mt-0.5">
                          <Cpu size={15} className="text-[#0071e3]/70" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-semibold text-white/70 mb-2 uppercase tracking-wide">
                            {isZh ? '技术方案' : 'Solution'}
                          </h4>
                          <p className="text-[13.5px] text-white/45 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* 项目成果 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-yellow-500/[0.08] border border-yellow-500/[0.12]
                          flex items-center justify-center mt-0.5">
                          <Zap size={15} className="text-yellow-400/70" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-semibold text-white/70 mb-2 uppercase tracking-wide">
                            {isZh ? '项目成果' : 'Outcome'}
                          </h4>
                          <p className="text-[13.5px] text-white/45 leading-relaxed">{project.outcome}</p>
                        </div>
                      </div>

                      {/* 展开/收起按钮 */}
                      {(project.highlights || project.responsibilities) && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-2 text-[13px] font-medium
                            text-primary/60 hover:text-primary
                            bg-primary/[0.06] hover:bg-primary/[0.12]
                            border border-primary/[0.12] hover:border-primary/[0.2]
                            px-4 py-2.5 rounded-xl
                            transition-all duration-250 mt-2"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp size={15} strokeWidth={2} />
                              {isZh ? '收起详情' : 'Collapse'}
                            </>
                          ) : (
                            <>
                              <ChevronDown size={15} strokeWidth={2} />
                              {isZh ? '展开详情' : 'Show Details'}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* 可展开详情 */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-white/[0.06] grid grid-cols-1 lg:grid-cols-2 gap-7">
                          {/* 技术亮点 */}
                          {project.highlights && project.highlights.length > 0 && (
                            <div>
                              <div className="flex items-center gap-2.5 mb-5">
                                <div className="w-7 h-7 rounded-xl bg-accent/[0.1] border border-accent/[0.15] flex items-center justify-center">
                                  <CheckCircle2 size={14} className="text-accent/70" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-[13px] font-semibold text-white/80 uppercase tracking-wide">
                                  {isZh ? '技术亮点' : 'Technical Highlights'}
                                </h4>
                              </div>
                              <div className="space-y-3">
                                {project.highlights.map((highlight, i) => (
                                  <div key={i} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                    <span className="text-[13px] text-white/40 leading-relaxed">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 个人职责 */}
                          {project.responsibilities && project.responsibilities.length > 0 && (
                            <div>
                              <div className="flex items-center gap-2.5 mb-5">
                                <div className="w-7 h-7 rounded-xl bg-primary/[0.1] border border-primary/[0.15] flex items-center justify-center">
                                  <UserCheck size={14} className="text-primary/70" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-[13px] font-semibold text-white/80 uppercase tracking-wide">
                                  {isZh ? '个人职责' : 'Responsibilities'}
                                </h4>
                              </div>
                              <div className="space-y-3">
                                {project.responsibilities.map((resp, i) => (
                                  <div key={i} className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    <span className="text-[13px] text-white/40 leading-relaxed">{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
