import { ResumeData } from './types';
import {
  Code, Server, Database, Cloud, Layers,
  Globe, Shield, Bot
} from 'lucide-react';

// 请将您的照片命名为 avatar.png 并放在 public 目录下
const AVATAR_URL = "/static/my_selfie.jpg";

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
      title: '资深 Java 工程师',
      tagline: '8年经验 · 架构设计 · 团队管理 · 金融科技专家 · 保险科技 · AI',
      avatar: AVATAR_URL,
      details: {
        age: '30岁',
        gender: '男',
        education: '长春工业大学 · 计算机科学与技术 · 本科',
        exp: '8年工作经验'
      },
      contact: {
        phone: '17611150196',
        email: 'woshige345@qq.com',
        location: '中国 · 上海',
        wechat: 'woshige345'
      },
      summary: [
        '8年Java后端开发经验，曾任职于度小满金融、众安保险等头部企业，具备扎实的技术功底与系统架构能力。',
        '深度理解互联网保险、信贷核心业务，主导过多个核心系统（用户触达、信贷核心、交易中台、风控系统）从0到1的建设。',
        '精通Spring Cloud微服务架构，具备高并发、分布式系统（RocketMQ, Redis, MySQL分库分表）的深度调优经验。',
        '具备优秀的技术攻坚与团队管理能力（敏捷开发），能从技术与业务双视角驱动系统优化。',
        '主导多次核心系统重构（DDD交易中台/消息平台/微服务迁移），确保线上零故障，代码质量与可维护性大幅提升。',
        '关注AI前沿技术，探索LLM与业务融合，实践LangChain4J + Dify构建企业级RAG智能问答系统。'
      ]
    },
    skills: {
      title: '核心技术栈',
      categories: {
        'Java生态': {
          icon: 'code',
          items: [
            { name: 'Java', icon: '☕' },
            { name: 'JVM调优', icon: '⚙️' },
            { name: 'JUC并发', icon: '🔄' },
            { name: 'NIO', icon: '📡' },
            { name: '设计模式', icon: '🧩' },
            { name: '数据结构与算法', icon: '📊' },
          ]
        },
        '微服务架构': {
          icon: 'layers',
          items: [
            { name: 'Spring Cloud', icon: '🌥️' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'Dubbo', icon: '🔗' },
            { name: 'Nacos', icon: '📋' },
            { name: 'Gateway', icon: '🚪' },
            { name: 'Feign', icon: '📨' },
            { name: 'Sentinel', icon: '🛡️' },
          ]
        },
        '中间件': {
          icon: 'server',
          items: [
            { name: 'RocketMQ', icon: '🚀' },
            { name: 'Kafka', icon: '📬' },
            { name: 'Redis', icon: '⚡' },
            { name: 'ElasticSearch', icon: '🔍' },
            { name: 'Zookeeper', icon: '🐘' },
            { name: 'RabbitMQ', icon: '🐰' },
          ]
        },
        '云原生 & DevOps': {
          icon: 'cloud',
          items: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Kubernetes', icon: '☸️' },
            { name: 'ServiceMesh', icon: '🕸️' },
            { name: 'Linux', icon: '🐧' },
            { name: 'CI/CD', icon: '🔄' },
            { name: 'Jenkins', icon: '🏗️' },
          ]
        },
        '数据库': {
          icon: 'database',
          items: [
            { name: 'MySQL', icon: '🗄️' },
            { name: 'SQL优化', icon: '⚡' },
            { name: 'Oracle', icon: '🏛️' },
            { name: 'ShardingSphere', icon: '🔀' },
            { name: 'MyBatis', icon: '📝' },
            { name: 'MyBatis-Plus', icon: '📝' },
          ]
        },
        '前端 & 工具': {
          icon: 'globe',
          items: [
            { name: 'Vue.js', icon: '💚' },
            { name: 'Element-UI', icon: '🎨' },
            { name: 'React', icon: '⚛️' },
            { name: 'RESTful API', icon: '🔌' },
            { name: 'Git', icon: '📦' },
            { name: 'Maven', icon: '🏗️' },
          ]
        },
        'AI & 智能化': {
          icon: 'bot',
          items: [
            { name: 'Vibe Coding', icon: '🎵' },
            { name: 'LangChain4J', icon: '🔗' },
            { name: 'Dify工作流', icon: '🤖' },
            { name: 'Prompt Engineering', icon: '✍️' },
            { name: 'RAG', icon: '📚' },
            { name: 'AI Agent', icon: '🧠' },
          ]
        },
        '团队管理': {
          icon: 'shield',
          items: [
            { name: '敏捷开发', icon: '🏃' },
            { name: 'Code Review', icon: '👀' },
            { name: '技术评审', icon: '📋' },
            { name: '团队培训', icon: '🎓' },
            { name: '架构决策', icon: '🏛️' },
            { name: '项目交付', icon: '🚀' },
          ]
        },
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
            '主导风控系统从0到1架构设计，接入决策引擎（Drools），实现端到端全链路流程，提升风险决策准确性。',
            '牵头首个渠道方与资金方接入项目，实现进件、授信、用信、放款全流程闭环。',
            '推动研发流程标准化（代码评审/自动化测试/发布流程），解决技术瓶颈，团队整体交付效率提升50%+。',
            '构建云原生高可用架构（RDS, RocketMQ, Nacos），将业务中断率降低至0.1%以下。',
            '设计流量分发路由系统，支持多维度策略（用户等级/评分/渠道），单月盘活无效流量价值超200万元。'
          ]
        },
        {
          id: 'xinfei',
          company: '信飞科技风险管理',
          role: 'Java资深开发工程师',
          period: '2024.02 - 2024.05',
          description: ['用户组 - 消息平台和消息触达中台技术负责人。'],
          achievements: [
            '主导消息平台重构，采用"接入层+接出层"双层架构，新渠道接入从7天缩短至1天。',
            '优化RocketMQ投递机制（顺序消息/事务消息/死信队列），消息发送成功率从92%提升至99.5%，延迟降至500ms以内。',
            '设计无侵入式接入方案，集成20+核心业务场景，开发量减少60%。',
            '引入Groovy脚本引擎实现渠道映射规则热更新，无需重启即可调整路由策略。'
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
            '提升单元测试覆盖率至90%，自动化测试通过率达98%。',
            '推动Sonar代码规范落地，消除200+项告警，线上Bug率下降55%。'
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
            '将核心批处理任务迁移至Python生态（Pandas/APScheduler），执行时间缩短35%。',
            '设计基于状态模式的交易生命周期管理，新业务接入周期从15天缩短至5天。'
          ]
        },
        {
          id: 'fanwei',
          company: '上海泛微网络',
          role: 'Java微服务架构',
          period: '2018.07 - 2020.05',
          description: ['负责契约锁基础服务微服务改造迁移。'],
          achievements: [
            '主导OSS单体系统（50万+行代码）向Spring Cloud微服务架构迁移，核心服务可用性提升至99.95%。',
            '设计基于本地消息表的分布式事务方案，保障10万+跨服务操作的数据一致性，准确率100%。',
            '开发代码生成与自动化部署工具集，项目交付效率提升40%。'
          ]
        }
      ]
    },
    projects: {
      title: '精选项目实战',
      items: [
        {
          id: 'ai-assistant',
          name: 'AI智能助手平台',
          role: '技术负责人 & 架构师',
          period: '2025.01 - 至今',
          background: '随着大语言模型技术的成熟，企业内部存在大量重复性问答和文档检索需求，传统搜索方式效率低下。需要构建一套基于RAG的智能问答系统，提升内部知识管理和客户服务效率。',
          techStack: ['LangChain4J', 'Dify', 'Spring Boot', 'Milvus', 'Redis', 'Vue3'],
          solution: '基于LangChain4J构建后端RAG链路，集成Milvus向量数据库实现语义检索；利用Dify搭建可视化Agent工作流，实现多轮对话、知识库管理；结合Prompt Engineering优化回答质量。',
          outcome: '内部知识检索效率提升80%，客服首次解决率从45%提升至78%，节省人工客服成本约30%。',
          highlights: [
            '基于LangChain4J设计RAG（检索增强生成）链路，实现文档分片、向量化、语义检索全流程',
            '利用Dify工作流引擎编排多步Agent，支持工具调用、条件分支、人工审核节点',
            '集成Milvus向量数据库，支持千万级文档毫秒级语义相似度检索',
            '设计Prompt模板管理系统，支持版本控制与A/B测试，优化回答准确率',
            '实现流式输出（SSE），提升用户交互体验',
            '采用Vibe Coding方式高效协作开发前端界面，大幅提升开发效率'
          ],
          responsibilities: [
            '负责整体技术架构设计与技术选型（LangChain4J vs Spring AI）',
            '设计向量数据库Schema及检索策略优化',
            '编排Dify工作流，实现智能路由与多Agent协作',
            '主导Prompt Engineering，优化大模型回答质量',
            '对接多个LLM API（GPT-4/文心一言/通义千问），设计模型切换与降级策略'
          ]
        },
        {
          id: 'traffic-dist',
          name: '聚小花流量分发与贷超项目',
          role: '技术负责人',
          period: '2025.08',
          background: '解决闲置流量价值流失问题，原系统缺乏产品聚合展示与精准推荐能力，需构建"流量分发+贷超"双重能力，实现流量变现最大化。',
          techStack: ['Spring Cloud', 'Vue3', 'Drools', 'Redis Cluster', 'RocketMQ', 'MySQL'],
          solution: '升级路由系统中枢，支持多维度策略（用户等级/评分/渠道属性）；设计贷超前端架构实现"千人千面"动态展示；整合风控数据实现精准推荐。',
          outcome: '产品上架周期从7天缩短至2天，页面停留时长提升40%，单月盘活无效流量价值超200万元。',
          highlights: [
            '基于Drools规则引擎设计多维路由策略，支持用户等级、信用评分、渠道属性等维度动态匹配',
            '设计贷超前端架构，通过ABTest实现"千人千面"个性化产品推荐',
            '采用Redis Cluster缓存热点路由规则，路由决策延迟<10ms',
            '实现产品上下架动态管理后台，运营可自助配置，上架周期从7天缩短至2天'
          ],
          responsibilities: [
            '负责整体系统架构设计，制定技术方案',
            '主导路由引擎核心逻辑开发',
            '协调前后端联调与性能优化',
            '推进灰度发布与线上监控体系搭建'
          ]
        },
        {
          id: 'risk-control',
          name: '小恒数科风控系统建设',
          role: '技术负责人',
          period: '2025.03 - 2025.06',
          background: '公司信贷业务快速扩张，缺乏统一的风控决策引擎，风险识别依赖人工审核，效率低、漏洞多。需从0到1构建自动化风控系统。',
          techStack: ['Spring Cloud', 'Drools', 'Redis', 'RocketMQ', 'MySQL', 'Nacos'],
          solution: '基于Drools搭建规则引擎核心，设计"数据采集-特征计算-规则命中-决策输出"四段式流水线；引入Nacos动态配置实现规则热更新；通过RocketMQ实现异步风控事件处理。',
          outcome: '风控全流程自动化，审批效率提升300%，欺诈识别准确率达95%+，人工审核工作量减少70%。',
          highlights: [
            '设计四段式风控流水线：数据采集→特征计算→规则命中→决策输出',
            '基于Drools搭建规则引擎，支持100+条风控规则热更新',
            '引入Redis缓存用户画像与历史特征，决策延迟控制在200ms内',
            '设计风控事件溯源机制，支持全链路审计追踪'
          ],
          responsibilities: [
            '从0到1完成风控系统架构设计',
            '主导决策引擎核心开发',
            '对接外部数据源（征信/反欺诈）',
            '搭建风控监控大盘与告警体系'
          ]
        },
        {
          id: 'msg-platform-refactor',
          name: '信飞科技消息平台重构',
          role: '系统设计 & 核心开发',
          period: '2024.03 - 2024.05',
          background: '因贷后催收强监管导致短信渠道频繁被封，急需解决渠道接入慢、无智能路由、接口不标准的三大痛点。原系统与渠道商强耦合，每次渠道切换需7天+开发周期。',
          techStack: ['Groovy', 'RocketMQ', 'Strategy Pattern', 'SpringBoot', 'Redis', 'MySQL'],
          solution: '设计"接入层+接出层"双层适配架构；引入Groovy脚本动态配置映射规则，无需重启即可调整路由；设计失败消息智能重路由策略，自动切换备用渠道。',
          outcome: '新渠道接入缩短至1天，短信送达率提升至96%，贷后催收有效触达提升40%，投诉率降低35%。',
          highlights: [
            '设计双层适配架构（接入层统一协议 + 接出层渠道适配），彻底解耦业务与渠道',
            '引入Groovy脚本引擎实现渠道映射规则热更新，运维人员可直接配置',
            '基于策略模式实现智能路由，自动根据渠道健康度、送达率、成本进行最优选路',
            '设计死信队列+重试机制，消息发送成功率从92%提升至99.5%'
          ],
          responsibilities: [
            '负责整体架构设计与技术方案评审',
            '开发Groovy脚本引擎与规则管理后台',
            '实现RocketMQ消息投递优化（顺序消息/事务消息/死信队列）',
            '主导压测与性能调优'
          ]
        },
        {
          id: 'trading-platform',
          name: '度小满保险交易中台重构',
          role: '核心技术负责人',
          period: '2021.09 - 2021.12',
          background: '业务耦合严重，枚举类臃肿（单文件3000+行），代码圈复杂度高（核心方法超100），新业务接入需15天以上，严重限制业务拓展速度。',
          techStack: ['DDD', 'Design Patterns', 'Java', 'MySQL', 'Spring Boot', 'RocketMQ'],
          solution: '基于DDD划分业务边界（投保/退保/理赔/续保四大领域）；使用"枚举+策略模式"分离逻辑分支；引入状态模式管理交易生命周期，以事件驱动实现状态流转。',
          outcome: '新业务接入缩短至5天，线上Bug率下降70%，核心方法响应时间缩短35%，代码可维护性评分从65提升至92。',
          highlights: [
            '基于DDD划分4大领域边界（投保/退保/理赔/续保），消除循环依赖',
            '使用"枚举+策略模式"替代3000+行if-else分支，圈复杂度从100+降至15',
            '引入状态模式管理交易生命周期，以领域事件驱动状态流转',
            '设计统一的业务扩展点SPI，新险种接入仅需实现接口即可'
          ],
          responsibilities: [
            '主导DDD领域建模与架构设计',
            '核心重构代码开发与Code Review',
            '制定渐进式重构计划，保障线上零故障',
            '输出架构设计文档与团队技术分享'
          ]
        },
        {
          id: 'contract-microservice',
          name: '契约锁基础服务微服务迁移',
          role: '架构规划',
          period: '2019.08 - 2020.03',
          background: '原OSS单体系统代码超50万行，耦合严重（核心模块循环依赖），升级风险高，缺乏监控，单次部署耗时40分钟+。',
          techStack: ['Spring Cloud', 'Seata', 'RabbitMQ', 'Docker', 'Nginx', 'MySQL'],
          solution: '按业务域拆分为8个微服务；设计基于本地消息表的分布式事务方案替代Seata（降低侵入性）；引入Docker容器化部署 + Nginx网关层负载均衡。',
          outcome: '服务解耦，故障影响范围缩小90%，核心可用性达99.95%，分布式事务数据一致性准确率100%，部署时间从40分钟降至5分钟。',
          highlights: [
            '将50万行单体代码按业务域拆分为8个独立微服务',
            '设计基于本地消息表+MQ的最终一致性方案，保障跨服务数据一致',
            '开发代码生成工具，自动生成Controller/Service/Mapper标准代码',
            '搭建Docker容器化部署流程，部署时间从40分钟降至5分钟'
          ],
          responsibilities: [
            '负责微服务拆分方案设计与边界划定',
            '设计分布式事务方案并主导核心开发',
            '搭建自动化部署与监控体系',
            '组织技术评审与团队培训'
          ]
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
        },
        {
          id: '4',
          title: 'LangChain4J + Dify 构建企业级RAG智能问答系统',
          summary: '从技术选型到落地实践，详解如何用LangChain4J搭建RAG链路，结合Dify工作流编排实现企业知识库智能问答，附完整架构方案。',
          date: '2025-01-15',
          readTime: '18 min',
          tags: ['AI', 'RAG', 'LangChain4J', 'Dify']
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
      title: 'Senior Java Developer',
      tagline: '8 Yrs Exp · Architecture · Team Lead · Fintech · InsurTech · AI',
      avatar: AVATAR_URL,
      details: {
        age: '30',
        gender: 'Male',
        education: 'Changchun Univ. of Tech · CS · Bachelor',
        exp: '8 Years Experience'
      },
      contact: {
        phone: '+86 176-1115-0196',
        email: 'woshige345@qq.com',
        location: 'Shanghai, China',
        wechat: 'woshige345'
      },
      summary: [
        '8 years backend experience in top fintech firms (Du Xiaoman, ZhongAn), with solid technical and architecture skills.',
        'Expert in Internet Insurance & Credit Core Systems, leading multiple 0-to-1 builds (messaging, credit core, trading platform, risk control).',
        'Mastery of Spring Cloud & Distributed Systems (RocketMQ, Redis, MySQL Sharding), with deep performance tuning experience.',
        'Proven Tech Lead with Agile methodology expertise, driving optimization from both tech & business perspectives.',
        'Led multiple critical system refactors (DDD Trading Platform/Messaging Platform/Microservice Migration) with zero production incidents.',
        'Exploring AI frontier — building enterprise RAG systems with LangChain4J + Dify for intelligent business integration.'
      ]
    },
    skills: {
      title: 'Tech Stack',
      categories: {
        'Java Ecosystem': {
          icon: 'code',
          items: [
            { name: 'Java', icon: '☕' },
            { name: 'JVM Tuning', icon: '⚙️' },
            { name: 'JUC Concurrency', icon: '🔄' },
            { name: 'NIO', icon: '📡' },
            { name: 'Design Patterns', icon: '🧩' },
            { name: 'Data Structures', icon: '📊' },
          ]
        },
        'Microservices': {
          icon: 'layers',
          items: [
            { name: 'Spring Cloud', icon: '🌥️' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'Dubbo', icon: '🔗' },
            { name: 'Nacos', icon: '📋' },
            { name: 'Gateway', icon: '🚪' },
            { name: 'Feign', icon: '📨' },
            { name: 'Sentinel', icon: '🛡️' },
          ]
        },
        'Middleware': {
          icon: 'server',
          items: [
            { name: 'RocketMQ', icon: '🚀' },
            { name: 'Kafka', icon: '📬' },
            { name: 'Redis', icon: '⚡' },
            { name: 'ElasticSearch', icon: '🔍' },
            { name: 'Zookeeper', icon: '🐘' },
            { name: 'RabbitMQ', icon: '🐰' },
          ]
        },
        'Cloud & DevOps': {
          icon: 'cloud',
          items: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Kubernetes', icon: '☸️' },
            { name: 'ServiceMesh', icon: '🕸️' },
            { name: 'Linux', icon: '🐧' },
            { name: 'CI/CD', icon: '🔄' },
            { name: 'Jenkins', icon: '🏗️' },
          ]
        },
        'Database': {
          icon: 'database',
          items: [
            { name: 'MySQL', icon: '🗄️' },
            { name: 'SQL Optimization', icon: '⚡' },
            { name: 'Oracle', icon: '🏛️' },
            { name: 'ShardingSphere', icon: '🔀' },
            { name: 'MyBatis', icon: '📝' },
            { name: 'MyBatis-Plus', icon: '📝' },
          ]
        },
        'Frontend & Tools': {
          icon: 'globe',
          items: [
            { name: 'Vue.js', icon: '💚' },
            { name: 'Element-UI', icon: '🎨' },
            { name: 'React', icon: '⚛️' },
            { name: 'RESTful API', icon: '🔌' },
            { name: 'Git', icon: '📦' },
            { name: 'Maven', icon: '🏗️' },
          ]
        },
        'AI & Intelligence': {
          icon: 'bot',
          items: [
            { name: 'Vibe Coding', icon: '🎵' },
            { name: 'LangChain4J', icon: '🔗' },
            { name: 'Dify Workflow', icon: '🤖' },
            { name: 'Prompt Engineering', icon: '✍️' },
            { name: 'RAG', icon: '📚' },
            { name: 'AI Agent', icon: '🧠' },
          ]
        },
        'Team Management': {
          icon: 'shield',
          items: [
            { name: 'Agile/Scrum', icon: '🏃' },
            { name: 'Code Review', icon: '👀' },
            { name: 'Tech Review', icon: '📋' },
            { name: 'Team Training', icon: '🎓' },
            { name: 'Arch Decisions', icon: '🏛️' },
            { name: 'Delivery Mgmt', icon: '🚀' },
          ]
        },
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
            'Led technical management for Pre-loan & Mid-loan business lines, overseeing risk control and traffic distribution systems.'
          ],
          achievements: [
            'Architected Risk Control System (0-1) with Drools engine, enabling full-link automated decision flow.',
            'Led first external channel & funding integration, closing the loop on credit & loan processes.',
            'Standardized R&D processes (code review/auto-testing/release), boosting delivery efficiency by 50%+.',
            'Built Cloud-Native HA Architecture (RocketMQ, Nacos), reducing downtime to <0.1%.',
            'Designed multi-dimensional traffic routing system, recovering 2M+ RMB from idle traffic monthly.'
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
            'Optimized RocketMQ delivery (ordered/transactional/DLQ); success rate 92% -> 99.5%, latency <500ms.',
            'Designed non-intrusive integration for 20+ scenarios, reducing dev effort by 60%.',
            'Introduced Groovy script engine for hot-reload channel routing rules without restart.'
          ]
        },
        {
          id: 'zhongan',
          company: 'ZhongAn International',
          role: 'Senior Backend Engineer',
          period: '2022.04 - 2023.12',
          description: ['Core design for Baseline Preservation System, led code quality improvement initiative.'],
          achievements: [
            'Optimized full-link preservation process; API response time reduced by 40%, code reuse up 25%.',
            'Established documentation standard (20+ docs), reducing communication costs by 60%.',
            'Increased Unit Test coverage to 90%, Auto-test pass rate to 98%.',
            'Led Sonar code quality enforcement, eliminating 200+ warnings, reducing production bugs by 55%.'
          ]
        },
        {
          id: 'duxiaoman',
          company: 'Du Xiaoman Financial',
          role: 'Senior Java Engineer',
          period: '2020.05 - 2022.04',
          description: ['Insurance Innovation Dept - Transaction Platform & Messaging System.'],
          achievements: [
            'Refactored Transaction Platform using DDD; Code Maintainability Score 65 -> 92.',
            'Built Messaging Middle Platform supporting 500k+ daily messages across SMS/WeChat/Email.',
            'Migrated batch tasks to Python ecosystem (Pandas/APScheduler), reducing execution time by 35%.',
            'Designed State Pattern-based transaction lifecycle, cutting new business onboarding from 15 to 5 days.'
          ]
        },
        {
          id: 'fanwei',
          company: 'Weaver Network',
          role: 'Microservices Architect',
          period: '2018.07 - 2020.05',
          description: ['Led Contract Lock platform microservice migration.'],
          achievements: [
            'Led 500k+ LOC monolith to Spring Cloud microservices migration, availability up to 99.95%.',
            'Designed local message table based distributed transaction, ensuring 100% consistency across 100k+ ops.',
            'Developed code generation & auto-deployment toolset, improving delivery efficiency by 40%.'
          ]
        }
      ]
    },
    projects: {
      title: 'Key Projects',
      items: [
        {
          id: 'ai-assistant',
          name: 'AI Intelligent Assistant Platform',
          role: 'Tech Lead & Architect',
          period: '2025.01 - Present',
          background: 'With LLM maturity, enterprises face repetitive Q&A and document retrieval needs. Traditional search is inefficient. Need to build a RAG-based intelligent Q&A system to improve knowledge management and customer service.',
          techStack: ['LangChain4J', 'Dify', 'Spring Boot', 'Milvus', 'Redis', 'Vue3'],
          solution: 'Built RAG pipeline with LangChain4J, integrated Milvus for semantic search; Used Dify for visual Agent workflow orchestration with multi-turn conversation and knowledge base management; Optimized with Prompt Engineering.',
          outcome: 'Knowledge retrieval efficiency up 80%, first-contact resolution rate 45% -> 78%, customer service cost reduced by 30%.',
          highlights: [
            'Designed RAG pipeline with LangChain4J: document chunking, vectorization, semantic retrieval',
            'Used Dify workflow engine for multi-step Agent orchestration with tool calls and approval nodes',
            'Integrated Milvus vector DB for millisecond-level semantic search across millions of documents',
            'Built Prompt template management with version control and A/B testing',
            'Implemented SSE streaming output for enhanced UX',
            'Leveraged Vibe Coding for rapid frontend development'
          ],
          responsibilities: [
            'Overall architecture design and tech selection (LangChain4J vs Spring AI)',
            'Vector DB schema design and retrieval strategy optimization',
            'Dify workflow orchestration for intelligent routing and multi-Agent collaboration',
            'Prompt Engineering for LLM response quality optimization',
            'Multi-LLM API integration (GPT-4/ERNIE/Qwen) with fallback strategy'
          ]
        },
        {
          id: 'traffic-dist',
          name: 'Traffic Distribution & Loan Supermarket',
          role: 'Tech Lead',
          period: '2025.08',
          background: 'Monetize idle traffic and enable precise product recommendation with aggregated display capability.',
          techStack: ['Spring Cloud', 'Vue3', 'Drools', 'Redis Cluster', 'RocketMQ', 'MySQL'],
          solution: 'Upgraded routing core for multi-strategy distribution (user level/score/channel); Built dynamic frontend for personalized display; Integrated risk data for precision.',
          outcome: 'Product launch cycle 7 days -> 2 days; User retention up 40%; Activated 2M+ RMB monthly value.',
          highlights: [
            'Designed multi-dimensional routing strategy with Drools engine for dynamic user-product matching',
            'Built personalized frontend with A/B testing for "different products for different users"',
            'Redis Cluster cached hot routing rules with <10ms decision latency',
            'Implemented self-service product management dashboard, reducing launch cycle from 7 to 2 days'
          ],
          responsibilities: [
            'Overall system architecture design and technical planning',
            'Core routing engine development',
            'Frontend-backend coordination and performance optimization',
            'Canary release and monitoring system setup'
          ]
        },
        {
          id: 'risk-control',
          name: 'Risk Control System (0-to-1)',
          role: 'Tech Lead',
          period: '2025.03 - 2025.06',
          background: 'Rapid credit business expansion required automated risk control. Manual review was slow and error-prone.',
          techStack: ['Spring Cloud', 'Drools', 'Redis', 'RocketMQ', 'MySQL', 'Nacos'],
          solution: 'Built 4-stage pipeline with Drools: Data Collection → Feature Computation → Rule Matching → Decision Output; Nacos for dynamic rule updates; RocketMQ for async event processing.',
          outcome: 'Full automated risk pipeline; approval efficiency up 300%; fraud detection 95%+; manual review reduced 70%.',
          highlights: [
            'Designed 4-stage risk pipeline: collection → computation → matching → output',
            'Built 100+ hot-reloadable risk rules with Drools engine',
            'Redis-cached user profiles with <200ms decision latency',
            'Implemented full-link event sourcing for audit traceability'
          ],
          responsibilities: [
            '0-to-1 risk system architecture design',
            'Core decision engine development',
            'External data source integration (credit bureau/anti-fraud)',
            'Risk monitoring dashboard and alerting system'
          ]
        },
        {
          id: 'msg-platform-refactor',
          name: 'Messaging Platform Refactor',
          role: 'System Design & Core Dev',
          period: '2024.03 - 2024.05',
          background: 'Regulatory crackdown on SMS channels caused frequent blocks. Original system was tightly coupled with providers, requiring 7+ days per channel switch.',
          techStack: ['Groovy', 'RocketMQ', 'Strategy Pattern', 'SpringBoot', 'Redis', 'MySQL'],
          solution: 'Dual-layer adapter architecture (unified protocol + channel adapter); Groovy script for hot-reload routing config; Smart re-routing with automatic failover.',
          outcome: 'New channel access in 1 day; Delivery rate 96%; Collection reach up 40%; Complaint rate down 35%.',
          highlights: [
            'Dual-layer adapter architecture fully decoupling business and channels',
            'Groovy script engine for hot-reload channel mapping rules',
            'Strategy Pattern based smart routing with health, delivery rate, and cost optimization',
            'DLQ + retry mechanism pushing delivery success from 92% to 99.5%'
          ],
          responsibilities: [
            'Overall architecture design and tech review',
            'Groovy script engine and rule management backend',
            'RocketMQ delivery optimization (ordered/transactional/DLQ)',
            'Load testing and performance tuning'
          ]
        },
        {
          id: 'trading-platform',
          name: 'Insurance Trading Platform Refactor',
          role: 'Core Tech Lead',
          period: '2021.09 - 2021.12',
          background: 'Severe coupling with 3000+ line enum files, cyclomatic complexity >100 in core methods, 15+ days for new business onboarding.',
          techStack: ['DDD', 'Design Patterns', 'Java', 'MySQL', 'Spring Boot', 'RocketMQ'],
          solution: 'DDD-based domain boundary separation (4 domains); Enum + Strategy Pattern for branch elimination; State Pattern for transaction lifecycle with event-driven transitions.',
          outcome: 'New business onboarding 15 -> 5 days; Bug rate down 70%; Core API latency reduced 35%; Maintainability 65 -> 92.',
          highlights: [
            'DDD modeling with 4 domain boundaries (Purchase/Surrender/Claims/Renewal)',
            'Replaced 3000+ line if-else with Enum + Strategy, complexity from 100+ to 15',
            'State Pattern for transaction lifecycle with domain event driven transitions',
            'Designed SPI extension points for zero-code new product onboarding'
          ],
          responsibilities: [
            'Led DDD domain modeling and architecture design',
            'Core refactoring development and code review',
            'Planned incremental migration with zero production incidents',
            'Architecture documentation and team knowledge sharing'
          ]
        },
        {
          id: 'contract-microservice',
          name: 'Contract Lock Microservice Migration',
          role: 'Architecture Planning',
          period: '2019.08 - 2020.03',
          background: 'Legacy 500k+ LOC monolith with severe coupling, high deployment risk, no monitoring, 40+ min deploy time.',
          techStack: ['Spring Cloud', 'Seata', 'RabbitMQ', 'Docker', 'Nginx', 'MySQL'],
          solution: 'Split into 8 microservices by domain; Local message table for distributed transactions (lower intrusion than Seata); Docker + Nginx for deployment.',
          outcome: 'Fault isolation 90%+; Availability 99.95%; Transaction consistency 100%; Deploy time 40min -> 5min.',
          highlights: [
            'Split 500k LOC monolith into 8 independent microservices by business domain',
            'Designed local message table + MQ eventual consistency for cross-service transactions',
            'Built code generation tool for auto-generating Controller/Service/Mapper',
            'Docker containerized deployment, reducing deploy time from 40 to 5 minutes'
          ],
          responsibilities: [
            'Microservice decomposition strategy and boundary definition',
            'Distributed transaction solution design and core development',
            'Automated deployment and monitoring system setup',
            'Technical review sessions and team training'
          ]
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
          summary: 'A deep dive into splitting a 500k LOC legacy system and implementing distributed transactions with eventual consistency.',
          date: '2024-05-20',
          readTime: '15 min',
          tags: ['Microservices', 'Architecture']
        },
        {
          id: '2',
          title: 'DDD in Financial Transaction Platform',
          summary: 'Refactoring complex business logic using Domain-Driven Design patterns for rapid business capability reuse.',
          date: '2024-02-15',
          readTime: '12 min',
          tags: ['DDD', 'Refactoring']
        },
        {
          id: '3',
          title: 'RocketMQ Tuning Under High Concurrency',
          summary: 'Thread model adjustment, consumption optimization, and partition expansion for handling tens of millions of messages.',
          date: '2024-04-10',
          readTime: '10 min',
          tags: ['RocketMQ', 'Performance']
        },
        {
          id: '4',
          title: 'Building Enterprise RAG System with LangChain4J + Dify',
          summary: 'End-to-end guide on building RAG pipeline with LangChain4J and orchestrating AI agents with Dify workflow for enterprise knowledge Q&A.',
          date: '2025-01-15',
          readTime: '18 min',
          tags: ['AI', 'RAG', 'LangChain4J']
        }
      ]
    }
  }
};

// 技能分类图标映射
export const SKILL_CATEGORY_ICONS: Record<string, any> = {
  'code': Code,
  'layers': Layers,
  'server': Server,
  'cloud': Cloud,
  'database': Database,
  'globe': Globe,
  'bot': Bot,
  'shield': Shield,
};
