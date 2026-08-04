import { z } from 'zod';

const honeypot = z.string().max(0, 'Spam detected').optional().or(z.literal(''));

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(80),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(15, 'Please enter a valid phone number')
    .regex(/^[+\d\s-]+$/, 'Please enter a valid phone number'),
  company: z.string().max(120).optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please tell us a bit more (10 characters minimum)').max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please accept the privacy policy to continue' }) }),
  website: honeypot,
});

export const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(80),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(15, 'Please enter a valid phone number')
    .regex(/^[+\d\s-]+$/, 'Please enter a valid phone number'),
  company: z.string().max(120).optional(),
  origin: z.string().min(2, 'Please enter the pickup location'),
  destination: z.string().min(2, 'Please enter the delivery location'),
  cargoType: z.string().min(2, 'Please describe your cargo'),
  weight: z.string().min(1, 'Please enter approximate weight'),
  vehicleType: z.string().min(1, 'Please select a vehicle type'),
  pickupDate: z.string().optional(),
  message: z.string().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please accept the privacy policy to continue' }) }),
  website: honeypot,
});

export const careersSchema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(80),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(15, 'Please enter a valid phone number')
    .regex(/^[+\d\s-]+$/, 'Please enter a valid phone number'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please enter your years of experience'),
  message: z.string().min(10, 'Please tell us why you are a great fit').max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please accept the privacy policy to continue' }) }),
  website: honeypot,
});

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  website: honeypot,
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type CareersFormValues = z.infer<typeof careersSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
