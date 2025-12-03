import { Badge } from '@/components/ui/Badge';
import { Clock, User } from 'lucide-react';

interface MetaBarProps {
  date?: string;
  presenters?: string[];
  specialty?: string;
  cmeCredits?: string;
}

export function MetaBar({ date, presenters, specialty, cmeCredits }: MetaBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-t border-gray-200 py-4">
      {date && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      )}

      {presenters && presenters.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>
            {presenters.length} Presenter{presenters.length > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {specialty && <Badge variant="default">{specialty}</Badge>}

      {cmeCredits && <Badge variant="secondary">{cmeCredits}</Badge>}
    </div>
  );
}
