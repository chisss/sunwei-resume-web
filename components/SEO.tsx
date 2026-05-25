import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sunwei-resume-web.vercel.app';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  lang: 'zh' | 'en';
  type?: string;
}

export default function SEO({ title, description, path, lang, type = 'website' }: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}/static/my_selfie.jpg`;

  return (
    <Helmet>
      <html lang={lang === 'zh' ? 'zh-CN' : 'en'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={lang === 'zh' ? 'zh_CN' : 'en_US'} />
      <meta property="og:site_name" content="孙伟 | Sun Wei" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* hreflang 双语标记 */}
      <link rel="alternate" hrefLang="zh-CN" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
}
