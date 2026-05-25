import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sunwei-resume-web.vercel.app';

// Person 结构化数据
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '孙伟',
  alternateName: 'Sun Wei',
  url: SITE_URL,
  image: `${SITE_URL}/static/my_selfie.jpg`,
  sameAs: [],
  jobTitle: '资深Java工程师 / AI Agent 研发',
  worksFor: { '@type': 'Organization', name: '自由职业' },
  knowsAbout: [
    'Java', 'Spring Cloud', 'Microservices', 'AI Agent',
    'Kubernetes', 'Financial Technology', 'Backend Development'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: '上海',
    addressCountry: 'CN'
  },
  sameAs: []
};

// WebSite 结构化数据
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '孙伟 | 资深Java工程师',
  url: SITE_URL,
  description: '孙伟 - 资深Java工程师，8年后端开发经验，专注微服务架构、金融科技与AI智能化',
  inLanguage: ['zh-CN', 'en']
};

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>
    </Helmet>
  );
}
