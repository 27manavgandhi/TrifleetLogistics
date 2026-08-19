'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Truck, MapPin, Clock, ShieldCheck, Users, Package, Award } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { AnimatedCounter } from '@/components/animations/Motion';
import { Reveal } from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';

type Stat = {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

const primaryStats: Stat[] = [
  { icon: MapPin, value: 28, suffix: '', label: 'States covered' },
  { icon: Truck, value: 75, suffix: '+', label: 'Vehicles in network' },
  { icon: TrendingUp, value: 96, suffix: '%', label: 'On-time delivery' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Control room support' },
];

const secondaryStats: Stat[] = [
  { icon: Package, value: 1800, suffix: '+', label: 'Trips completed', sublabel: 'Across 120+ active lanes' },
  { icon: MapPin, value: 350, suffix: '+', label: 'Destination pin codes', sublabel: 'Pan-India last-mile reach' },
  { icon: Users, value: 80, suffix: '+', label: 'Trained drivers & crew', sublabel: 'Verified, briefed & GPS-tracked' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'GPS-tracked fleet', sublabel: 'Real-time visibility on every truck' },
  { icon: Award, value: 3, suffix: '', label: 'Compliance standards', sublabel: 'GST, MSME & safety compliance' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Control room', sublabel: 'Always-on monitoring & support' },
];

export function AnimatedStats() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />
      <div aria-hidden className="absolute -left-1/4 top-0 h-[40vh] w-[40vh] rounded-full bg-accent/15 blur-[120px] animate-aurora" />
      <div aria-hidden className="absolute -right-1/4 bottom-0 h-[40vh] w-[40vh] rounded-full bg-accent/10 blur-[140px] animate-aurora" style={{ animationDelay: '3s' }} />

      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="By the numbers"
          title="Results that compound over years"
          highlight="The metrics that matter — and that we protect on every single shipment."
        />

        {/* Primary stats — large 4-up grid */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {primaryStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center gap-2 p-5 text-center sm:p-10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary stats — smaller cards with sublabels */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10"
            >
              <span className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-primary-deep'
              )}>
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </span>
                </div>
                <p className="text-sm font-medium text-white/80">{s.label}</p>
                {s.sublabel && <p className="mt-0.5 text-xs text-white/50">{s.sublabel}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
