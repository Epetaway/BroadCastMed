import { ResourceCard } from './ResourceCard';
import { BaseResource, ResourceType } from '@/types/content';

interface ResourceGridProps {
  resources: BaseResource[];
}

// Generate href based on resource type
function getResourceHref(resource: BaseResource): string {
  switch (resource.type) {
    case ResourceType.Symposium:
      return `/symposia/${resource.slug}`;
    case ResourceType.Research:
      return `/research/${resource.slug}`;
    case ResourceType.ClinicalGuidance:
      return `/clinical-guidance/${resource.slug}`;
    default:
      return `/provider-resources`;
  }
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.slug} resource={resource} href={getResourceHref(resource)} />
      ))}
    </div>
  );
}
