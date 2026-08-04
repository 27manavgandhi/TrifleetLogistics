import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/constants/site';
import { ThankYouContent } from '@/app/thank-you/ThankYouContent';

export const metadata: Metadata = constructMetadata({
  title: 'Thank You — Tri Fleet Logistics',
  description: 'Thank you for reaching out to Tri Fleet Logistics. Our team will get back to you within a few business hours.',
  path: '/thank-you',
});

export default function ThankYouPage() {
  return <ThankYouContent />;
}
