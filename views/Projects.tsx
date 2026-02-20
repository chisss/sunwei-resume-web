import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeData } from '../types';
import { Cpu, Target, Zap, ChevronDown, ChevronUp, CheckCircle2, UserCheck, Bot, Shield, MessageSquare, Layers, Database, Tag } from 'lucide-react';

interface ProjectsProps {
  data: ResumeData;
}

// 根据项目ID+技术栈判断项目类型标签
function getProjectTag(projectId: string, techStack: string[], isZh: boolean): { label: string; icon: React.ReactNode } {
  if (projectId === 'ai-assistant') {
    return { label: isZh ? 'AI 智能化' : 'AI Project', icon: <Bot size={14} /> };
  }
  if (projectId === 'risk-control') {
    return { label: isZh ? '风控系统' : 'Risk Control', icon: <Shield size={14} /> };
  }
  if (projectId === 'traffic-dist') {
    return { label: isZh ? '流量分发' : 'Traffic Routing', icon: <Layers size={14} /> };
  }
  if (projectId === 'msg-platform-refactor') {
    return { label: isZh ? '消息中间件' : 'Messaging', icon: <MessageSquare size={14} /> };
  }
  if (projectId === 'trading-platform') {
    return { label: isZh ? '领域重构' : 'DDD Refactor', icon: <Database size={14} /> };
  }
  if (projectId === 'contract-microservice') {
    return { label: isZh ? '微服务架构' : 'Microservices', icon: <Layers size={14} /> };
  }
  return { label: isZh ? '核心项目' : 'Core Project', icon: <Tag size={14} /> };
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const isZh = data.projects.title.includes('项目') || data.projects.title.includes('精选');

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{data.projects.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {data.projects.items.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const projectTag = getProjectTag(project.id, project.techStack, isZh);
            const isAI = project.techStack.some(t =>
              ['LangChain4J', 'Dify', 'Milvus', 'RAG'].includes(t)
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                {/* Background Glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl transition-all duration-500 ${
                  isAI
                    ? 'bg-accent/10 group-hover:bg-accent/20'
                    : 'bg-secondary/10 group-hover:bg-secondary/20'
                }`}></div>

                <div className="p-8 md:p-10 relative z-10">
                  {/* Project Type Badge - 所有项目都有 */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {projectTag.icon}
                    {projectTag.label}
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Header & Tech */}
                    <div className="lg:w-1/3 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                        {/* 角色tag颜色统一 */}
                        <span className="inline-block px-3 py-1 text-sm rounded-full border font-medium text-secondary bg-secondary/10 border-secondary/20">
                          {project.role}
                        </span>
                        <p className="text-gray-500 text-sm mt-2">{project.period}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          {isZh ? '技术栈' : 'Tech Stack'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 text-xs text-gray-300 bg-white/5 rounded border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="lg:w-2/3 space-y-6">
                      <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">
                          <Target size={20} className="text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {isZh ? '项目背景' : 'Background'}
                          </h4>
                          <p className="text-gray-400 leading-relaxed">{project.background}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">
                          <Cpu size={20} className="text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {isZh ? '技术方案' : 'Solution'}
                          </h4>
                          <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">
                          <Zap size={20} className="text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {isZh ? '项目成果' : 'Outcome'}
                          </h4>
                          <p className="text-gray-400 leading-relaxed">{project.outcome}</p>
                        </div>
                      </div>

                      {/* Expand/Collapse Button */}
                      {(project.highlights || project.responsibilities) && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors mt-4 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp size={16} />
                              {isZh ? '收起详情' : 'Collapse'}
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              {isZh ? '展开详情' : 'Show Details'}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Highlights */}
                          {project.highlights && project.highlights.length > 0 && (
                            <div>
                              <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                <CheckCircle2 size={18} className="text-accent" />
                                {isZh ? '技术亮点' : 'Technical Highlights'}
                              </h4>
                              <div className="space-y-3">
                                {project.highlights.map((highlight, i) => (
                                  <div key={i} className="flex gap-3">
                                    <span className="text-accent mt-1.5 text-xs">&#9670;</span>
                                    <span className="text-gray-400 text-sm leading-relaxed">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Responsibilities */}
                          {project.responsibilities && project.responsibilities.length > 0 && (
                            <div>
                              <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                                <UserCheck size={18} className="text-primary" />
                                {isZh ? '个人职责' : 'Responsibilities'}
                              </h4>
                              <div className="space-y-3">
                                {project.responsibilities.map((resp, i) => (
                                  <div key={i} className="flex gap-3">
                                    <span className="text-primary mt-1.5 text-xs">&#9670;</span>
                                    <span className="text-gray-400 text-sm leading-relaxed">{resp}</span>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
