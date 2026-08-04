import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowRight, ListChecks, Workflow, Building2, Star } from 'lucide-react';
import { services, getService, serviceDetails, serviceSlugs } from '@/lib/constants/services';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { Reveal, TextReveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { images } from '@/lib/constants/images';

const serviceImages: Record<string, string> = {
  'full-truck-load': images.truckHighway2,
  'part-truck-load': images.warehouseWorkers,
  'industrial-transportation': images.craneBlue,
  'commercial-cargo': images.loadingVan,
  'time-bound-deliveries': images.truckNightWheels,
  'door-to-door-logistics': images.truckSilver,
  'supply-chain-support': images.controlRoom4,
  'fleet-owner-services': images.semiParked1,
  'transport-contractor-services': images.forkliftWarehouse,
  'pan-india-logistics': images.delhiExpressway,
  'dedicated-fleet-solutions': images.semiConvoy,
  'b2b-logistics': images.controlRoom6,
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const svc = getService(params.slug);
  if (!svc) return constructMetadata({ title: 'Service Not Found', path: '/services' });
  return constructMetadata({
    title: `${svc.title} — ${svc.tagline}`,
    description: svc.excerpt,
    path: `/services/${svc.slug}`,
    tags: [svc.shortTitle, 'logistics', 'transport India'],
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const svc = getService(params.slug);
  if (!svc) notFound();
  const detail = serviceDetails[svc.slug];
  const img = serviceImages[svc.slug] ?? images.truckHighway3;

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: svc.title, path: `/services/${svc.slug}` }]),
        serviceSchema(svc.slug, svc.title, svc.excerpt),
        faqSchema(detail.faqs),
      ]} />

      <PageHero
        eyebrow={svc.shortTitle}
        title={detail.heroHeading}
        highlight={detail.heroSub}
        breadcrumbs={[{ name: 'Services', path: '/services' }, { name: svc.title, path: `/services/${svc.slug}` }]}
        image={img}
        imageAlt={svc.title}
        align="split"
        secondaryLabel="All services"
        secondaryHref="/services"
      />

      {/* Overview */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Overview" title={`What ${svc.title} means at Tri Fleet`} align="left" />
          <div className="mt-8 flex flex-col gap-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {detail.overview.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}><p>{para}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Benefits" title="Why choose our service" highlight="The concrete advantages you get when you run your freight through Tri Fleet." />
          <StaggerGroup stagger={0.07} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-bright">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Process */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Process" title="How it works" highlight="A clear, four-step process from booking to proof of delivery." />
          <StaggerGroup stagger={0.1} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="text-4xl font-bold text-accent/25">{p.step}</span>
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Workflow timeline */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading eyebrow="Workflow" title="The operating workflow" highlight="Each phase of a shipment, from booking to delivery." />
          <StaggerGroup stagger={0.1} className="mt-12 flex flex-col gap-4">
            {detail.workflow.map((w, i) => (
              <StaggerItem key={w.phase}>
                <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <div>
                    <p className="text-base font-semibold text-foreground">{w.phase}</p>
                    <p className="text-sm text-muted-foreground">{w.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Industries served */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Industries" title="Industries we serve" highlight="The sectors where this service is most commonly deployed." />
          <StaggerGroup stagger={0.06} className="mt-12 flex flex-wrap justify-center gap-3">
            {detail.industries.map((ind) => (
              <StaggerItem key={ind}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
                  <Building2 className="h-4 w-4 text-accent" /> {ind}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground sm:py-24">
        <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="container-px relative mx-auto max-w-8xl">
          <SectionHeading eyebrow="By the numbers" title="Service metrics" highlight="The numbers we protect on every shipment under this service." />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {detail.stats.map((s) => (
              <Reveal key={s.label} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Gallery" title="The service in motion" highlight="A visual look at how this service operates on the ground." />
          <StaggerGroup stagger={0.08} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.galleryQueries.map((_, i) => {
              const galleryImgs = [img, images.warehouseTruckDock, images.controlRoom5, images.truckSunset];
              return (
                <StaggerItem key={i}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-sm">
                    <Image src={galleryImgs[i % galleryImgs.length]} alt={`${svc.title} gallery ${i + 1}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading eyebrow="Case Study" title="Real outcome" highlight="A real result we delivered using this service." />
          <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
            {detail.caseStudy.map((cs) => (
              <div key={cs.client} className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-deep">{cs.sector}</span>
                  <span className="text-sm font-semibold text-foreground">{cs.client}</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">Challenge</p><p className="mt-1 text-sm text-muted-foreground">{cs.challenge}</p></div>
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-success">Solution</p><p className="mt-1 text-sm text-muted-foreground">{cs.solution}</p></div>
                  <div><p className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</p><p className="mt-1 text-sm text-muted-foreground">{cs.outcome}</p></div>
                </div>
                <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                  <p className="text-2xl font-bold">{cs.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel
        eyebrow="Client Voices"
        title="What clients say"
        highlight="Businesses that use this service share their experience with Tri Fleet."
      />

      <FaqSection faqs={detail.faqs} eyebrow="FAQ" title={`${svc.title} questions, answered`} highlight="The questions we hear most about this service." />

      <RelatedServices currentSlug={svc.slug} />

      <CtaSection title={`Ready for ${svc.title.toLowerCase()}?`} highlight={`Get a quote for ${svc.title.toLowerCase()} or talk to our logistics team. We respond within a few business hours.`} />
    </>
  );
}
