'use client';

import Image from 'next/image';
import { Cpu, ShieldCheck, Award, Truck, Zap, FileCheck, ScanLine, Radio, Gauge, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { techStack, certifications, safetyStandards } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';

const techIcons = [Cpu, Radio, FileCheck, ScanLine, Gauge, Zap];
const certIcons = [BadgeCheck, ShieldCheck, FileCheck, Award, Truck, Award];

export function TechnologyCertifications() {
  return (
    <section className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Technology & Compliance"
          title="Modern tools, certified processes"
          highlight="GPS telematics, control-tower software and certified safety and quality systems underpin every TriFleet movement."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Technology column */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-card">
                <Image src={images.controlRoom4} alt="TriFleet 24/7 control room with monitoring screens" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/75 via-primary-deep/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">24/7 Control Tower</p>
                    <p className="mt-1 text-lg font-semibold text-white">Real-time monitoring on every truck</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    Live
                  </span>
                </div>
              </div>
            </Reveal>

            <StaggerGroup stagger={0.06} className="grid gap-3 sm:grid-cols-2">
              {techStack.map((t, i) => {
                const Icon = techIcons[i % techIcons.length];
                return (
                  <StaggerItem key={t.name}>
                    <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-primary-deep">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{t.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* Certifications + Safety column */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">Compliance &amp; standards</h3>
              </div>
            </Reveal>
            <StaggerGroup stagger={0.05} className="grid gap-3 sm:grid-cols-2">
              {certifications.map((c, i) => {
                const Icon = certIcons[i % certIcons.length];
                return (
                  <StaggerItem key={c.name}>
                    <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-sm">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{c.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-2.5 pt-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15 text-success">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">Safety standards</h3>
              </div>
            </Reveal>
            <StaggerGroup stagger={0.05} className="grid gap-2 sm:grid-cols-2">
              {safetyStandards.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 transition-all hover:border-success/40 hover:shadow-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success transition-transform group-hover:scale-110" />
                    <div>
                      <p className="text-xs font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
