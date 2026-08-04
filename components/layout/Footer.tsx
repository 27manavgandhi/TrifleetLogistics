'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig, footerNav } from '@/lib/constants/site';
import { Marquee } from '@/components/animations/Motion';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground/80">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-40" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Marquee strip */}
      <div className="relative border-b border-white/10 py-5">
        <Marquee duration={32} className="[--marquee-duration:32s]">
          {['Pan-India FTL & PTL', '24/7 Control Room', 'GPS on every vehicle', '98.6% on-time delivery', 'Door-to-Door Logistics', 'Reefer & Hazmat certified'].map((t, i) => (
            <span key={i} className="flex items-center gap-4 px-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative container-px mx-auto max-w-8xl py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Tri Fleet Logistics home">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                <Image
                  src="/images/WhatsApp_Image_2026-07-25_at_12.09.00.jpeg"
                  alt="TriFleet Logistics Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Tri Fleet</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Logistics</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-primary-deep"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-accent-bright"
                    >
                      <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Newsletter</h3>
            <p className="text-sm text-white/70">Logistics insights and fleet news, monthly.</p>
            <NewsletterForm variant="dark" />
            <ul className="mt-2 flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent-bright">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${siteConfig.contact.phoneE164[0]}`} className="hover:text-accent-bright">{siteConfig.contact.phones[0]}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
                <a href={`https://wa.me/${siteConfig.contact.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright">
                  WhatsApp {siteConfig.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-accent-bright">Privacy</Link>
            <Link href="/terms" className="hover:text-accent-bright">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-accent-bright">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
