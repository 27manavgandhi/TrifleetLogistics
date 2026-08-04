import type { Metadata } from 'next';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { FaqSection } from '@/components/sections/FaqSection';
import { Reveal } from '@/components/animations/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';
import { images } from '@/lib/constants/images';
import { Phone, Mail, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Tri Fleet Logistics — Get a Quote',
  description:
    'Contact Tri Fleet Logistics at C-5 Industrial Area, Phase 2, Mangolpuri, Delhi – 110034. Call +91 7827600368, email trifleetlogistics@gmail.com or WhatsApp +91 88266 92960.',
  path: '/contact',
});

const contactFaqs = [
  { q: 'How quickly will you respond to my enquiry?', a: 'Our team typically responds to enquiries within a few business hours. For urgent freight, call us directly on +91 7827600368 for an immediate response.' },
  { q: 'What information should I include in my quote request?', a: 'The more detail, the faster and more accurate our quote. Include pickup and delivery locations, cargo type, approximate weight, vehicle preference and any timing constraints.' },
  { q: 'Can I visit your office in Delhi?', a: 'Yes. Our office is at C-5 Industrial Area, Phase 2, Mangolpuri, Delhi – 110034. We recommend calling ahead to ensure the right team member is available to meet you.' },
  { q: 'Do you offer 24/7 support?', a: 'Yes. Our control room operates 24 hours a day, 7 days a week. For active shipments, you can reach your account manager or the control room at any time.' },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address.full)}&output=embed`;

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: 'Contact', path: '/contact' }]), localBusinessSchema()]} />
      <PageHero
        eyebrow="Contact"
        title="Let's move your freight"
        highlight="Get a quote, ask a question, or just say hello. Our team responds within a few business hours — or call us directly."
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
        image={images.delhiAerial1}
        imageAlt="Aerial view of Delhi"
        align="center"
      />

      {/* Contact cards */}
      <section className="relative -mt-10 z-10">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, label: 'Call us', value: siteConfig.contact.phones[0], sub: siteConfig.contact.phones[1], href: `tel:${siteConfig.contact.phoneE164[0]}` },
              { icon: Mail, label: 'Email us', value: siteConfig.contact.email, sub: 'We reply within hours', href: `mailto:${siteConfig.contact.email}` },
              { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.contact.whatsapp, sub: 'Quick chat replies', href: `https://wa.me/${siteConfig.contact.whatsappE164}` },
              { icon: Clock, label: 'Hours', value: '24 / 7 / 365', sub: siteConfig.contact.hours },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}>
                <a
                  href={c.href ?? undefined}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:text-primary-deep">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{c.value}</p>
                    {c.sub && <p className="text-xs text-muted-foreground">{c.sub}</p>}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Send a Message" title="Get in touch" highlight="Fill in the form and we'll get back to you within a few business hours." align="left" />
              <Reveal variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading eyebrow="Find Us" title="Our Delhi office" highlight="C-5 Industrial Area, Phase 2, Mangolpuri, Delhi – 110034." align="left" />
              <Reveal variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
                  <iframe
                    title="Tri Fleet Logistics office location on Google Maps"
                    src={mapSrc}
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">{siteConfig.contact.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Directions</p>
                      <p className="text-sm text-muted-foreground">Near Mangolpuri Industrial Area, off Outer Ring Road. NH-44 and the Dwarka Expressway are both within 15 minutes.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} eyebrow="Contact FAQ" title="Questions about getting in touch" highlight="Everything you need to reach us and get a fast, useful response." />
    </>
  );
}
