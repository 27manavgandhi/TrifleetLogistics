'use client';

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  MapPinned,
} from 'lucide-react';

import { GridBackdrop } from '@/components/animations/AuroraBackground';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Marquee } from '@/components/animations/Motion';
import { images } from '@/lib/constants/images';
import { siteConfig } from '@/lib/constants/site';

/* ============================================================
   BACKGROUND SLIDES
   ============================================================ */

const SLIDES = [
  images.truckHighway1,
  images.truckHighway2,
  images.truckHighway1,
];

const SLIDE_DURATION = 5500;

/* ============================================================
   BACKGROUND SLIDESHOW
   ============================================================ */

function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  return (
    <div
      className="
        absolute
        inset-0
        z-0
        overflow-hidden
        bg-primary-deep
      "
      aria-hidden="true"
    >
      {/* ========================================================
          BACKGROUND IMAGE
          ======================================================== */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: SLIDE_DURATION / 1000 + 1.2,
              ease: 'linear',
            }}
          >
            <Image
              src={SLIDES[index]}
              alt="TriFleet vehicles on national highway"
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              sizes="100vw"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ========================================================
          DARK OVERLAYS
          ======================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-primary-deep/45
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-primary-deep/90
          via-primary-deep/45
          to-primary-deep/15
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-primary-deep/75
          via-primary-deep/35
          to-transparent
        "
      />

      {/* Slight additional top protection for dark header */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-primary-deep/40
          to-transparent
        "
      />

      {/* ========================================================
          SLIDE INDICATORS
          ======================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-5
          z-10
          flex
          gap-2
          sm:right-8
          lg:right-12
        "
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`
              h-1
              rounded-full
              transition-all
              duration-500
              ${
                i === index
                  ? 'w-7 bg-accent'
                  : 'w-3 bg-white/30 hover:bg-white/50'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-primary-deep
        pt-24
        text-primary-foreground
        sm:pt-28
        lg:pt-32
      "
    >
      {/* ========================================================
          BACKGROUND
          ======================================================== */}

      <BackgroundSlideshow />

      {/* Decorative grid */}
      <GridBackdrop variant="dark" />

      {/* ========================================================
          HERO CONTENT
          
          IMPORTANT:
          No entrance opacity animations.
          Everything is rendered together immediately.
          ======================================================== */}

      <motion.div
        style={{
          opacity,
          y: yText,
        }}
        className="
          container-px
          relative
          z-10
          mx-auto
          flex
          min-h-0
          max-w-8xl
          flex-col
          justify-center
          py-8
          sm:py-10
          lg:min-h-[64svh]
          lg:py-0
        "
      >
        <div className="max-w-3xl">

          {/* ======================================================
              EYEBROW
              ====================================================== */}

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-accent/30
              bg-accent/10
              px-3
              py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-accent-bright
              backdrop-blur-sm
              sm:px-4
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            Pan-India FTL &amp; B2B Logistics
          </div>

          {/* ======================================================
              HEADING
              
              Render as one composition instead of staggered words.
              ====================================================== */}

          <h1
            className="
              mt-5
              text-balance
              text-[2.35rem]
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:mt-6
              sm:text-5xl
              lg:text-[4.2rem]
            "
          >
            Moving India with
            <br />

            <span className="text-gradient-light">
              precision &amp; control
            </span>
          </h1>

          {/* ======================================================
              DESCRIPTION
              ====================================================== */}

          <p
            className="
              mt-5
              max-w-xl
              text-pretty
              text-sm
              leading-relaxed
              text-white/80
              sm:mt-6
              sm:text-lg
            "
          >
            TriFleet Logistics delivers time-bound, door-to-door B2B
            transportation across India — a modern fleet and trusted
            logistics partners keeping your freight moving safely,
            efficiently and on schedule.
          </p>

          {/* ======================================================
              CTA BUTTONS
              ====================================================== */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              sm:mt-8
              sm:flex-row
              sm:items-center
            "
          >
            {/* Primary CTA */}
            <MagneticButton
              as="a"
              href="/contact"
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-accent
                px-7
                text-sm
                font-semibold
                text-primary-deep
                transition-all
                hover:bg-accent-bright
                sm:w-auto
              "
            >
              Get a Quote

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </MagneticButton>

            {/* Phone CTA */}
            <MagneticButton
              as="a"
              href={`tel:${siteConfig.contact.phoneE164[0]}`}
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white/30
                px-7
                text-sm
                font-semibold
                text-white
                transition-all
                hover:border-accent
                hover:text-accent-bright
                sm:w-auto
              "
            >
              <Phone className="h-4 w-4" />

              {siteConfig.contact.phones[0]}
            </MagneticButton>
          </div>

          {/* ======================================================
              TRUST / STATS
              ====================================================== */}

          <div
            className="
              relative
              z-20
              mt-6
              grid
              grid-cols-1
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-primary-deep/35
              backdrop-blur-sm
              sm:mt-8
              sm:grid-cols-3
              sm:divide-x
              sm:divide-white/10
              lg:max-w-2xl
              lg:border-0
              lg:bg-transparent
              lg:backdrop-blur-none
            "
          >
            {/* ==================================================
                ON-TIME
                ================================================== */}

            <div
              className="
                flex
                min-h-[52px]
                items-center
                gap-3
                px-4
                py-3
                text-xs
                text-white/85
                sm:min-h-0
                sm:px-4
                sm:py-2
                lg:px-0
                lg:py-0
              "
            >
              <ShieldCheck
                className="
                  h-4
                  w-4
                  shrink-0
                  text-accent
                "
              />

              <span className="whitespace-nowrap font-medium">
                95% on-time delivery
              </span>
            </div>

            {/* ==================================================
                PAN INDIA
                ================================================== */}

            <div
              className="
                flex
                min-h-[52px]
                items-center
                gap-3
                border-t
                border-white/10
                px-4
                py-3
                text-xs
                text-white/85
                sm:min-h-0
                sm:border-t-0
                sm:px-4
                sm:py-2
                lg:px-4
                lg:py-0
              "
            >
              <MapPinned
                className="
                  h-4
                  w-4
                  shrink-0
                  text-accent
                "
              />

              <span className="whitespace-nowrap font-medium">
                Pan-India coverage
              </span>
            </div>

            {/* ==================================================
                VEHICLES
                ================================================== */}

            <div
              className="
                flex
                min-h-[52px]
                items-center
                gap-3
                border-t
                border-white/10
                px-4
                py-3
                text-xs
                text-white/85
                sm:min-h-0
                sm:border-t-0
                sm:px-4
                sm:py-2
                lg:px-4
                lg:py-0
              "
            >
              <Truck
                className="
                  h-4
                  w-4
                  shrink-0
                  text-accent
                "
              />

              <span className="whitespace-nowrap font-medium">
                350+ vehicles in network
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==========================================================
          TRUST MARQUEE

          Kept visually attached to hero.
          No delayed entrance animation.
          ========================================================== */}

      <div
        className="
          relative
          z-10
          mt-6
          border-y
          border-white/10
          bg-primary-deep/45
          py-4
          backdrop-blur-sm
          sm:mt-10
          sm:py-5
          lg:mt-20
        "
      >
        <Marquee duration={36}>
          {[
            'Full Truck Load',
            'Part Truck Load',
            'Industrial Transportation',
            'Door-to-Door Logistics',
            'Time-Bound Deliveries',
            'Supply Chain Support',
            'Pan India Coverage',
            'Dedicated Fleet Solutions',
          ].map((t, i) => (
            <span
              key={i}
              className="
                flex
                items-center
                gap-4
                px-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white/50
                sm:px-7
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              <span
                className="
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-accent
                "
              />

              {t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ==========================================================
          SCROLL HINT
          ========================================================== */}

      <motion.div
        aria-hidden
        className="
          absolute
          bottom-4
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          lg:block
        "
      >
        <div
          className="
            flex
            h-10
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-white/20
            p-1.5
          "
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              h-1.5
              w-1
              rounded-full
              bg-accent
            "
          />
        </div>
      </motion.div>
    </section>
  );
}