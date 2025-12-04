import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock } from 'lucide-react';
import { BaseResource } from '@/types/content';
import { getCardGradient, generateSeed } from '@/lib/images';

interface ResourceCardProps {
  resource: BaseResource;
  href: string;
}

export function ResourceCard({ resource, href }: ResourceCardProps) {
  // Generate gradient background using resource slug for consistency
  const gradient = getCardGradient(generateSeed(resource.slug));

  return (
    <Link href={href}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <div
          className="relative h-48 w-full overflow-hidden rounded-t-lg"
          style={{ background: gradient }}
        >
          {/* Gradient placeholder with subtle pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),rgba(255,255,255,0))]" />
        </div>

        <CardHeader>
          <div className="mb-2 flex flex-wrap gap-2">
            {resource.specialty && <Badge variant="default">{resource.specialty}</Badge>}
            {resource.type && <Badge variant="secondary">{resource.type}</Badge>}
          </div>
          <CardTitle className="line-clamp-2 text-df-blue-dark">{resource.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-3 text-sm text-gray-600">{resource.summary}</p>

          <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
            {resource.date && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {new Date(resource.date).toLocaleDateString()}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
