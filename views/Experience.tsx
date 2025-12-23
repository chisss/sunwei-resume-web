import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  data: ResumeData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{data.experience.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {data.experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>

              <div className="bg-surface rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                    <div className="flex items-center gap-2 text-primary mt-1 font-medium">
                      <Briefcase size={16} />
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full self-start">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  {item.description.map((desc, i) => (
                    <p key={i} className="text-gray-300 italic">{desc}</p>
                  ))}
                </div>

                <div className="space-y-3">
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;