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

  const socialLinks = [
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
  ];

  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      {/* =========================
          BACKGROUND
          ========================= */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-dark opacity-25"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
      />

      {/* =========================
          FOOTER MARQUEE
          ========================= */}
      <div className="relative overflow-hidden border-b border-white/10 bg-primary-deep/60 py-4 sm:py-3">
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
              className="
                flex
                shrink-0
                items-center
                gap-3
                px-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/80
                sm:px-7
                sm:text-[11px]
                sm:tracking-[0.18em]
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

              <span className="whitespace-nowrap">
                {text}
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* =========================
          MAIN FOOTER
          ========================= */}
      <div
        className="
          relative
          container-px
          mx-auto
          max-w-8xl
          py-10
          sm:py-12
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            md:gap-9
            lg:grid-cols-4
            xl:grid-cols-[1.4fr_1fr_0.85fr_1.4fr]
          "
        >
          {/* =========================================================
              BRAND
          ========================================================= */}
          <div className="flex min-w-0 flex-col gap-5">
            <Link
              href="/"
              className="flex w-fit items-center gap-2"
              aria-label="TriFleet Logistics home"
            >
              {/* Logo */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
                <Image
                  src="/images/logo.png"
                  alt="TriFleet Logistics Logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              {/* Brand */}
              <span className="flex min-w-0 flex-col leading-none">
                <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl">
                  TriFleet
                </span>

                <span className="mt-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Logistics
                </span>
              </span>
            </Link>

            {/* =========================
                COMPANY DESCRIPTION
                ========================= */}
            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-white/75
                sm:text-[13px]
                sm:leading-relaxed
              "
            >
              {siteConfig.description}
            </p>

            {/* =========================
                SOCIAL LINKS
                ========================= */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/20
                      bg-white/5
                      text-white/80
                      transition-all
                      duration-200
                      hover:border-accent
                      hover:bg-accent
                      hover:text-primary-deep
                      sm:h-8
                      sm:w-8
                    "
                  >
                    <Icon
                      className="h-4 w-4 sm:h-3.5 sm:w-3.5"
                      strokeWidth={2}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              COMPANY
          ========================================================= */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Company
            </h3>

            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={`${link.href}-${link.title}`}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      text-white/75
                      transition-colors
                      hover:text-accent-bright
                      sm:text-[13px]
                    "
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
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Resources
            </h3>

            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={`${link.href}-${link.title}`}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      text-white/75
                      transition-colors
                      hover:text-accent-bright
                      sm:text-[13px]
                    "
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
          <div className="flex min-w-0 flex-col gap-5">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Stay Connected
              </h3>

              <p className="mt-2 text-sm leading-5 text-white/70 sm:text-[13px]">
                Logistics insights and fleet news, monthly.
              </p>
            </div>

            {/* Newsletter */}
            <NewsletterForm variant="dark" />

            {/* =========================
                CONTACT DETAILS
                ========================= */}
            <div
              className="
                flex
                flex-col
                gap-3
                text-sm
                text-white/80
                sm:text-[12px]
              "
            >
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={2}
                />

                <span className="min-w-0 break-words leading-5">
                  {siteConfig.contact.address.full}
                </span>
              </div>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="
                  flex
                  min-w-0
                  items-start
                  gap-3
                  break-all
                  transition-colors
                  hover:text-accent-bright
                "
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={2}
                />

                <span className="min-w-0">
                  {siteConfig.contact.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.contact.phoneE164[0]}`}
                className="
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-accent-bright
                "
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-accent"
                  strokeWidth={2}
                />

                <span className="whitespace-nowrap">
                  {siteConfig.contact.phones[0]}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-3
                  transition-colors
                  hover:text-accent-bright
                "
              >
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={2}
                />

                <span className="min-w-0">
                  WhatsApp {siteConfig.contact.whatsapp}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-6
            text-xs
            text-white/60
            sm:mt-9
            sm:gap-4
            sm:pt-5
            sm:text-[11px]
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* =========================
              COPYRIGHT + LEGAL
          ========================= */}
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-5
              sm:gap-y-2
            "
          >
            <p className="whitespace-nowrap">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                href="/sitemap.xml"
                className="transition-colors hover:text-white"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* =========================
              CREDIT + BACK TO TOP
          ========================= */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              sm:justify-start
            "
          >
            <span className="leading-5">
              Built with{' '}
              <span className="text-accent">♥</span>{' '}
              by{' '}
              <a
                href="https://trilokixinnovation.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-accent-bright"
              >
                Triloki Innovations
              </a>
            </span>

            <a
              href="#"
              aria-label="Back to top"
              className="
                group
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-white/15
                bg-white/5
                text-white/60
                transition-all
                hover:border-accent
                hover:bg-accent
                hover:text-primary-deep
                sm:h-7
                sm:w-7
              "
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}