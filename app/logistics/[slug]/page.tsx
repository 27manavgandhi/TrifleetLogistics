import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { cities, getCity } from '@/lib/constants/cities';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, localBusinessSchema, faqSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/animations/Reveal';
import { services } from '@/lib/constants/services';
import { images } from '@/lib/constants/images';

const cityImages: Record<string, string> = {
  delhi: images.delhiAerial1,
  noida: images.delhiAerial2,
  gurgaon: images.delhiNight2,
  faridabad: images.delhiIndustrial,
  ghaziabad: images.delhiPanorama,
  sonipat: images.delhiSprawl,
  bahadurgarh: images.delhiIndustrial,
  panipat: images.truckHighway4,
  rohtak: images.delhiExpressway,
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCity(params.slug);
  if (!city) return constructMetadata({ title: 'Location Not Found', path: '/contact' });
  return constructMetadata({
    title: `Logistics in ${city.name} — Full Truck Load & B2B Transport`,
    description: `TriFleet Logistics provides full truck load, part truck load and B2B logistics services in ${city.name}, ${city.state}. ${city.blurb}`,
    path: `/logistics/${city.slug}`,
    tags: [`logistics ${city.name}`, `transport ${city.name}`, `FTL ${city.name}`, `B2B logistics ${city.name}`],
  });
}

export default function CityPage({ params }: Props) {
  const city = getCity(params.slug);
  if (!city) notFound();
  const img = cityImages[city.slug] ?? images.delhiAerial1;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(city.mapQuery)}&output=embed`;

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ name: 'Locations', path: '/contact' }, { name: `Logistics in ${city.name}`, path: `/logistics/${city.slug}` }]),
        localBusinessSchema(),
        faqSchema(city.faqs),
      ]} />

      <PageHero
        eyebrow={`${city.name}, ${city.state}`}
        title={`Logistics in ${city.name}`}
        highlight={city.blurb}
        breadcrumbs={[{ name: 'Contact', path: '/contact' }, { name: `Logistics in ${city.name}`, path: `/logistics/${city.slug}` }]}
        image={img}
        imageAlt={`${city.name} ${city.state}`}
        align="split"
        secondaryLabel="Get a quote"
        secondaryHref="/contact"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow={`About ${city.name}`} title={`Freight movement in ${city.name}`} align="left" />
          <div className="mt-8 flex flex-col gap-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {city.intro.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}><p>{para}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Local Advantage" title={`Why ${city.name} businesses choose TriFleet`} highlight="Our local presence translates into faster pickups, on-the-ground support and reliable delivery." />
          <StaggerGroup stagger={0.08} className="mt-12 grid gap-4 sm:grid-cols-2">
            {city.whyLocal.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Services" title={`Logistics services in ${city.name}`} highlight="The TriFleet services most relevant to businesses in and around the city." />
          <StaggerGroup stagger={0.07} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.servicesHere.map((name) => {
              const svc = services.find((s) => s.title === name);
              return (
                <StaggerItem key={name}>
                  {svc ? (
                    <Link href="/services" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <svc.icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-sm font-semibold text-foreground">{name}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm font-semibold text-foreground">{name}</span>
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Coverage" title={`Areas we cover in ${city.name}`} align="left" />
              <StaggerGroup stagger={0.05} className="grid grid-cols-2 gap-2.5">
                {city.coverageAreas.map((area) => (
                  <StaggerItem key={area}>
                    <span className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-accent" /> {area}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <Reveal delay={0.1}>
                <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a href={`tel:${siteConfig.contact.phoneE164[0]}`} className="text-sm font-semibold text-foreground hover:text-accent-bright">{siteConfig.contact.phones[0]}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-foreground hover:text-accent-bright">{siteConfig.contact.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <a href={`https://wa.me/${siteConfig.contact.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-accent-bright">WhatsApp {siteConfig.contact.whatsapp}</a>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                <iframe title={`Map of ${city.name}`} src={mapSrc} className="h-full w-full" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow={`${city.name} Client`} title="Local client voice" align="left" />
          <Reveal delay={0.1}>
            <figure className="mt-8 flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <blockquote className="text-pretty text-lg leading-relaxed text-foreground/90">&ldquo;{city.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {city.testimonial.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{city.testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{city.testimonial.role}, {city.testimonial.company}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={city.faqs} eyebrow={`${city.name} FAQ`} title={`${city.name} logistics questions`} highlight={`Local answers for businesses moving freight in and around ${city.name}.`} />

      <CtaSection title={`Move freight in ${city.name} with confidence`} highlight={`Get a quote for logistics in ${city.name} — or call us directly. We respond within a few business hours.`} />
    </>
  );
}
