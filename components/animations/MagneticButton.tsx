'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

function isInternal(href?: string) {
  return !!href && href.startsWith('/') && !href.startsWith('//');
}

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  as = 'button',
  href,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: pos.x, y: pos.y }}
      className="inline-block"
    >
      {as === 'a' && href ? (
        isInternal(href) ? (
          <Link href={href} className={className} {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}>
            {children}
          </Link>
        ) : (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        )
      ) : (
        <button className={className} {...(props as React.ButtonHTMLAttributes<HTMLElement>)}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
