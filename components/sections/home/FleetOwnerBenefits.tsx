'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Wrench, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { AuroraBackground } from '@/components/animations/AuroraBackground';

const benefits = [
  { icon: TrendingUp, title: 'Maximise utilisation', description: 'Our load-matching and lane planning keep your vehicles loaded and revenue-generating, not idle.' },
  { icon: Wrench, title: 'Lower maintenance cost', description: 'In-house preventive maintenance and tyre management reduce breakdowns and lifecycle cost.' },
  { icon: Users, title: 'Driver management', description: 'Recruitment, training, fatigue management and retention support so you always have a driver behind the wheel.' },
  { icon: MapPin, title: 'GPS & telematics', description: 'Fleet-wide GPS tracking, route compliance and fuel monitoring to run your fleet by data, not guesswork.' },
];

export function FleetOwnerBenefits() {
  return (
    <section className="section-py relative overflow-hidden">
      <AuroraBackground />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="For Fleet Owners"
          title="Lease, manage and monetise your fleet"
          highlight="If you own trucks, TriFleet helps you turn them into a reliable, profitable operation — from load-matching to full management."
        />
        <StaggerGroup stagger={0.09} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-bright transition-transform group-hover:scale-110">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link href="/services/fleet-owner-services" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Explore fleet owner services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
