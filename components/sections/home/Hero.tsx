'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Play, ShieldCheck, Truck, Radar } from 'lucide-react';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Marquee } from '@/components/animations/Motion';
import { images } from '@/lib/constants/images';
import { siteConfig } from '@/lib/constants/site';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-primary-deep pt-28 text-primary-foreground lg:pt-32">
      <GridBackdrop variant="dark" />
      <AuroraBackground variant="dark" />

      <motion.div style={{ opacity, y: yText }} className="container-px relative mx-auto max-w-8xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Pan-India FTL &amp; B2B Logistics
            </motion.span>

            <h1 className="text-balance text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]">
              {'Moving India with'.split(' ').map((w, i) => (
                <motion.span
                  key={i}
                  className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {w}
                  </motion.span>
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-gradient-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                precision &amp; control
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Tri Fleet Logistics delivers time-bound, door-to-door B2B transportation across India — a modern fleet, GPS on every vehicle and a 24/7 control room that keeps your freight visible end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton
                as="a"
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={`tel:${siteConfig.contact.phoneE164[0]}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright"
              >
                <Phone className="h-4 w-4" /> {siteConfig.contact.phones[0]}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> 98.6% on-time delivery
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Radar className="h-4 w-4 text-accent" /> GPS on every vehicle
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-accent" /> 500+ vehicles in network
              </span>
            </motion.div>
          </div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yImg, scale }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={images.truckHighway1}
                alt="Cargo truck on an Indian highway"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-12 w-44 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white">12K+</p>
              <p className="text-xs text-white/70">Trips completed yearly</p>
            </motion.div>

            {/* Floating live card */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 bottom-16 w-52 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Live tracking</span>
              </div>
              <p className="mt-2 text-sm text-white/80">Delhi → Mumbai</p>
              <p className="text-xs text-white/60">In transit · ETA 14:30</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile image */}
      <div className="container-px relative mt-8 lg:hidden">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
          <Image src={images.truckHighway2} alt="Cargo truck on highway" fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative mt-14 border-y border-white/10 py-5 lg:mt-20">
        <Marquee duration={36}>
          {['Full Truck Load', 'Part Truck Load', 'Industrial Transportation', 'Door-to-Door Logistics', 'Time-Bound Deliveries', 'Supply Chain Support', 'Pan India Coverage', 'Dedicated Fleet Solutions'].map((t, i) => (
            <span key={i} className="flex items-center gap-4 px-7 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="h-1.5 w-1 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}
