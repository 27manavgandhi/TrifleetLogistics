import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { ThemeProvider, ThemeScript } from '@/components/providers/ThemeProvider';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { CustomCursor } from '@/components/animations/CustomCursor';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { JsonLd } from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/constants/site';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const themeColor = [
  { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  { media: '(prefers-color-scheme: dark)', color: '#020617' },
];

export const metadata: Metadata = {
  ...constructMetadata({
    title: 'Tri Fleet Logistics — Pan-India Full Truck Load & B2B Transport',
    description:
      'Tri Fleet Logistics is a Delhi-based full truck load logistics company delivering time-bound, door-to-door B2B transportation and supply chain solutions across India with a modern fleet and 24/7 control.',
    path: '',
  }),
  themeColor,
  icons: {
    icon: '/icons/favicon.svg',
    shortcut: '/icons/favicon.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <Header />
            <main className="relative">{children}</main>
            <Footer />
            <FloatingActions />
          </SmoothScroll>
        </ThemeProvider>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
