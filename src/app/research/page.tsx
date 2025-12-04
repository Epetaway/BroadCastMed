import type { Metadata } from 'next';
import { Shell } from '@/components/layout/Shell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { ResourceCard } from '@/components/content/ResourceCard';
import { getAllResearch } from '@/content/research';

export const metadata: Metadata = {
  title: 'Research & Clinical Updates | Dana-Farber Provider Education',
  description:
    'Stay current with the latest oncology research highlights, clinical trial results, and evidence-based updates from Dana-Farber Cancer Institute.',
};

export default function ResearchPage() {
  const research = getAllResearch();

  return (
    <Shell>
      <main id="main-content">
        <SectionHeader
          title="Research & Clinical Updates"
          subtitle="Evidence-based insights from Dana-Farber researchers and latest oncology breakthroughs"
        />

        <ResourceGrid>
          {research.map((article) => (
            <ResourceCard key={article.id} resource={article} href={`/research/${article.slug}`} />
          ))}
        </ResourceGrid>
      </main>
    </Shell>
  );
}
