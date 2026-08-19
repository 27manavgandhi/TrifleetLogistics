import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/sections/home/Hero';
import { IntroSection } from '@/components/sections/home/IntroSection';
import { ClientLogos } from '@/components/sections/home/ClientLogos';
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs';
import { ServicesOverview } from '@/components/sections/home/ServicesOverview';
import { FleetShowcase } from '@/components/sections/home/FleetShowcase';
import { CoverageMap } from '@/components/sections/home/CoverageMap';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = constructMetadata({
  title: 'TriFleet Logistics — Pan-India Full Truck Load & B2B Transport',
  description:
    'TriFleet Logistics is a fleet owner and transport contractor delivering time-bound, door-to-door B2B transportation and supply chain solutions across India.',
  path: '',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ClientLogos />
      <WhyChooseUs />
      <ServicesOverview />
      <FleetShowcase />
      <CoverageMap />
      <TestimonialsCarousel />
      <CtaSection />
      <ContactSection />
    </>
  );
}
