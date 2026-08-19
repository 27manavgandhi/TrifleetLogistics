import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { Reveal } from '@/components/animations/Reveal';
import { industries } from '@/lib/constants/industries';
import { images } from '@/lib/constants/images';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Industries We Serve — Sector-Specific Logistics',
  description:
    'TriFleet Logistics serves manufacturing, FMCG, construction, automotive, e-commerce, agriculture, energy and real estate with tailored transport solutions.',
  path: '/industries',
});

const indImages: Record<string, string> = {
  manufacturing: images.forkliftWarehouse,
  'retail-fmcg': images.loadingVan,
  construction: images.craneBlue,
  automotive: images.truckHighway2,
  ecommerce: images.boxesVan,
  agriculture: images.truckSunset,
  'energy-utilities': images.cranesSky,
  'real-estate': images.delhiIndustrial,
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Industries', path: '/industries' }])} />
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that moves with you"
        highlight="We tailor vehicles, crews and processes to the realities of your industry — from manufacturing lines to heavy engineering."
        breadcrumbs={[{ name: 'Industries', path: '/industries' }]}
        image={images.craneBlue}
        imageAlt="Industrial crane"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Sectors" title="Logistics tailored to your industry" highlight="Each industry has its own cargo profile, compliance requirements and delivery pressures. We design for all of them." />
          <div className="mt-14 flex flex-col gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.04}>
                <article
                  id={ind.slug}
                  className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-card-hover md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:w-2/5">
                    <Image src={indImages[ind.slug] ?? images.truckHighway3} alt={ind.title} fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deep/50 to-transparent md:bg-gradient-to-r" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary-deep shadow-lg">
                      <ind.icon className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/25">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-7 sm:p-9">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{ind.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.excerpt}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">Challenges we solve</p>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {ind.challenges.map((c) => <li key={c} className="text-xs text-muted-foreground">• {c}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-success">Our solutions</p>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {ind.solutions.map((s) => <li key={s} className="flex items-start gap-1.5 text-xs text-muted-foreground"><CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-success" /> {s}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-6 border-t border-border pt-5">
                      {ind.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-xl font-bold text-primary">{s.value}</p>
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
