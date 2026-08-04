import Link from 'next/link';
import { AuroraBackground, GridBackdrop } from '@/components/animations/AuroraBackground';
import { TextReveal, Reveal } from '@/components/animations/Reveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Home, ArrowRight, Truck, Headset } from 'lucide-react';
import { services } from '@/lib/constants/services';
import { constructMetadata } from '@/lib/constants/site';

export const metadata = constructMetadata({
  title: 'Page Not Found (404)',
  description: 'The page you are looking for could not be found. Explore Tri Fleet Logistics services instead.',
  path: '/404',
});

export default function NotFound() {
  const popular = services.slice(0, 6);
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-primary-deep px-5 py-32 text-center text-primary-foreground">
      <GridBackdrop variant="dark" />
      <AuroraBackground variant="dark" />
      <div className="relative flex max-w-2xl flex-col items-center gap-6">
        <Reveal>
          <p className="text-[8rem] font-bold leading-none tracking-tighter text-transparent sm:text-[12rem]" style={{ WebkitTextStroke: '2px hsl(38 92% 50% / 0.6)' }}>
            404
          </p>
        </Reveal>
        <TextReveal text="This shipment took a wrong turn" as="h1" className="justify-center text-3xl font-bold tracking-tight text-white sm:text-4xl" />
        <Reveal delay={0.15}>
          <p className="max-w-md text-pretty text-base leading-relaxed text-white/70">
            The page you are looking for doesn't exist or has moved. Let's get you back on route.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton as="a" href="/" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright">
              <Home className="h-4 w-4" /> Back to home
            </MagneticButton>
            <MagneticButton as="a" href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent-bright">
              <Headset className="h-4 w-4" /> Contact us
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-6 w-full">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Popular services</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popular.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition-all hover:border-accent hover:text-accent-bright">
                  <s.icon className="h-3.5 w-3.5" /> {s.shortTitle}
                  <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
