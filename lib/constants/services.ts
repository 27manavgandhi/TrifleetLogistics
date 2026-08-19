import {
  Truck,
  PackageCheck,
  Factory,
  Building2,
  Timer,
  DoorOpen,
  Workflow,
  TruckIcon,
  ClipboardList,
  MapPinned,
  ShipWheel,
  Handshake,
  type LucideIcon,
} from 'lucide-react';

export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  excerpt: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

export const services: ServiceSummary[] = [
  {
    slug: 'full-truck-load',
    title: 'Full Truck Load',
    shortTitle: 'FTL',
    tagline: 'Dedicated trucks, your freight alone.',
    excerpt:
      'Exclusive full truck load movements with dedicated vehicles, tracked transit and guaranteed capacity for high-volume freight across India.',
    icon: Truck,
    accent: 'hsl(222 89% 16%)',
    image: '/service/service1.png',
  },

  {
    slug: 'part-truck-load',
    title: 'Part Truck Load',
    shortTitle: 'PTL',
    tagline: 'Pay for the space you use.',
    excerpt:
      'Shared truck capacity for smaller shipments. Consolidated loading, flexible scheduling and cost-efficient part-load transportation nationwide.',
    icon: PackageCheck,
    accent: 'hsl(199 89% 48%)',
    image: '/service/service2.png',
  },

  {
    slug: 'industrial-transportation',
    title: 'Industrial Transportation',
    shortTitle: 'Industrial',
    tagline: 'Heavy, oversized and project cargo.',
    excerpt:
      'Specialised transport for heavy machinery, oversized equipment and project cargo with route surveys, escorts and engineered loading.',
    icon: Factory,
    accent: 'hsl(28 95% 50%)',
    image: '/service/service3.png',
  },

  {
    slug: 'commercial-cargo',
    title: 'Commercial Cargo',
    shortTitle: 'Commercial',
    tagline: 'Retail, FMCG and distribution freight.',
    excerpt:
      'Reliable commercial cargo movement for retail, FMCG and distribution networks with temperature-controlled and high-cube options.',
    icon: Building2,
    accent: 'hsl(142 71% 45%)',
    image: '/service/service4.png',
  },

  {
    slug: 'time-bound-deliveries',
    title: 'Time-Bound Deliveries',
    shortTitle: 'Time-Bound',
    tagline: 'On-time, every time — guaranteed.',
    excerpt:
      'Mission-critical, time-definite deliveries with SLA-backed transit times, priority dispatch and real-time milestone alerts.',
    icon: Timer,
    accent: 'hsl(0 72% 51%)',
    image: '/service/service5.png',
  },

  {
    slug: 'door-to-door-logistics',
    title: 'Door-to-Door Logistics',
    shortTitle: 'Door-to-Door',
    tagline: 'First mile to last mile, single window.',
    excerpt:
      'End-to-end door-to-door logistics covering pickup, line-haul and last-mile delivery with a single point of accountability.',
    icon: DoorOpen,
    accent: 'hsl(280 65% 60%)',
    image: '/service/service6.png',
  },

  {
    slug: 'supply-chain-support',
    title: 'Supply Chain Support',
    shortTitle: 'Supply Chain',
    tagline: 'Plan, control and optimise.',
    excerpt:
      'Supply chain design, control towers, inventory planning and analytics that turn logistics from a cost centre into a competitive edge.',
    icon: Workflow,
    accent: 'hsl(217 91% 60%)',
    image: '/service/service7.png',
  },

  {
    slug: 'fleet-owner-services',
    title: 'Fleet Owner Services',
    shortTitle: 'Fleet Owners',
    tagline: 'Lease, manage and monetise.',
    excerpt:
      'Fleet leasing, driver management, GPS telematics and load-matching that help fleet owners maximise utilisation and uptime.',
    icon: TruckIcon,
    accent: 'hsl(38 92% 50%)',
    image: '/service/service8.png',
  },

  {
    slug: 'transport-contractor-services',
    title: 'Transport Contractor Services',
    shortTitle: 'Contractors',
    tagline: 'Contracted capacity for enterprises.',
    excerpt:
      'Long-term contracted transport capacity for enterprises — dedicated vehicles, predictable pricing and committed SLAs.',
    icon: ClipboardList,
    accent: 'hsl(174 72% 34%)',
    image: '/service/service9.png',
  },

  {
    slug: 'pan-india-logistics',
    title: 'Pan India Logistics',
    shortTitle: 'Pan India',
    tagline: 'Coverage across 28 states.',
    excerpt:
      'Truly pan-India logistics with coverage across 28 states and 8 union territories, and 5,000+ destination pin codes.',
    icon: MapPinned,
    accent: 'hsl(222 89% 16%)',
    image: '/service/service10.png',
  },

  {
    slug: 'dedicated-fleet-solutions',
    title: 'Dedicated Fleet Solutions',
    shortTitle: 'Dedicated Fleet',
    tagline: 'Exclusive vehicles assigned to you.',
    excerpt:
      'Dedicated trucks, drivers and routes exclusively assigned to your business with branded vehicles and on-site dispatch.',
    icon: ShipWheel,
    accent: 'hsl(199 89% 48%)',
    image: '/service/service11.png',
  },

  {
    slug: 'b2b-logistics',
    title: 'B2B Logistics',
    shortTitle: 'B2B',
    tagline: 'Enterprise-grade transportation.',
    excerpt:
      'Enterprise B2B logistics with EDI integration, SLA reporting, dedicated account managers and scalable multi-lane networks.',
    icon: Handshake,
    accent: 'hsl(142 71% 45%)',
    image: '/service/service12.png',
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceSummary | undefined {
  return services.find((s) => s.slug === slug);
}

export type ServiceDetail = {
  slug: string;
  heroHeading: string;
  heroSub: string;
  overview: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  workflow: { phase: string; detail: string }[];
  industries: string[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  galleryQueries: string[];
  caseStudy: {
    client: string;
    sector: string;
    challenge: string;
    solution: string;
    outcome: string;
    metric: string;
  }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'full-truck-load': {
    slug: 'full-truck-load',
    heroHeading: 'Full Truck Load, moved with precision',
    heroSub:
      'Dedicated vehicles, exclusive capacity and GPS-tracked transit for high-volume freight across India.',
    overview: [
      'Full Truck Load (FTL) is the backbone of TriFleet Logistics. When your freight fills a truck, you deserve a vehicle dedicated entirely to your cargo — no consolidation, no detours, no compromise.',
      'We assign the right vehicle for your commodity, route and volume, then dispatch it on a committed transit schedule with GPS tracking from origin to destination. Every FTL movement is run through our 24/7 control room, so you always know exactly where your freight is and when it will arrive.',
      'From a single urgent truckload to a scheduled multi-lane programme, our FTL service scales with your business while keeping transit times predictable, documentation clean and claims risk low.',
    ],
    benefits: [
      {
        title: 'Exclusive capacity',
        description:
          'The entire vehicle is dedicated to your freight — no shared loading, no co-mingled cargo.',
      },
      {
        title: 'Faster transit',
        description:
          'Direct point-to-point routing with no hub stops means your freight spends less time on the road.',
      },
      {
        title: 'Lower damage risk',
        description:
          'Single-load handling eliminates the extra touch points that cause transit damage.',
      },
      {
        title: 'Real-time visibility',
        description:
          'GPS telematics on every vehicle with milestone alerts at pickup, in-transit and delivery.',
      },
      {
        title: 'Committed pricing',
        description:
          'Lane-based contracted rates protect you from spot-market volatility.',
      },
      {
        title: 'Flexible vehicle mix',
        description:
          'Closed containers, open trucks, trailers and reefers matched to your cargo profile.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Lane & vehicle selection',
        description:
          'We map your origin-destination pair and match the optimal vehicle type for your commodity and volume.',
      },
      {
        step: '02',
        title: 'Scheduling & dispatch',
        description:
          'A dedicated truck is scheduled with a committed pickup window and transit plan shared with your team.',
      },
      {
        step: '03',
        title: 'GPS-tracked transit',
        description:
          'The vehicle rolls under 24/7 control-room monitoring with milestone alerts pushed to you in real time.',
      },
      {
        step: '04',
        title: 'Proof of delivery',
        description:
          'Digital POD with timestamped photos is captured at delivery and shared within minutes.',
      },
    ],
    workflow: [
      {
        phase: 'Booking',
        detail: 'Single-window booking with dedicated dispatch coordinator.',
      },
      {
        phase: 'Pre-loading check',
        detail:
          'Vehicle condition and tarpaulin/cover inspection before loading.',
      },
      {
        phase: 'Line-haul',
        detail:
          'Direct highway routing with driver relay on long lanes.',
      },
      {
        phase: 'Destination handling',
        detail: 'Coordinated unloading with receiver confirmation.',
      },
    ],
    industries: [
      'Manufacturing',
      'Automotive',
      'FMCG',
      'Steel & Metals',
      'Cement',
      'Consumer Durables',
    ],
    stats: [
      { value: '12K+', label: 'FTL trips / year' },
      { value: '95%', label: 'On-time delivery' },
      { value: '500+', label: 'Active lanes' },
      { value: '<0.2%', label: 'Claims rate' },
    ],
    faqs: [
      {
        q: 'What is considered a full truck load?',
        a: 'A full truck load is a shipment large enough to fill — or nearly fill — a single truck. In India this typically means 9 to 25 tonnes depending on the vehicle type, with the entire vehicle dedicated to your cargo.',
      },
      {
        q: 'How do you calculate FTL freight rates?',
        a: 'Rates are lane-based and depend on origin-destination distance, vehicle type, commodity, weight and current market conditions. We offer both spot and contracted lane rates — contracted rates lock in pricing for agreed volumes.',
      },
      {
        q: 'Can I track my FTL shipment in real time?',
        a: 'Yes. Every TriFleet truck is fitted with GPS telematics. You receive milestone alerts at pickup, major checkpoints and delivery, and can request live position updates from your account manager at any time.',
      },
      {
        q: 'What vehicle types are available for FTL?',
        a: 'Our FTL fleet includes 32-feet single-axle and multi-axle closed containers, open-body trucks, 40-feet semi-trailers, flatbeds and refrigerated reefers. We match the vehicle to your commodity and route.',
      },
    ],
    galleryQueries: [
      'cargo truck highway india',
      'container truck loading',
      'truck driver highway sunset',
      'logistics yard trucks',
    ],
    caseStudy: [
      {
        client: 'A North-Indian auto-components manufacturer',
        sector: 'Automotive',
        challenge:
          'Unreliable FTL capacity on the Delhi–Chennai lane was disrupting JIT line-side deliveries.',
        solution:
          'We committed 6 dedicated 32-ft container trucks on a scheduled rotation with 24/7 GPS visibility.',
        outcome:
          'Line-stoppage incidents dropped to zero and the client expanded the lane to 12 trucks.',
        metric: '100% on-time across 1,800+ trips',
      },
    ],
  },

  'part-truck-load': {
    slug: 'part-truck-load',
    heroHeading: 'Part Truck Load, efficiently consolidated',
    heroSub:
      'Shared capacity, flexible scheduling and cost-efficient part-load transportation for smaller shipments.',
    overview: [
      'Not every shipment needs a whole truck. Part Truck Load (PTL) lets you move smaller consignments by paying only for the space you actually use, with freight consolidated onto shared vehicles heading the same direction.',
      'Our consolidation hubs in Delhi, Mumbai and Kolkata combine your shipment with compatible freight, plan optimal multi-stop routing and get your cargo moving faster than waiting for a full load to build.',
      'PTL is ideal for mid-volume B2B shipments, secondary distribution to regional depots, and businesses that need the flexibility of frequent dispatches without committing to full-truck volumes.',
    ],
    benefits: [
      {
        title: 'Pay for what you use',
        description:
          'Pricing is based on the space and weight your shipment occupies — not the whole truck.',
      },
      {
        title: 'Frequent departures',
        description:
          'Scheduled consolidation means your shipment leaves within 24-48 hours of booking.',
      },
      {
        title: 'Nationwide reach',
        description:
          'PTL connects to 5,000+ pin codes across India, including tier-2 and tier-3 towns.',
      },
      {
        title: 'Flexible volumes',
        description:
          'Ship anywhere from 500 kg to a partial truckload without long-term commitments.',
      },
      {
        title: 'Lower unit cost',
        description:
          'Consolidation reduces per-kg freight cost versus booking a dedicated vehicle.',
      },
      {
        title: 'B2B documentation',
        description:
          'Clean LRs, e-way bill support and digital PODs for every consignment.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Booking & classification',
        description:
          'We book your shipment, classify it by weight, dimensions and destination, and assign a consolidation slot.',
      },
      {
        step: '02',
        title: 'Hub consolidation',
        description:
          'Your freight is combined with compatible shipments at the nearest consolidation hub and loaded optimally.',
      },
      {
        step: '03',
        title: 'Multi-stop line-haul',
        description:
          'The vehicle follows an optimised multi-stop route with GPS tracking at each leg.',
      },
      {
        step: '04',
        title: 'Last-mile delivery',
        description:
          'Shipments are deconsolidated at the destination hub and delivered to the consignee with digital POD.',
      },
    ],
    workflow: [
      {
        phase: 'Pickup',
        detail: 'Door pickup with first-mile verification.',
      },
      {
        phase: 'Consolidation',
        detail: 'Hub-based loading with weight and dimension checks.',
      },
      {
        phase: 'Line-haul',
        detail: 'Optimised multi-stop routing.',
      },
      {
        phase: 'Deconsolidation & delivery',
        detail: 'Destination hub sort and last-mile drop.',
      },
    ],
    industries: [
      'FMCG',
      'Electronics',
      'Pharmaceuticals',
      'Apparel',
      'SME Manufacturers',
      'Distributors',
    ],
    stats: [
      { value: '5,000+', label: 'Pin codes served' },
      { value: '48h', label: 'Max consolidation time' },
      { value: '3', label: 'Consolidation hubs' },
      { value: '15K+', label: 'PTL shipments / month' },
    ],
    faqs: [
      {
        q: 'What is the difference between FTL and PTL?',
        a: 'FTL (Full Truck Load) dedicates an entire vehicle to one shipment, while PTL (Part Truck Load) consolidates multiple shipments onto a shared vehicle. PTL is more cost-effective for smaller volumes; FTL is faster and more secure for full-truck quantities.',
      },
      {
        q: 'What is the minimum shipment size for PTL?',
        a: 'We accept PTL shipments from approximately 500 kg upward. For shipments below this threshold, parcel or courier services are usually more economical.',
      },
      {
        q: 'How long does a PTL shipment take?',
        a: 'Transit time depends on the lane and distance. Most PTL shipments leave our consolidation hub within 24-48 hours and then follow standard line-haul transit times for the route.',
      },
      {
        q: 'Is my shipment safe when consolidated with others?',
        a: 'Yes. Each shipment is segregated, labelled and secured within the vehicle. We use partitioned loading for fragile or high-value freight and maintain strict chain-of-custody documentation.',
      },
    ],
    galleryQueries: [
      'warehouse loading packages',
      'cardboard boxes conveyor',
      'distribution center sorting',
      'delivery van packages',
    ],
    caseStudy: [
      {
        client: 'A national apparel distributor',
        sector: 'Retail & Apparel',
        challenge:
          'Sending 2-4 tonne shipments to 40 regional depots was too small for FTL but too costly to courier.',
        solution:
          'We built a scheduled PTL network with twice-weekly consolidation to each depot.',
        outcome:
          'Per-kg freight cost fell 38% versus courier and depot replenishment became predictable.',
        metric: '38% lower freight cost',
      },
    ],
  },
};

services.forEach((s) => {
  if (!serviceDetails[s.slug]) {
    serviceDetails[s.slug] = {
      slug: s.slug,
      heroHeading: `${s.title}, engineered for reliability`,
      heroSub: s.tagline,

      overview: [
        `${s.title} from TriFleet Logistics combines a modern fleet, trained crews and 24/7 control to move your freight reliably across India. ${s.excerpt}`,
        'Every movement is run through our central control room with GPS telematics on every vehicle, milestone alerts at every checkpoint and digital proof of delivery captured at destination.',
        'Whether you need a single shipment or a long-term contracted programme, our team tailors the solution to your commodity, lane and service-level requirements.',
      ],

      benefits: [
        {
          title: 'Reliable capacity',
          description:
            'Committed vehicles and crews so your freight never waits for a truck.',
        },
        {
          title: 'End-to-end visibility',
          description:
            'GPS tracking and milestone alerts from pickup to proof of delivery.',
        },
        {
          title: 'Optimised routing',
          description:
            'Lane planning that balances transit time, cost and reliability.',
        },
        {
          title: 'Clean documentation',
          description:
            'LRs, e-way bills and digital PODs handled accurately and on time.',
        },
        {
          title: 'Dedicated control room',
          description:
            'A 24/7 team monitoring every vehicle and resolving exceptions fast.',
        },
        {
          title: 'Scalable operations',
          description:
            'From a single truckload to a multi-lane programme, we scale with you.',
        },
      ],

      process: [
        {
          step: '01',
          title: 'Consult & plan',
          description:
            'We assess your freight profile, lanes and service-level needs and design the right operating model.',
        },
        {
          step: '02',
          title: 'Dispatch & track',
          description:
            'Vehicles are dispatched on schedule with GPS tracking and milestone alerts throughout transit.',
        },
        {
          step: '03',
          title: 'Monitor & resolve',
          description:
            'Our 24/7 control room monitors every vehicle and proactively resolves exceptions.',
        },
        {
          step: '04',
          title: 'Deliver & report',
          description:
            'Digital POD is captured at delivery and consolidated reports shared with your team.',
        },
      ],

      workflow: [
        {
          phase: 'Planning',
          detail: 'Lane, vehicle and schedule design.',
        },
        {
          phase: 'Dispatch',
          detail: 'Vehicle assignment and pickup coordination.',
        },
        {
          phase: 'Transit',
          detail:
            'GPS-monitored line-haul with control-room oversight.',
        },
        {
          phase: 'Delivery',
          detail: 'Receiver confirmation and digital POD.',
        },
      ],

      industries: [
        'Manufacturing',
        'FMCG',
        'Retail',
        'Automotive',
        'Construction',
        'Pharmaceuticals',
      ],

      stats: [
        { value: '12K+', label: 'Trips / year' },
        { value: '95%', label: 'On-time delivery' },
        { value: '500+', label: 'Active lanes' },
        { value: '24/7', label: 'Control room' },
      ],

      faqs: [
        {
          q: `How quickly can you start a ${s.shortTitle} engagement?`,
          a: `For spot movements we typically dispatch within 24 hours. For contracted ${s.shortTitle} programmes, onboarding takes 1-2 weeks to document lanes, service levels and reporting.`,
        },
        {
          q: 'Do you provide GPS tracking?',
          a: 'Yes. Every TriFleet vehicle is GPS-enabled. You receive milestone alerts at pickup, in-transit checkpoints and delivery, and can request live position updates anytime.',
        },
        {
          q: 'What documentation do you handle?',
          a: 'We generate LRs, support e-way bill creation, manage permits for restricted states and capture timestamped digital proof of delivery for every shipment.',
        },
        {
          q: 'Can you handle specialised cargo?',
          a: 'Yes. Our fleet includes closed containers, open trucks, flatbeds, trailers and refrigerated reefers, and our crews are trained for oversized, fragile and temperature-sensitive freight.',
        },
      ],

      galleryQueries: [
        'cargo truck highway',
        'warehouse logistics operations',
        'truck fleet sunset',
      ],

      caseStudy: [
        {
          client: 'A pan-India industrial client',
          sector: 'Manufacturing',
          challenge:
            'Inconsistent capacity and visibility were eroding delivery reliability.',
          solution:
            'We deployed dedicated vehicles with 24/7 GPS control and weekly performance reviews.',
          outcome:
            'On-time delivery improved to 98%+ and the relationship expanded to 8 lanes.',
          metric: '98%+ on-time delivery',
        },
      ],
    };
  }
});