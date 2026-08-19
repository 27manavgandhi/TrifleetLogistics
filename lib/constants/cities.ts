export type City = {
  slug: string;
  name: string;
  state: string;
  blurb: string;
  intro: string[];
  whyLocal: string[];
  servicesHere: string[];
  coverageAreas: string[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string; role: string; company: string };
  mapQuery: string;
  imageQuery: string;
  geo: { lat: number; lng: number };
  distanceFromHubKm: number;
};

export const cities: City[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    blurb: 'Our home base — full truck load logistics from the heart of the capital.',
    intro: [
      'Delhi is where TriFleet Logistics was founded and and our operations are coordinated from our Mangolpuri hub in North-West Delhi, we coordinate full truck load, part truck load and dedicated fleet movements across the National Capital Region and the entire country.',
      'Delhi\'s position at the crossroads of North India makes it the natural fulcrum for freight moving to and from Punjab, Haryana, Rajasthan, Uttar Pradesh and Uttarakhand. Our deep local presence means faster pickups, on-the-ground problem-solving and relationships with loading and unloading facilities across the city.',
    ],
    whyLocal: [
      'Hub-based operations in Mangolpuri Industrial Area, Phase 2',
      'Central hub coordinating pan-India movements',
      'Strong relationships with industrial estates across Delhi',
      'Direct access to NH-44, NH-48 and the Dwarka Expressway',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Industrial Transportation', 'Door-to-Door Logistics', 'Dedicated Fleet Solutions'],
    coverageAreas: ['Mangolpuri', 'Okhla', 'Mayapuri', 'Wazirpur', 'Narela', 'Bawana', 'Alipur', 'Badli'],
    faqs: [
      { q: 'Do you provide logistics services in Delhi for small businesses?', a: 'Yes. From our Mangolpuri hub we serve businesses of all sizes — from SMEs shipping a single part load to enterprises running multi-lane dedicated fleets. There is no minimum volume to get started.' },
      { q: 'How quickly can you pick up freight in Delhi?', a: 'For bookings confirmed before 2 PM, we typically arrange same-day pickup within Delhi NCR. For time-critical freight, priority dispatch is available on request.' },
      { q: 'Can you handle industrial cargo from Delhi industrial estates?', a: 'Absolutely. We work extensively with the Mangolpuri, Okhla, Mayapuri and Bawana industrial areas, and our crews are experienced with heavy, oversized and project cargo.' },
    ],
    testimonial: { quote: 'TriFleet picks up from our Mangolpuri unit within hours of a booking and keeps our North-India distribution moving without a single delay.', author: 'Rajesh Verma', role: 'Supply Chain Manager', company: 'Delhi-based FMCG distributor' },
    mapQuery: 'Mangolpuri Industrial Area Phase 2, Delhi',
    imageQuery: 'delhi india city aerial',
    geo: { lat: 28.6909, lng: 77.0826 },
    distanceFromHubKm: 0,
  },
  {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    blurb: 'Full truck load logistics for Noida\'s manufacturing and IT-corridor businesses.',
    intro: [
      'Noida is one of the fastest-growing industrial and manufacturing corridors in North India, and TriFleet Logistics moves freight for businesses across Sector 1 to Sector 168 — from electronics manufacturers in the NSEZ to apparel exporters and automotive components suppliers.',
      'Being just across the border from Delhi, Noida benefits from our Mangolpuri hub\'s proximity. We pick up and deliver across Noida with the same reliability that defines our national operations.',
    ],
    whyLocal: [
      'Same-day pickup across Noida sectors and NSEZ',
      'Familiar with Noida\'s industrial and export-zone logistics',
      'Direct connectivity to the Yamuna Expressway and FNG corridor',
      'Experience with electronics, apparel and automotive cargo',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Commercial Cargo', 'B2B Logistics', 'Supply Chain Support'],
    coverageAreas: ['Sector 1-10', 'Sector 62', 'Sector 82-92', 'NSEZ', 'Phase II', 'Knowledge Park'],
    faqs: [
      { q: 'Do you serve the Noida Special Economic Zone (NSEZ)?', a: 'Yes. We regularly handle export-grade freight from the NSEZ, including documentation support for outbound shipments and sealed-container handling for high-value cargo.' },
      { q: 'Can you handle electronics cargo from Noida manufacturers?', a: 'Absolutely. We provide closed-container vehicles with secure sealing for electronics, and our crews are trained in anti-static and fragility-aware handling.' },
      { q: 'What is the transit time from Noida to Mumbai?', a: 'For a full truck load, typical transit time from Noida to Mumbai is 3-4 days depending on the exact origin-destination pin codes, vehicle type and any route-specific restrictions.' },
    ],
    testimonial: { quote: 'From our Noida factory to customers across India, TriFleet delivers on time, every time. Their team is always reachable.', author: 'Anita Sharma', role: 'Operations Head', company: 'Noida electronics manufacturer' },
    mapQuery: 'Noida Industrial Sector, Uttar Pradesh',
    imageQuery: 'noida city buildings india',
    geo: { lat: 28.5355, lng: 77.391 },
    distanceFromHubKm: 22,
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    blurb: 'Logistics for Gurgaon\'s corporate, manufacturing and warehousing corridor.',
    intro: [
      'Gurgaon (Gurugram) is the corporate and warehousing powerhouse of the NCR, home to multinational offices, e-commerce fulfilment centres and industrial clusters in Manesar and Udyog Vihar. TriFleet Logistics serves businesses across the city with full truck load, part load and dedicated fleet solutions.',
      'Our proximity to Gurgaon means we can mobilise vehicles quickly for the city\'s e-commerce peaks, retail distribution cycles and manufacturing runs — all backed by the same reliability and coordination.',
    ],
    whyLocal: [
      'Coverage of Udyog Vihar, Manesar and Sohna industrial belts',
      'E-commerce fulfilment-centre pickup and line-haul experience',
      'Direct access to NH-48 and the Kundli–Manesar–Palwal expressway',
      'Flexible capacity for seasonal and peak-demand surges',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'E-commerce Line-haul', 'Dedicated Fleet Solutions', 'Supply Chain Support'],
    coverageAreas: ['Udyog Vihar', 'Manesar', 'Sohna', 'IMT Manesar', 'Bilaspur', 'Cyber City'],
    faqs: [
      { q: 'Do you handle e-commerce line-haul from Gurgaon fulfilment centres?', a: 'Yes. We run scheduled line-haul pickups from major Gurgaon fulfilment centres with the reliability and SLA reporting that e-commerce operations require.' },
      { q: 'Can you provide dedicated vehicles for our Gurgaon warehouse?', a: 'Absolutely. We can assign dedicated, branded vehicles and drivers to your Gurgaon operation with on-site dispatch and committed availability.' },
      { q: 'How fast can you pick up from Manesar?', a: 'For confirmed bookings we typically arrange pickup from Manesar within 4-6 hours, and same-day for bookings before midday.' },
    ],
    testimonial: { quote: 'Their dedicated fleet at our Manesar warehouse has transformed our distribution reliability. Truly a partner, not just a vendor.', author: 'Vikram Singh', role: 'Warehouse Director', company: 'Gurgaon e-commerce firm' },
    mapQuery: 'Manesar Industrial Model Township, Gurgaon',
    imageQuery: 'gurgaon cyber city buildings india',
    geo: { lat: 28.4595, lng: 77.0266 },
    distanceFromHubKm: 35,
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    state: 'Haryana',
    blurb: 'Industrial logistics for Faridabad\'s manufacturing and heavy-engineering cluster.',
    intro: [
      'Faridabad is one of the NCR\'s oldest and largest industrial clusters, specialising in heavy engineering, auto-components, footwear and consumer goods. TriFleet Logistics moves freight for manufacturers across the city\'s industrial sectors with vehicles suited to heavy and oversized loads.',
      'Our crews are experienced with Faridabad\'s industrial cargo profile, and we keep every shipment visible from pickup at the factory gate to delivery at destination.',
    ],
    whyLocal: [
      'Specialised heavy and oversized load handling',
      'Coverage of Faridabad\'s Sector 1-89 industrial belt',
      'Experience with auto-components and engineering cargo',
      'Direct connectivity to NH-44 and the KMP expressway',
    ],
    servicesHere: ['Full Truck Load', 'Industrial Transportation', 'Transport Contractor Services', 'Part Truck Load', 'Dedicated Fleet Solutions'],
    coverageAreas: ['Sector 6', 'Sector 24', 'Sector 27A', 'NIT', 'Surajkund', 'Prithla'],
    faqs: [
      { q: 'Can you handle heavy engineering cargo from Faridabad?', a: 'Yes. Our fleet includes flatbeds, low-bed trailers and multi-axle vehicles suited to heavy engineering and oversized cargo from Faridabad\'s manufacturing units.' },
      { q: 'Do you offer contracted transport capacity for Faridabad manufacturers?', a: 'We do. Many of our Faridabad clients run on long-term contracted capacity with dedicated vehicles, predictable pricing and committed SLAs.' },
      { q: 'How do you manage permits for restricted states from Faridabad?', a: 'Our documentation team manages all inter-state permits, including for restricted states, so your freight moves without compliance delays.' },
    ],
    testimonial: { quote: 'Moving our heavy machinery out of Faridabad used to be a headache. TriFleet handles the permits, escorts and delivery seamlessly.', author: 'Suresh Kumar', role: 'Plant Manager', company: 'Faridabad engineering firm' },
    mapQuery: 'Faridabad Industrial Sector, Haryana',
    imageQuery: 'faridabad industrial area india',
    geo: { lat: 28.4089, lng: 77.3178 },
    distanceFromHubKm: 30,
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    state: 'Uttar Pradesh',
    blurb: 'Logistics for Ghaziabad\'s industrial, packaging and FMCG businesses.',
    intro: [
      'Ghaziabad is a major industrial and logistics hub on the eastern edge of Delhi, home to packaging, FMCG, steel and electronics manufacturers across Sahibabad, Mohan Nagar and the Loni industrial belt. TriFleet Logistics serves businesses across the city with reliable full truck load and dedicated fleet operations.',
      'Our crews know Ghaziabad\'s industrial corridors and traffic patterns, and we ensure every shipment stays on schedule from pickup to proof of delivery.',
    ],
    whyLocal: [
      'Coverage of Sahibabad, Mohan Nagar and Loni industrial areas',
      'Experience with packaging, FMCG and steel cargo',
      'Direct access to NH-9 and the Upper Ganges canal corridor',
      'Same-day pickup for confirmed bookings',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Commercial Cargo', 'Industrial Transportation', 'B2B Logistics'],
    coverageAreas: ['Sahibabad', 'Mohan Nagar', 'Loni', 'Meerut Road', 'Raj Nagar', 'Kaushambi'],
    faqs: [
      { q: 'Do you serve the Sahibabad industrial area?', a: 'Yes. We regularly pick up from and deliver to the Sahibabad industrial area, handling everything from FMCG to packaging and steel products.' },
      { q: 'Can you move steel and metal cargo from Ghaziabad?', a: 'Absolutely. Our fleet includes open-body trucks and flatbed trailers suited to steel, metal and heavy cargo movement.' },
      { q: 'How quickly can you dispatch a truck from Ghaziabad?', a: 'For confirmed bookings we typically arrange same-day dispatch from Ghaziabad, often within 4-6 hours.' },
    ],
    testimonial: { quote: 'TriFleet moves our packaging material from Ghaziabad to plants across North India without a single hiccup. Reliable and professional.', author: 'Mohammed Iqbal', role: 'Procurement Lead', company: 'Ghaziabad packaging manufacturer' },
    mapQuery: 'Sahibabad Industrial Area, Ghaziabad',
    imageQuery: 'ghaziabad industrial city india',
    geo: { lat: 28.6692, lng: 77.4538 },
    distanceFromHubKm: 28,
  },
  {
    slug: 'sonipat',
    name: 'Sonipat',
    state: 'Haryana',
    blurb: 'Logistics for Sonipat\'s industrial clusters and the Kundli multi-modal hub.',
    intro: [
      'Sonipat, on the northern edge of Delhi NCR, is emerging as a major industrial and logistics corridor with the Kundli Industrial Area and the developing Kundli–Narela multi-modal hub. TriFleet Logistics serves Sonipat\'s manufacturers and warehousing operators with full truck load and part load services.',
      'Our proximity to Sonipat means fast pickups, direct highway access via NH-44 and the same reliable, coordinated visibility on every shipment.',
    ],
    whyLocal: [
      'Coverage of the Kundli and Rai industrial areas',
      'Direct NH-44 access for North-India-bound freight',
      'Experience with apparel, auto-components and agri cargo',
      'Early positioning for the Kundli multi-modal hub',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Industrial Transportation', 'Door-to-Door Logistics', 'Supply Chain Support'],
    coverageAreas: ['Kundli', 'Rai', 'Barhi', 'Murthal', 'Sonipat City'],
    faqs: [
      { q: 'Do you serve the Kundli Industrial Area?', a: 'Yes. We regularly handle freight from the Kundli Industrial Area, including apparel, auto-components and consumer goods.' },
      { q: 'Can you move agri-produce from Sonipat?', a: 'Absolutely. Our bulk and open-body fleet handles grains and agri-produce movement from Sonipat and surrounding areas.' },
      { q: 'What lanes do you run from Sonipat?', a: 'We run Sonipat to all major destinations across India, with particularly strong coverage of North and East India lanes.' },
    ],
    testimonial: { quote: 'From our Kundli unit, TriFleet gets our freight moving faster than anyone we\'ve worked with before.', author: 'Deepak Goyal', role: 'Director', company: 'Sonipat apparel exporter' },
    mapQuery: 'Kundli Industrial Area, Sonipat, Haryana',
    imageQuery: 'sonipat industrial area haryana india',
    geo: { lat: 28.9929, lng: 77.1303 },
    distanceFromHubKm: 45,
  },
  {
    slug: 'bahadurgarh',
    name: 'Bahadurgarh',
    state: 'Haryana',
    blurb: 'Logistics for Bahadurgarh\'s industrial hub and the HSIIDC growth corridor.',
    intro: [
      'Bahadurgarh, the "Gateway to Haryana", is a fast-growing industrial hub with HSIIDC industrial estates and a strong manufacturing base in footwear, steel and packaging. TriFleet Logistics serves Bahadurgarh businesses with full truck load and dedicated fleet solutions backed by dedicated coordination.',
      'Our Mangolpuri hub is just a short drive from Bahadurgarh, meaning rapid vehicle mobilisation and on-the-ground support when you need it.',
    ],
    whyLocal: [
      'Coverage of the HSIIDC industrial estates',
      'Footwear, steel and packaging cargo experience',
      'Direct access via NH-9 and the Western Peripheral Expressway',
      'Close proximity to our Mangolpuri hub',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Industrial Transportation', 'Transport Contractor Services', 'B2B Logistics'],
    coverageAreas: ['HSIIDC', 'Sector 6', 'Sector 31', 'Tikri', 'Mubarakpur'],
    faqs: [
      { q: 'Do you serve the HSIIDC industrial estate in Bahadurgarh?', a: 'Yes. We regularly handle freight from the HSIIDC industrial estate, including footwear, steel and packaging products.' },
      { q: 'Can you move footwear consignments from Bahadurgarh?', a: 'Absolutely. We provide closed-container vehicles suited to footwear and leather goods, with secure handling throughout transit.' },
      { q: 'How fast is pickup from Bahadurgarh?', a: 'Given our proximity to Bahadurgarh, we can typically arrange pickup within a few hours for confirmed bookings.' },
    ],
    testimonial: { quote: 'TriFleet understands Bahadurgarh\'s industrial rhythm. Their pickups are always on time and their crew is professional.', author: 'Ramesh Tyagi', role: 'Owner', company: 'Bahadurgarh footwear manufacturer' },
    mapQuery: 'HSIIDC Industrial Estate, Bahadurgarh, Haryana',
    imageQuery: 'bahadurgarh industrial estate haryana',
    geo: { lat: 28.6789, lng: 76.9499 },
    distanceFromHubKm: 18,
  },
  {
    slug: 'panipat',
    name: 'Panipat',
    state: 'Haryana',
    blurb: 'Logistics for Panipat\'s textile, handloom and refinery industries.',
    intro: [
      'Panipat is globally known as the "City of Weavers" and is a powerhouse of textiles, handloom, blankets and home furnishings — alongside a major refinery and industrial cluster. TriFleet Logistics moves textile and industrial freight from Panipat to destinations across India and to ports for export.',
      'Our crews understand the nuances of textile cargo — bale handling, moisture protection and secure loading — and we keep every shipment visible end to end.',
    ],
    whyLocal: [
      'Specialised textile and handloom bale handling',
      'Coverage of Panipat\'s textile and refinery industrial clusters',
      'Direct NH-44 access to North and South India',
      'Export-grade documentation support',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Commercial Cargo', 'B2B Logistics', 'Door-to-Door Logistics'],
    coverageAreas: ['Sector 12-13', 'Industrial Estate', 'Assandh Road', 'G.T. Road', 'Tehsil Camp'],
    faqs: [
      { q: 'Can you handle textile bales from Panipat?', a: 'Yes. We have open-body and closed-container vehicles suited to textile bales, with tarpaulin cover and moisture protection as standard.' },
      { q: 'Do you support export shipments from Panipat to ports?', a: 'Absolutely. We move export-grade textile and home-furnishing freight from Panipat to Mundra, Nhava Sheva and other ports with full documentation support.' },
      { q: 'How do you protect textiles from moisture and damage?', a: 'We use tarpaulin covers, palletised loading where appropriate and careful stacking to protect textiles from moisture, friction and transit damage.' },
    ],
    testimonial: { quote: 'Our blankets ship from Panipat to all of India and to Mundra for export. TriFleet handles it all with care and on time.', author: 'Inderjeet Singh', role: 'Partner', company: 'Panipat textile exporter' },
    mapQuery: 'Panipat Industrial Estate, Haryana',
    imageQuery: 'panipat textile handloom india',
    geo: { lat: 29.3909, lng: 76.9635 },
    distanceFromHubKm: 86,
  },
  {
    slug: 'rohtak',
    name: 'Rohtak',
    state: 'Haryana',
    blurb: 'Logistics for Rohtak\'s industrial, educational and agri-processing economy.',
    intro: [
      'Rohtak is a major urban and industrial centre in Haryana, home to HSIIDC industrial model townships, agri-processing units and a growing manufacturing base. TriFleet Logistics serves Rohtak businesses with full truck load, part load and industrial transportation services.',
      'Our proximity to Rohtak via NH-352 and NH-709 means fast dispatch and reliable transit, all coordinated by our dispatch team.',
    ],
    whyLocal: [
      'Coverage of the HSIIDC industrial model township',
      'Agri-processing and manufacturing cargo experience',
      'Direct access via NH-352 and NH-709',
      'Reliable dispatch and transit monitoring',
    ],
    servicesHere: ['Full Truck Load', 'Part Truck Load', 'Industrial Transportation', 'Door-to-Door Logistics', 'Supply Chain Support'],
    coverageAreas: ['HSIIDC IMT', 'Rohtak City', 'Bahadurgarh Road', 'Delhi Road', 'Gohana Road'],
    faqs: [
      { q: 'Do you serve the HSIIDC IMT in Rohtak?', a: 'Yes. We regularly handle freight from the HSIIDC Industrial Model Township in Rohtak, covering manufacturing and agri-processing cargo.' },
      { q: 'Can you move agri-processing products from Rohtak?', a: 'Absolutely. Our fleet includes clean, closed-container vehicles suited to packaged food and agri-processed products.' },
      { q: 'What transit times can I expect from Rohtak?', a: 'Transit times depend on the destination. For example, Rohtak to Mumbai typically takes 3-4 days for a full truck load.' },
    ],
    testimonial: { quote: 'Reliable, professional and always on time. TriFleet manages our Rohtak factory\'s outbound freight flawlessly.', author: 'Naresh Malhotra', role: 'Director', company: 'Rohtak agri-processing firm' },
    mapQuery: 'HSIIDC IMT Rohtak, Haryana',
    imageQuery: 'rohtak industrial haryana india',
    geo: { lat: 28.8955, lng: 76.6066 },
    distanceFromHubKm: 72,
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
