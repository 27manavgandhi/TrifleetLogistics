'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { caseStudies } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';

const csImages: Record<string, string> = {
  'fmcg-north-india-distribution': images.warehouseTruckDock,
  'pharma-cold-chain-delhi-bangalore': images.reeferTrucks,
  'automotive-jit-lane-delivery': images.truckHighway2,
  'ecommerce-peak-season-line-haul': images.boxesVan,
  'industrial-heavy-machinery-transport': images.craneBlue,
  'textile-export-panipat-mundra': images.truckHighway4,
};

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real outcomes, by the numbers"
          highlight="How TriFleet turned logistics challenges into measurable results for clients across industries."
        />
        <StaggerGroup stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs) => (
            <StaggerItem key={cs.slug}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={csImages[cs.slug] ?? images.truckHighway3}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-deep">{cs.sector}</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{cs.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{cs.excerpt}</p>
                  <div className="flex flex-wrap gap-4 border-t border-border pt-4">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="text-xl font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
                    Read case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link href="/case-studies" className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent-bright">
              View all case studies <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
