import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { CareersForm } from '@/components/forms/CareersForm';
import { careers } from '@/lib/constants/blog';
import { images } from '@/lib/constants/images';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Careers — Drive Your Career at Tri Fleet Logistics',
  description:
    'Join Tri Fleet Logistics. Open roles in operations, sales, fleet and driving. Work for a company that values safety, training and respect for its people.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Careers', path: '/careers' }])} />
      <PageHero
        eyebrow="Careers"
        title="Drive your career at Tri Fleet"
        highlight="We're building a logistics company that values safety, training and respect for its people. Come move India with us."
        breadcrumbs={[{ name: 'Careers', path: '/careers' }]}
        image={images.truckSunset}
        imageAlt="Truck at sunset"
        align="center"
      />

      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Open Positions" title="Find your role" highlight="From the control room to the cab — every role at Tri Fleet matters." />
          <StaggerGroup stagger={0.08} className="mt-14 grid gap-5 lg:grid-cols-2">
            {careers.map((c) => (
              <StaggerItem key={c.slug}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {c.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {c.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.excerpt}</p>
                  <div className="grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent-bright">Responsibilities</p>
                      <ul className="mt-2 flex flex-col gap-1">
                        {c.responsibilities.map((r) => <li key={r} className="text-xs text-muted-foreground">• {r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-success">Requirements</p>
                      <ul className="mt-2 flex flex-col gap-1">
                        {c.requirements.map((r) => <li key={r} className="text-xs text-muted-foreground">• {r}</li>)}
                      </ul>
                    </div>
                  </div>
                  <a href="#apply" className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
                    Apply for this role <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="apply" className="section-py relative bg-secondary/40">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Apply" title="Tell us about you" highlight="Fill in the form below and our HR team will get in touch if your profile matches an open role." />
          <Reveal delay={0.1} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
            <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <CareersForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection title="Don't see your role?" highlight="We're always looking for great people. Send your CV and a note about how you'd add to Tri Fleet." primaryLabel="Send Your CV" />
    </>
  );
}
