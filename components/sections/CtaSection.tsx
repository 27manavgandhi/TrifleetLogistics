'use client';

import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { siteConfig } from '@/lib/constants/site';

export function CtaSection({
  title = 'Ready to move your freight with confidence?',
  highlight = 'Get a quote in minutes, or talk to our logistics team. We respond within a few business hours.',
  primaryLabel = 'Get a Quote',
  primaryHref = '/contact',
  secondaryLabel = 'Call us',
}: {
  title?: string;
  highlight?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-24 text-primary-foreground sm:py-32">
      <GridBackdrop variant="dark" />
      <AuroraBackground variant="dark" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="container-px relative mx-auto max-w-8xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Let&apos;s talk
            </span>
          </Reveal>
          <TextReveal
            text={title}
            as="h2"
            className="mt-5 justify-center text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              {highlight}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <MagneticButton
                as="a"
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright"
              >
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={`tel:${siteConfig.contact.phoneE164[0]}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright"
              >
                <Phone className="h-4 w-4" /> {secondaryLabel} {siteConfig.contact.phones[0]}
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappE164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent-bright"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Or WhatsApp us at {siteConfig.contact.whatsapp}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
