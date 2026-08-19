'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';

export function ServicesOverview() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end logistics, one partner"
          highlight="From a single full truck load to a dedicated multi-lane programme, TriFleet covers every transport need across India."
        />
        <StaggerGroup stagger={0.05} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground shadow-sm transition-transform duration-500 group-hover:scale-110"
                  style={{ background: s.accent }}
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{s.excerpt}</p>
              </div>
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
