import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock } from 'lucide-react';
import { BaseResource } from '@/types/content';

interface ResourceCardProps {
  resource: BaseResource;
  href: string;
}

export function ResourceCard({ resource, href }: ResourceCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full transition-shadow hover:shadow-md">
        {resource.image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image src={resource.image} alt={resource.title} fill className="object-cover" />
          </div>
        )}

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
