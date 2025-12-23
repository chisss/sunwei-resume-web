import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { SKILL_ICONS } from '../constants';
import { Mail, MapPin, Phone, Award, User, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

interface HomeProps {
  data: ResumeData;
}

const Home: React.FC<HomeProps> = ({ data }) => {
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

            <motion.p variants={item} className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {data.hero.tagline}
            </motion.p>

            {/* Personal Details Chips (Age/Gender Removed as requested) */}
            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  <GraduationCap size={16} className="text-accent" /> {data.hero.details.education}
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  <MapPin size={16} className="text-secondary" /> {data.hero.contact.location}
               </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm mb-12">
              <a href={`mailto:${data.hero.contact.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-primary" /> {data.hero.contact.email}
              </a>
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="text-secondary" /> {data.hero.contact.phone}
              </div>
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
                      // Fallback if image not found
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-white/5 text-gray-500"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }}
                   />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Summary Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data.hero.summary.map((point, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="p-6 rounded-2xl bg-surface/50 border border-white/5 hover:bg-white/5 transition-all duration-300 hover:border-white/10"
            >
              <Award className="mb-4 text-primary w-6 h-6" />
              <p className="text-gray-300 leading-relaxed text-base font-light">{point}</p>
            </motion.div>
          ))}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data.skills.categories).map(([category, skills], idx) => {
            const Icon = SKILL_ICONS[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 group-hover:from-primary/20 group-hover:to-transparent transition-all">
                    {Icon && <Icon className="text-gray-300 group-hover:text-primary transition-colors" size={20} />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {(skills as string[]).map((skill) => (
                    <span 
                      key={skill} 
                      className="relative overflow-hidden px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-gray-400 border border-white/5 group-hover:text-white group-hover:border-white/20 transition-all cursor-default"
                    >
                      <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {skill}
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