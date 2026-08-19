'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TextReveal, Reveal } from '@/components/animations/Reveal';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { Breadcrumb, type Crumb } from '@/components/layout/Breadcrumb';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { cn } from '@/lib/utils';

export function PageHero({
  eyebrow,
  title,
  highlight,
  breadcrumbs,
  image,
  imageAlt,
  primaryLabel = 'Get a Quote',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  breadcrumbs: Crumb[];
  image: string;
  imageAlt: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: 'center' | 'split';
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep pb-20 pt-32 text-primary-foreground sm:pt-40 lg:pb-28">
      <GridBackdrop variant="dark" />
      <AuroraBackground variant="dark" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container-px relative mx-auto max-w-8xl">
        <Reveal>
          <Breadcrumb items={breadcrumbs} className="[&_a]:text-white/60 [&_span]:text-white/80 [&_.text-muted-foreground]:text-white/40 [&_svg]:text-white/40" />
        </Reveal>

        {align === 'split' ? (
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {eyebrow}
                </span>
              </Reveal>
              <TextReveal text={title} as="h1" className="justify-start text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl" />
              {highlight && (
                <Reveal delay={0.1}>
                  <p className="max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">{highlight}</p>
                </Reveal>
              )}
              <Reveal delay={0.18}>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton as="a" href={primaryHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright">
                    {primaryLabel} <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  {secondaryLabel && secondaryHref && (
                    <MagneticButton as="a" href={secondaryHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright">
                      {secondaryLabel}
                    </MagneticButton>
                  )}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-primary-deep/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        ) : (
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            </Reveal>
            <TextReveal text={title} as="h1" className="mt-5 justify-center text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl" />
            {highlight && (
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">{highlight}</p>
              </Reveal>
            )}
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton as="a" href={primaryHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright">
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                {secondaryLabel && secondaryHref && (
                  <MagneticButton as="a" href={secondaryHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright">
                    {secondaryLabel}
                  </MagneticButton>
                )}
              </div>
            </Reveal>
          </div>
        )}
      </div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 lg:block"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
