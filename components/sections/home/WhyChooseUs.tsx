'use client';

import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import {
  Headset, TrendingUp, Truck, PhoneCall, FileCheck, MapPinned, ShieldCheck, Wallet, type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Headset, TrendingUp, Truck, PhoneCall, FileCheck, MapPinned, ShieldCheck, Wallet,
};

const items = [
  { icon: 'TrendingUp', title: '95% On-Time Delivery', description: 'Industry-leading on-time performance backed by SLA commitments on contracted lanes.' },
  { icon: 'Truck', title: 'Modern Fleet', description: '350+ vehicles across containers, trailers and specialised trucks, maintained in-house.' },
  { icon: 'PhoneCall', title: 'Single-Window Booking', description: 'One call, one coordinator, one point of accountability for every shipment, every lane.' },
  { icon: 'FileCheck', title: 'Digital POD', description: 'Timestamped, photo-verified proof of delivery that transforms your reconciliation process.' },
  { icon: 'MapPinned', title: 'Pan-India Coverage', description: 'Pan India coverage across 5000+ pin codes — truly national reach.' },
  { icon: 'ShieldCheck', title: 'Safety First', description: 'Trained crews, defensive-driving programmes and strict cargo-securement protocols.' },
  { icon: 'Headset', title: 'Dedicated Support', description: 'A responsive team and a single point of contact who proactively resolves exceptions.' },
  { icon: 'Wallet', title: 'Transparent Pricing', description: 'Upfront, no-surprise quotes with clear billing cycles — what you\'re quoted is what you pay.' },
];

export function WhyChooseUs() {
  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Why TriFleet"
          title="Built different, run better"
          highlight="Eight reasons businesses across India choose TriFleet as their logistics partner — and stay with us for years."
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