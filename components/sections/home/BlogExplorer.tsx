'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/lib/constants/blog';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
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

export function BlogExplorer() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const catMatch = category === 'All' || p.category === category;
      const q = query.toLowerCase().trim();
      const qMatch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
      return catMatch && qMatch;
    });
  }, [category, query]);

  const featured = blogPosts.find((p) => p.featured)!;
  const trending = blogPosts.filter((p) => p.trending).slice(0, 4);

  return (
    <>
      {/* Featured */}
      <section className="section-py relative">
        <div className="container-px mx-auto max-w-8xl">
          <SectionHeading eyebrow="Featured" title="Editor's pick" highlight="The article we think every logistics professional should read this month." />
          <Reveal delay={0.1} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
            <Link href={`/blog/${featured.slug}`} className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image src={blogImages[featured.slug] ?? images.truckHighway3} alt={featured.title} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-deep">Featured</span>
              </div>
              <div className="flex flex-col gap-4 p-8 lg:p-10">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">{featured.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">{featured.title}</h2>
                <p className="flex-1 text-pretty text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {featured.author.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{featured.author.name}</p>
                    <p className="text-xs text-muted-foreground">{featured.author.role}</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright">
                    Read <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Search + filter + grid */}
      <section className="relative pb-20">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="h-11 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    category === c ? 'bg-primary text-primary-foreground' : 'border border-border bg-card text-muted-foreground hover:border-accent hover:text-accent-bright'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-border bg-card p-12 text-center">
                  <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
                </div>
              ) : (
                <StaggerGroup stagger={0.07} className="grid gap-5 sm:grid-cols-2">
                  {filtered.map((post) => (
                    <StaggerItem key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image src={blogImages[post.slug] ?? images.truckHighway3} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" /> {post.readingTime}
                          </div>
                          <h3 className="text-base font-semibold leading-snug text-foreground">{post.title}</h3>
                          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((t) => <span key={t} className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">{t}</span>)}
                          </div>
                          <div className="flex items-center justify-between border-t border-border pt-3">
                            <span className="text-xs text-muted-foreground">{post.author.name}</span>
                            <ArrowUpRight className="h-4 w-4 text-accent-bright transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground"><TrendingUp className="h-4 w-4 text-accent" /> Trending now</h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {trending.map((p, i) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                        <span className="text-2xl font-bold text-accent/30">{i + 1}</span>
                        <div>
                          <p className="text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent-bright">{p.title}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{p.readingTime}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-primary-deep p-6 text-primary-foreground shadow-sm">
                <h3 className="text-sm font-semibold text-white">Newsletter</h3>
                <p className="mt-1 text-xs text-white/60">Logistics insights, monthly. No spam.</p>
                <div className="mt-4"><NewsletterForm variant="dark" /></div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-foreground">Popular tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((t) => (
                    <button key={t} onClick={() => setQuery(t)} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent-bright">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
