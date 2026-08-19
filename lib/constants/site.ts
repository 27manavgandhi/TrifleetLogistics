import type { Metadata } from 'next';

export const siteConfig = {
  name: 'TriFleet Logistics',
  shortName: 'TriFleet',
  url: 'https://trifleetlogistics.com',
  tagline: 'Moving India\'s Freight, On Time, Every Time',
  description:
    'Trifleet Logistics is a fleet owner and transport contractor providing reliable freight transportation and logistics solutions. With our dedicated fleet and trusted logistics partners, we deliver safe, efficient, and timely transportation services while supporting our customers with customized supply chain solutions.',
  founded: '2025',
  ogImage: '/og.svg',
  logo: '/logo.svg',
  keywords: [
    'full truck load logistics',
    'FTL transport Delhi',
    'B2B logistics India',
    'pan India transportation',
    'door to door logistics',
    'transport contractor Delhi',
    'fleet owner services',
    'supply chain support India',
    'industrial transportation',
    'commercial cargo logistics',
  ],
  contact: {
    address: {
      line1: 'C-5 Industrial Area, Phase 2',
      line2: 'Mangolpuri',
      city: 'Delhi',
      region: 'DL',
      postalCode: '110034',
      country: 'IN',
      countryName: 'India',
      full: 'C-5 Industrial Area, Phase 2, Mangolpuri, Delhi – 110034',
      geo: { lat: 28.6909, lng: 77.0826 },
    },
    email: 'trifleetlogistics@gmail.com',
    phones: ['+91 9211467575', '+91 9311090752'],
    phoneE164: ['+919211467575', '+919311090752'],
    whatsapp: '+91 78276 00368',
    whatsappE164: '917827600368',
    hours: 'Mon – Sat, 9:00 AM – 7:00 PM',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/trifleet-logistics',
    instagram: 'https://www.instagram.com/trifleetlogistics',
    facebook: 'https://www.facebook.com/trifleetlogistics',
    twitter: 'https://twitter.com/trifleetlog',
  },
};

type NavChild = { title: string; href: string; description?: string };
type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About',
    href: '/about',
    description: 'Our story, mission and the team moving India.',
  },
  {
    title: 'Services',
    href: '/services',
    description: 'What we move, and how.',
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Sector-specific transport expertise.',
  },
  { title: 'Fleet', href: '/fleet', description: 'Our trucks, trailers and equipment.' },
  { title: 'Clients', href: '/clients', description: 'Brands that trust TriFleet.' },

  { title: 'Contact', href: '/contact', description: 'Get a quote or talk to logistics.' },
];

export const footerNav: { title: string; links: NavChild[] }[] = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Fleet', href: '/fleet' },
      { title: 'Clients', href: '/clients' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [{ title: 'Services', href: '/services' }],
  },
  {
    title: 'Locations',
    links: [
      { title: 'Logistics in Delhi', href: '/logistics/delhi' },
      { title: 'Logistics in Noida', href: '/logistics/noida' },
      { title: 'Logistics in Gurgaon', href: '/logistics/gurgaon' },
      { title: 'Logistics in Faridabad', href: '/logistics/faridabad' },
      { title: 'Logistics in Ghaziabad', href: '/logistics/ghaziabad' },
      { title: 'Logistics in Sonipat', href: '/logistics/sonipat' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'Get a Quote', href: '/contact' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  authors,
  tags,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
} = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    keywords: tags?.length ? tags : siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: 'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
      ...(tags ? { tags } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
