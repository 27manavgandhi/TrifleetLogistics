import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Tri Fleet Logistics',
  shortName: 'Tri Fleet',
  url: 'https://trifleetlogistics.com',
  tagline: 'Pan-India Full Truck Load Logistics',
  description:
    'Tri Fleet Logistics is a Delhi-based full truck load logistics company delivering time-bound, door-to-door B2B transportation and supply chain solutions across India with a modern fleet and 24/7 control.',
  founded: '2011',
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
    phones: ['+91 7827600368', '+91 9999267898'],
    phoneE164: ['+917827600368', '+919999267898'],
    whatsapp: '+91 88266 92960',
    whatsappE164: '918826692960',
    hours: 'Open 24 hours, 7 days a week',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/tri-fleet-logistics',
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
    children: [
      { title: 'Full Truck Load', href: '/services/full-truck-load', description: 'Dedicated FTL for high-volume freight.' },
      { title: 'Part Truck Load', href: '/services/part-truck-load', description: 'Shared capacity for smaller shipments.' },
      { title: 'Industrial Transportation', href: '/services/industrial-transportation', description: 'Heavy, oversized and project cargo.' },
      { title: 'Commercial Cargo', href: '/services/commercial-cargo', description: 'Retail, FMCG and distribution freight.' },
      { title: 'Time-Bound Deliveries', href: '/services/time-bound-deliveries', description: 'Guaranteed on-time, mission-critical runs.' },
      { title: 'Door-to-Door Logistics', href: '/services/door-to-door-logistics', description: 'First-mile to last-mile, single window.' },
      { title: 'Supply Chain Support', href: '/services/supply-chain-support', description: 'Planning, control towers and analytics.' },
      { title: 'Fleet Owner Services', href: '/services/fleet-owner-services', description: 'Lease, manage and monetise your fleet.' },
      { title: 'Transport Contractor Services', href: '/services/transport-contractor-services', description: 'Contracted capacity for enterprises.' },
      { title: 'Pan India Logistics', href: '/services/pan-india-logistics', description: 'Coverage across 28 states and 8 UTs.' },
      { title: 'Dedicated Fleet Solutions', href: '/services/dedicated-fleet-solutions', description: 'Exclusive vehicles assigned to you.' },
      { title: 'B2B Logistics', href: '/services/b2b-logistics', description: 'Enterprise-grade B2B transportation.' },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Sector-specific transport expertise.',
  },
  { title: 'Fleet', href: '/fleet', description: 'Our trucks, trailers and equipment.' },
  {
    title: 'Infrastructure',
    href: '/infrastructure',
    description: 'Hubs, warehouses and control rooms.',
  },
  { title: 'Clients', href: '/clients', description: 'Brands that trust Tri Fleet.' },
  {
    title: 'Resources',
    href: '/blog',
    children: [
      { title: 'Blog & Insights', href: '/blog', description: 'Logistics intelligence and fleet news.' },
      { title: 'Case Studies', href: '/case-studies', description: 'Real delivery outcomes, by the numbers.' },
      { title: 'Careers', href: '/careers', description: 'Drive your career at Tri Fleet.' },
    ],
  },
  { title: 'Contact', href: '/contact', description: 'Get a quote or talk to logistics.' },
];

export const footerNav: { title: string; links: NavChild[] }[] = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Fleet', href: '/fleet' },
      { title: 'Infrastructure', href: '/infrastructure' },
      { title: 'Clients', href: '/clients' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Full Truck Load', href: '/services/full-truck-load' },
      { title: 'Part Truck Load', href: '/services/part-truck-load' },
      { title: 'Industrial Transportation', href: '/services/industrial-transportation' },
      { title: 'Door-to-Door Logistics', href: '/services/door-to-door-logistics' },
      { title: 'Supply Chain Support', href: '/services/supply-chain-support' },
      { title: 'Pan India Logistics', href: '/services/pan-india-logistics' },
    ],
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
