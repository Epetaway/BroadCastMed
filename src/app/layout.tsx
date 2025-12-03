import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ViewModeProvider } from '@/context/ViewModeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Earl Hickson - Front-End Developer',
  description:
    'Front-End Developer specializing in healthcare CMS platforms, responsive email campaigns, and accessible user interfaces.',
  keywords: [
    'front-end developer',
    'healthcare',
    'CMS',
    'email development',
    'accessibility',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'Earl Hickson' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ViewModeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ViewModeProvider>
      </body>
    </html>
  );
}
