import { notFound } from 'next/navigation';
import { Shell } from '@/components/layout/Shell';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MetaBar } from '@/components/content/MetaBar';
import { ArticleBody } from '@/components/content/ArticleBody';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { getSymposiumBySlug, getAllSymposia } from '@/content/symposia';
import { Check, Play } from 'lucide-react';
import { ResourceType } from '@/types/content';
import { getSymposiumImage } from '@/lib/images';

// Generate static params for all symposia
export function generateStaticParams() {
  const symposia = getAllSymposia();
  return symposia.map((symposium) => ({
    slug: symposium.slug,
  }));
}

interface SymposiumPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: SymposiumPageProps) {
  const symposium = getSymposiumBySlug(params.slug);

  if (!symposium) {
    return {
      title: 'Symposium Not Found',
    };
  }

  return {
    title: `${symposium.title} - Dana-Farber Provider Education`,
    description: symposium.summary,
  };
}

export default function SymposiumPage({ params }: SymposiumPageProps) {
  const symposium = getSymposiumBySlug(params.slug);

  if (!symposium) {
    notFound();
  }

  // Get related symposia (same specialty, excluding current)
  const allSymposia = getAllSymposia();
  const relatedSymposia = allSymposia
    .filter((s) => s.specialty === symposium.specialty && s.slug !== symposium.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-df-blue-dark to-df-blue text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${getSymposiumImage(symposium.slug)}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <Shell>
            <div className="py-16 md:py-24">
              {symposium.seriesName && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-df-gold text-df-blue-dark text-sm font-semibold rounded-full">
                    {symposium.seriesName}
                  </span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {symposium.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                {symposium.summary}
              </p>
              <Button variant="secondary">
                <Play className="w-4 h-4 mr-2" />
                Watch Symposium
              </Button>
            </div>
          </Shell>
        </div>
      </div>

      <Shell>
        <div className="py-12">
          {/* Metadata Bar */}
          <div className="mb-12">
            <MetaBar
              type={ResourceType.Symposium}
              specialty={symposium.specialty}
              date={symposium.date}
              presenters={symposium.presenters}
              durationMinutes={symposium.durationMinutes}
              cmeCredits={symposium.cmeCredits}
            />
          </div>

          {/* Learning Objectives */}
          {symposium.learningObjectives && symposium.learningObjectives.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Learning Objectives</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  {symposium.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-df-blue flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Article Body */}
          {symposium.articleBody && symposium.articleBody.length > 0 && (
            <div className="mb-12">
              <ArticleBody sections={symposium.articleBody} />
            </div>
          )}

          {/* Related Content */}
          {relatedSymposia.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Symposia</h2>
              <ResourceGrid resources={relatedSymposia} />
            </div>
          )}
        </div>
      </Shell>
    </div>
  );
}
