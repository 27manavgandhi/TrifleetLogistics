import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { industries } from '@/lib/constants/industries';
import { images } from '@/lib/constants/images';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Industries We Serve — Sector-Specific Logistics',
  description:
    'Tri Fleet Logistics serves manufacturing, FMCG, pharmaceuticals, construction, automotive, e-commerce, agriculture, energy, real estate and chemicals with tailored transport solutions.',
  path: '/industries',
});

const indImages: Record<string, string> = {
  manufacturing: images.forkliftWarehouse,
  'retail-fmcg': images.loadingVan,
  pharmaceuticals: images.reeferTrucks,
  construction: images.craneBlue,
  automotive: images.truckHighway2,
  ecommerce: images.boxesVan,
  agriculture: images.truckSunset,
  'energy-utilities': images.cranesSky,
  'real-estate': images.delhiIndustrial,
  chemicals: images.tankerHighway,
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Industries', path: '/industries' }])} />
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that moves with you"
        highlight="We tailor vehicles, crews and processes to the realities of your industry — from pharma cold chain to heavy engineering."
        breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
        image={images.craneBlue}
        imageAlt="Industrial crane"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Sectors" title="Logistics tailored to your industry" highlight="Each industry has its own cargo profile, compliance requirements and delivery pressures. We design for all of them." />
          <StaggerGroup stagger={0.08} className="mt-14 grid gap-6 md:grid-cols-2">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug} >
                <article id={ind.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover md:flex-row">
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:w-2/5">
                    <Image src={indImages[ind.slug] ?? images.truckHighway3} alt={ind.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary-deep">
                      <ind.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-lg font-semibold text-foreground">{ind.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{ind.excerpt}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">Challenges we solve</p>
                        <ul className="mt-2 flex flex-col gap-1">
                          {ind.challenges.map((c) => <li key={c} className="text-xs text-muted-foreground">• {c}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-success">Our solutions</p>
                        <ul className="mt-2 flex flex-col gap-1">
                          {ind.solutions.map((s) => <li key={s} className="flex items-start gap-1.5 text-xs text-muted-foreground"><CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-success" /> {s}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-4">
                      {ind.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-lg font-bold text-primary">{s.value}</p>
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
