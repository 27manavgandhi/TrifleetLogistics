'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/animations/Motion';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { clients } from '@/lib/constants/content';

/** Deterministic initials for the monogram fallback, e.g. "Tata Motors" -> "TM" */
function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <div
      className="group mx-2.5 flex h-40 w-48 shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover sm:mx-3 sm:h-44 sm:w-60 sm:px-6"
    >
      <div className="flex h-10 shrink-0 items-center justify-center">
        {client.logo ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={140}
            height={40}
            className="h-9 w-auto max-w-[120px] object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold tracking-tight text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
            {initials(client.name)}
          </span>
        )}
      </div>

      <div className="flex min-h-[2.75rem] w-full flex-col justify-center">
        <span className="line-clamp-2 break-words text-sm font-semibold leading-snug tracking-tight text-foreground">
          {client.name}
        </span>
      </div>

      {(client.sector || client.since) && (
        <span className="line-clamp-1 w-full break-words text-xs text-muted-foreground">
          {client.sector}
          {client.sector && client.since ? ' · since ' : client.since ? 'since ' : ''}
          {client.since}
        </span>
      )}
    </div>
  );
}

export function ClientLogos() {
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="section-py relative overflow-hidden">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Trusted by"
          title="The brands that move with TriFleet"
          highlight="From FMCG to automotive to e-commerce — enterprises across India rely on our fleet and our logistics partners."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14 flex flex-col gap-5"
      >
        {/* Edge fade so the marquee reads as infinite, not clipped. Narrow on
           mobile so cards aren't visually eaten by the gradient on small screens. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-20 lg:w-28" />

        <Marquee duration={34}>
          {row1.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </Marquee>
        <Marquee duration={34} reverse>
          {row2.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}