import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Cpu, Target, Zap, Layout } from 'lucide-react';

interface ProjectsProps {
  data: ResumeData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
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
          {data.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-500"></div>

              <div className="p-8 md:p-10 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  
                  {/* Left Column: Header & Tech */}
                  <div className="lg:w-1/3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <span className="inline-block px-3 py-1 text-sm text-secondary bg-secondary/10 rounded-full border border-secondary/20 font-medium">
                        {project.role}
                      </span>
                      <p className="text-gray-500 text-sm mt-2">{project.period}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
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
                        <h4 className="text-lg font-semibold text-white mb-2">Background</h4>
                        <p className="text-gray-400 leading-relaxed">{project.background}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">
                        <Cpu size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit">
                        <Zap size={20} className="text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Outcome</h4>
                        <p className="text-gray-400 leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;