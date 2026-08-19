'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[95] h-1 origin-left bg-gradient-to-r from-accent to-accent-bright" />;
}

export function BlogArticle({
  post,
  related,
  image,
}: {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    author: { name: string; role: string };
    date: string;
    readingTime: string;
    content: string[];
  };
  related: { slug: string; title: string; excerpt: string; readingTime: string; category: string }[];
  image: string;
}) {
  const [formattedDate, setFormattedDate] = useState(post.date);

  useEffect(() => {
    setFormattedDate(new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, [post.date]);

  return (
    <>
      <ReadingProgress />
      <article className="relative">
        <div className="container-px mx-auto max-w-3xl pt-32 sm:pt-40">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent-bright">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-accent px-3 py-1 font-semibold text-primary-deep">{post.category}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
            <span>{formattedDate}</span>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="mt-7 flex items-center gap-3 border-y border-border py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {post.author.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </div>

        <div className="container-px mx-auto max-w-4xl mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-card">
            <Image src={image} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
          </div>
        </div>

        <div className="container-px mx-auto max-w-3xl mt-12">
          <div className="flex flex-col gap-6 text-pretty text-base leading-[1.8] text-foreground/90 sm:text-lg">
            {post.content.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-xl font-medium leading-relaxed text-foreground' : ''}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground"><Tag className="h-3.5 w-3.5" /> Tags</span>
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-py bg-secondary/40">
          <div className="container-px mx-auto max-w-8xl">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Related articles</h2>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-bright hover:underline">
                All articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="text-xs font-semibold text-accent-bright">{p.category}</span>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {p.readingTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
