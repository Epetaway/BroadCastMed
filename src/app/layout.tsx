import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dana-Farber Provider Education Platform',
  description:
    'Clinical education hub for oncology providers featuring symposia, research updates, and CME-accredited content.',
  keywords: [
    'oncology education',
    'CME',
    'Dana-Farber',
    'provider resources',
    'cancer research',
    'medical education',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
