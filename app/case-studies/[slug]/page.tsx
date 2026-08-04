import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { caseStudies } from '@/lib/constants/content';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { CtaSection } from '@/components/sections/CtaSection';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { images } from '@/lib/constants/images';

const csImages: Record<string, string> = {
  'fmcg-north-india-distribution': images.warehouseTruckDock,
  'pharma-cold-chain-delhi-bangalore': images.reeferTrucks,
  'automotive-jit-lane-delivery': images.truckHighway2,
  'ecommerce-peak-season-line-haul': images.boxesVan,
  'industrial-heavy-machinery-transport': images.craneBlue,
  'textile-export-panipat-mundra': images.truckHighway4,
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return constructMetadata({ title: 'Case Study Not Found', path: '/case-studies' });
  return constructMetadata({
    title: `${cs.title} — Case Study`,
    description: cs.excerpt,
    path: `/case-studies/${cs.slug}`,
    tags: cs.tags,
    type: 'article',
  });
}

export default function CaseStudyDetail({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();
  const img = csImages[cs.slug] ?? images.truckHighway3;
  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  const blocks = [
    { icon: Target, label: 'The Challenge', text: cs.challenge },
    { icon: Lightbulb, label: 'Our Solution', text: cs.solution },
    { icon: TrendingUp, label: 'The Outcome', text: cs.outcome },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: 'Case Studies', path: '/case-studies' }, { name: cs.title, path: `/case-studies/${cs.slug}` }]), articleSchema(cs.slug, cs.title, cs.excerpt, '2025-01-01')]} />

      <section className="relative overflow-hidden bg-primary-deep pb-16 pt-32 text-primary-foreground sm:pt-40">
        <GridBackdrop variant="dark" />
        <AuroraBackground variant="dark" />
        <div className="container-px relative mx-auto max-w-5xl">
          <Reveal>
            <Breadcrumb items={[{ name: 'Case Studies', path: '/case-studies' }, { name: cs.title, path: `/case-studies/${cs.slug}` }]} className="[&_a]:text-white/60 [&_span]:text-white/80 [&_.text-muted-foreground]:text-white/40" />
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-deep">{cs.sector}</span>
            {cs.tags.map((t) => <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{t}</span>)}
          </div>
          <TextReveal text={cs.title} as="h1" className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl" />
          <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{cs.excerpt}</p></Reveal>
        </div>
      </section>

      <section className="relative">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-card">
              <Image src={img} alt={cs.title} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex flex-col gap-10">
            {blocks.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.05}>
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-bright">
                    <b.icon className="h-4 w-4" /> {b.label}
                  </span>
                  <p className="text-pretty text-base leading-relaxed text-foreground/90">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-foreground">Results in numbers</h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                    <p className="text-3xl font-bold text-primary">{m.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection title="Want results like these?" highlight={`The ${cs.sector} outcome above is one example. Let's talk about what we can do for your freight.`} />

      <section className="section-py bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">More case studies</h2>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                <span className="text-xs font-semibold text-accent-bright">{c.sector}</span>
                <h3 className="text-base font-semibold leading-snug text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent-bright">Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
