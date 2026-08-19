import type { Metadata } from 'next';
import { constructMetadata, siteConfig } from '@/lib/constants/site';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'How TriFleet Logistics collects, uses and protects your personal information.',
  path: '/privacy',
});

const sections = [
  { h: 'Information we collect', p: 'We collect information you provide directly — through our contact, quote, careers and newsletter forms — including your name, email, phone, company and message content. We also collect information about shipments you book with us, including origin, destination, cargo details and delivery documentation.' },
  { h: 'How we use your information', p: 'We use your information to respond to enquiries, prepare quotes, operate shipments, communicate about your freight, send newsletters you have opted into, and improve our services. We do not sell your personal information to third parties.' },
  { h: 'Information sharing', p: 'We share shipment information with our drivers, partner warehouses and regulatory authorities as required to operate and comply with the law. We may share information with service providers who help us run our business, under appropriate confidentiality obligations.' },
  { h: 'Data security', p: 'We take reasonable technical and organisational measures to protect your information, including access controls, secure storage and limited internal access. However, no method of transmission or storage is fully secure, and we cannot guarantee absolute security.' },
  { h: 'Cookies', p: 'Our website uses essential cookies for functionality and analytics cookies to understand how visitors use the site. You can control cookies through your browser settings. We do not use cookies for targeted advertising.' },
  { h: 'Your rights', p: 'You may request access to, correction of, or deletion of your personal information by contacting us at ' + siteConfig.contact.email + '. You may unsubscribe from our newsletter at any time using the link in each email.' },
  { h: 'Changes to this policy', p: 'We may update this privacy policy from time to time. We will post the updated version on this page and revise the date below. We encourage you to review this page periodically.' },
  { h: 'Contact us', p: 'If you have any questions about this privacy policy, contact us at ' + siteConfig.contact.email + ' or ' + siteConfig.contact.address.full + '.' },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep pb-16 pt-32 text-primary-foreground sm:pt-40">
        <GridBackdrop variant="dark" />
        <AuroraBackground variant="dark" />
        <div className="container-px relative mx-auto max-w-4xl">
          <Reveal><Breadcrumb items={[{ name: 'Privacy Policy', path: '/privacy' }]} className="[&_a]:text-white/60 [&_span]:text-white/80 [&_.text-muted-foreground]:text-white/40 [&_svg]:text-white/40" /></Reveal>
          <TextReveal text="Privacy Policy" as="h1" className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl" />
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
    </>
  );
}
