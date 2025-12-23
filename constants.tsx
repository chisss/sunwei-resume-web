import { ResumeData } from './types';
import { 
  Code, Server, Database, Cloud, Terminal, Layers, 
  Cpu, Globe, Shield, Zap, Box, Activity,
  GitBranch, Lock, MessageSquare, BarChart
} from 'lucide-react';

// 请将您的照片命名为 avatar.png 并放在 public 目录下
const AVATAR_URL = "/avatar.png"; 

export const RESUME_DATA: Record<'zh' | 'en', ResumeData> = {
  zh: {
    nav: {
      home: { label: '首页', path: '/' },
      experience: { label: '工作经历', path: '/experience' },
      projects: { label: '项目实战', path: '/projects' },
      blog: { label: '技术博客', path: '/blog' },
    },
    hero: {
      name: '孙伟',
      title: '资深 Java 架构师',
      tagline: '7年经验 · 架构设计 · 团队管理 · 金融科技专家',
      avatar: AVATAR_URL,
      details: {
        age: '29岁', // 首页已隐藏
        gender: '男', // 首页已隐藏
        education: '长春工业大学 · 计算机科学 · 本科',
        exp: '7年工作经验'
      },
      contact: {
        phone: '17611150196',
        email: 'woshige345@qq.com',
        location: '中国 · 上海'
      },
      summary: [
        '8年Java后端开发经验，曾任职于度小满金融、众安保险等头部企业，具备扎实的技术功底。',
        '深度理解互联网保险、信贷核心业务，主导过多个核心系统（用户触达、信贷核心、交易中台）从0到1的建设。',
        '精通Spring Cloud微服务架构，具备高并发、分布式系统（RocketMQ, Redis, MySQL分库分表）的深度调优经验。',
        '具备优秀的技术攻坚与团队管理能力（敏捷开发），能从技术与业务双视角驱动系统优化。'
      ]
    },
    skills: {
      title: '核心技术栈',
      categories: {
        'Languages & Core': ['Java (JVM, JUC, IO)', 'Design Patterns', 'Data Structures'],
        'Microservices': ['Spring Cloud', 'Spring Boot', 'Dubbo', 'Nacos', 'Gateway', 'Feign'],
        'Middleware': ['RocketMQ (Deep Tuning)', 'Kafka', 'Redis', 'Zookeeper', 'ElasticSearch'],
        'Cloud & DevOps': ['Docker', 'Kubernetes', 'ServiceMesh', 'Linux', 'CI/CD'],
        'Database': ['MySQL (Optimization)', 'Oracle', 'ShardingSphere', 'MyBatis'],
        'Frontend & Tools': ['Vue.js', 'Element-UI', 'RESTful API', 'Git', 'Maven']
      }
    },
    experience: {
      title: '工作经历',
      items: [
        {
          id: 'xiaoheng',
          company: '小恒数科',
          role: '贷前贷中业务组技术负责人',
          period: '2025.03 - 至今',
          description: [
            '负责贷前贷中业务的技术管理与架构决策，统筹风控系统与流量分发业务。'
          ],
          achievements: [
            '主导风控系统从0到1架构设计，接入决策引擎，实现端到端全链路流程，提升风险决策准确性。',
            '牵头首个渠道方与资金方接入项目，实现进件、授信、用信、放款全流程闭环。',
            '推动研发流程标准化，解决技术瓶颈，团队整体交付效率提升50%+。',
            '构建云原生高可用架构（RDS, RocketMQ, Nacos），将业务中断率降低至0.1%以下。'
          ]
        },
        {
          id: 'xinfei',
          company: '信飞科技风险管理',
          role: 'Java资深开发工程师',
          period: '2024.02 - 2024.05',
          description: ['用户组 - 消息平台和消息触达中台技术负责人。'],
          achievements: [
            '主导消息平台重构，采用“接入层+接出层”双层架构，新渠道接入从7天缩短至1天。',
            '优化RocketMQ投递机制，消息发送成功率从92%提升至99.5%，延迟降至500ms以内。',
            '设计无侵入式接入方案，集成20+核心业务场景，开发量减少60%。'
          ]
        },
        {
          id: 'zhongan',
          company: '众安国际',
          role: '后端高级研发工程师',
          period: '2022.04 - 2023.12',
          description: ['负责基线保全系统核心模块设计与开发，主导代码质量提升专项。'],
          achievements: [
            '主导保全系统全流程优化，核心接口响应时间缩短40%，代码复用率提升25%。',
            '负责全系统文档体系建设（20+份核心文档），降低跨团队沟通成本60%。',
            '提升单元测试覆盖率至90%，自动化测试通过率达98%。'
          ]
        },
        {
          id: 'duxiaoman',
          company: '度小满金融',
          role: 'Java高级研发工程师',
          period: '2020.05 - 2022.04',
          description: ['保险创新业务部，负责交易中台重构与消息触达系统建设。'],
          achievements: [
            '主导交易中台DDD重构，消除循环依赖与深层嵌套，代码可维护性评分从65提升至92。',
            '搭建保险消息触达中台，整合短信/微信/邮件通道，支持日均50万+消息精准发送。',
            '将核心批处理任务迁移至Python生态，执行时间缩短35%。'
          ]
        },
        {
          id: 'fanwei',
          company: '上海泛微网络',
          role: 'Java微服务架构',
          period: '2018.07 - 2020.05',
          description: ['负责契约锁基础服务微服务改造迁移。'],
          achievements: [
            '主导OSS单体系统向Spring Cloud微服务架构迁移，核心服务可用性提升至99.95%。',
            '设计基于本地消息表的分布式事务方案，保障10万+跨服务操作的数据一致性。'
          ]
        }
      ]
    },
    projects: {
      title: '精选项目实战',
      items: [
        {
          id: 'traffic-dist',
          name: '聚小花流量分发与贷超项目',
          role: '技术负责人',
          period: '2025.08',
          background: '解决闲置流量价值流失问题，原系统缺乏产品聚合展示与精准推荐能力，需构建“流量分发+贷超”双重能力。',
          techStack: ['Spring Cloud', 'Vue3', 'Drools', 'Redis Cluster'],
          solution: '升级路由系统中枢，支持多维度策略（用户等级/评分）；设计贷超前端架构实现“千人千面”；整合风控数据实现精准推荐。',
          outcome: '产品上架周期从7天缩短至2天，页面停留时长提升40%，单月盘活无效流量价值超200万元。'
        },
        {
          id: 'msg-platform-refactor',
          name: '信飞科技消息平台重构',
          role: '系统设计 & 核心开发',
          period: '2024.03 - 2024.05',
          background: '因贷后催收强监管导致短信渠道频繁被封，急需解决渠道接入慢、无智能路由、接口不标准的三大痛点。',
          techStack: ['Groovy', 'RocketMQ', 'Strategy Pattern', 'SpringBoot'],
          solution: '设计“接入层+接出层”双层适配架构；引入Groovy脚本动态配置映射规则；设计失败消息智能重路由策略。',
          outcome: '新渠道接入缩短至1天，短信送达率提升至96%，贷后催收有效触达提升40%，投诉率降低35%。'
        },
        {
          id: 'trading-platform',
          name: '度小满保险交易中台重构',
          role: '核心技术负责人',
          period: '2021.09 - 2021.12',
          background: '业务耦合严重，枚举类臃肿，代码圈复杂度高，新业务接入需15天以上，严重限制拓展性。',
          techStack: ['DDD', 'Design Patterns', 'Java', 'MySQL'],
          solution: '基于DDD划分业务边界；使用“枚举+策略模式”分离逻辑；引入状态模式管理交易生命周期。',
          outcome: '新业务接入缩短至5天，线上Bug率下降70%，核心方法响应时间缩短35%。'
        },
        {
          id: 'contract-microservice',
          name: '契约锁基础服务微服务迁移',
          role: '架构规划',
          period: '2019.08 - 2020.03',
          background: '原OSS单体系统代码超50万行，耦合严重，升级风险高，缺乏监控。',
          techStack: ['Spring Cloud', 'Seata', 'RabbitMQ', 'Docker'],
          solution: '实施微服务拆分；设计基于MQ的异步分布式事务方案；开发代码生成与部署工具集。',
          outcome: '服务解耦，影响范围缩小90%，核心可用性达99.95%，数据一致性准确率100%。'
        }
      ]
    },
    blog: {
      title: '技术洞见',
      subtitle: '沉淀架构思维与实战经验',
      posts: [
        {
          id: '1',
          title: '从单体到微服务：契约锁系统的拆分与分布式事务实践',
          summary: '详细复盘如何将50万行代码的单体系统拆分为微服务架构，重点讲解基于MQ的最终一致性事务方案设计与踩坑经验。',
          date: '2024-05-20',
          readTime: '15 min',
          tags: ['Microservices', 'Distributed Transaction', 'Architecture']
        },
        {
          id: '2',
          title: 'DDD在金融交易中台重构中的落地实战',
          summary: '基于度小满交易中台重构案例，探讨如何利用领域驱动设计（DDD）解决业务逻辑复杂、代码腐化的问题，实现业务能力的快速复用。',
          date: '2024-02-15',
          readTime: '12 min',
          tags: ['DDD', 'Refactoring', 'Design Patterns']
        },
        {
          id: '3',
          title: '高并发场景下的RocketMQ调优与消息积压处理',
          summary: '结合信飞科技消息平台实战，分享如何通过调整线程模型、优化消费逻辑及分区扩容来解决千万级流量下的消息积压难题。',
          date: '2024-04-10',
          readTime: '10 min',
          tags: ['RocketMQ', 'Performance Tuning', 'High Concurrency']
        }
      ]
    }
  },
  en: {
    nav: {
      home: { label: 'Home', path: '/' },
      experience: { label: 'Experience', path: '/experience' },
      projects: { label: 'Projects', path: '/projects' },
      blog: { label: 'Blog', path: '/blog' },
    },
    hero: {
      name: 'Sun Wei',
      title: 'Senior Java Architect',
      tagline: '7 Years Exp · Architecture · Team Lead · Fintech Expert',
      avatar: AVATAR_URL,
      details: {
        age: '29', // Hidden on home
        gender: 'Male', // Hidden on home
        education: 'Changchun Univ. of Tech · CS',
        exp: '7 Years Experience'
      },
      contact: {
        phone: '+86 176-1115-0196',
        email: 'woshige345@qq.com',
        location: 'Shanghai, China'
      },
      summary: [
        '8 years backend experience in top fintech firms (Du Xiaoman, ZhongAn).',
        'Expert in Internet Insurance & Credit Core Systems, leading 0-1 system builds.',
        'Mastery of Spring Cloud & Distributed Systems (RocketMQ, Redis, DB Sharding).',
        'Proven Tech Lead capable of driving optimization from both tech & business angles.'
      ]
    },
    skills: {
      title: 'Tech Stack',
      categories: {
        'Languages & Core': ['Java (JVM, JUC)', 'Design Patterns', 'Algorithms'],
        'Microservices': ['Spring Cloud', 'Spring Boot', 'Dubbo', 'Nacos', 'Gateway'],
        'Middleware': ['RocketMQ', 'Kafka', 'Redis', 'Zookeeper', 'ElasticSearch'],
        'Cloud & DevOps': ['Docker', 'Kubernetes', 'ServiceMesh', 'Linux', 'CI/CD'],
        'Database': ['MySQL', 'Oracle', 'ShardingSphere', 'MyBatis'],
        'Frontend': ['Vue.js', 'Element-UI', 'RESTful API', 'Git']
      }
    },
    experience: {
      title: 'Experience',
      items: [
        {
          id: 'xiaoheng',
          company: 'Xiaoheng Tech',
          role: 'Tech Lead (Loan Business)',
          period: '2025.03 - Present',
          description: [
            'Led technical management for Pre-loan & Mid-loan business lines.'
          ],
          achievements: [
            'Architected Risk Control System (0-1) with Drools engine, enabling full-link decision flow.',
            'Led first external channel & funding integration, closing the loop on credit & loan processes.',
            'Standardized R&D processes, boosting delivery efficiency by 50%.',
            'Built Cloud-Native HA Architecture (RocketMQ, Nacos), reducing downtime to <0.1%.'
          ]
        },
        {
          id: 'xinfei',
          company: 'Xinfei Tech',
          role: 'Senior Java Engineer',
          period: '2024.02 - 2024.05',
          description: ['Tech Lead for Messaging Platform & Notification Center.'],
          achievements: [
            'Refactored Messaging Platform with Dual-Layer Architecture; channel integration time: 7 days -> 1 day.',
            'Optimized RocketMQ delivery; success rate 92% -> 99.5%, latency <500ms.',
            'Designed non-intrusive integration for 20+ scenarios, reducing dev effort by 60%.'
          ]
        },
        {
          id: 'zhongan',
          company: 'ZhongAn International',
          role: 'Senior Backend Engineer',
          period: '2022.04 - 2023.12',
          description: ['Core design for Baseline Preservation System.'],
          achievements: [
            'Optimized full-link preservation process; API response time reduced by 40%.',
            'Established documentation standard (20+ docs), reducing communication costs by 60%.',
            'Increased Unit Test coverage to 90%, Auto-test pass rate to 98%.'
          ]
        },
        {
          id: 'duxiaoman',
          company: 'Du Xiaoman Financial',
          role: 'Senior Java Engineer',
          period: '2020.05 - 2022.04',
          description: ['Insurance Transaction Middle Platform & Messaging System.'],
          achievements: [
            'Refactored Transaction Platform using DDD; Code Maintainability Score 65 -> 92.',
            'Built Messaging Middle Platform supporting 500k+ daily messages with high precision.',
            'Migrated batch tasks to Python ecosystem, reducing execution time by 35%.'
          ]
        }
      ]
    },
    projects: {
      title: 'Key Projects',
      items: [
        {
          id: 'traffic-dist',
          name: 'Traffic Distribution & Loan Supermarket',
          role: 'Tech Lead',
          period: '2025.08',
          background: 'Monetize idle traffic and enable precise product recommendation.',
          techStack: ['Spring Cloud', 'Vue3', 'Drools', 'Redis Cluster'],
          solution: 'Upgraded routing core for multi-strategy distribution; Built dynamic frontend; Integrated risk data.',
          outcome: 'Product launch cycle 7 days -> 2 days; User retention up 40%; Activated 2M+ RMB value.'
        },
        {
          id: 'msg-platform-refactor',
          name: 'Messaging Platform Refactor',
          role: 'System Design',
          period: '2024.03 - 2024.05',
          background: 'High channel blockage rate due to regulation; slow integration of new channels.',
          techStack: ['Groovy', 'RocketMQ', 'Strategy Pattern'],
          solution: 'Dual-layer adapter architecture; Dynamic Groovy config; Smart re-routing strategy.',
          outcome: 'New channel access in 1 day; Delivery rate 96%; Complaint rate down 35%.'
        }
      ]
    },
    blog: {
      title: 'Insights',
      subtitle: 'Architecture & Engineering',
      posts: [
        {
          id: '1',
          title: 'Monolith to Microservices: Contract Lock Migration',
          summary: 'A deep dive into splitting a 500k LOC legacy system and implementing distributed transactions.',
          date: '2024-05-20',
          readTime: '15 min',
          tags: ['Microservices', 'Architecture']
        },
        {
          id: '2',
          title: 'DDD in Financial Transaction Platform',
          summary: 'Refactoring complex business logic using Domain-Driven Design patterns.',
          date: '2024-02-15',
          readTime: '12 min',
          tags: ['DDD', 'Refactoring']
        }
      ]
    }
  }
};

export const SKILL_ICONS: Record<string, any> = {
  'Languages & Core': Code,
  'Microservices': Layers,
  'Cloud & DevOps': Cloud,
  'Middleware': Server,
  'Database': Database,
  'Frontend & Tools': Globe
};