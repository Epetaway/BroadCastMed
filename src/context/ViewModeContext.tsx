"use client";

import React, { createContext, useContext, useState } from 'react';
import { ViewMode } from '@/types';

interface ViewModeContextType {
  viewMode: ViewMode['mode'];
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode['mode']>('portfolio');

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'developer' ? 'portfolio' : 'developer');
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
}