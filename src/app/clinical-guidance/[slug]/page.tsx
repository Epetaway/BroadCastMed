import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Shell } from '@/components/layout/Shell';
import { HeroBanner } from '@/components/content/HeroBanner';
import { ArticleBody } from '@/components/content/ArticleBody';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { ResourceCard } from '@/components/content/ResourceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { getClinicalGuidanceBySlug, getAllClinicalGuidance } from '@/content/clinical-guidance';
import { getAllSymposia } from '@/content/symposia';
import { getAllResearch } from '@/content/research';

export async function generateStaticParams() {
  const guidance = getAllClinicalGuidance();
  return guidance.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = getClinicalGuidanceBySlug(params.slug);

  if (!guide) {
    return {
      title: 'Guidance Not Found',
    };
  }

  return {
    title: `${guide.title} | Dana-Farber Provider Education`,
    description: guide.summary,
  };
}

export default function ClinicalGuidancePage({ params }: { params: { slug: string } }) {
  const guide = getClinicalGuidanceBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  // Get related content
  const allContent = [...getAllResearch(), ...getAllSymposia()];
  const related = guide.relatedContent
    ? allContent.filter((item) => guide.relatedContent?.includes(item.slug))
    : [];

  return (
    <Shell>
      <main id="main-content">
        <HeroBanner title={guide.title} subtitle={guide.summary} image={guide.image} />

        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Badge variant="secondary">{guide.type}</Badge>
            <Badge>{guide.specialty}</Badge>
            <span className="text-sm text-neutral-500">{guide.date}</span>
          </div>

          {guide.intendedAudience && guide.intendedAudience.length > 0 && (
            <section className="mb-8 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-df-blue-dark">Intended Audience</h2>
              <ul className="list-inside list-disc space-y-1 text-neutral-700">
                {guide.intendedAudience.map((audience, index) => (
                  <li key={index}>{audience}</li>
                ))}
              </ul>
            </section>
          )}

          {guide.whenToUse && guide.whenToUse.length > 0 && (
            <section className="mb-8 rounded-lg border border-df-blue/20 bg-df-blue/5 p-6">
              <h2 className="mb-3 text-lg font-semibold text-df-blue-dark">
                When to Use This Guidance
              </h2>
              <ul className="list-inside list-disc space-y-1 text-neutral-700">
                {guide.whenToUse.map((scenario, index) => (
                  <li key={index}>{scenario}</li>
                ))}
              </ul>
            </section>
          )}

          {guide.keySteps && guide.keySteps.length > 0 && (
            <section className="mb-12 rounded-lg border border-df-gold/30 bg-df-gold/10 p-6">
              <h2 className="mb-4 text-lg font-semibold text-df-blue-dark">Key Steps</h2>
              <ol className="space-y-3">
                {guide.keySteps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-df-blue text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-neutral-700">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <ArticleBody sections={guide.articleBody} />

          {related.length > 0 && (
            <section className="mt-16">
              <SectionHeader title="Related Content" />
              <ResourceGrid resources={related} />
            </section>
          )}
        </div>
      </main>
    </Shell>
  );
}
