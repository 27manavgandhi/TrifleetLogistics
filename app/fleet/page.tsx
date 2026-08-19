import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { Reveal } from '@/components/animations/Reveal';
import { Parallax } from '@/components/animations/Motion';
import { fleet } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { CheckCircle2, Package } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Fleet — Trucks, Trailers & Specialised Vehicles',
  description:
    'Explore the TriFleet Logistics fleet: 32ft containers, 20ft open bodies, 40ft trailers, low-bed trailers and part-load vans — well-maintained vehicles matched to every cargo profile.',
  path: '/fleet',
});

const fleetImages: Record<string, string> = {
  '32ft-container': images.fleet1,
  '20ft-open': images.fleet2,
  '40ft-trailer': images.fleet3,
  'low-bed-trailer': images.fleet4,
  'part-load-van': images.fleet5,
};

export default function FleetPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Fleet', path: '/fleet' }])} />
      <PageHero
        eyebrow="Our Fleet"
        title="A vehicle for every cargo profile"
        highlight="From closed containers to low-bed trailers, our fleet is well-maintained in-house and ready for every lane."
        breadcrumbs={[{ name: 'Fleet', path: '/fleet' }]}
        image={images.semiParked1}
        imageAlt="TriFleet trucks parked at the yard"
        align="split"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Vehicle Types" title="Built for the load, not just the lane" highlight="Every vehicle in our fleet passes a pre-dispatch safety check before it rolls." />

          <div className="mt-16 flex flex-col gap-16 sm:gap-24">
            {fleet.map((v, i) => {
              const reversed = i % 2 === 1;
              return (
                <article key={v.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Image */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <Reveal>
                      <Parallax offset={26}>
                        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                          <Image
                            src={fleetImages[v.slug] ?? images.truckHighway3}
                            alt={v.name}
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/50 via-transparent to-transparent" />
                          <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary-deep shadow-lg">
                            <v.icon className="h-6 w-6" />
                          </span>
                        </div>
                      </Parallax>
                    </Reveal>
                  </div>

                  {/* Content */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <Reveal delay={0.1}>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                        {v.type}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {v.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {v.bodyType}.
                      </p>

                      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-border bg-secondary/50 p-4">
                        <Package className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <p className="text-sm leading-relaxed text-foreground">
                          <span className="font-semibold">Ideal for:</span> {v.idealFor}
                        </p>
                      </div>

                      <ul className="mt-5 grid grid-cols-2 gap-2.5">
                        {v.features.map((f) => (
                          <li key={f} className="inline-flex items-center gap-1.5 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection title="Need a specific vehicle?" highlight="Tell us about your cargo and we'll match the right vehicle, route and schedule for your shipment." />
    </>
  );
}