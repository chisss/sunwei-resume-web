import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { BookOpen, Calendar, Clock, Hash, ArrowRight } from 'lucide-react';

interface BlogProps {
  data: ResumeData;
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 shadow-lg shadow-purple-500/10">
            <BookOpen size={32} className="text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.blog.title}
          </h2>
          <p className="text-lg text-gray-400">{data.blog.subtitle}</p>
        </motion.div>

        <div className="grid gap-6">
          {data.blog.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface rounded-2xl p-6 md:p-8 border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  {post.tags.map(tag => (
                     <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-secondary border border-white/5">
                       #{tag}
                     </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>

                <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-secondary transition-colors">
                  阅读全文 <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;