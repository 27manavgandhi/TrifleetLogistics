'use client';

import { Marquee } from '@/components/animations/Motion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { clients } from '@/lib/constants/content';

export function ClientLogos() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Trusted by"
          title="The brands that move with Tri Fleet"
          highlight="From FMCG to pharma, automotive to e-commerce — enterprises across India rely on our fleet and control."
        />
      </div>
      <div className="mt-14 flex flex-col gap-5">
        <Marquee duration={30}>
          {clients.slice(0, 6).map((c) => (
            <div key={c.name} className="mx-3 flex h-24 w-56 flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm">
              <span className="text-lg font-bold tracking-tight text-foreground">{c.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{c.sector} · since {c.since}</span>
            </div>
          ))}
        </Marquee>
        <Marquee duration={30} reverse>
          {clients.slice(6).map((c) => (
            <div key={c.name} className="mx-3 flex h-24 w-56 flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm">
              <span className="text-lg font-bold tracking-tight text-foreground">{c.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">{c.sector} · since {c.since}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
