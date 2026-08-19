'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Clock, Search } from 'lucide-react';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { blogPosts } from '@/lib/constants/blog';
import { images } from '@/lib/constants/images';

const blogImages: Record<string, string> = {
  'ftl-vs-ptl-choosing-the-right-logistics-mode': images.truckHighway2,
  'india-toll-and-permit-guide-for-transporters': images.truckNightWheels,
  'building-a-24-7-control-room': images.controlRoom4,
  'fleet-maintenance-for-uptime': images.forkliftWarehouse,
  'cold-chain-pharma-transport-essentials': images.reeferTrucks,
  'future-of-logistics-technology-in-india': images.controlRoom6,
  'reducing-logistics-cost-without-cutting-corners': images.warehouseTruckDock,
  'sustainable-logistics-practices': images.truckSunset,
};

export function BlogPreview() {
  const posts = blogPosts.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="section-py relative bg-secondary/40">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Blog & Insights"
          title="Logistics intelligence, in plain English"
          highlight="Strategy, compliance, fleet management and technology — the insights that help you run logistics better."
        />
        <StaggerGroup stagger={0.1} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blogImages[post.slug] ?? images.truckHighway3}
                    alt={post.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-deep">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
                </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{post.author.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-accent-bright transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link href="/blog" className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent-bright">
              Read the blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground sm:py-24">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />
      <div aria-hidden className="absolute -right-1/4 top-0 h-[40vh] w-[40vh] rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
            <Search className="h-3.5 w-3.5" /> Newsletter
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Logistics insights, delivered monthly
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70">
            Get strategy, compliance updates, fleet management tips and technology trends — straight to your inbox. No spam, ever.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterInline />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Lightweight inline newsletter for this section (reuses the form logic)
import { NewsletterForm } from '@/components/forms/NewsletterForm';
function NewsletterInline() {
  return <NewsletterForm variant="dark" />;
}
