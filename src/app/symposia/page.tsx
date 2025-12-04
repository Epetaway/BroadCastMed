'use client';

import { useState } from 'react';
import { Shell } from '@/components/layout/Shell';
import { ResourceFilters } from '@/components/content/ResourceFilters';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { getAllSymposia } from '@/content/symposia';
import { Specialty } from '@/types/content';

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
      <div className="relative bg-gradient-to-r from-df-blue to-df-blue-dark text-white overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,193,7,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(0,179,179,0.3),transparent_60%)]" />
        </div>
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
