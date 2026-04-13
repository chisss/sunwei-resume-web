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
      title: '资深 Java 工程师 / AI Agent 研发',
      tagline: '8年经验 · 架构设计 · 团队管理 · 金融科技 · AI Agent',
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
        '8年Java后端开发经验，曾任职于度小满金融、众安保险等头部企业，具备扎实的技术功底与行业实践积累。',
        '深耕互联网保险、互联网金融信贷等核心业务领域，对业务逻辑、场景链路及行业痛点有深刻洞察。',
        '在用户触达、消息触达及信贷核心系统等关键模块开发中积累了丰富实战经验，主导过多系统从设计到落地的全流程。',
        '精通SpringCloud微服务架构设计与落地，具备分布式系统搭建、优化的成熟经验；同时具备一定前端开发能力，可跨栈协作推进全链路开发。',
        '擅长带领团队攻克技术瓶颈与业务难点；熟悉敏捷开发流程，具备敏捷团队管理经验，可规范推进迭代节奏。',
        '具备AI+业务场景落地能力，熟悉 Agentic workflow、RAG 系统搭建，拥有在企业环境中搭建 AI 智能体协作平台的经验。'
      ]
    },
    skills: {
      title: '核心技术栈',
      categories: {
        'Java生态': {
          icon: 'code',
          items: [
            { name: 'Java 21', icon: '☕' },
            { name: 'JVM原理', icon: '⚙️' },
            { name: '并发编程', icon: '🔄' },
            { name: '设计模式', icon: '🧩' },
          ]
        },
        '微服务架构': {
          icon: 'layers',
          items: [
            { name: 'Spring Boot 3', icon: '🍃' },
            { name: 'Spring Cloud', icon: '🌥️' },
            { name: 'Nacos', icon: '📋' },
            { name: 'Gateway', icon: '🚪' },
            { name: 'Feign', icon: '📨' },
          ]
        },
        '中间件 & 数据库': {
          icon: 'database',
          items: [
            { name: 'MySQL / PG', icon: '🗄️' },
            { name: 'RocketMQ', icon: '🚀' },
            { name: 'Redis', icon: '⚡' },
            { name: 'ElasticSearch', icon: '🔍' },
            { name: 'ClickHouse', icon: '📊' },
          ]
        },
        '云原生 & DevOps': {
          icon: 'cloud',
          items: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Linux', icon: '🐧' },
            { name: 'ServiceMesh', icon: '🕸️' },
            { name: 'CI/CD', icon: '🔄' },
          ]
        },
        'AI & 智能化': {
          icon: 'bot',
          items: [
            { name: 'LangChain', icon: '🔗' },
            { name: 'LangGraph', icon: '🕸️' },
            { name: 'RAG & Milvus', icon: '📚' },
            { name: 'Prompt', icon: '✍️' },
            { name: 'MCP Server', icon: '🔌' },
          ]
        },
        '前端 & 协作': {
          icon: 'globe',
          items: [
            { name: 'React 19 & Vue', icon: '⚛️' },
            { name: '敏捷开发', icon: '🏃' },
            { name: '架构决策', icon: '🏛️' },
            { name: '团队管理', icon: '👥' },
          ]
        },
        '系统治理 & 稳定性': {
          icon: 'shield',
          items: [
            { name: '可观测性', icon: '📈' },
            { name: '链路追踪', icon: '🧭' },
            { name: '性能调优', icon: '⚡' },
            { name: '容灾治理', icon: '🛡️' },
          ]
        },
        '业务架构 & 交付': {
          icon: 'server',
          items: [
            { name: '领域建模', icon: '🏗️' },
            { name: '复杂流程设计', icon: '🧠' },
            { name: '技术方案落地', icon: '📐' },
            { name: '跨团队协同', icon: '🤝' },
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
          role: 'Java高级开发工程师 / 贷前贷中业务组技术负责人',
          period: '2025.03 - 至今',
          description: [
            '负责贷前贷中业务技术管理与架构决策，统筹风控系统与流量分发业务，推动AI工具在研发流程中的应用。'
          ],
          achievements: [
            '主导风控系统从0到1架构设计与落地，成功接入决策引擎，端到端疏通风控-决策-模型全链路流程，提升风险决策准确性。',
            '牵头首个渠道方与资金方接入项目，统筹设计并实现APP/API流量管理、进件、授信、用信、资金路由及放款全流程闭环。',
            '设计并落地业务与技术双维度监控告警体系，覆盖卡单预警与资源指标，将业务中断率降低至0.1%以下。',
            '牵头“流量分发-贷超”与“双融担-权益”等重点项目架构设计，通过模块化重构使系统业务支撑能力提升50%。',
            '推动研发全流程规范化建设，在团队中推广AI相关知识技能与工具的广泛使用，提升团队研发效率。'
          ]
        },
        {
          id: 'xinfei',
          company: '信飞科技',
          role: 'Java资深开发工程师 / 用户组-消息平台和触达中台技术负责人',
          period: '2024.02 - 2024.05',
          description: ['负责消息平台与消息触达中台重构，主导多渠道规模化接入与系统架构升级。'],
          achievements: [
            '主导完成10+主流短信渠道及5+推送服务接入，将单渠道接入周期从7天缩短至2天。',
            '牵头消息平台重构与触达系统设计，消息发送成功率提升至95%以上，催收类提升至75%，延迟降至500ms内。',
            '搭建消息渠道标准化接入框架，实现渠道配置化接入，新增渠道无需代码开发即可上线。',
            '设计无侵入式接入方案，全量集成贷前、贷中、贷后等20+核心消息场景，业务方接入效率提升80%。'
          ]
        },
        {
          id: 'zhongan',
          company: '众安国际',
          role: '后端高级研发工程师 / 保险保全系统',
          period: '2022.04 - 2023.12',
          description: ['主导保险保全系统核心模块设计与开发，聚焦保全业务全流程优化。'],
          achievements: [
            '主导保单复效、终止、变更及投连险专项等核心场景开发落地，使单项处理效率提升50%，接入速度提升30%+。',
            '负责保全系统全生命周期文档建设，形成标准化文档体系，提升团队协作与维护效率。',
            '针对高频保全项开展流程梳理与代码重构，解决性能瓶颈与可维护性问题，提升系统整体质量。'
          ]
        },
        {
          id: 'duxiaoman',
          company: '度小满科技',
          role: 'Java高级研发工程师 / 消息触达与交易中台',
          period: '2020.05 - 2022.04',
          description: ['主导消息触达中台从0到1建设，并参与支付交易中台核心重构。'],
          achievements: [
            '牵头消息触达中台设计与开发，聚焦保险用户全生命周期触达场景，支撑续费率核心业务指标提升。',
            '主导保险交易与支付中台全量重构，进行架构分层改造、核心链路梳理及异常处理机制升级。',
            '推动保险核心批处理任务从传统技术栈迁移至Python生态，重构任务调度逻辑与执行引擎。'
          ]
        },
        {
          id: 'fanwei',
          company: '上海泛微网络',
          role: 'Java微服务架构 / 基础架构研发',
          period: '2018.07 - 2020.05',
          description: ['主导基于SpringCloud生态的基础服务微服务架构从0到1构建与改造。'],
          achievements: [
            '完成技术栈选型与旧系统重构迁移，搭建注册中心、配置中心、网关等核心组件，升级为高可用微服务架构。',
            '设计开发通用工具类组件库，构建并维护运维系统基础服务（监控、日志聚合等）。',
            '搭建Vue前端技术框架，为核心基础服务开发独立前端管理系统，实现配置监控可视化。',
            '定制化开发服务网关与远程调用框架，优化短信、邮件等消息触达系统的重试与熔断策略。'
          ]
        }
      ]
    },
    projects: {
      title: '精选项目实战',
      items: [
        {
          id: 'agent-platform',
          name: '企业 Agent 协作平台',
          role: '项目负责人',
          period: '2026.01 - 至今',
          background: '面向多租户研发和业务团队提供 Agent 管理、Spec 驱动研发、上下文沉淀、工作流协同和知识检索能力，目标是把传统研发流程升级为可编排、可追踪、可复用的 Agent 协作体系。',
          techStack: ['Java 21', 'Spring Boot 3', 'LangChain', 'LangGraph', 'Milvus', 'RabbitMQ', 'React 19'],
          solution: '基于 LangChain 和 LangGraph 落地 Agentic Loop 支持多轮推理与工具调用；设计四层上下文注入机制并接入 Milvus 实现 RAG；搭建 MCP Server 等扩展能力；整合 Flowable、ClickHouse、RabbitMQ 构建基础底座。',
          outcome: '成功打造企业级 Agent 开发与治理平台底座，支撑多Agent协作、知识库增强及全面的成本核算与监控体系。',
          highlights: [
            '主导 Agent 执行链路设计，支持多Agent模式下子图、并行、循环、模型路由与自动降级',
            '设计四层上下文注入机制（项目、文档、输入、历史），接入 Milvus 实现 RAG 检索增强',
            '搭建 Skill、内置工具、MCP Server 扩展能力，支持 Agent 动态绑定外部能力',
            '结合 RabbitMQ + WebSocket 实现执行过程实时推送、团队协同和状态可视化',
            '基于执行记录与模型单价建设成本分析能力，支持多维度成本核算'
          ],
          responsibilities: [
            '主导平台核心架构设计与后端能力建设',
            '设计并实现 Agent 执行链路与多轮推理逻辑',
            '构建四层上下文注入机制与向量检索模块',
            '推进 Flowable 深度编排与自定义工具沙箱等高级特性规划'
          ]
        },
        {
          id: 'msg-platform-refactor',
          name: '信飞科技消息平台重构',
          role: '系统设计 & 核心开发',
          period: '2024.03 - 2024.05',
          background: '贷后催收受强监管影响短信渠道频遭封禁，原系统面临渠道接入需硬编码（平均7天）、发送失败无智能路由、接口未标准化等痛点，严重制约应急响应。',
          techStack: ['Groovy', 'RocketMQ', 'Spring Boot', 'Redis', 'MySQL'],
          solution: '设计“接入层+接出层”双层适配架构；通过 Groovy 脚本动态配置渠道映射规则，屏蔽差异；结合渠道状态监控设计失败消息智能重路由策略。',
          outcome: '新渠道接入周期从7天缩短至1天；短信送达率从82%提升至96%，有效触达量提升40%；配置化测试机制降低测试成本60%。',
          highlights: [
            '创新设计“接入层+接出层”架构，实现参数自动转换与跨渠道接口标准化',
            '引入 Groovy 脚本动态加载机制，无需重启服务即可完成新渠道接入与规则更新',
            '设计失败消息自动重路由策略，实时切换备用渠道保障触达连续性',
            '配置化测试机制减少80%渠道适配代码开发量'
          ],
          responsibilities: [
            '设计重构整体技术方案（架构分层、接口标准化）',
            '牵头核心代码开发，攻克渠道适配、动态配置等关键技术难题',
            '统筹测试与上线验证，保障系统稳定运行'
          ]
        },
        {
          id: 'zhongan-quality',
          name: '众安国际保全系统代码质量提升',
          role: '项目负责人',
          period: '2023.05 - 2023.08',
          background: '保全系统长期运行暴露出单测覆盖率低（70%）、代码存在“坏味道”维护困难、自动化测试稳定性不足、核心保全项处理耗时偏长、敏感数据缺乏统一加密等风险。',
          techStack: ['Java', 'Spring Boot', 'JUnit', 'Swagger', 'MySQL'],
          solution: '制定系统测试体系升级计划；梳理重构冗长方法与核心链路；设计落地敏感字段（身份证/银行卡）全链路加密；统筹日志与接口文档规范化建设。',
          outcome: '单测覆盖率提升至90%，自动化通过率达98%；核心项处理时长缩短30%；故障定位时间缩短至30分钟内；消除数据泄露合规风险。',
          highlights: [
            '系统性梳理代码库，重构高风险逻辑，降低代码复杂度40%',
            '设计落地敏感数据全链路加密存储与传输体系，满足金融合规要求',
            '统一日志输出格式与级别标准，问题排查效率提升50%',
            '基于 Swagger 规范接口文档，跨团队沟通偏差率减少60%'
          ],
          responsibilities: [
            '制定系统优化整体方案与优先级规划',
            '牵头测试体系升级、代码重构与性能优化落地',
            '推动敏感数据加密规则设计与全生命周期文档建设'
          ]
        },
        {
          id: 'duxiaoman-msg',
          name: '度小满保险消息触达中台系统搭建',
          role: '后台开发',
          period: '2020.05 - 2021.03',
          background: '为提升保险续费率，需整合分散的短信、语音等触达手段构建统一入口，并搭建支持多产品策略的 AB 投放测试平台与全链路监控，解决触达难追踪、策略优化滞后等问题。',
          techStack: ['Spring Boot', 'Redis', 'MySQL', 'RocketMQ', 'Vue'],
          solution: '设计多通道接入方案及路由策略；引入 Redis 缓存高频数据，设计“binlog+MQ+双删”方案保障缓存一致性；开发策略灰度发布与 AB 测试平台。',
          outcome: '续期续费率提升15%；消息发送峰值延迟从30s降至2s内，数据库压力骤降；运营策略上线周期从3天缩短至1天。',
          highlights: [
            '设计多通道接入方案，保障延迟<3s、发送成功率99%+',
            '基于“binlog增量订阅+消息队列+双删更新”方案，确保高并发下缓存一致性达99.9%',
            '对离线消息提前预处理并缓存，缓解实时计算压力',
            '主导后台页面与多维数据看板设计，支持 AB 策略灵活配置'
          ],
          responsibilities: [
            '主导触达中台从0到1架构设计、技术栈选型与核心开发',
            '设计多通道接入方案与缓存一致性保障机制',
            '统筹前后端团队推进 AB 测试平台与数据看板落地'
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
          title: '企业级 Agent 协作平台架构演进与 LangGraph 落地实践',
          summary: '详细解析如何基于 LangChain 和 LangGraph 构建支持多轮推理与动态工具调用的企业级 Agent 底座，探讨 RAG 与上下文管理的最佳实践。',
          date: '2026-02-15',
          readTime: '15 min',
          tags: ['AI Agent', 'LangGraph', 'Architecture']
        },
        {
          id: '2',
          title: '消息平台高可用重构：Groovy 动态路由与双层架构实践',
          summary: '复盘信飞科技消息平台重构经验，分享如何通过“接入层+接出层”设计与 Groovy 脚本引擎解决多渠道接入痛点，实现配置化热更新。',
          date: '2024-06-10',
          readTime: '12 min',
          tags: ['Message Platform', 'Groovy', 'Design Patterns']
        },
        {
          id: '3',
          title: '金融系统高并发下的缓存一致性保障方案',
          summary: '基于实战案例深度剖析 "binlog+MQ+延迟双删" 架构在千万级流量场景下保障 Redis 与 MySQL 数据最终一致性的原理。',
          date: '2021-04-20',
          readTime: '10 min',
          tags: ['Redis', 'High Concurrency', 'Consistency']
        },
        {
          id: '4',
          title: '遗留系统代码质量提升与重构战术',
          summary: '从单测覆盖率、坏味道清理到核心链路精简，探讨如何在不停机、不影响业务迭代的前提下，系统性提升保全系统代码质量。',
          date: '2023-09-05',
          readTime: '14 min',
          tags: ['Refactoring', 'Code Quality', 'Testing']
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
      title: 'Senior Java / AI Agent Engineer',
      tagline: '8 Yrs Exp · Architecture · Team Lead · Fintech · AI Agent Platform',
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
        '8 years of Java backend experience in top fintech firms (Du Xiaoman, ZhongAn) with solid technical skills.',
        'Deep business understanding of Internet Insurance and Financial Credit core systems and pain points.',
        'Extensive practical experience in user reach, message platforms, and credit core systems development.',
        'Mastery of SpringCloud microservices architecture, and high-concurrency distributed system optimization.',
        'Proven Tech Lead with Agile methodology expertise, driving technical optimization.',
        'Strong AI integration capability, experienced in Agentic Workflows, RAG, and building enterprise AI Agent Collaboration Platforms.'
      ]
    },
    skills: {
      title: 'Tech Stack',
      categories: {
        'Java Ecosystem': {
          icon: 'code',
          items: [
            { name: 'Java 21', icon: '☕' },
            { name: 'JVM Tuning', icon: '⚙️' },
            { name: 'Concurrency', icon: '🔄' },
            { name: 'Design Patterns', icon: '🧩' },
          ]
        },
        'Microservices': {
          icon: 'layers',
          items: [
            { name: 'Spring Boot 3', icon: '🍃' },
            { name: 'Spring Cloud', icon: '🌥️' },
            { name: 'Nacos', icon: '📋' },
            { name: 'Gateway', icon: '🚪' },
            { name: 'Feign', icon: '📨' },
          ]
        },
        'Middleware & DB': {
          icon: 'database',
          items: [
            { name: 'MySQL / PG', icon: '🗄️' },
            { name: 'RocketMQ / RabbitMQ', icon: '🚀' },
            { name: 'Redis', icon: '⚡' },
            { name: 'ElasticSearch', icon: '🔍' },
            { name: 'ClickHouse', icon: '📊' },
          ]
        },
        'Cloud & DevOps': {
          icon: 'cloud',
          items: [
            { name: 'Docker', icon: '🐳' },
            { name: 'Linux', icon: '🐧' },
            { name: 'ServiceMesh', icon: '🕸️' },
            { name: 'CI/CD', icon: '🔄' },
          ]
        },
        'AI & Intelligence': {
          icon: 'bot',
          items: [
            { name: 'LangChain', icon: '🔗' },
            { name: 'LangGraph', icon: '🕸️' },
            { name: 'RAG & Milvus', icon: '📚' },
            { name: 'Prompt', icon: '✍️' },
            { name: 'MCP Server', icon: '🔌' },
          ]
        },
        'Frontend & Lead': {
          icon: 'globe',
          items: [
            { name: 'React 19 & Vue', icon: '⚛️' },
            { name: 'Agile Dev', icon: '🏃' },
            { name: 'Arch Design', icon: '🏛️' },
            { name: 'Team Mgmt', icon: '👥' },
          ]
        },
        'Governance & Reliability': {
          icon: 'shield',
          items: [
            { name: 'Observability', icon: '📈' },
            { name: 'Tracing', icon: '🧭' },
            { name: 'Performance Tuning', icon: '⚡' },
            { name: 'Disaster Recovery', icon: '🛡️' },
          ]
        },
        'Domain & Delivery': {
          icon: 'server',
          items: [
            { name: 'Domain Modeling', icon: '🏗️' },
            { name: 'Complex Workflow Design', icon: '🧠' },
            { name: 'Solution Delivery', icon: '📐' },
            { name: 'Cross-team Collaboration', icon: '🤝' },
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
          role: 'Senior Java Dev / Pre & Mid-loan Tech Lead',
          period: '2025.03 - Present',
          description: [
            'Led technical management for Pre-loan & Mid-loan groups, overseeing risk control and traffic routing.'
          ],
          achievements: [
            'Architected Risk Control System from 0 to 1, integrating decision engine and full-link pipeline.',
            'Led first funding channel integration, managing full API lifecycle from routing to loan settlement.',
            'Built 2D monitoring system (biz & tech), reducing service downtime to < 0.1%.',
            'Led Traffic Distribution core architecture remodel, boosting system extensibility by 50%.',
            'Promoted AI tools adoption in Agile workflows, heavily improving team R&D efficiency.'
          ]
        },
        {
          id: 'xinfei',
          company: 'Xinfei Tech',
          role: 'Senior Java Eng / Messaging Platform Tech Lead',
          period: '2024.02 - 2024.05',
          description: ['Tech Lead for Messaging Platform and Notification Middle-end.'],
          achievements: [
            'Integrated 10+ SMS channels and 5+ Push services, reducing integration time from 7 to 2 days.',
            'Refactored Messaging Platform, boosting success rate to 95%+ and cutting latency to < 500ms.',
            'Built config-driven channel integration framework, enabling zero-code new channel deployments.',
            'Designed non-intrusive integration for 20+ scenarios, reducing dev effort by 80%.'
          ]
        },
        {
          id: 'zhongan',
          company: 'ZhongAn International',
          role: 'Senior Backend Eng / Insurance System',
          period: '2022.04 - 2023.12',
          description: ['Led core modules design for Insurance Preservation System.'],
          achievements: [
            'Optimized full-link preservation process, boosting efficiency by 50% and access speed by 30%.',
            'Established comprehensive system documentation standard for cross-team collaboration.',
            'Refactored high-frequency code paths to resolve performance bottlenecks and tech debt.'
          ]
        },
        {
          id: 'duxiaoman',
          company: 'Du Xiaoman Tech',
          role: 'Senior Java Eng / Messaging & Trading Platform',
          period: '2020.05 - 2022.04',
          description: ['Built Messaging Middle Platform from scratch and refactored Trading Platform.'],
          achievements: [
            'Built Messaging Middle Platform to support full insurance user lifecycle and boost renewal rate.',
            'Refactored entire Insurance Trading Platform with layered architecture and upgraded exception handling.',
            'Migrated batch tasks to Python ecosystem, modernizing job scheduling and execution engines.'
          ]
        },
        {
          id: 'fanwei',
          company: 'Weaver Network',
          role: 'Microservices Architect / Infrastructure',
          period: '2018.07 - 2020.05',
          description: ['Led 0-to-1 construction of SpringCloud based microservices infrastructure.'],
          achievements: [
            'Migrated legacy monolith to SpringCloud microservices (Gateway, Nacos, Feign).',
            'Developed common component libraries and DevOps backend tools.',
            'Built Vue frontend management system for infrastructure monitoring visualization.',
            'Customized API Gateway and routing framework for retry and circuit breaker policies.'
          ]
        }
      ]
    },
    projects: {
      title: 'Key Projects',
      items: [
        {
          id: 'agent-platform',
          name: 'Enterprise Agent Collab Platform',
          role: 'Project Lead',
          period: '2026.01 - Present',
          background: 'A multi-tenant platform providing Agent management, Spec-driven R&D, knowledge retrieval, and workflow orchestration to modernize traditional R&D processes.',
          techStack: ['Java 21', 'Spring Boot 3', 'LangChain', 'LangGraph', 'Milvus', 'RabbitMQ', 'React 19'],
          solution: 'Implemented Agentic Loop via LangChain/LangGraph; built 4-layer context injection with Milvus RAG; developed MCP Server integrations; integrated Flowable & ClickHouse.',
          outcome: 'Successfully established a robust Enterprise Agent governance foundation, enabling multi-agent coordination and full-link cost monitoring.',
          highlights: [
            'Led Agent execution pipeline supporting parallel, sub-graph, and routing logic.',
            'Designed 4-layer context injection (Project, Doc, Input, History) with Milvus RAG.',
            'Built extension capabilities via Skills, built-in tools, and MCP Server.',
            'Real-time streaming and team coordination using RabbitMQ + WebSocket.',
            'Multi-dimensional cost analysis based on execution history and model pricing.'
          ],
          responsibilities: [
            'Core architecture design and backend capabilities.',
            'Agent execution pipeline and multi-turn reasoning logic.',
            'RAG vector retrieval module and context mechanisms.',
            'Flowable orchestration and Sandbox planning.'
          ]
        },
        {
          id: 'msg-platform-refactor',
          name: 'Messaging Platform Refactor',
          role: 'System Design & Core Dev',
          period: '2024.03 - 2024.05',
          background: 'Strict regulations caused frequent SMS channel blocks. Legacy system had hardcoded integration (7 days/channel) and no smart routing.',
          techStack: ['Groovy', 'RocketMQ', 'Spring Boot', 'Redis', 'MySQL'],
          solution: 'Dual-layer adapter architecture; Groovy script for hot-reload mapping; Smart routing strategy for failover via channel health monitoring.',
          outcome: 'Channel integration cut from 7 days to 1 day; Delivery rate up to 96%; Config-driven tests cut effort by 60%.',
          highlights: [
            'Dual-layer adapter (Inbound/Outbound) for seamless parameter translation.',
            'Hot-reloading of new channels via Groovy scripts without server restarts.',
            'Smart routing strategy for real-time failover to backup channels.',
            'Configuration-driven testing reduced mock development by 80%.'
          ],
          responsibilities: [
            'Overall architecture design and interface standardization.',
            'Core Groovy script dynamic configuration development.',
            'Testing, validation and production rollout.'
          ]
        },
        {
          id: 'zhongan-quality',
          name: 'Preservation System Quality Upgrade',
          role: 'Project Lead',
          period: '2023.05 - 2023.08',
          background: 'System faced low test coverage (70%), code smells, long processing times, and unencrypted sensitive data posing compliance risks.',
          techStack: ['Java', 'Spring Boot', 'JUnit', 'Swagger', 'MySQL'],
          solution: 'Upgraded testing framework; refactored core paths; implemented full-link encryption for ID/Bank cards; standardized logs and Swagger docs.',
          outcome: 'Coverage up to 90% (98% auto-pass); processing time cut by 30%; troubleshooting under 30 mins; eliminated data leak risks.',
          highlights: [
            'Systematic code cleanup dropping cyclomatic complexity by 40%.',
            'Full-link encryption for sensitive financial data.',
            'Standardized log levels and formatting, boosting debug speed by 50%.',
            'Cross-team communication improved by 60% via Swagger docs.'
          ],
          responsibilities: [
            'Strategy and prioritization for system-wide optimization.',
            'Testing framework upgrade and refactoring execution.',
            'Encryption rules design and documentation standard.'
          ]
        },
        {
          id: 'duxiaoman-msg',
          name: 'Insurance Messaging Middle Platform',
          role: 'Backend Dev',
          period: '2020.05 - 2021.03',
          background: 'Needed to consolidate scattered messaging channels into a unified platform supporting AB testing and monitoring to boost insurance renewal rates.',
          techStack: ['Spring Boot', 'Redis', 'MySQL', 'RocketMQ', 'Vue'],
          solution: 'Multi-channel access design; "binlog+MQ+double delete" for cache consistency; built AB testing & gray release dashboard.',
          outcome: 'Renewal rate up 15%; peak latency dropped from 30s to <2s; policy deployment cut from 3 days to 1 day.',
          highlights: [
            'Unified Voice, SMS, WeChat channels with 99%+ success rate.',
            'Cache consistency of 99.9% under high concurrency using binlog+MQ.',
            'Pre-processed offline messages to relieve real-time DB pressure.',
            'Designed multi-dimensional data dashboard for AB tests.'
          ],
          responsibilities: [
            '0-to-1 platform architecture and core module development.',
            'Multi-channel design and cache consistency solutions.',
            'Led fullstack team to deliver AB testing dashboards.'
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
          title: 'Enterprise Agent Platform & LangGraph',
          summary: 'A deep dive into building an Enterprise Agent Platform using LangChain and LangGraph, supporting multi-turn reasoning and RAG context management.',
          date: '2026-02-15',
          readTime: '15 min',
          tags: ['AI Agent', 'LangGraph', 'Architecture']
        },
        {
          id: '2',
          title: 'Messaging Platform High-Availability Refactor',
          summary: 'Case study on leveraging Groovy dynamic routing and dual-layer architecture for seamless message channel integration.',
          date: '2024-06-10',
          readTime: '12 min',
          tags: ['Message Platform', 'Groovy', 'Design Patterns']
        },
        {
          id: '3',
          title: 'Cache Consistency Under High Concurrency',
          summary: 'Technical breakdown of the binlog+MQ+double-delete architecture to ensure Redis & MySQL consistency at massive scale.',
          date: '2021-04-20',
          readTime: '10 min',
          tags: ['Redis', 'High Concurrency', 'Consistency']
        },
        {
          id: '4',
          title: 'Refactoring Legacy Systems Safely',
          summary: 'Strategies for lifting unit test coverage and eliminating code smells in financial core systems without downtime.',
          date: '2023-09-05',
          readTime: '14 min',
          tags: ['Refactoring', 'Code Quality', 'Testing']
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
