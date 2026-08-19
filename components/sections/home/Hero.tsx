'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck, Truck, MapPinned } from 'lucide-react';
import { GridBackdrop } from '@/components/animations/AuroraBackground';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Marquee } from '@/components/animations/Motion';
import { images } from '@/lib/constants/images';
import { siteConfig } from '@/lib/constants/site';

/**
 * Background slideshow: 2-3 fleet/highway images crossfade on a timer, each
 * with a slow Ken Burns drift so the frame never sits static. A fixed dark
 * scrim + bottom gradient keeps foreground text legible regardless of which
 * image is showing.
 */
const SLIDES = [images.truckHighway1, images.truckHighway2, images.truckHighway1];
const SLIDE_DURATION = 5500; // ms

function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: (SLIDE_DURATION / 1000) + 1.4, ease: 'linear' }}
          >
            <Image
              src={SLIDES[index]}
              alt="TriFleet vehicles on national highway"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Fixed scrims — sit above every slide so text stays legible on all of them */}
     <div aria-hidden className="absolute inset-0 bg-primary-deep/35" />
     <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/35 to-transparent" />
     <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-primary-deep/65 via-primary-deep/25 to-transparent" />
      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 z-10 flex gap-2 lg:right-12">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? 'w-7 bg-accent' : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-primary-deep pt-28 text-primary-foreground lg:pt-32">
      <BackgroundSlideshow />
      <GridBackdrop variant="dark" />

      <motion.div style={{ opacity, y: yText }} className="container-px relative z-10 mx-auto flex min-h-[64svh] max-w-8xl flex-col justify-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Pan-India FTL &amp; B2B Logistics
          </motion.span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]">
            {'Moving India with'.split(' ').map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block overflow-hidden pb-[0.25em]"
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
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            TriFleet Logistics delivers time-bound, door-to-door B2B transportation across India — a modern fleet and trusted logistics partners keeping your freight moving safely, efficiently and on schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
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
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/65"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" /> 95% on-time delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinned className="h-4 w-4 text-accent" /> Pan-India coverage
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-accent" /> 350+ vehicles in network
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust marquee */}
      <div className="relative z-10 mt-14 border-y border-white/10 bg-primary-deep/40 py-5 backdrop-blur-sm lg:mt-20">
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
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="h-1.5 w-1 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}