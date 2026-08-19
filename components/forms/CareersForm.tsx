'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { careersSchema, type CareersFormValues } from '@/lib/validations/forms';
import { careers } from '@/lib/constants/blog';
import { siteConfig } from '@/lib/constants/site';
import { TextField, TextAreaField, SelectField, CheckboxField, FormStatus } from '@/components/forms/FormFields';

const SUBMIT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

export function CareersForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareersFormValues>({ resolver: zodResolver(careersSchema) });

  const onSubmit = async (data: CareersFormValues) => {
    if (data.website) return;
    const now = Date.now();
    if (now - lastSubmit < 15000) {
      setStatus('error');
      return;
    }
    setLastSubmit(now);
    setStatus('loading');

    if (!SUBMIT_URL) {
      setStatus('error');
      return;
    }

    try {
      await fetch(SUBMIT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...data, form: 'careers' }),
      });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} className="hidden" aria-hidden />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full name" required error={errors.name?.message} {...register('name')} placeholder="Your name" />
        <TextField label="Email" required type="email" error={errors.email?.message} {...register('email')} placeholder="you@email.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Phone" required error={errors.phone?.message} {...register('phone')} placeholder="+91 ..." />
        <TextField label="Years of experience" required error={errors.experience?.message} {...register('experience')} placeholder="e.g. 4 years" />
      </div>
      <SelectField
        label="Position of interest"
        required
        error={errors.position?.message}
        placeholder="Select a position"
        {...register('position')}
        options={careers.map((c) => ({ value: c.slug, label: c.title }))}
      />
      <TextAreaField label="Why are you a great fit?" required error={errors.message?.message} {...register('message')} placeholder="Tell us about your experience and why TriFleet..." />
      <CheckboxField
        id="careers-consent"
        label={<>I agree to the privacy policy and consent to being contacted about my application.</>}
        error={errors.consent?.message}
        {...register('consent')}
      />
      <FormStatus
        status={status}
        title={!SUBMIT_URL && status === 'error' ? "Online form isn't connected yet" : undefined}
        message={
          !SUBMIT_URL && status === 'error'
            ? `Please call us at ${siteConfig.contact.phones[0]}, or email your resume to ${siteConfig.contact.email}.`
            : undefined
        }
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
        ) : (
          <><Send className="h-4 w-4" /> Submit application</>
        )}
      </button>
    </form>
  );
}
