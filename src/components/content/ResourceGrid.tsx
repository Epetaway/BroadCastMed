import { ResourceCard } from './ResourceCard';
import { BaseResource } from '@/types/content';

interface ResourceGridProps {
  resources: BaseResource[];
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} />
      ))}
    </div>
  );
}
