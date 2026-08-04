'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';
import { images } from '@/lib/constants/images';

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

export function ServicesOverview() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end logistics, one partner"
          highlight="From a single full truck load to a dedicated multi-lane programme, Tri Fleet covers every transport need across India."
        />
        <StaggerGroup stagger={0.06} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={serviceImages[s.slug] ?? images.truckHighway3}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 to-transparent" />
                  <span
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110"
                    style={{ background: s.accent }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="absolute bottom-3 left-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                    {s.shortTitle}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
                    Explore service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent-bright"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
