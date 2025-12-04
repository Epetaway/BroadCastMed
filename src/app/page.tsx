import { Metadata } from 'next';
import { HeroBanner } from '@/components/content/HeroBanner';
import { Shell } from '@/components/layout/Shell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { ResourceCard } from '@/components/content/ResourceCard';
import { getAllSymposia } from '@/content/symposia';
import { getHeroImage } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Dana-Farber Provider Education Platform',
  description:
    'Clinical education hub for oncology providers featuring symposia, research updates, and CME-accredited content.',
};

export default function HomePage() {
  const featuredSymposia = getAllSymposia().slice(0, 3);

  return (
    <div>
      <HeroBanner
        title="Dana-Farber Provider Education Platform"
        subtitle="Advanced oncology education and clinical resources for healthcare professionals"
        imageSrc={getHeroImage('danafarber-hero')}
        primaryCta={{
          text: 'Explore Provider Resources',
          href: '/provider-resources',
        }}
        secondaryCta={{
          text: 'View Symposia',
          href: '/symposia',
        }}
      />

      <Shell>
        <SectionHeader
          title="Featured Symposia & CME"
          subtitle="Access the latest oncology education and earn CME credits"
        />

        <div className="mt-8">
          <ResourceGrid resources={featuredSymposia} />
        </div>
      </Shell>

      <Shell className="bg-gray-50">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 text-4xl font-bold text-df-blue">50+</div>
            <h3 className="text-lg font-semibold text-df-blue-dark">Educational Symposia</h3>
            <p className="mt-2 text-sm text-gray-600">
              CME-accredited programs across all oncology specialties
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 text-4xl font-bold text-df-blue">1000+</div>
            <h3 className="text-lg font-semibold text-df-blue-dark">Research Articles</h3>
            <p className="mt-2 text-sm text-gray-600">
              Latest clinical research and treatment advances
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 text-4xl font-bold text-df-blue">24/7</div>
            <h3 className="text-lg font-semibold text-df-blue-dark">On-Demand Access</h3>
            <p className="mt-2 text-sm text-gray-600">
              Stream symposia and access resources anytime, anywhere
            </p>
          </div>
        </div>
      </Shell>
    </div>
  );
}
