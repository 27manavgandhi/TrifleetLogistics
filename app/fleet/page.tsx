import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { fleet } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Fleet — Trucks, Trailers, Reefers & Specialised Vehicles',
  description:
    'Explore the Tri Fleet Logistics fleet: 32ft containers, 20ft open bodies, 40ft semi-trailers, low-bed trailers, refrigerated reefers and part-load vans — 500+ GPS-tracked vehicles.',
  path: '/fleet',
});

const fleetImages: Record<string, string> = {
  '32ft-container': images.truckHighway2,
  '20ft-open': images.truckHighway4,
  '40ft-semi-trailer': images.semiConvoy,
  'low-bed-trailer': images.craneBlue,
  'reefer': images.reeferTrucks,
  'part-load-van': images.loadingVan,
};

export default function FleetPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Fleet', path: '/fleet' }])} />
      <PageHero
        eyebrow="Our Fleet"
        title="500+ vehicles, matched to your cargo"
        highlight="From closed containers to low-bed trailers and validated reefers, our fleet is maintained in-house and GPS-tracked end to end."
        breadcrumbs={[{ name: 'Fleet', path: '/fleet' }]}
        image={images.semiParked1}
        imageAlt="Tri Fleet trucks parked at the yard"
        align="split"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Vehicle Types" title="A vehicle for every cargo profile" highlight="Every vehicle in our fleet is fitted with GPS telematics and passes a pre-dispatch safety check before it rolls." />
          <StaggerGroup stagger={0.08} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((v) => (
              <StaggerItem key={v.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={fleetImages[v.slug] ?? images.truckHighway3} alt={v.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary-deep">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-3 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">{v.count} vehicles</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{v.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{v.type}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Capacity</p>
                        <p className="font-semibold text-foreground">{v.capacityTonnes}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Body</p>
                        <p className="font-semibold text-foreground">{v.bodyType}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Ideal for: {v.idealFor}</p>
                    <ul className="flex flex-col gap-2 border-t border-border pt-4">
                      {v.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection title="Need a specific vehicle?" highlight="Tell us about your cargo and we'll match the right vehicle, route and schedule for your shipment." />
    </>
  );
}
