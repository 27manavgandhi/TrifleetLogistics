'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';
import { cn } from '@/lib/utils';

export function RelatedServices({
  currentSlug,
  title = 'Related services',
  highlight = 'Explore the other ways TriFleet can move and manage your freight.',
  limit = 4,
}: {
  currentSlug?: string;
  title?: string;
  highlight?: string;
  limit?: number;
}) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, limit);

  return (
    <section className="section-py bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow="Explore" title={title} highlight={highlight} />
        <StaggerGroup stagger={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href="/services"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground transition-transform group-hover:scale-110"
                  style={{ background: s.accent }}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-bright">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
