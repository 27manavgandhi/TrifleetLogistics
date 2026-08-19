'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  ArrowUp,
} from 'lucide-react';
import Image from 'next/image';
import { siteConfig, footerNav } from '@/lib/constants/site';
import { Marquee } from '@/components/animations/Motion';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export function Footer() {
  /*
   * Keep only the useful navigation groups.
   * Services are merged into Company.
   * Locations are intentionally removed.
   */
  const companyLinks = [
    ...(footerNav.find((col) => col.title === 'Company')?.links ?? []),
    ...(footerNav.find((col) => col.title === 'Services')?.links ?? []),
  ];

  const resourceLinks =
    footerNav.find((col) => col.title === 'Resources')?.links ?? [];

  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground/80">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />

      {/* Marquee */}
      <div className="relative border-b border-white/10 py-3">
        <Marquee
          duration={36}
          className="[--marquee-duration:36s]"
        >
          {[
            'Pan-India FTL & PTL',
            'Trusted Logistics Partners',
            '95% On-Time Delivery',
            'Door-to-Door Logistics',
            'Hazmat Certified Crews',
          ].map((text, index) => (
            <span
              key={index}
              className="flex items-center gap-3 px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {text}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Main Footer */}
      <div className="relative container-px mx-auto max-w-8xl py-10 lg:py-12">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.4fr_1fr_0.85fr_1.4fr]">

          {/* =========================================================
              BRAND
          ========================================================= */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex w-fit items-center gap-0.5"
              aria-label="TriFleet Logistics home"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="TriFleet Logistics Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>

              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-white">
                  TriFleet
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Logistics
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-[13px] leading-relaxed text-white/55">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                {
                  icon: Linkedin,
                  href: siteConfig.social.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: Instagram,
                  href: siteConfig.social.instagram,
                  label: 'Instagram',
                },
                {
                  icon: Facebook,
                  href: siteConfig.social.facebook,
                  label: 'Facebook',
                },
                {
                  icon: Twitter,
                  href: siteConfig.social.twitter,
                  label: 'Twitter',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/55 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-primary-deep"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* =========================================================
              COMPANY
              Includes Services
          ========================================================= */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>

            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={`${link.href}-${link.title}`}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/60 transition-colors hover:text-accent-bright"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />

                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================
              RESOURCES
          ========================================================= */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Resources
            </h3>

            <ul className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <li key={`${link.href}-${link.title}`}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/60 transition-colors hover:text-accent-bright"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />

                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================
              STAY CONNECTED + CONTACT
          ========================================================= */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Stay Connected
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                Logistics insights and fleet news, monthly.
              </p>
            </div>

            {/* Newsletter */}
            <NewsletterForm variant="dark" />

            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-2.5 text-[12px] text-white/55">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />

                <span>
                  {siteConfig.contact.address.full}
                </span>
              </div>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-accent-bright"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />

                {siteConfig.contact.email}
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneE164[0]}`}
                className="flex items-center gap-2 transition-colors hover:text-accent-bright"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />

                {siteConfig.contact.phones[0]}
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent-bright"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-accent" />

                WhatsApp {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright + Legal */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white/70"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white/70"
              >
                Terms
              </Link>

              <Link
                href="/sitemap.xml"
                className="transition-colors hover:text-white/70"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Credit + Back To Top */}
          <div className="flex items-center gap-4">
            <span>
              Built with{' '}
              <span className="text-accent">♥</span>{' '}
              by{' '}
              <a
                href="https://trilokixinnovation.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-bright"
              >
                Triloki Innovations
              </a>
            </span>

            <a
              href="#"
              aria-label="Back to top"
              className="group flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/40 transition-all hover:border-accent hover:bg-accent hover:text-primary-deep"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}