'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { mainNav, siteConfig } from '@/lib/constants/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-[80] border-b bg-white transition-shadow duration-500',
          scrolled ? 'border-border/60 shadow-md' : 'border-border/40 shadow-sm'
        )}
      >
        <div className="container-px mx-auto flex h-16 max-w-8xl items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="group flex items-center gap-0.5 sm:gap-1" aria-label="TriFleet Logistics home">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl sm:h-12 sm:w-12 lg:h-14 lg:w-14">
              <Image
                src="/images/logo.png"
                alt="TriFleet Logistics Logo"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl">TriFleet</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">Logistics</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 2xl:flex" aria-label="Primary">
            {mainNav.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.children && setMegaOpen(item.title)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-accent-bright'
                      : 'text-foreground/80 hover:text-accent-bright'
                  )}
                >
                  {item.title}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>

                {item.children && megaOpen === item.title && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-3 shadow-card backdrop-blur-xl">
                        <div className="flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex flex-col gap-0.5 rounded-xl p-3 transition-colors hover:bg-accent/10"
                            >
                              <span className="text-sm font-semibold text-foreground">
                                {child.title}
                              </span>
                              {child.description && (
                                <span className="text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.contact.phoneE164[0]}`}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-accent-bright md:flex"
            >
              <Phone className="h-4 w-4 text-accent" />
              {siteConfig.contact.phones[0]}
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors 2xl:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] 2xl:hidden"
          >
            <div
              className="absolute inset-0 bg-primary-deep/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-background p-6 shadow-2xl pt-20"
              aria-label="Mobile"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 overflow-hidden rounded-lg">
                    <Image
                      src="/images/WhatsApp_Image_2026-07-25_at_12.09.00.jpeg"
                      alt="TriFleet Logistics Logo"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-base font-bold text-foreground">TriFleet</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.title}>
                    {item.children ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-accent/10">
                          {item.title}
                          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col gap-0.5 pl-2">
                          <Link
                            href={item.href}
                            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent/10"
                          >
                            Overview
                          </Link>
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent/10"
                            >
                              {c.title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-accent/10',
                          isActive(item.href) ? 'text-accent-bright' : 'text-foreground'
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <a
                  href={`tel:${siteConfig.contact.phoneE164[0]}`}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {siteConfig.contact.phones[0]}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}