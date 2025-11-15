"use client";

import { useViewMode } from '@/context/ViewModeContext';
import { Monitor, User } from 'lucide-react';

export function ViewModeToggle() {
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <button
      onClick={toggleViewMode}
      className="flex items-center space-x-2 px-3 py-1.5 text-sm rounded-md bg-muted/50 hover:bg-muted transition-colors"
      aria-label={`Switch to ${viewMode === 'developer' ? 'portfolio' : 'developer'} view`}
    >
      {viewMode === 'developer' ? (
        <>
          <Monitor className="w-4 h-4" />
          <span className="hidden sm:inline">Developer</span>
        </>
      ) : (
        <>
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Portfolio</span>
        </>
      )}
    </button>
  );
}