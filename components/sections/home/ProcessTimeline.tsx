'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { processSteps } from '@/lib/constants/content';
import { Reveal } from '@/components/animations/Reveal';

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="How we work"
          title="From booking to proof of delivery"
          highlight="A clear, four-step process that keeps your freight visible and your team informed at every stage."
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          {/* Track */}
          <div aria-hidden className="absolute left-0 top-2 h-full w-px bg-border" />
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-0 top-2 w-px bg-gradient-to-b from-accent via-accent-bright to-accent"
          />

          <div className="flex flex-col gap-12">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, type: 'spring', stiffness: 200 }}
                  className="absolute -left-[2.5rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[3.5rem]"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <span className="text-5xl font-bold text-accent/20 sm:text-6xl">{step.step}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
