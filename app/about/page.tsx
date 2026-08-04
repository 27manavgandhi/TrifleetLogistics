import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { Reveal, TextReveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { Parallax } from '@/components/animations/Motion';
import { AboutScaleSection } from '@/components/sections/home/AboutScaleSection';
import { safetyStandards, certifications } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { Target, Eye, HeartHandshake, Award, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Tri Fleet Logistics — Delhi-Based Pan-India Transport',
  description:
    'Founded in Delhi in 2011, Tri Fleet Logistics is a full truck load logistics company delivering reliable, GPS-tracked B2B transportation across India from our Mangolpuri control room.',
  path: '/about',
});

const values = [
  { icon: Target, title: 'Mission', description: 'To move India\'s freight reliably, transparently and on time — every shipment, every lane, every day.' },
  { icon: Eye, title: 'Vision', description: 'To be India\'s most trusted full truck load logistics partner, recognised for technology, safety and service.' },
  { icon: HeartHandshake, title: 'Values', description: 'Reliability over convenience. Transparency over opacity. Long-term partnerships over one-off transactions.' },
];

const milestones = [
  { year: '2011', title: 'Founded in Delhi', description: 'Tri Fleet Logistics begins operations from Mangolpuri with a handful of trucks.' },
  { year: '2015', title: 'GPS fleet-wide', description: 'Every vehicle in the network fitted with GPS telematics and milestone tracking.' },
  { year: '2018', title: 'Control room live', description: '24/7 control room opens, transforming exception management and client communication.' },
  { year: '2021', title: 'Pan-India scale', description: 'Network expands to 500+ lanes and 1,200+ pin codes across 28 states.' },
  { year: '2024', title: 'Digital POD', description: 'Photo-verified, timestamped proof of delivery rolled out across the fleet.' },
  { year: '2025', title: '500+ vehicles', description: 'A modern fleet across containers, trailers, reefers and specialised trucks.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'About', path: '/about' }])} />
      <PageHero
        eyebrow="About Us"
        title="A logistics company built for reliability"
        highlight="From a handful of trucks in 2011 to a 500+ vehicle pan-India network — Tri Fleet has grown by keeping a simple promise: your freight arrives on time."
        breadcrumbs={[{ name: 'About', path: '/about' }]}
        image={images.delhiAerial1}
        imageAlt="Aerial view of Delhi, where Tri Fleet Logistics is based"
        align="split"
      />

      {/* Story */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <Parallax offset={40}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                  <Image src={images.truckHighway5} alt="Tri Fleet truck on the highway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </Parallax>
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Our Story" title="From Mangolpuri to pan-India" align="left" />
              <Reveal delay={0.1}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Tri Fleet Logistics was founded in 2011 in the Mangolpuri Industrial Area of Delhi — right at the crossroads of North India\'s freight network. We started with a simple conviction: logistics in India deserved better than phone-tag, paper LRs and "I will check and call you back."
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Fourteen years later, that conviction has become a 500+ vehicle network, a 24/7 control room and a 98.6% on-time delivery rate. We move freight for manufacturers, FMCG brands, pharma companies, e-commerce players and exporters across 28 states — but the promise has not changed.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Today, Tri Fleet is a logistics partner, not just a vendor. We sit at the table when our clients plan their networks, we invest in the technology that keeps their freight visible, and we are accountable for the outcomes that matter to their business.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="What drives us" title="Mission, vision and values" highlight="The principles that guide every decision at Tri Fleet — from dispatch to delivery." />
          <StaggerGroup stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Our Journey" title="Fourteen years of moving India" highlight="The milestones that shaped Tri Fleet from a Delhi startup to a pan-India logistics network." />
          <div className="relative mt-16 pl-8 sm:pl-12">
            <div aria-hidden className="absolute left-0 top-2 h-full w-px bg-border" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.05}>
                  <div className="relative">
                    <span className="absolute -left-[2.05rem] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background sm:-left-[2.8rem]" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="text-3xl font-bold text-accent">{m.year}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Scale */}
      <AboutScaleSection />

      {/* Certifications & safety */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Compliance" title="Certified, audited, safe" highlight="The certifications and safety standards that underpin every Tri Fleet movement." />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <StaggerGroup stagger={0.07} className="grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <StaggerItem key={c.name}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <StaggerGroup stagger={0.07} className="flex flex-col gap-3">
              {safetyStandards.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CtaSection title="Let's build something reliable together" highlight="Whether it's a single truckload or a multi-lane programme, we'd love to be your logistics partner." />
    </>
  );
}
