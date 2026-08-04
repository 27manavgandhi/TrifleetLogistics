import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { Marquee } from '@/components/animations/Motion';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { clients } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';

export const metadata: Metadata = constructMetadata({
  title: 'Our Clients — Brands That Trust Tri Fleet Logistics',
  description:
    'Manufacturers, FMCG brands, pharma companies, e-commerce players and exporters across India trust Tri Fleet Logistics for reliable, GPS-tracked transportation.',
  path: '/clients',
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Clients', path: '/clients' }])} />
      <PageHero
        eyebrow="Our Clients"
        title="The brands that move with Tri Fleet"
        highlight="From FMCG to pharma, automotive to e-commerce — enterprises across India rely on our fleet and 24/7 control."
        breadcrumbs={[{ name: 'Clients', path: '/clients' }]}
        image={images.warehouseTruckDock}
        imageAlt="Warehouse loading dock"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Client Roster" title="Trusted across industries" highlight="A snapshot of the brands we move freight for — many for years, not months." />
          <StaggerGroup stagger={0.05} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <StaggerItem key={c.name}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                  <p className="text-xl font-bold tracking-tight text-foreground">{c.name}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{c.sector}</span>
                    <span>since {c.since}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <div className="border-y border-border bg-secondary/40 py-8">
        <Marquee duration={28}>
          {clients.map((c) => (
            <span key={c.name} className="mx-6 text-lg font-bold tracking-tight text-muted-foreground/50">{c.name}</span>
          ))}
        </Marquee>
      </div>

      <TestimonialsCarousel
        eyebrow="Client Voices"
        title="What our clients say"
        highlight="Real words from the businesses that trust Tri Fleet to move their freight across India."
      />

      <CtaSection title="Join the brands that trust Tri Fleet" highlight="Let's talk about how we can move your freight with the same reliability our clients rely on." />
    </>
  );
}
