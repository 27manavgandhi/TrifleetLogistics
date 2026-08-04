'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { infrastructure } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { CheckCircle2 } from 'lucide-react';

const infraImages: Record<string, string> = {
  'mangolpuri-hub': images.controlRoom4,
  'mumbai-hub': images.warehouseTruckDock,
  'kolkata-hub': images.modernWarehouse,
  'maintenance-workshop': images.forkliftWarehouse,
  'driver-training': images.controlRoom6,
  'warehouse-partner-network': images.warehouseLoadingBays,
};

export function InfrastructureSection() {
  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Infrastructure"
          title="The backbone behind every delivery"
          highlight="Hubs, control rooms, workshops and a partner warehouse network that keep freight moving reliably."
        />
        <StaggerGroup stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((asset) => (
            <StaggerItem key={asset.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={infraImages[asset.slug] ?? images.controlRoom5}
                    alt={asset.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                    {asset.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{asset.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{asset.description}</p>
                  <ul className="flex flex-col gap-2">
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
  );
}
