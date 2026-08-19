import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';
import { images } from '@/lib/constants/images';

export const metadata: Metadata = constructMetadata({
  title: 'Logistics Services — FTL, PTL, Industrial & B2B Transport',
  description:
    'Explore TriFleet Logistics services: full truck load, part truck load, industrial transportation, door-to-door logistics, supply chain support, dedicated fleet and B2B logistics across India.',
  path: '/services',
});

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: 'Services',
            path: '/services',
          },
        ])}
      />

      <PageHero
        eyebrow="Our Services"
        title="Logistics services, end to end"
        highlight="Specialised services covering every transport need — from a single full truck load to a dedicated, contracted multi-lane programme."
        breadcrumbs={[
          {
            name: 'Services',
            path: '/services',
          },
        ]}
        image={images.truckHighway1}
        imageAlt="TriFleet logistics services"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading
            eyebrow="All Services"
            title="What we move, and how"
            highlight="Every service below is backed by our full fleet and logistics partner network."
          />

          <StaggerGroup
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">

                  {/* Service Image */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                    <Image
                      src={s.image}
                      alt={`${s.title} — TriFleet Logistics`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={s.slug === 'full-truck-load'}
                    />

                    {/* Image overlay */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(
                          to top,
                          ${s.accent}66,
                          transparent 60%
                        )`,
                      }}
                    />

                    {/* Service badge */}
                    <span
                      className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm"
                      style={{
                        background: s.accent,
                      }}
                    >
                      {s.shortTitle}
                    </span>

                    {/* Service icon */}
                    <span
                      className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: s.accent,
                      }}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-2.5 p-6">
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{
                        color: s.accent,
                      }}
                    >
                      {s.tagline}
                    </p>

                    <h3 className="text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.excerpt}
                    </p>

                    
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
}