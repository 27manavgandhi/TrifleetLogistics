import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { CtaSection } from '@/components/sections/CtaSection';
import { BlogExplorer } from '@/components/sections/home/BlogExplorer';
import { images } from '@/lib/constants/images';

export const metadata: Metadata = constructMetadata({
  title: 'Logistics Blog & Insights — TriFleet Logistics',
  description:
    'Logistics strategy, compliance, fleet management, cold chain, technology and cost optimisation insights from TriFleet Logistics. Read the latest articles on Indian transport.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Blog', path: '/blog' }])} />
      <PageHero
        eyebrow="Blog & Insights"
        title="Logistics intelligence, in plain English"
        highlight="Strategy, compliance, fleet management and technology — the insights that help you run logistics better."
        breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
        image={images.controlRoom6}
        imageAlt="Logistics technology"
        align="center"
      />
      <BlogExplorer />
      <CtaSection title="Like what you're reading?" highlight="Let's put these insights to work for your freight. Get a quote or talk to our logistics team." />
    </>
  );
}
