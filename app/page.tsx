import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { generalFaqs } from '@/lib/constants/content';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import { Hero } from '@/components/sections/home/Hero';
import { IntroSection } from '@/components/sections/home/IntroSection';
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs';
import { ServicesOverview } from '@/components/sections/home/ServicesOverview';
import { IndustriesServed } from '@/components/sections/home/IndustriesServed';
import { FleetShowcase } from '@/components/sections/home/FleetShowcase';
import { InfrastructureSection } from '@/components/sections/home/InfrastructureSection';
import { CoverageMap } from '@/components/sections/home/CoverageMap';
import { AnimatedStats } from '@/components/sections/home/AnimatedStats';
import { ProcessTimeline } from '@/components/sections/home/ProcessTimeline';
import { ClientLogos } from '@/components/sections/home/ClientLogos';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { CaseStudiesPreview } from '@/components/sections/home/CaseStudiesPreview';
import { TechnologyCertifications } from '@/components/sections/home/TechnologyCertifications';
import { FleetOwnerBenefits } from '@/components/sections/home/FleetOwnerBenefits';
import { FaqSection } from '@/components/sections/FaqSection';
import { BlogPreview, NewsletterSection } from '@/components/sections/home/BlogPreview';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export const metadata: Metadata = constructMetadata({
  title: 'Tri Fleet Logistics — Pan-India Full Truck Load & B2B Transport',
  description:
    'Tri Fleet Logistics is a Delhi-based full truck load logistics company delivering time-bound, door-to-door B2B transportation and supply chain solutions across India with a modern fleet and 24/7 control.',
  path: '',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />
      <IntroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <IndustriesServed />
      <FleetShowcase />
      <InfrastructureSection />
      <CoverageMap />
      <AnimatedStats />
      <ProcessTimeline />
      <ClientLogos />
      <TestimonialsCarousel />
      <CaseStudiesPreview />
      <TechnologyCertifications />
      <FleetOwnerBenefits />
      <FaqSection faqs={generalFaqs} eyebrow="FAQ" title="Frequently asked questions" highlight="Answers to the questions we hear most from businesses exploring Tri Fleet." />
      <BlogPreview />
      <NewsletterSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
