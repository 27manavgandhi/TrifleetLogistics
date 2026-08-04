'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { Parallax } from '@/components/animations/Motion';
import { fleet } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fleetImages: Record<string, string> = {
  '32ft-container': images.truckHighway2,
  '20ft-open': images.truckHighway4,
  '40ft-semi-trailer': images.semiConvoy,
  'low-bed-trailer': images.craneBlue,
  'reefer': images.reeferTrucks,
  'part-load-van': images.loadingVan,
};

export function FleetShowcase() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Our Fleet"
          title="500+ vehicles, matched to your cargo"
          highlight="From closed containers to low-bed trailers and validated reefers, our fleet is maintained in-house and tracked by GPS."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Parallax offset={40}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-card">
              <Image
                src={images.semiParked1}
                alt="Tri Fleet trucks parked at the yard"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">In-house maintenance</p>
                <p className="mt-1 text-lg font-semibold text-white">Every vehicle pre-checked before dispatch</p>
              </div>
            </div>
          </Parallax>

          <StaggerGroup stagger={0.08} className="flex flex-col gap-3">
            {fleet.map((v) => (
              <StaggerItem key={v.slug}>
                <Link
                  href="/fleet"
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/40 hover:shadow-card"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={fleetImages[v.slug] ?? images.truckHighway3}
                      alt={v.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-foreground">{v.name}</h3>
                      <span className="shrink-0 text-xs font-semibold text-accent-bright">{v.capacityTonnes}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{v.bodyType}</p>
                    <p className="text-xs text-muted-foreground/80">Ideal for: {v.idealFor}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
