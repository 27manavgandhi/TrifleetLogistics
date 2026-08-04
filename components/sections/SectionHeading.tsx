'use client';

import { Reveal, TextReveal } from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <TextReveal
        text={title}
        as="h2"
        className={cn(
          'max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl',
          align === 'center' && 'mx-auto justify-center',
          titleClassName
        )}
      />
      {highlight && (
        <Reveal delay={0.1}>
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {highlight}
          </p>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.15}>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
