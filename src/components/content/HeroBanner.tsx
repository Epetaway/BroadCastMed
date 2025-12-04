import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  image?: string; // Alias for imageSrc (kept for compatibility)
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function HeroBanner({ title, subtitle, primaryCta, secondaryCta }: HeroBannerProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-df-blue to-df-blue-dark">
      {/* Decorative gradient overlay with subtle pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,179,179,0.2),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-4 text-lg text-gray-100 md:text-xl">{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button variant="secondary" size="lg">
                    {primaryCta.text}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-df-blue"
                  >
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
