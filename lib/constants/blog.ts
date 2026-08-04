export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: { name: string; role: string };
  date: string;
  readingTime: string;
  featured: boolean;
  trending: boolean;
  imageQuery: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ftl-vs-ptl-choosing-the-right-logistics-mode',
    title: 'FTL vs PTL: Choosing the right logistics mode for your freight',
    excerpt: 'Full truck load or part truck load? A practical decision framework based on volume, urgency, cost and risk.',
    category: 'Logistics Strategy',
    tags: ['FTL', 'PTL', 'Cost Optimisation'],
    author: { name: 'Aarav Khanna', role: 'Logistics Consultant' },
    date: '2025-06-18',
    readingTime: '6 min read',
    featured: true,
    trending: true,
    imageQuery: 'cargo truck highway sunset india',
    content: [
      'Choosing between Full Truck Load (FTL) and Part Truck Load (PTL) is one of the most common decisions a shipper faces — and getting it wrong quietly drains margin, slows delivery or increases damage risk. The right choice depends on four factors: volume, urgency, cost sensitivity and cargo profile.',
      'When to choose FTL. If your shipment fills — or nearly fills — a truck, FTL is almost always the right call. You get exclusive use of the vehicle, direct point-to-point routing with no hub stops, lower damage risk because the freight is handled less, and faster transit. FTL also makes sense for high-value or fragile cargo even at lower volumes, because consolidation adds handling risk.',
      'When to choose PTL. PTL shines for mid-volume shipments that are too big to courier but too small to justify a whole truck. You pay only for the space you use, which lowers your per-kg cost. The trade-off is consolidation time (typically 24-48 hours) and multi-stop routing, which extends transit versus a direct FTL run.',
      'A simple decision rule. Estimate your shipment weight and volume. If it exceeds roughly 60% of a standard truck\'s capacity, FTL is usually more economical and faster. Below that threshold, PTL is typically the better fit. For urgent freight, lean FTL regardless of volume — the direct routing and single-load handling are worth the premium.',
      'The hybrid approach. Many of our enterprise clients run a hybrid model — FTL on high-volume, time-critical lanes and PTL on lower-volume, less-urgent lanes. The right mix is usually found by analysing a few months of shipment data by lane, volume and urgency, and then optimising each lane independently.',
      'The bottom line. There is no universally "cheaper" mode — only the mode that is cheaper and faster for your specific shipment, lane and timeline. A good logistics partner will help you analyse your profile and build the right FTL/PTL mix across your lane network.',
    ],
  },
  {
    slug: 'india-toll-and-permit-guide-for-transporters',
    title: 'The transporter\'s guide to India tolls, permits and state compliance',
    excerpt: 'A practical overview of the permits, tolls and compliance requirements that move freight across state lines in India.',
    category: 'Compliance',
    tags: ['Permits', 'Compliance', 'Inter-state'],
    author: { name: 'Sneha Reddy', role: 'Compliance Lead' },
    date: '2025-05-30',
    readingTime: '7 min read',
    featured: false,
    trending: true,
    imageQuery: 'india highway toll plaza truck',
    content: [
      'Moving freight across India means navigating a patchwork of state-specific permits, tolls and compliance requirements. For shippers, understanding the basics helps you plan realistic transit times and avoid surprises. Here is a practical overview.',
      'National permits. Commercial vehicles operating across state borders need a National Permit, valid for one year, which allows movement through all states and union territories. This is the foundational document for inter-state transport.',
      'State-specific permits. Some states require additional permits — for example, for certain cargo types, oversized loads, or entry into restricted urban zones. Delhi, for instance, has time-of-day entry restrictions for heavy goods vehicles, which affects pickup and delivery scheduling.',
      'FASTag and tolls. FASTag electronic toll collection is mandatory on national highways. Tolls add to freight cost and transit time, and route planning should account for both. For time-critical freight, we sometimes route around the most congested toll plazas.',
      'E-way bills. The e-way bill is the core GST compliance document for inter-state movement of goods above the value threshold. It must be generated before dispatch and carries the shipment\'s details, validity period and route. We support e-way bill generation and management for our clients.',
      'The bottom line. Compliance is not optional, and getting it wrong causes delays, penalties and disputed deliveries. A reliable logistics partner manages these requirements end to end, so your freight moves without compliance friction.',
    ],
  },
  {
    slug: 'building-a-24-7-control-room',
    title: 'Inside the Tri Fleet 24/7 control room',
    excerpt: 'How our control room keeps every vehicle visible, every exception managed and every delivery on time.',
    category: 'Operations',
    tags: ['Control Tower', 'Visibility', 'Operations'],
    author: { name: 'Rohit Bansal', role: 'Operations Director' },
    date: '2025-05-12',
    readingTime: '5 min read',
    featured: true,
    trending: false,
    imageQuery: 'logistics control room monitors screens',
    content: [
      'The control room is the heart of Tri Fleet Logistics. It is where every vehicle is monitored, every exception is caught and every delivery is kept on schedule. Here is how it works.',
      'Real-time visibility. Every truck in our fleet is fitted with GPS telematics that reports position, speed and status back to the control room in real time. Our control-tower software overlays this on a live map of active shipments, so a coordinator can see the entire fleet at a glance.',
      'Exception management. The system flags exceptions automatically — a vehicle stopped too long, a route deviation, a missed milestone. When an exception fires, a coordinator investigates immediately, calls the driver, and either resolves it or escalates to the account manager and the client.',
      'Proactive, not reactive. The difference between a good control room and a great one is proactivity. We do not wait for a client to call asking where their truck is. We identify risk early, communicate it, and fix it before it becomes a delivery failure.',
      'The human layer. Technology enables the control room, but people run it. Our coordinators are trained logistics professionals who understand lanes, drivers and clients — and who pick up the phone at 2 AM when something goes wrong.',
    ],
  },
  {
    slug: 'fleet-maintenance-for-uptime',
    title: 'Fleet maintenance: the hidden driver of on-time delivery',
    excerpt: 'Why preventive maintenance is the single biggest lever for reliability — and how we approach it.',
    category: 'Fleet Management',
    tags: ['Maintenance', 'Uptime', 'Reliability'],
    author: { name: 'Imran Sheikh', role: 'Fleet Manager' },
    date: '2025-04-22',
    readingTime: '6 min read',
    featured: false,
    trending: false,
    imageQuery: 'truck repair workshop garage mechanic',
    content: [
      'When a truck breaks down mid-transit, the cost is not just the repair — it is the missed delivery, the client trust lost and the cascade of delays across the network. That is why preventive maintenance is the single biggest lever for on-time delivery.',
      'Preventive over reactive. We run a strict preventive maintenance schedule based on kilometres run, engine hours and time. Every vehicle comes through our in-house workshop on schedule, regardless of whether it appears to need it. Catching a worn brake pad in the workshop is infinitely cheaper than catching it on a highway.',
      'Tyre management. Tyres are the highest-wear component on a truck and a leading cause of breakdowns. We track tyre pressure, tread depth and rotation, and replace before failure — not after.',
      'Pre-dispatch checks. No vehicle leaves our yard without a pre-dispatch safety check covering brakes, tyres, lights, steering, load restraint and document completeness. This single discipline prevents a disproportionate share of on-road problems.',
      'Breakdown response. Even with great maintenance, breakdowns happen. We maintain a breakdown response network with on-call mechanics and rapid replacement vehicles, so a breakdown becomes a short delay rather than a delivery failure.',
    ],
  },
  {
    slug: 'cold-chain-pharma-transport-essentials',
    title: 'Cold-chain essentials for pharmaceutical transport',
    excerpt: 'The non-negotiables for moving temperature-sensitive pharma cargo across India.',
    category: 'Cold Chain',
    tags: ['Pharma', 'Cold Chain', 'Reefer'],
    author: { name: 'Dr. Meera Kapoor', role: 'Cold-Chain Specialist' },
    date: '2025-04-02',
    readingTime: '7 min read',
    featured: false,
    trending: true,
    imageQuery: 'refrigerated reefer truck pharmaceutical',
    content: [
      'Transporting pharmaceuticals is not just logistics — it is safeguarding patient health. A temperature excursion of a few degrees can render an entire shipment unusable. Here are the non-negotiables for pharma cold chain.',
      'Validated equipment. Reefer vehicles must be qualified and validated for the required temperature range, with calibration records and performance testing. A reefer that "usually" holds 2-8°C is not acceptable — it must hold it always, with the records to prove it.',
      'Continuous temperature logging. Temperature must be logged continuously throughout transit, not just at start and end. The log is the evidence that integrity was maintained — and the first thing an auditor will ask for.',
      'Sealed and secure. Pharma cargo is high-value and theft-sensitive. Sealed containers, chain-of-custody documentation and GPS tracking are mandatory, not optional.',
      'Backup and contingency. What happens if a reefer unit fails mid-transit? A serious cold-chain operation has a contingency plan — backup cooling, rapid vehicle swap and documented excursion-response procedures.',
      'The bottom line. Pharma cold chain is a discipline, not a service line. It requires validated equipment, trained crews, continuous monitoring and documented procedures — all of which we maintain across our reefer fleet.',
    ],
  },
  {
    slug: 'future-of-logistics-technology-in-india',
    title: 'The future of logistics technology in India',
    excerpt: 'From GPS and control towers to AI route optimisation — where Indian logistics technology is heading.',
    category: 'Technology',
    tags: ['Technology', 'AI', 'Future'],
    author: { name: 'Aarav Khanna', role: 'Logistics Consultant' },
    date: '2025-03-15',
    readingTime: '8 min read',
    featured: true,
    trending: false,
    imageQuery: 'technology logistics software screens',
    content: [
      'Indian logistics is in the middle of a technology revolution. For decades, the industry ran on phone calls, paper LRs and trust. Today, GPS, control towers and data analytics are transforming how freight moves — and the transformation is accelerating.',
      'The visibility revolution. The biggest change is visibility. A decade ago, "where is my truck?" was answered with "I will check and call you back." Today, GPS telematics answers it in real time, and control-tower software turns that data into managed exceptions rather than surprised clients.',
      'Data-driven decisions. Route optimisation, capacity planning and lane analysis used to be gut-driven. Today, shipment data reveals which lanes are reliable, which vehicles perform, and where the cost leaks are — turning logistics from a black box into a measurable operation.',
      'AI and the road ahead. The next wave is AI — predictive ETA, automated exception handling, dynamic pricing and load-matching. We are investing in these capabilities, but always with the human in the loop. Technology enables better logistics; people deliver it.',
      'The human constant. For all the technology, logistics remains a human business. A truck is driven by a person, a shipment is coordinated by a person, and a relationship is built between people. Technology that forgets this fails. The best logistics companies marry great technology with great people.',
    ],
  },
  {
    slug: 'reducing-logistics-cost-without-cutting-corners',
    title: 'Reducing logistics cost without cutting corners',
    excerpt: 'Five practical, sustainable ways to lower your freight cost without sacrificing reliability or safety.',
    category: 'Cost Optimisation',
    tags: ['Cost', 'Optimisation', 'Strategy'],
    author: { name: 'Sneha Reddy', role: 'Compliance Lead' },
    date: '2025-02-28',
    readingTime: '6 min read',
    featured: false,
    trending: false,
    imageQuery: 'logistics cost savings calculator',
    content: [
      'Logistics cost is typically 6-10% of revenue for an Indian manufacturer — a material line item where small percentage improvements compound. The challenge is reducing cost without cutting corners on reliability or safety. Here are five sustainable levers.',
      'Right-size the mode. The FTL/PTL mix is the single biggest cost lever. Many shippers default to FTL out of habit when PTL would be cheaper, or default to PTL when volume actually justifies FTL. Analyse each lane\'s volume profile and right-size the mode.',
      'Contract vs spot. For predictable lanes, contracted capacity locks in pricing and protects from spot-market spikes. For unpredictable lanes, spot keeps you flexible. The right mix varies by lane.',
      'Load optimisation. Under-loaded trucks are pure waste. Consolidation, multi-stop routing and load-planning tools ensure every truck carries as much of your freight as legally and safely possible.',
      'Reduce damage and claims. Every damage claim is a direct cost plus an indirect one in client trust. Better packaging, securement and handling reduce claims — and the insurance premiums that come with them.',
      'Measure everything. You cannot manage what you do not measure. Lane-level cost-per-kg, on-time rates and claims rates should be reviewed monthly and fed back into planning.',
    ],
  },
  {
    slug: 'sustainable-logistics-practices',
    title: 'Sustainable logistics: practices that cut emissions and cost',
    excerpt: 'How route optimisation, vehicle maintenance and load consolidation reduce both carbon and cost.',
    category: 'Sustainability',
    tags: ['Sustainability', 'Emissions', 'Efficiency'],
    author: { name: 'Rohit Bansal', role: 'Operations Director' },
    date: '2025-02-10',
    readingTime: '5 min read',
    featured: false,
    trending: false,
    imageQuery: 'green sustainable logistics truck',
    content: [
      'Sustainability in logistics is no longer optional — clients ask about it, regulators are tightening, and, crucially, the practices that cut emissions usually cut cost too. Here is how we approach it.',
      'Route optimisation. The most sustainable kilometre is the one not driven. Route optimisation reduces empty running, avoids congested corridors and shortens line-haul distances — cutting fuel, emissions and cost simultaneously.',
      'Vehicle maintenance. A well-maintained truck is a more efficient truck. Clean filters, correct tyre pressure and a healthy engine improve fuel economy — again, cutting both emissions and cost.',
      'Load consolidation. Consolidation increases load factors and reduces the number of trucks on the road for a given volume of freight. The PTL model is inherently more efficient than under-loaded FTL when volumes do not justify a full truck.',
      'Driver behaviour. Eco-driving — smooth acceleration, anticipating traffic, maintaining steady speeds — measurably improves fuel economy. We train our drivers in eco-driving alongside defensive driving.',
      'The win-win. The pattern is clear: nearly every sustainability lever in logistics is also a cost lever. The future of logistics is not a choice between green and economical — it is green because it is economical.',
    ],
  },
];

