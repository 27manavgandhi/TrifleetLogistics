import { siteConfig } from '@/lib/constants/site';
import { cities } from '@/lib/constants/cities';
import { blogPosts } from '@/lib/constants/blog';
import { caseStudies } from '@/lib/constants/content';

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { url: '', priority: 1.0, changeFreq: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFreq: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFreq: 'monthly' as const },
    { url: '/industries', priority: 0.8, changeFreq: 'monthly' as const },
    { url: '/fleet', priority: 0.8, changeFreq: 'monthly' as const },
    { url: '/clients', priority: 0.7, changeFreq: 'monthly' as const },
    { url: '/careers', priority: 0.6, changeFreq: 'weekly' as const },
    { url: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFreq: 'monthly' as const },
    { url: '/case-studies', priority: 0.7, changeFreq: 'monthly' as const },
    { url: '/thank-you', priority: 0.3, changeFreq: 'yearly' as const },
    { url: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
  ];

  const cityPages = cities.map((c) => ({
    url: `/logistics/${c.slug}`,
    priority: 0.7,
    changeFreq: 'monthly' as const,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `/blog/${p.slug}`,
    priority: 0.6,
    changeFreq: 'monthly' as const,
    lastModified: new Date(p.date),
  }));

  const caseStudyPages = caseStudies.map((c) => ({
    url: `/case-studies/${c.slug}`,
    priority: 0.6,
    changeFreq: 'monthly' as const,
  }));

  const all = [
    ...staticPages,
    ...cityPages,
    ...blogPages,
    ...caseStudyPages,
  ];

  return all.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: 'lastModified' in p && p.lastModified ? p.lastModified : now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}
