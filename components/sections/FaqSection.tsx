'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem } from '@/components/animations/Reveal';

export function FaqSection({
  faqs,
  title = 'Frequently asked questions',
  highlight,
  eyebrow = 'FAQ',
}: {
  faqs: { q: string; a: string }[];
  title?: string;
  highlight?: string;
  eyebrow?: string;
}) {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            align="left"
          />
          <StaggerGroup stagger={0.07}>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <AccordionItem
                    value={`item-${i}`}
                    className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm transition-shadow data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
