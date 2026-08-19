import { siteConfig } from '@/lib/constants/site';
import { services } from '@/lib/constants/services';
import { cities } from '@/lib/constants/cities';
import { generalFaqs } from '@/lib/constants/content';

const SITE = siteConfig.url;
const LOGO = `${SITE}/logo.svg`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: SITE,
    logo: LOGO,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}#localbusiness`,
    name: siteConfig.name,
    url: SITE,
    logo: LOGO,
    image: `${SITE}/og.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164[0],
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.address.geo.lat,
      longitude: siteConfig.contact.address.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })),
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}#website`,
    url: SITE,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${SITE}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${SITE}#organization`, name: siteConfig.name },
    serviceType: name,
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE}/services/${slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string };
  imageQuery: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author.name },
    publisher: { '@id': `${SITE}#organization`, name: siteConfig.name, logo: { '@type': 'ImageObject', url: LOGO } },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };
}

export function articleSchema(slug: string, title: string, description: string, date: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@id': `${SITE}#organization` },
    mainEntityOfPage: `${SITE}/case-studies/${slug}`,
  };
}

export function allServicesList() {
  return services.map((s) => ({
    slug: s.slug,
    name: s.title,
    description: s.excerpt,
  }));
}

export { generalFaqs };
