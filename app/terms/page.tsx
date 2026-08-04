import type { Metadata } from 'next';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'The terms and conditions governing the use of Tri Fleet Logistics services and website.',
  path: '/terms',
});

const sections = [
  { h: 'Acceptance of terms', p: 'By accessing the Tri Fleet Logistics website and engaging our services, you agree to these terms and conditions. If you do not agree, please do not use our website or services.' },
  { h: 'Services', p: 'Tri Fleet Logistics provides full truck load, part truck load, industrial transportation, door-to-door logistics and related transport services across India. Specific service terms, including pricing, transit times and SLAs, are agreed in writing at the time of engagement.' },
  { h: 'Quotes and pricing', p: 'Quotes are valid for the period stated on the quote and are subject to availability of capacity and prevailing market conditions. Final pricing is confirmed in writing before dispatch. Rates may vary due to tolls, permits, fuel surcharges or regulatory changes.' },
  { h: 'Shipments and documentation', p: 'You are responsible for providing accurate shipment information, including origin, destination, cargo type, weight and dimensions. You are responsible for valid e-way bills, permits and compliance documentation required for your shipment.' },
  { h: 'Liability and insurance', p: 'Tri Fleet takes reasonable care in transporting your freight. Our liability for loss or damage is limited in accordance with the terms agreed at engagement. We recommend transit insurance for high-value cargo and can assist in arranging coverage.' },
  { h: 'Payment terms', p: 'Payment terms are agreed at the time of engagement. For spot movements, advance or on-delivery payment is common. For contracted programmes, periodic billing cycles are agreed in writing. Overdue payments may attract interest as agreed.' },
  { h: 'Prohibited items', p: 'We do not transport illegal goods, contraband, or items we are not licensed or equipped to handle. Hazardous materials are accepted only with proper documentation, packaging and our prior written consent.' },
  { h: 'Website use', p: 'You agree to use our website lawfully and not to misuse, disrupt or attempt to gain unauthorised access to our systems. Content on this website, including text, images and logos, is our property or used with permission and may not be reproduced without consent.' },
  { h: 'Changes to terms', p: 'We may update these terms from time to time. The updated version will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated terms.' },
  { h: 'Contact', p: 'Questions about these terms can be directed to ' + siteConfig.contact.email + ' or ' + siteConfig.contact.address.full + '.' },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep pb-16 pt-32 text-primary-foreground sm:pt-40">
        <GridBackdrop variant="dark" />
        <AuroraBackground variant="dark" />
        <div className="container-px relative mx-auto max-w-4xl">
          <Reveal><Breadcrumb items={[{ name: 'Terms & Conditions', path: '/terms' }]} className="[&_a]:text-white/60 [&_span]:text-white/80 [&_.text-muted-foreground]:text-white/40" /></Reveal>
          <TextReveal text="Terms & Conditions" as="h1" className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl" />
          <Reveal delay={0.1}><p className="mt-4 text-sm text-white/60">Last updated: August 2025</p></Reveal>
        </div>
      </section>

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex flex-col gap-8">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i * 0.03}>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-foreground">{s.h}</h2>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Questions about our terms?" highlight="We're happy to walk you through any clause before you engage our services. Get in touch with our team." />
    </>
  );
}
