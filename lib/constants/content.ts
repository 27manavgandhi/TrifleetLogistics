import {
  Truck,
  Container,
  Boxes,
  Anchor,
  ShipWheel,
  type LucideIcon,
} from 'lucide-react';

export type FleetVehicle = {
  slug: string;
  name: string;
  type: string;
  bodyType: string;
  idealFor: string;
  features: string[];
  count: number;
  icon: LucideIcon;
  imageQuery: string;
};

export const fleet: FleetVehicle[] = [
  {
    slug: '32ft-container',
    name: '32ft Container Truck',
    type: 'Closed Container',
    bodyType: 'Closed body, tarpaulin-covered',
    idealFor: 'FMCG, electronics, consumer durables, pharmaceuticals',
    features: ['Well-maintained fleet', 'Waterproof tarpaulin', 'Anti-theft sealing', 'Driver relay on long lanes'],
    count: 255,
    icon: Container,
    imageQuery: 'container truck highway india',
  },
  {
    slug: '20ft-open',
    name: '20ft Open Body Truck',
    type: 'Open Body',
    bodyType: 'Open body with tarpaulin',
    idealFor: 'Steel, machinery, construction materials, agri-produce',
    features: ['Well-maintained fleet', 'Heavy-duty tarpaulin', 'Crane-loadable', 'Flexible loading'],
    count: 120,
    icon: Truck,
    imageQuery: 'open body truck cargo india',
  },
  {
    slug: '40ft-trailer',
    name: '40ft Trailer',
    type: 'Trailer',
    bodyType: 'Flatbed / skeletal trailer',
    idealFor: 'Cement, steel coils, project cargo, bulk movement',
    features: ['Well-maintained fleet', 'High-capacity', 'Multi-axle', 'Heavy-haul capable'],
    count: 60,
    icon: ShipWheel,
    imageQuery: 'semi trailer truck highway',
  },
  {
    slug: 'low-bed-trailer',
    name: 'Low-Bed Trailer',
    type: 'Specialised',
    bodyType: 'Low-bed, hydraulic-axle',
    idealFor: 'Oversized machinery, project cargo, heavy equipment',
    features: ['Route survey', 'Escort arrangement', 'Permit management', 'Engineered loading'],
    count: 18,
    icon: Anchor,
    imageQuery: 'low bed trailer heavy machinery',
  },
  {
    slug: 'part-load-van',
    name: 'Part-Load Pickup',
    type: 'Light Commercial',
    bodyType: 'Closed pickup',
    idealFor: 'Part loads, last-mile delivery, small B2B shipments',
    features: ['Well-maintained fleet', 'City-friendly', 'Fast dispatch', 'Consolidation-friendly'],
    count: 25,
    icon: Boxes,
    imageQuery: 'delivery van city india',
  },
];

export type InfrastructureAsset = {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  imageQuery: string;
};

