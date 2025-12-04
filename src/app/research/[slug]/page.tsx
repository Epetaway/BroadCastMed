import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Shell } from '@/components/layout/Shell';
import { HeroBanner } from '@/components/content/HeroBanner';
import { MetaBar } from '@/components/content/MetaBar';
import { ArticleBody } from '@/components/content/ArticleBody';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { ResourceCard } from '@/components/content/ResourceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getResearchBySlug, getAllResearch } from '@/content/research';
import { getAllSymposia } from '@/content/symposia';
import { Check } from 'lucide-react';

export async function generateStaticParams() {
  const research = getAllResearch();
  return research.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getResearchBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Dana-Farber Provider Education`,
    description: article.summary,
  };
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
  const article = getResearchBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Get related content
  const allContent = [...getAllResearch(), ...getAllSymposia()];
  const related = article.relatedContent
    ? allContent.filter((item) => article.relatedContent?.includes(item.slug))
    : [];

  return (
    <Shell>
      <main id="main-content">
        <HeroBanner title={article.title} subtitle={article.summary} image={article.image} />

        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <MetaBar type={article.type} specialty={article.specialty} date={article.date} />

          {article.learningObjectives && article.learningObjectives.length > 0 && (
            <section className="mb-12 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-df-blue-dark">Learning Objectives</h2>
              <ul className="space-y-2">
                {article.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-df-blue"
                      aria-hidden="true"
                    />
                    <span className="text-neutral-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ArticleBody sections={article.articleBody} />

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
