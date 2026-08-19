import type { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Reveal, TextReveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { Parallax } from '@/components/animations/Motion';
import { AboutScaleSection } from '@/components/sections/home/AboutScaleSection';
import { IndustriesServed } from '@/components/sections/home/IndustriesServed';
import { generalFaqs } from '@/lib/constants/content';
import { images } from '@/lib/constants/images';
import { Target, Eye, HeartHandshake, IdCard, Award } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About TriFleet Logistics — Delhi-Based Pan-India Transport',
  description:
    'TriFleet Logistics is a fleet owner and transport contractor delivering reliable B2B transportation across India from our Delhi hub.',
  path: '/about',
});

const values = [
  { icon: Target, title: 'Mission', description: 'To move India\'s freight reliably, transparently and on time — every shipment, every lane, every day.' },
  { icon: Eye, title: 'Vision', description: 'To be India\'s most trusted full truck load logistics partner, recognised for reliability, safety and service.' },
  { icon: HeartHandshake, title: 'Values', description: 'Reliability over convenience. Transparency over opacity. Long-term partnerships over one-off transactions.' },
];

const registrations = [
  { icon: IdCard, label: 'Transport ID', value: '07AAYFT7179D1ZF' },
  { icon: Award, label: 'MSME Certificate Number', value: 'UDYAM-DL-11-0167140' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: 'About', path: '/about' }]), faqSchema(generalFaqs)]} />
      <PageHero
        eyebrow="About Us"
        title="A logistics company built for reliability"
        highlight="A fleet owner and transport contractor with a simple promise: your freight arrives on time, every time."
        breadcrumbs={[{ name: 'About', path: '/about' }]}
        image={images.delhiAerial1}
        imageAlt="Aerial view of Delhi, where TriFleet Logistics is based"
        align="split"
      />

      {/* Story */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden">
              <Parallax offset={40}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                  <Image src={images.truckHighway5} alt="TriFleet truck on the highway" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </Parallax>
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="About Us" title="Built right, from day one" align="left" />
              <Reveal delay={0.1}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  TriFleet Logistics is a fleet owner and transport contractor providing reliable freight transportation and logistics solutions. With our dedicated fleet and trusted logistics partners, we deliver safe, efficient, and timely transportation services while supporting our customers with customized supply chain solutions.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  With a 350+ vehicle network and a 95% on-time delivery rate, we move freight for manufacturers, FMCG brands, e-commerce players and exporters across India — and the promise has not changed.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  Today, TriFleet is a logistics partner, not just a vendor. We sit at the table when our clients plan their networks, and we are accountable for the outcomes that matter to their business.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="What drives us" title="Mission, Vision & Values" highlight="The principles that guide every decision at TriFleet — from dispatch to delivery." />
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

      {/* Stats / Scale */}
      <AboutScaleSection />

      {/* Compliance — registered credentials */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Compliance" title="Registered and compliant" highlight="TriFleet operates as a fully registered transport contractor under the following credentials." />

          <StaggerGroup stagger={0.1} className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {registrations.map((r) => (
              <StaggerItem key={r.label}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-accent/20 bg-card p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-bright">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.label}</p>
                    <p className="mt-1 font-mono text-base font-semibold tracking-tight text-foreground">{r.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Industries */}
      <IndustriesServed />

      <FaqSection faqs={generalFaqs} eyebrow="FAQ" title="Frequently asked questions" highlight="Answers to the questions we hear most from businesses exploring TriFleet." />

      <CtaSection title="Let's build something reliable together" highlight="Whether it's a single truckload or a multi-lane programme, we'd love to be your logistics partner." />
    </>
  );
}