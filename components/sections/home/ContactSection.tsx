'use client';

import { QuoteForm } from '@/components/forms/QuoteForm';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/constants/site';

export function ContactSection() {
  return (
    <section className="section-py relative overflow-hidden">
      <AuroraBackground />
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Get a Quote
              </span>
            </Reveal>
            <TextReveal text="Tell us about your freight" as="h2" className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl" />
            <Reveal delay={0.1}>
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Share your lane, cargo and timeline and our team will get back to you within a few business hours with a quote — or call us directly.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: MapPin, label: 'Address', value: siteConfig.contact.address.full, href: '/contact' },
                  { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                  { icon: Phone, label: 'Phone', value: siteConfig.contact.phones[0], href: `tel:${siteConfig.contact.phoneE164[0]}` },
                  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.contact.whatsapp, href: `https://wa.me/${siteConfig.contact.whatsappE164}` },
                  { icon: Clock, label: 'Hours', value: siteConfig.contact.hours },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent-bright">{item.value}</a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">Request a quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fields marked with * are required.</p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
