'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { newsletterSchema, type NewsletterFormValues } from '@/lib/validations/forms';
import { cn } from '@/lib/utils';

const SUBMIT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

export function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (data: NewsletterFormValues) => {
    if (data.website) return;
    setStatus('loading');

    if (!SUBMIT_URL) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      await fetch(SUBMIT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...data, form: 'newsletter' }),
      });
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isDark = variant === 'dark';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="nl-email" className="sr-only">Email address</label>
          <input
            id="nl-email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'nl-email-err' : undefined}
            {...register('email')}
            className={cn(
              'h-11 w-full rounded-lg border bg-transparent px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent',
              isDark
                ? 'border-white/20 text-white placeholder:text-white/40'
                : 'border-border text-foreground',
              errors.email && 'border-destructive'
            )}
          />
          {errors.email && (
            <p id="nl-email-err" role="alert" className={cn('mt-1 text-xs', isDark ? 'text-red-300' : 'text-destructive')}>
              {errors.email.message}
            </p>
          )}
        </div>
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} className="hidden" aria-hidden />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all disabled:opacity-60',
            isDark ? 'bg-accent text-primary-deep hover:bg-accent-bright' : 'bg-primary text-primary-foreground hover:bg-primary/90'
          )}
        >
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <><span>Subscribe</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-xs text-accent"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Subscribed! Check your inbox to confirm.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-xs text-destructive"
          >
            <AlertCircle className="h-3.5 w-3.5" /> Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
