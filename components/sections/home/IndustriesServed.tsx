'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { SectionHeading } from '@/components/sections/SectionHeading';
import {
  StaggerGroup,
  StaggerItem,
} from '@/components/animations/Reveal';
import { industries } from '@/lib/constants/industries';

export function IndustriesServed() {
  return (
    <section
      className="
        section-py
        relative
        overflow-hidden
        bg-primary-deep
        text-primary-foreground
      "
    >
      {/* =========================
          BACKGROUND
          ========================= */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-dark opacity-30"
      />

      <div
        aria-hidden
        className="
          absolute
          -left-1/4
          top-0
          h-[50vh]
          w-[50vh]
          rounded-full
          bg-accent/20
          blur-[120px]
          animate-aurora
        "
      />

      {/* =========================
          CONTENT
          ========================= */}
      <div
        className="
          container-px
          relative
          z-10
          mx-auto
          w-full
          max-w-8xl
        "
      >
        {/* =========================
            SECTION HEADING

            Mobile-specific wrapper ensures
            heading remains visible and doesn't
            get clipped/collapsed.
            ========================= */}
        <div className="relative z-20 w-full text-white">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise that moves with you"
            highlight="We tailor vehicles, crews and processes to the realities of your industry — from manufacturing lines to heavy engineering."
          />
        </div>

        {/* =========================
            INDUSTRY CARDS
            ========================= */}
        <StaggerGroup
          stagger={0.06}
          className="
            relative
            z-10
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:mt-14
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                className="
                  group
                  flex
                  h-full
                  min-h-[220px]
                  flex-col
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-accent/50
                  hover:bg-white/10
                  sm:min-h-0
                  sm:p-6
                "
              >
                {/* Icon */}
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-accent/15
                    text-accent-bright
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-accent
                    group-hover:text-primary-deep
                  "
                >
                  <ind.icon className="h-6 w-6" />
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {ind.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      leading-relaxed
                      text-white/70
                    "
                  >
                    {ind.excerpt}
                  </p>
                </div>

                {/* Learn more */}
                <span
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-1
                    text-xs
                    font-medium
                    text-accent-bright
                  "
                >
                  Learn more

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}