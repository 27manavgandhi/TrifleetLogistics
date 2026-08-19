import {
  Factory,
  ShoppingBag,
  Hammer,
  Car,
  Package,
  Wheat,
  Zap,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export type Industry = {
  slug: string;
  title: string;
  excerpt: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  imageQuery: string;
  stats: { value: string; label: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    excerpt: 'Inbound raw material and outbound finished-goods transportation for factories across India.',
    icon: Factory,
    challenges: ['Just-in-time line-side delivery pressure', 'Heavy and oversized component movement', 'Multi-plant inbound coordination'],
    solutions: ['Dedicated inbound fleet with JIT scheduling', 'Specialised trailers for oversized parts', 'Coordinated dispatch across plants'],
    imageQuery: 'factory production line manufacturing',
    stats: [{ value: '120+', label: 'Plants served' }, { value: 'JIT', label: 'Line-side delivery' }],
  },
  {
    slug: 'retail-fmcg',
    title: 'Retail & FMCG',
    excerpt: 'Fast, reliable distribution from manufacturing hubs to regional depots and retail shelves.',
    icon: ShoppingBag,
    challenges: ['Tight delivery windows for shelf-life-sensitive goods', 'High-frequency dispatch schedule', 'Multi-drop distribution routing'],
    solutions: ['Closed-container fleet with tarpaulin protection', 'Scheduled multi-drop routing', 'Hub-based consolidation network'],
    imageQuery: 'supermarket retail shelves products',
    stats: [{ value: '40K+', label: 'Stores reached' }, { value: '24-48h', label: 'Depot replenishment' }],
  },
  {
    slug: 'construction',
    title: 'Construction & Infra',
    excerpt: 'Movement of cement, steel, aggregates and project cargo for construction and infrastructure.',
    icon: Hammer,
    challenges: ['Heavy and oversized loads', 'Remote and rural delivery points', 'Project-critical delivery sequencing'],
    solutions: ['Flatbed and low-bed trailer fleet', 'Route surveys and escort planning', 'Sequenced delivery to site schedule'],
    imageQuery: 'construction site cranes building',
    stats: [{ value: '25T+', label: 'Per-vehicle capacity' }, { value: '60+', label: 'Project sites' }],
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    excerpt: 'Auto-components and finished-vehicle logistics for OEMs and Tier-1 suppliers.',
    icon: Car,
    challenges: ['JIT line-side delivery with severe penalties', 'High-value component security', 'Multi-tier supplier coordination'],
    solutions: ['Dedicated JIT fleet with milk-run options', 'Sealed-container high-value handling', 'Supplier-to-OEM coordination'],
    imageQuery: 'automotive factory car assembly',
    stats: [{ value: '0', label: 'Line-stops caused' }, { value: 'JIT', label: 'Sequenced delivery' }],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce & 3PL',
    excerpt: 'Line-haul and fulfilment transportation for e-commerce and third-party logistics players.',
    icon: Package,
    challenges: ['Peak-season volume surges', 'High-frequency line-haul schedules', 'Sort-centre pickup reliability'],
    solutions: ['Scalable contracted line-haul capacity', 'Scheduled sort-centre pickups', 'Peak-season surge planning'],
    imageQuery: 'ecommerce fulfillment warehouse packages',
    stats: [{ value: '99%+', label: 'Pickup reliability' }, { value: 'Scalable', label: 'Line-haul ops' }],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture & Agri-inputs',
    excerpt: 'Bulk movement of grains, fertilisers, seeds and agri-produce across rural and urban India.',
    icon: Wheat,
    challenges: ['Seasonal volume spikes', 'Rural last-mile access', 'Perishable produce timing'],
    solutions: ['Bulk open and tipper fleet', 'Rural pin-code coverage', 'Time-bound harvest-season dispatch'],
    imageQuery: 'agriculture field harvest india',
    stats: [{ value: '500+', label: 'Rural pin codes' }, { value: 'Bulk', label: 'Agri movement' }],
  },
  {
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    excerpt: 'Transport of transformers, cables, pipes and materials for power, oil & gas and renewables projects.',
    icon: Zap,
    challenges: ['Oversized and heavy equipment like transformers and turbines', 'Remote project sites with poor road access', 'Stringent safety and permit requirements'],
    solutions: ['Specialised heavy-haul and low-bed trailers', 'Route survey and permit management', 'Safety-compliant crews and escort vehicles'],
    imageQuery: 'wind turbine energy power plant',
    stats: [{ value: 'ODC', label: 'Over-dimensional cargo' }, { value: '100%', label: 'Safety compliant' }],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Bulk Cargo',
    excerpt: 'Transport of cement, steel, sand, bricks, fixtures and bulk building materials for real-estate developers and contractors.',
    icon: Building2,
    challenges: ['Coordinated multi-supplier deliveries to a single site', 'Urban delivery access and time restrictions', 'Project-timeline alignment with construction phases'],
    solutions: ['Consolidated multi-supplier routing to site', 'Off-hour and night delivery planning for urban sites', 'Phased project-timeline delivery scheduling'],
    imageQuery: 'real estate construction building india',
    stats: [{ value: 'Multi', label: 'Supplier consolidation' }, { value: 'On-time', label: 'Project delivery' }],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
