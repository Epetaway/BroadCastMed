import { Badge } from "@/components/ui/Badge";
import { Clock, User, Calendar, Award } from "lucide-react";
import { ResourceType, Specialty } from "@/types/content";

interface MetaBarProps {
  type?: ResourceType | string;
  date?: string;
  presenters?: string[];
  specialty?: Specialty | string;
  cmeCredits?: string;
  durationMinutes?: number;
}

export function MetaBar({
  type,
  date,
  presenters,
  specialty,
  cmeCredits,
  durationMinutes,
}: MetaBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-t border-gray-200 py-4">
      {type && <Badge>{type}</Badge>}

      {date && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      )}

      {presenters && presenters.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>
            {presenters.length} Presenter{presenters.length > 1 ? "s" : ""}
          </span>
        </div>
      )}

      {durationMinutes && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{durationMinutes} min</span>
        </div>
      )}

      {specialty && <Badge variant="default">{specialty}</Badge>}

      {cmeCredits && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Award className="h-4 w-4" />
          <span>{cmeCredits}</span>
        </div>
      )}
    </div>
  );
}