export const infrastructure: InfrastructureAsset[] = [
  {
    slug: 'mangolpuri-hub',
    name: 'Mangolpuri Central Hub',
    category: 'Headquarters & Control Room',
    description: 'Our 24/7 control room and central dispatch hub in Mangolpuri, Delhi — the nerve centre of every TriFleet movement across India.',
    features: ['24/7 control room', 'Central dispatch desk', 'Driver briefing area', 'Document control'],
    imageQuery: 'logistics control room monitors',
  },
  {
    slug: 'delhi-consolidation-hub',
    name: 'Delhi Consolidation Hub',
    category: 'Consolidation & Distribution',
    description: 'A consolidation and cross-docking facility in the NCR region that combines part-load shipments and routes them to destinations across North and Central India.',
    features: ['Part-load consolidation', 'Cross-docking bays', 'Multi-stop route planning', 'North-India gateway'],
    imageQuery: 'warehouse loading dock india',
  },
  {
    slug: 'gps-control-centre',
    name: 'GPS Tracking & Control Centre',
    category: 'Technology & Visibility',
    description: 'A dedicated GPS monitoring facility where every vehicle in the fleet is tracked in real time, with milestone alerts and exception management handled proactively.',
    features: ['Real-time GPS tracking', 'Milestone alert system', 'Exception management desk', 'SLA monitoring dashboard'],
    imageQuery: 'logistics control room screens',
  },
  {
    slug: 'maintenance-workshop',
    name: 'Fleet Maintenance Workshop',
    category: 'Fleet Maintenance',
    description: 'In-house fleet maintenance workshop ensuring every vehicle is roadworthy, reliable and compliant before dispatch.',
    features: ['Preventive maintenance', 'On-call breakdown support', 'Tyre management', 'Emissions compliance'],
    imageQuery: 'truck repair workshop garage',
  },
  {
    slug: 'driver-training',
    name: 'Driver Training Centre',
    category: 'People & Safety',
    description: 'Dedicated driver training and briefing facility focusing on safety, defensive driving and cargo care.',
    features: ['Defensive driving training', 'Cargo securement drills', 'Safety briefings', 'Fatigue management'],
    imageQuery: 'truck driver training india',
  },
  {
    slug: 'warehouse-partner-network',
    name: 'Warehouse Partner Network',
    category: 'Storage & Fulfilment',
    description: 'A network of partner warehouses across 20+ cities offering short-term storage, fulfilment and cross-docking.',
    features: ['20+ cities', 'Short-term storage', 'Cross-docking', 'Fulfilment support'],
    imageQuery: 'modern warehouse logistics india',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  { quote: 'TriFleet has been our logistics partner for four years. Their on-time delivery rate is the best we have seen across any carrier in North India.', author: 'Rajesh Verma', role: 'Supply Chain Manager', company: 'North-India FMCG distributor', sector: 'FMCG', rating: 5 },
  { quote: 'TriFleet responds fast and picks up every time. That reliability is why we moved our entire North-India distribution to TriFleet.', author: 'Anita Sharma', role: 'Operations Head', company: 'Noida electronics manufacturer', sector: 'Electronics', rating: 5 },
  { quote: 'We moved to a dedicated fleet model with TriFleet and our line-stoppages went to zero. They run our JIT lanes like clockwork.', author: 'Vikram Singh', role: 'Warehouse Director', company: 'Gurgaon e-commerce firm', sector: 'E-commerce', rating: 5 },
  { quote: 'Moving heavy machinery out of Faridabad used to be a constant headache. TriFleet handles the permits, escorts and delivery seamlessly.', author: 'Suresh Kumar', role: 'Plant Manager', company: 'Faridabad engineering firm', sector: 'Engineering', rating: 5 },
  { quote: 'Their reefer fleet maintained 2-8°C end-to-end on a Delhi to Bangalore pharma run. Temperature logs were spotless. Highly recommended.', author: 'Dr. Meera Kapoor', role: 'Logistics Lead', company: 'Pharmaceutical company', sector: 'Pharma', rating: 5 },
  { quote: 'From a single truckload to a 12-lane programme, TriFleet scaled with us without ever compromising on visibility or control.', author: 'Karan Mehta', role: 'Director', company: 'Consumer durables brand', sector: 'Consumer Durables', rating: 5 },
  { quote: 'The digital POD with timestamped photos has transformed our reconciliation process. Claims have all but disappeared.', author: 'Pooja Nair', role: 'Finance Controller', company: 'Apparel retailer', sector: 'Retail', rating: 5 },
  { quote: 'Their Panipat textile exports run to Mundra like a scheduled bus service. Reliable, careful and always on time.', author: 'Inderjeet Singh', role: 'Partner', company: 'Panipat textile exporter', sector: 'Textiles', rating: 5 },
];

export type Client = { name: string; sector: string; since: string; logo?: string };

export const clients: Client[] = [
  { name: 'Bonton Cables India Pvt. Ltd.', sector: 'Cables & Electrical', since: '2025', logo: '/logos/client1.png' },
  { name: 'SL Industries', sector: 'Manufacturing', since: '2025', logo: '/logos/client2.png' },
  { name: 'British Paints', sector: 'Paints & Chemicals', since: '2025', logo: '/logos/clientb.png' },
  { name: 'Ericsson', sector: 'Telecom & Technology', since: '2025', logo: '/logos/client4.png' },
  { name: 'Agro Harvest Centre', sector: 'Agriculture', since: '2025', logo: '/logos/client5.png' },
  { name: 'Evershine Agricultural', sector: 'Agriculture', since: '2025', logo: '/logos/client6.png' },
  { name: 'Saera Electric Auto Limited', sector: 'Electric Vehicles', since: '2025', logo: '/logos/client7.png' },
  { name: 'Supreme Audiotronics', sector: 'Sound Systems', since: '2025', logo: '/logos/client9.png' },
  { name: 'Toreto', sector: 'Electrical', since: '2025', logo: '/logos/client10.png' },
  { name: 'Vansh Industries', sector: 'Spare Parts', since: '2025', logo: '/logos/client11.png' },

];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  excerpt: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  imageQuery: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fmcg-north-india-distribution',
    title: 'Rebuilding North-India FMCG distribution reliability',
    client: 'Northstar FMCG',
    sector: 'FMCG',
    excerpt: 'How a dedicated fleet and 24/7 control lifted on-time delivery from 82% to 98%+ across 40 depots.',
    challenge: 'A leading FMCG distributor was struggling with inconsistent carrier capacity on its Delhi-to-depot lanes, with on-time delivery languishing at 82% and line-stoppages at regional depots becoming frequent.',
    solution: 'TriFleet deployed a dedicated fleet of 14 vehicles on a scheduled rotation across the 40-depot network, backed by 24/7 control-room monitoring and weekly performance reviews.',
    outcome: 'On-time delivery improved to 95%, line-stoppages were eliminated, and the relationship expanded from 6 to 14 lanes within a year.',
    metrics: [{ value: '95%', label: 'On-time delivery' }, { value: '14', label: 'Dedicated lanes' }, { value: '0', label: 'Line-stoppages' }, { value: '+16%', label: 'Reliability gain' }],
    imageQuery: 'fmcg distribution warehouse india',
    tags: ['FMCG', 'Dedicated Fleet', 'Distribution'],
  },
  {
    slug: 'pharma-cold-chain-delhi-bangalore',
    title: 'End-to-end cold chain for pharma',
    client: 'Heritage Pharma',
    sector: 'Pharmaceuticals',
    excerpt: 'Validated reefer fleet with continuous temperature logging delivers pharma integrity on a 2,000 km lane.',
    challenge: 'A pharmaceutical company needed a reliable, fully documented 2-8°C cold-chain solution on the Delhi–Bangalore lane, with strict regulatory compliance and chain-of-custody.',
    solution: 'TriFleet deployed validated reefer vehicles with continuous temperature logging, sealed-container handling, and full chain-of-custody documentation from pickup to delivery.',
    outcome: 'Temperature integrity was maintained at 100% across 300+ shipments, with zero temperature-excursion incidents and spotless audit trails.',
    metrics: [{ value: '100%', label: 'Temp integrity' }, { value: '300+', label: 'Shipments' }, { value: '0', label: 'Excursions' }, { value: '2,000km', label: 'Lane distance' }],
    imageQuery: 'pharmaceutical cold storage',
    tags: ['Pharma', 'Cold Chain', 'Reefer'],
  },
  {
    slug: 'automotive-jit-lane-delivery',
    title: 'Zero line-stoppages on a JIT auto-components lane',
    client: 'Apex Automotive',
    sector: 'Automotive',
    excerpt: 'A dedicated JIT fleet with milk-run pickups eliminates line-stoppages at an OEM assembly plant.',
    challenge: 'An automotive OEM was facing line-stoppages due to unreliable JIT delivery of components from Tier-1 suppliers, with severe financial penalties for each stoppage.',
    solution: 'TriFleet deployed a dedicated JIT fleet with milk-run pickups from suppliers, sequenced delivery to the OEM line-side, and real-time visibility for the OEM and suppliers.',
    outcome: 'Line-stoppages caused by logistics dropped to zero across 1,800+ deliveries, and the OEM expanded the programme to additional suppliers.',
    metrics: [{ value: '0', label: 'Line-stoppages' }, { value: '1,800+', label: 'JIT deliveries' }, { value: 'JIT', label: 'Sequenced delivery' }, { value: '6', label: 'Milk-run routes' }],
    imageQuery: 'automotive assembly line factory',
    tags: ['Automotive', 'JIT', 'Dedicated Fleet'],
  },
  {
    slug: 'ecommerce-peak-season-line-haul',
    title: 'Scaling line-haul for e-commerce peak season',
    client: 'FleetReach 3PL',
    sector: 'E-commerce & 3PL',
    excerpt: 'Surge capacity and 99%+ pickup reliability keep an e-commerce 3PL moving through festive-season peaks.',
    challenge: 'A 3PL serving e-commerce players needed surge line-haul capacity during the festive-season peak, with 99%+ pickup reliability from sort centres.',
    solution: 'TriFleet scaled contracted capacity from 20 to 60 vehicles during peak, with scheduled sort-centre pickups and dedicated surge-planning coordinators.',
    outcome: 'Pickup reliability held at 99.4% through peak, zero sort-centre bottlenecks occurred, and the 3PL renewed for an annual programme.',
    metrics: [{ value: '99.4%', label: 'Pickup reliability' }, { value: '60', label: 'Peak vehicles' }, { value: '3x', label: 'Surge scale' }, { value: '0', label: 'Bottlenecks' }],
    imageQuery: 'ecommerce warehouse conveyor packages',
    tags: ['E-commerce', 'Line-haul', 'Peak Season'],
  },
  {
    slug: 'industrial-heavy-machinery-transport',
    title: 'Engineered heavy-machinery transport',
    client: 'BuildCore Cement',
    sector: 'Construction & Infra',
    excerpt: 'Route surveys, escorts and low-bed trailers move oversized cement-plant machinery across three states.',
    challenge: 'A cement manufacturer needed to move oversized plant machinery across three states, with severe restrictions on routes, timings and escorts.',
    solution: 'TriFleet conducted route surveys, arranged permits and escorts, and deployed low-bed hydraulic-axle trailers with engineered loading and unloading.',
    outcome: 'All oversized movements were completed on schedule with zero incidents, and the client retained TriFleet for ongoing project-cargo work.',
    metrics: [{ value: '3', label: 'States crossed' }, { value: '0', label: 'Incidents' }, { value: '40T', label: 'Load weight' }, { value: 'ODC', label: 'Over-dimensional' }],
    imageQuery: 'heavy machinery transport india',
    tags: ['Industrial', 'Heavy-haul', 'Project Cargo'],
  },
  {
    slug: 'textile-export-panipat-mundra',
    title: 'Reliable textile exports from Panipat to Mundra',
    client: 'Inderjeet & Co.',
    sector: 'Textiles',
    excerpt: 'Scheduled FTL runs and tarpaulin-protected loading keep Panipat textile exports flowing to Mundra port.',
    challenge: 'A Panipat textile exporter needed reliable, moisture-protected movement of blanket and home-furnishing bales to Mundra port for export, with strict cut-off timings.',
    solution: 'TriFleet ran scheduled FTL trucks with tarpaulin-protected, palletised loading, and coordinated port cut-offs with the exporter and freight forwarder.',
    outcome: 'On-time port delivery hit 99%+, moisture-damage claims dropped to zero, and the exporter consolidated all port movements with TriFleet.',
    metrics: [{ value: '99%+', label: 'On-time to port' }, { value: '0', label: 'Damage claims' }, { value: '500+', label: 'Export loads' }, { value: '1,300km', label: 'Lane distance' }],
    imageQuery: 'textile export bales loading',
    tags: ['Textiles', 'Export', 'FTL'],
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const homeStats: Stat[] = [
  { value: 120, suffix: '+', label: 'Active lanes across India' },
  { value: 350, suffix: '+', label: 'Destination pin codes' },
  { value: 1800, suffix: '+', label: 'Trips completed' },
  { value: 96, suffix: '%', label: 'On-time delivery rate' },
  { value: 75, suffix: '+', label: 'Vehicles in the network' },
  { value: 24, suffix: '/7', label: 'Control room support' },
];

export type ProcessStep = { step: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Consult & Plan', description: 'We analyse your freight profile, lanes and service-level needs, then design the right operating model — spot, contracted or dedicated.' },
  { step: '02', title: 'Book & Dispatch', description: 'Book through a single window. We assign the optimal vehicle, confirm pickup and share a transit plan with your team.' },
  { step: '03', title: 'Track & Control', description: 'Every vehicle is GPS-tracked and monitored by our 24/7 control room, with milestone alerts pushed to you in real time.' },
  { step: '04', title: 'Deliver & Report', description: 'Digital proof of delivery with timestamped photos is captured at destination, and consolidated reports keep your team informed.' },
];

export type WhyChooseUs = { title: string; description: string; icon: string };

export const whyChooseUs: WhyChooseUs[] = [
  { title: '24/7 Control Room', description: 'A real control room with real people who answer the phone at 2 AM and proactively resolve exceptions.', icon: 'Headset' },
  { title: 'GPS On Every Vehicle', description: 'Real-time GPS telematics and milestone alerts on every truck — no black boxes, no guesswork.', icon: 'Radar' },
  { title: '96% On-Time Delivery', description: 'Strong on-time performance backed by SLA commitments on contracted lanes.', icon: 'TrendingUp' },
  { title: 'Modern Fleet', description: '75+ vehicles across containers, trailers and specialised trucks, maintained in-house.', icon: 'Truck' },
  { title: 'Single-Window Booking', description: 'One call, one coordinator, one point of accountability for every shipment, every lane.', icon: 'PhoneCall' },
  { title: 'Digital POD', description: 'Timestamped, photo-verified proof of delivery that transforms your reconciliation process.', icon: 'FileCheck' },
  { title: 'Pan-India Coverage', description: '120+ active lanes and 350+ destination pin codes across India — growing national reach.', icon: 'MapPinned' },
  { title: 'Safety First', description: 'Trained crews, defensive-driving programmes and strict cargo-securement protocols.', icon: 'ShieldCheck' },
];

export type TechStack = { name: string; description: string };

export const techStack: TechStack[] = [
  { name: 'GPS Telematics', description: 'Real-time vehicle tracking on every truck in the fleet.' },
  { name: 'Control-Tower Software', description: 'Centralised monitoring, exception alerts and SLA tracking.' },
  { name: 'Digital POD', description: 'Photo-verified, timestamped proof of delivery.' },
  { name: 'E-way Bill Integration', description: 'Compliant e-way bill support for inter-state movement.' },
  { name: 'Route Optimisation', description: 'Lane planning that balances time, cost and reliability.' },
  { name: 'EDI / API Integration', description: 'System-to-system integration for enterprise clients.' },
];

export type Certification = { name: string; description: string; value?: string };

export const certifications: Certification[] = [
  { name: 'GST Registered', description: 'Fully GST-compliant transport operations across all states.' },
  { name: 'Transport ID', description: 'Registered transport contractor with a valid Transport ID.', value: 'Available on request' },
  { name: 'MSME Certified', description: 'Recognised MSME enterprise with government compliance.', value: 'Available on request' },
  { name: 'Hazmat Handling', description: 'Trained and equipped for hazardous-material transportation.' },
];

export type FAQ = { q: string; a: string };

export const generalFaqs: FAQ[] = [
  { q: 'What services does TriFleet Logistics offer?', a: 'We offer full truck load, part truck load, industrial transportation, commercial cargo, time-bound deliveries, door-to-door logistics, supply chain support, fleet owner services, transport contractor services, pan-India logistics, dedicated fleet solutions and B2B logistics — all from our Delhi hub.' },
  { q: 'Where is TriFleet Logistics based?', a: 'Our headquarters are at C-5 Industrial Area, Phase 2, Mangolpuri, Delhi – 110034. We operate pan-India with our consolidation hub in the NCR region.' },
  { q: 'How do I get a quote?', a: 'You can request a quote through the form on our contact page, or call us directly on +91 9211467575 for quotes or +91 9311090752 for urgent requirements. Our team typically responds within a few business hours.' },
  { q: 'What are your payment terms?', a: 'Payment terms are agreed during onboarding and vary by engagement type. For spot movements, advance or on-delivery payment is common; for contracted programmes, we agree periodic billing cycles.' },
  { q: 'Can you handle hazardous cargo?', a: 'Yes. We have hazmat-certified vehicles and crews for hazardous-material transportation.' },
  { q: 'What is your coverage area?', a: 'We cover pan India, across 5000+ destination pin codes. If you have a specific lane in mind, ask us — the answer is almost always yes.' },
  { q: 'How quickly can you dispatch a truck?', a: 'For confirmed bookings received before midday, we typically arrange same-day pickup. For time-critical freight, priority dispatch is available on request.' },
];

export const safetyStandards: { title: string; description: string }[] = [
  { title: 'Defensive Driving Training', description: 'Every driver undergoes defensive driving and fatigue-management training before being assigned to a lane.' },
  { title: 'Cargo Securement Protocols', description: 'Strict load-securement standards with pre-dispatch inspection on every vehicle.' },
  { title: 'Vehicle Safety Checks', description: 'Pre-dispatch vehicle safety checks covering brakes, tyres, lights and load restraint.' },
  { title: 'Route Compliance', description: 'Approved-route adherence and speed discipline on every movement.' },
  { title: 'Insurance Coverage', description: 'Comprehensive transit insurance options to protect your cargo value.' },
  { title: 'Emergency Response', description: 'Rapid breakdown support and replacement vehicles when things don\'t go to plan.' },
];