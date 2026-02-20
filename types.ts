export type Language = 'zh' | 'en';

export interface NavItem {
  label: string;
  path: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  role: string;
  period: string;
  background: string;
  techStack: string[];
  solution: string;
  outcome: string;
  highlights?: string[];
  responsibilities?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface ResumeData {
  nav: Record<string, NavItem>;
  hero: {
    name: string;
    title: string;
    tagline: string;
    avatar: string; // URL or path to image
    details: {
      age: string;
      gender: string;
      education: string;
      exp: string;
    };
    contact: {
      phone: string;
      email: string;
      location: string;
      wechat?: string;
    };
    summary: string[];
  };
  skills: {
    title: string;
    categories: Record<string, { icon: string; items: { name: string; icon: string }[] }>;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
}