'use client';

import { StaggerGroup, StaggerItem, Reveal } from '@/components/animations/Reveal';
import { AnimatedCounter } from '@/components/animations/Motion';
import { cn } from '@/lib/utils';

type Stat = { value: number; suffix: string; label: string; prefix?: string };

export function StatsGrid({
  stats,
  variant = 'light',
  className,
}: {
  stats: Stat[];
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = variant === 'dark';
  return (
    <StaggerGroup
      stagger={0.1}
      className={cn(
        'grid grid-cols-2 gap-px overflow-hidden rounded-2xl border',
        isDark ? 'border-white/10 bg-white/5' : 'border-border bg-border',
        'lg:grid-cols-4',
        className
      )}
    >
      {stats.map((s, i) => (
        <StaggerItem
          key={i}
          className={cn(
            'flex flex-col items-center justify-center gap-1 p-6 text-center sm:p-8',
            isDark ? 'bg-primary-deep/40' : 'bg-card'
          )}
        >
          <div className={cn('text-4xl font-bold tracking-tight sm:text-5xl', isDark ? 'text-white' : 'text-primary')}>
            <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
          </div>
          <p className={cn('text-xs font-medium uppercase tracking-wider sm:text-sm', isDark ? 'text-white/60' : 'text-muted-foreground')}>
            {s.label}
          </p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function StatCards({ stats, variant = 'light' }: { stats: Stat[]; variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  return (
    <StaggerGroup stagger={0.1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <StaggerItem key={i}>
          <div className={cn('rounded-2xl border p-6 shadow-sm', isDark ? 'border-white/10 bg-white/5' : 'border-border bg-card')}>
            <div className={cn('text-3xl font-bold tracking-tight', isDark ? 'text-white' : 'text-primary')}>
              <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <p className={cn('mt-1 text-sm', isDark ? 'text-white/60' : 'text-muted-foreground')}>{s.label}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
