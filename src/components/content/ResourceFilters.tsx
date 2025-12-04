'use client';

import { Specialty } from '@/types/content';

interface ResourceFiltersProps {
  selectedSpecialty: Specialty | 'All';
  onSpecialtyChange: (specialty: Specialty | 'All') => void;
}

const specialties: Array<Specialty | 'All'> = [
  'All',
  Specialty.Colorectal,
  Specialty.Breast,
  Specialty.GU,
  Specialty.Hematologic,
  Specialty.General,
];

export function ResourceFilters({ selectedSpecialty, onSpecialtyChange }: ResourceFiltersProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {specialties.map((specialty) => {
        const isActive = selectedSpecialty === specialty;
        return (
          <button
            key={specialty}
            onClick={() => onSpecialtyChange(specialty)}
            className={`
              rounded-full px-4 py-2 text-sm font-medium transition-colors
              ${
                isActive
                  ? 'bg-df-blue text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }
              focus:outline-none focus:ring-2 focus:ring-df-blue focus:ring-offset-2
            `}
            aria-pressed={isActive}
          >
            {specialty}
          </button>
        );
      })}
    </div>
  );
}
