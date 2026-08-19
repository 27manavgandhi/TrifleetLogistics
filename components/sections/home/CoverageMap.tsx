'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Route, Compass } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Reveal } from '@/components/animations/Reveal';
import { cities } from '@/lib/constants/cities';

/**
 * Pan-India regional breakdown. Replaces the old NCR-only city list as the
 * headline content on the right — this is what actually communicates "we
 * cover the whole country," with the NCR cities demoted to a "local hubs"
 * footnote since that's genuinely where dedicated local teams sit.
 */
const regions = [
  { zone: 'North', states: ['Delhi NCR', 'Punjab', 'Haryana', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'J&K'] },
  { zone: 'West', states: ['Gujarat', 'Maharashtra', 'Goa'] },
  { zone: 'South', states: ['Karnataka', 'Telangana', 'Andhra Pradesh', 'Tamil Nadu', 'Kerala'] },
  { zone: 'East & Central', states: ['Madhya Pradesh', 'Chhattisgarh', 'Bihar', 'Jharkhand', 'Odisha'] },
  { zone: 'Northeast', states: ['Assam', 'Meghalaya', 'Tripura', 'Manipur', 'Mizoram', 'Nagaland'] },
];

const coverageStats = [
  { value: '28', label: 'States' },
  { value: '8', label: 'Union Territories' },
  { value: '5000+', label: 'Pin Codes' },
];

export function CoverageMap() {
  return (
    <section className="section-py relative overflow-hidden bg-secondary/30">
      <div aria-hidden className="absolute inset-0 bg-radial-fade" />
      <div className="container-px relative mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Coverage"
          title="Truly pan-India, locally present"
          highlight="We cover pan India — 28 states, 8 union territories and 5000+ pin codes, with dedicated local teams across the NCR and beyond."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* India coverage map — stretches to match the height of the regional grid on the right */}
          <Reveal>
            <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card sm:min-h-[520px]">
              <div className="relative flex-1">
                <Image
                  src="/map.png"
                  alt="Map of India showing TriFleet's operable states and service zones"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              {/* Bottom stat strip */}
              <div className="mt-4 flex justify-center gap-2 sm:gap-3">
                {coverageStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 rounded-xl border border-accent/20 bg-secondary/50 px-3 py-2.5 text-center"
                  >
                    <p className="text-lg font-bold text-primary sm:text-xl">{s.value}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Pan-India regional breakdown */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Compass className="h-5 w-5 text-accent" />
                  Service zones across every region
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  From the Kashmir valley to the southern coast, and the western ports to the northeast — TriFleet moves freight across every zone on the map.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {regions.map((r, i) => (
                  <motion.div
                    key={r.zone}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="rounded-xl border border-border bg-card p-3.5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">{r.zone}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">{r.states.join(', ')}</p>
                  </motion.div>
                ))}

                {/* Local hubs card sits in the grid alongside the regions */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + regions.length * 0.06 }}
                  className="rounded-xl border border-accent/30 bg-accent/5 p-3.5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">Local hubs</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/logistics/${c.slug}`}
                        className="group inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent-bright"
                      >
                        <MapPin className="h-3 w-3 text-accent transition-transform group-hover:scale-110" />
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="mt-auto rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <Route className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span><span className="font-semibold text-foreground">Don&apos;t see your city?</span> We dispatch pan India, across all 28 states and 8 UTs. Call us — if there&apos;s a road, we can move your freight there.</span>
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