export const blogCategories = [
  'All',
  'Logistics Strategy',
  'Compliance',
  'Operations',
  'Fleet Management',
  'Cold Chain',
  'Technology',
  'Cost Optimisation',
  'Sustainability',
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, limit);
}

export type Career = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  excerpt: string;
  responsibilities: string[];
  requirements: string[];
};

export const careers: Career[] = [
  {
    slug: 'fleet-operations-coordinator',
    title: 'Fleet Operations Coordinator',
    department: 'Operations',
    location: 'Delhi (On-site)',
    type: 'Full-time',
    excerpt: 'Join our 24/7 control room and keep every Tri Fleet vehicle visible, on schedule and exception-free.',
    responsibilities: [
      'Monitor active shipments via GPS and control-tower software',
      'Manage exceptions proactively and coordinate with drivers',
      'Communicate shipment status to clients and account managers',
      'Maintain accurate shipment and exception logs',
    ],
    requirements: [
      '1-3 years in logistics operations or control-room roles',
      'Strong communication and problem-solving skills',
      'Comfort with logistics software and tools',
      'Willingness to work in shifts (24/7 operation)',
    ],
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Delhi (Hybrid)',
    type: 'Full-time',
    excerpt: 'Grow our enterprise client base across North India by building relationships and solving logistics problems.',
    responsibilities: [
      'Identify and pursue new enterprise logistics opportunities',
      'Build and nurture client relationships across target sectors',
      'Prepare proposals and lead commercial negotiations',
      'Coordinate with operations on client onboarding',
    ],
    requirements: [
      '3-6 years in B2B logistics or supply-chain sales',
      'Strong network in manufacturing, FMCG or automotive sectors',
      'Excellent presentation and negotiation skills',
      'Track record of consistent quota attainment',
    ],
  },
  {
    slug: 'driver-heavy-vehicle',
    title: 'Heavy Vehicle Driver',
    department: 'Fleet',
    location: 'Delhi / Pan-India routes',
    type: 'Full-time',
    excerpt: 'Drive for a company that values safety, training and respect for drivers.',
    responsibilities: [
      'Operate company vehicles safely and on schedule',
      'Conduct pre-dispatch vehicle safety checks',
      'Maintain accurate logbooks and documentation',
      'Represent Tri Fleet professionally with clients',
    ],
    requirements: [
      'Valid heavy vehicle driving licence (HMV)',
      'Minimum 3 years of long-haul driving experience',
      'Clean driving record',
      'Commitment to safety and defensive driving',
    ],
  },
  {
    slug: 'maintenance-engineer',
    title: 'Fleet Maintenance Engineer',
    department: 'Fleet',
    location: 'Delhi (On-site)',
    type: 'Full-time',
    excerpt: 'Keep our 500+ vehicle fleet roadworthy, reliable and compliant through preventive maintenance.',
    responsibilities: [
      'Plan and execute preventive maintenance schedules',
      'Diagnose and resolve mechanical issues',
      'Maintain accurate maintenance records',
      'Coordinate with operations on vehicle availability',
    ],
    requirements: [
      'Diploma or degree in mechanical/automobile engineering',
      '2-5 years in commercial vehicle maintenance',
      'Strong diagnostic and problem-solving skills',
      'Knowledge of modern fleet telematics systems',
    ],
  },
];
