'use client';

import { useState } from 'react';
import { Shell } from '@/components/layout/Shell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ResourceFilters } from '@/components/content/ResourceFilters';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { getAllSymposia } from '@/content/symposia';
import { Specialty } from '@/types/content';
import { getHeroImage } from '@/lib/images';

export default function SymposiaPage() {
  const [activeSpecialty, setActiveSpecialty] = useState<Specialty | 'All'>('All');
  const allSymposia = getAllSymposia();

  const filteredSymposia =
    activeSpecialty === 'All'
      ? allSymposia
      : allSymposia.filter((s) => s.specialty === activeSpecialty);

  return (
    <>
      {/* Page Header */}
      <div className="relative bg-gradient-to-r from-df-blue to-df-blue-dark text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${getHeroImage('symposia')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <Shell>
            <div className="py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Symposia</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Access on-demand symposia featuring the latest advances in oncology care and
                treatment.
              </p>
            </div>
          </Shell>
        </div>
      </div>

      <Shell>
        <div className="py-12">
          {/* Filters */}
          <div className="mb-8">
            <ResourceFilters
              selectedSpecialty={activeSpecialty}
              onSpecialtyChange={setActiveSpecialty}
            />
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredSymposia.length}{' '}
              {filteredSymposia.length === 1 ? 'symposium' : 'symposia'}
            </p>
          </div>

          <ResourceGrid resources={filteredSymposia} />
        </div>
      </Shell>
    </>
  );
}
