import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { clients, type Client } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';

export const metadata: Metadata = constructMetadata({
  title: 'Our Clients — Brands That Trust TriFleet Logistics',
  description:
    'Manufacturers, FMCG brands, automotive and e-commerce players across India trust TriFleet Logistics for reliable transportation.',
  path: '/clients',
});

/** Deterministic initials for the monogram fallback, e.g. "Tata Motors" -> "TM" */
function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card-hover">
      <div className="flex h-14 items-center justify-center">
        {client.logo ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={140}
            height={56}
            className="h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold tracking-tight text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
            {initials(client.name)}
          </span>
        )}
      </div>
      <p className="text-sm font-semibold leading-snug text-foreground">{client.name}</p>
      <div className="flex flex-col items-center gap-0.5 text-xs text-muted-foreground">
        <span>{client.sector}</span>
        <span>since {client.since}</span>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Clients', path: '/clients' }])} />
      <PageHero
        eyebrow="Our Clients"
        title="The brands that move with TriFleet"
        highlight="From FMCG to automotive, electronics to e-commerce — enterprises across India rely on our fleet and our logistics partners."
        breadcrumbs={[{ name: 'Clients', path: '/clients' }]}
        image={images.warehouseTruckDock}
        imageAlt="Warehouse loading dock"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Client Roster" title="Trusted across industries" highlight="A snapshot of the brands we move freight for — from cables and paints to telecom and agriculture." />
          <StaggerGroup stagger={0.05} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <StaggerItem key={c.name}>
                <ClientCard client={c} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <TestimonialsCarousel
        eyebrow="Client Voices"
        title="What our clients say"
        highlight="Real words from the businesses that trust TriFleet to move their freight across India."
      />

      <CtaSection title="Join the brands that trust TriFleet" highlight="Let's talk about how we can move your freight with the same reliability our clients rely on." />
    </>
  );
}