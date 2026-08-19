'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Truck, MapPin, TrendingUp, Package } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { AnimatedCounter } from '@/components/animations/Motion';
import { images } from '@/lib/constants/images';

const primaryStats = [
  { icon: MapPin, value: 5000, suffix: '+', label: 'Pin codes covered' },
  { icon: Truck, value: 350, suffix: '+', label: 'Vehicles in network' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'On-time delivery' },
  { icon: Package, value: 1800, suffix: '+', label: 'Trips completed since launch' },
];

const secondaryStats = [
  { icon: Package, value: 1800, suffix: '+', label: 'Trips completed', sublabel: 'Since we started operations in 2025' },
  { icon: MapPin, value: 5000, suffix: '+', label: 'Destination pin codes', sublabel: 'Pan-India last-mile reach' },
  { icon: Truck, value: 350, suffix: '+', label: 'Vehicles in network', sublabel: 'Containers, trailers and specialised trucks' },
];

export function AboutScaleSection() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />
      <div aria-hidden className="absolute -left-1/4 top-0 h-[40vh] w-[40vh] rounded-full bg-accent/15 blur-[120px] animate-aurora" />
      <div aria-hidden className="absolute -right-1/4 bottom-0 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[140px] animate-aurora" style={{ animationDelay: '3s' }} />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading eyebrow="Scale" title="The numbers behind the network" highlight="Metrics we protect on every shipment, every day — across our pan-India network." />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {primaryStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col items-center justify-center gap-3 p-7 text-center sm:p-10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <StaggerGroup stagger={0.07} className="mt-6 grid gap-4 sm:grid-cols-3">
          {secondaryStats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-primary-deep">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-2xl font-bold text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <p className="text-sm font-medium text-white/80">{s.label}</p>
                  {s.sublabel && <p className="mt-0.5 text-xs text-white/50">{s.sublabel}</p>}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10">
              <Image src={images.truckHighway1} alt="TriFleet truck on highway" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10">
              <Image src={images.semiParked1} alt="TriFleet consolidation warehouse" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10">
              <Image src={images.truckHighway3} alt="TriFleet fleet yard" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}