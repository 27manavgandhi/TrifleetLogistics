'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { quoteSchema, type QuoteFormValues } from '@/lib/validations/forms';
import { services } from '@/lib/constants/services';
import { fleet } from '@/lib/constants/content';
import { siteConfig } from '@/lib/constants/site';
import { TextField, TextAreaField, SelectField, CheckboxField, FormStatus } from '@/components/forms/FormFields';

const SUBMIT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

const vehicleOptions = [
  ...fleet.map((f) => ({ value: f.slug, label: `${f.name} (${f.capacityTonnes})` })),
  { value: 'not-sure', label: 'Not sure — help me choose' },
];

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteFormValues) => {
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
        body: JSON.stringify({ ...data, form: 'quote' }),
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
        <TextField label="Company" error={errors.company?.message} {...register('company')} placeholder="Company name" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Email" required type="email" error={errors.email?.message} {...register('email')} placeholder="you@company.com" />
        <TextField label="Phone" required error={errors.phone?.message} {...register('phone')} placeholder="+91 ..." />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Pickup location" required error={errors.origin?.message} {...register('origin')} placeholder="e.g. Delhi" />
        <TextField label="Delivery location" required error={errors.destination?.message} {...register('destination')} placeholder="e.g. Mumbai" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Cargo type" required error={errors.cargoType?.message} {...register('cargoType')} placeholder="e.g. FMCG, steel coils" />
        <TextField label="Approx. weight" required error={errors.weight?.message} {...register('weight')} placeholder="e.g. 12 tonnes" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Vehicle type"
          required
          error={errors.vehicleType?.message}
          placeholder="Select vehicle"
          {...register('vehicleType')}
          options={vehicleOptions}
        />
        <TextField label="Preferred pickup date" type="date" error={errors.pickupDate?.message} {...register('pickupDate')} />
      </div>
      <TextAreaField label="Additional details" error={errors.message?.message} {...register('message')} placeholder="Any special handling, permits or instructions..." />
      <CheckboxField
        id="quote-consent"
        label={<>I agree to the privacy policy and consent to being contacted about my quote request.</>}
        error={errors.consent?.message}
        {...register('consent')}
      />
      <FormStatus
        status={status}
        title={!SUBMIT_URL && status === 'error' ? "Online form isn't connected yet" : undefined}
        message={
          !SUBMIT_URL && status === 'error'
            ? `Please call or WhatsApp us at ${siteConfig.contact.phones[0]}, or email ${siteConfig.contact.email}.`
            : undefined
        }
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-primary-deep transition-all hover:bg-accent-bright disabled:opacity-60"
      >
        {status === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Requesting...</>
        ) : (
          <><Send className="h-4 w-4" /> Request quote</>
        )}
      </button>
    </form>
  );
}
