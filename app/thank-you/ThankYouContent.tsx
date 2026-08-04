'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { siteConfig } from '@/lib/constants/site';

export function ThankYouContent() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-primary-deep px-5 py-32 text-center text-primary-foreground">
      <GridBackdrop variant="dark" />
      <AuroraBackground variant="dark" />
      <div className="relative flex max-w-xl flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.1 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-success/20 text-success"
        >
          <CheckCircle2 className="h-12 w-12" />
        </motion.div>
        <TextReveal text="Thank you" as="h1" className="justify-center text-5xl font-bold tracking-tight text-white sm:text-6xl" />
        <Reveal delay={0.2}>
          <p className="text-pretty text-lg leading-relaxed text-white/70">
            Your message has been sent. Our team will get back to you within a few business hours. For urgent freight, call us directly.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <MagneticButton as="a" href={`tel:${siteConfig.contact.phoneE164[0]}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright">
              <Phone className="h-4 w-4" /> {siteConfig.contact.phones[0]}
            </MagneticButton>
            <a href={`https://wa.me/${siteConfig.contact.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <Link href="/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-accent-bright">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
