import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';
import { images } from '@/lib/constants/images';

export const metadata: Metadata = constructMetadata({
  title: 'Logistics Services — FTL, PTL, Industrial & B2B Transport',
  description:
    'Explore Tri Fleet Logistics services: full truck load, part truck load, industrial transportation, door-to-door logistics, supply chain support, dedicated fleet and B2B logistics across India.',
  path: '/services',
});

const serviceImages: Record<string, string> = {
  'full-truck-load': images.truckHighway2,
  'part-truck-load': images.warehouseWorkers,
  'industrial-transportation': images.craneBlue,
  'commercial-cargo': images.loadingVan,
  'time-bound-deliveries': images.truckNightWheels,
  'door-to-door-logistics': images.truckSilver,
  'supply-chain-support': images.controlRoom4,
  'fleet-owner-services': images.semiParked1,
  'transport-contractor-services': images.forkliftWarehouse,
  'pan-india-logistics': images.delhiExpressway,
  'dedicated-fleet-solutions': images.semiConvoy,
  'b2b-logistics': images.controlRoom6,
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Services', path: '/services' }])} />
      <PageHero
        eyebrow="Our Services"
        title="Logistics services, end to end"
        highlight="Twelve specialised services covering every transport need — from a single full truck load to a dedicated, contracted multi-lane programme."
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        image={images.truckHighway1}
        imageAlt="Tri Fleet logistics services"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="All Services" title="Pick the service that fits your freight" highlight="Each service is detailed on its own page with benefits, process, industries served, case studies and FAQ." />
          <StaggerGroup stagger={0.06} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={serviceImages[s.slug] ?? images.truckHighway3} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground shadow-lg" style={{ background: s.accent }}>
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
                      Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
