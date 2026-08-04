'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Route, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { cities } from '@/lib/constants/cities';
import { images } from '@/lib/constants/images';

export function CoverageMap() {
  return (
    <section className="section-py relative overflow-hidden bg-secondary/30">
      <div aria-hidden className="absolute inset-0 bg-radial-fade" />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Coverage"
          title="Truly pan-India, locally present"
          highlight="28 states, 8 union territories, 500+ lanes and 1,200+ pin codes — with dedicated local SEO pages for the NCR and beyond."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card sm:aspect-[16/11]">
              <Image
                src={images.highwayInterchangeNight}
                alt="Aerial night view of illuminated highway interchange — India logistics network"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">Pan-India network</p>
                <p className="mt-1 text-lg font-semibold text-white">From Delhi to every corner of India</p>
              </div>
            </div>
          </Reveal>

          {/* City list + info */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Building2 className="h-5 w-5 text-accent" />
                  Local presence across NCR &amp; Haryana
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  We serve every major industrial cluster across the National Capital Region and neighbouring states — with dedicated local teams who know your area.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-2.5">
                {cities.map((c, i) => (
                  <motion.li
                    key={c.slug}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={`/logistics/${c.slug}`}
                      className="group flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/5 hover:text-accent-bright hover:shadow-sm"
                    >
                      <MapPin className="h-3.5 w-3.5 text-accent transition-transform group-hover:scale-110" />
                      {c.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <Route className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span><span className="font-semibold text-foreground">Don&apos;t see your city?</span> We dispatch across all 28 states and 8 UTs. Call us — if there&apos;s a road, we can move your freight there.</span>
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-bright hover:underline"
                >
                  Talk to our team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
