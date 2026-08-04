'use client';

import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import {
  Headset, Radar, TrendingUp, Truck, PhoneCall, FileCheck, MapPinned, ShieldCheck, type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Headset, Radar, TrendingUp, Truck, PhoneCall, FileCheck, MapPinned, ShieldCheck,
};

const items = [
  { icon: 'Headset', title: '24/7 Control Room', description: 'A real control room with real people who answer the phone at 2 AM and proactively resolve exceptions.' },
  { icon: 'Radar', title: 'GPS On Every Vehicle', description: 'Real-time GPS telematics and milestone alerts on every truck — no black boxes, no guesswork.' },
  { icon: 'TrendingUp', title: '98.6% On-Time Delivery', description: 'Industry-leading on-time performance backed by SLA commitments on contracted lanes.' },
  { icon: 'Truck', title: 'Modern Fleet', description: '500+ vehicles across containers, trailers, reefers and specialised trucks, maintained in-house.' },
  { icon: 'PhoneCall', title: 'Single-Window Booking', description: 'One call, one coordinator, one point of accountability for every shipment, every lane.' },
  { icon: 'FileCheck', title: 'Digital POD', description: 'Timestamped, photo-verified proof of delivery that transforms your reconciliation process.' },
  { icon: 'MapPinned', title: 'Pan-India Coverage', description: '28 states, 8 union territories, 500+ lanes and 1,200+ pin codes — truly national reach.' },
  { icon: 'ShieldCheck', title: 'Safety First', description: 'Trained crews, defensive-driving programmes and strict cargo-securement protocols.' },
];

export function WhyChooseUs() {
  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Why Tri Fleet"
          title="Built different, run better"
          highlight="Eight reasons businesses across India choose Tri Fleet as their logistics partner — and stay with us for years."
        />
        <StaggerGroup stagger={0.07} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                  <div aria-hidden className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-700 group-hover:scale-150" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
