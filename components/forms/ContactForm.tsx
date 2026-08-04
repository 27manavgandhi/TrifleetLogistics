'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { contactSchema, type ContactFormValues } from '@/lib/validations/forms';
import { services } from '@/lib/constants/services';
import { TextField, TextAreaField, SelectField, CheckboxField, FormStatus } from '@/components/forms/FormFields';

const SUBMIT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastSubmit, setLastSubmit] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.website) return;
    const now = Date.now();
    if (now - lastSubmit < 15000) {
      setStatus('error');
      return;
    }
    setLastSubmit(now);
    setStatus('loading');
    try {
      if (SUBMIT_URL) {
        await fetch(SUBMIT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({ ...data, form: 'contact' }),
        });
      }
      await new Promise((r) => setTimeout(r, 1000));
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
        <TextField label="Email" required type="email" error={errors.email?.message} {...register('email')} placeholder="you@company.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Phone" required error={errors.phone?.message} {...register('phone')} placeholder="+91 ..." />
        <TextField label="Company" error={errors.company?.message} {...register('company')} placeholder="Company name" />
      </div>
      <SelectField
        label="Service of interest"
        required
        error={errors.service?.message}
        placeholder="Select a service"
        {...register('service')}
        options={services.map((s) => ({ value: s.slug, label: s.title }))}
      />
      <TextAreaField label="How can we help?" required error={errors.message?.message} {...register('message')} placeholder="Tell us about your freight, lanes and timeline..." />
      <CheckboxField
        id="contact-consent"
        label={<>I agree to the privacy policy and consent to being contacted about my enquiry.</>}
        error={errors.consent?.message}
        {...register('consent')}
      />
      <FormStatus status={status} />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-4 w-4" /> Send message</>
        )}
      </button>
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground"
          >
            Prefer to talk? Call us on +91 7827600368.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
