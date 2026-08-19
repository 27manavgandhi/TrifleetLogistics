'use client';

import { cn } from '@/lib/utils';

export function AuroraBackground({
  variant = 'light',
  className,
}: {
  variant?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {variant === 'dark' ? (
        <>
          <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-primary/40 blur-[120px] animate-aurora" />
          <div className="absolute right-0 top-1/4 h-[50vh] w-[50vh] rounded-full bg-accent/25 blur-[120px] animate-aurora-2" />
          <div className="absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full bg-chart-4/20 blur-[120px] animate-aurora" />
        </>
      ) : (
        <>
          <div className="absolute -left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-primary/15 blur-[120px] animate-aurora" />
          <div className="absolute right-0 top-1/4 h-[45vh] w-[45vh] rounded-full bg-accent/20 blur-[120px] animate-aurora-2" />
          <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full bg-chart-4/12 blur-[120px] animate-aurora" />
        </>
      )}
    </div>
  );
}

export function GridBackdrop({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        variant === 'dark' ? 'bg-grid-dark' : 'bg-grid',
        'opacity-50 mask-fade-b'
      )}
    />
  );
}
