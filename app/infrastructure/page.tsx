import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { infrastructure } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Infrastructure — Hubs, Control Room & Maintenance',
  description:
    'Tri Fleet Logistics infrastructure: a 24/7 control room in Delhi, consolidation hubs in Mumbai and Kolkata, in-house fleet maintenance and a 20+ city warehouse partner network.',
  path: '/infrastructure',
});

const infraImages: Record<string, string> = {
  'mangolpuri-hub': images.controlRoom4,
  'mumbai-hub': images.warehouseTruckDock,
  'kolkata-hub': images.modernWarehouse,
  'maintenance-workshop': images.forkliftWarehouse,
  'driver-training': images.controlRoom6,
  'warehouse-partner-network': images.warehouseLoadingBays,
};

export default function InfrastructurePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Infrastructure', path: '/infrastructure' }])} />
      <PageHero
        eyebrow="Infrastructure"
        title="The backbone behind every delivery"
        highlight="Hubs, control rooms, workshops and a partner warehouse network that keep freight moving reliably across India."
        breadcrumbs={[{ name: 'Infrastructure', path: '/infrastructure' }]}
        image={images.controlRoom4}
        imageAlt="Tri Fleet control room"
        align="split"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Facilities" title="Built to keep freight moving" highlight="From our Mangolpuri nerve centre to partner warehouses across 20+ cities." />
          <StaggerGroup stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((asset) => (
              <StaggerItem key={asset.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={infraImages[asset.slug] ?? images.controlRoom5} alt={asset.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">{asset.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-lg font-semibold text-foreground">{asset.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{asset.description}</p>
                    <ul className="flex flex-col gap-2 border-t border-border pt-4">
                      {asset.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
