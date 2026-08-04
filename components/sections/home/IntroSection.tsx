'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { Parallax } from '@/components/animations/Motion';
import { images } from '@/lib/constants/images';
import { siteConfig } from '@/lib/constants/site';

const points = [
  'Founded in Delhi in 2011, built on reliability and transparency',
  'A modern 500+ vehicle fleet across containers, trailers and reefers',
  'A 24/7 control room that keeps every shipment visible end to end',
  'Pan-India coverage across 28 states and 1,200+ pin codes',
];

export function IntroSection() {
  return (
    <section className="section-py relative overflow-hidden">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Parallax offset={50} speed={1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                <Image
                  src={images.truckHighway5}
                  alt="Tri Fleet logistics truck on the highway"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 w-48 rounded-2xl border border-border bg-card p-5 shadow-card lg:-right-8"
            >
              <p className="text-4xl font-bold text-primary">14+</p>
              <p className="mt-1 text-xs text-muted-foreground">Years moving India&apos;s freight</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                About Tri Fleet
              </span>
            </Reveal>
            <TextReveal
              text="A logistics company built for reliability"
              as="h2"
              className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.name} is a Delhi-based full truck load logistics company. From our Mangolpuri control room we coordinate freight across India — combining a modern fleet, trained crews and real-time technology to deliver your cargo on time, every time.
              </p>
            </Reveal>
            <ul className="flex flex-col gap-3">
              {points.map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.08}>
                  <li className="flex items-start gap-3 text-sm text-foreground/90 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
