'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      const formatted =
        value >= 1000 ? Math.round(v).toLocaleString('en-IN') : Math.round(v).toString();
      setDisplay(formatted);
    });
    return () => unsub();
  }, [spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Parallax({
  children,
  offset = 80,
  className,
  speed = 1,
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        setY(-progress * offset * speed);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [offset, speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      <div style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}

export function Marquee({
  children,
  reverse = false,
  duration = 40,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn('mask-fade-x overflow-hidden', className)}>
      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? 'marquee-x-reverse' : 'marquee-x'} ${duration}s linear infinite`,
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
