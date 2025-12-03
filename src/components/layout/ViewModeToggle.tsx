'use client';

import { useViewMode } from '@/context/ViewModeContext';
import { Code2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export function ViewModeToggle() {
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <motion.button
      onClick={toggleViewMode}
      className="relative flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-healthcare-primary/50 focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:ring-offset-2"
      aria-label={`Switch to ${viewMode === 'developer' ? 'portfolio' : 'developer'} view. Currently showing ${viewMode} view.`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="flex items-center space-x-2"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {viewMode === 'developer' ? (
          <>
            <Code2 className="w-4 h-4 text-healthcare-primary" />
            <span className="hidden sm:inline">Developer</span>
          </>
        ) : (
          <>
            <Briefcase className="w-4 h-4 text-healthcare-secondary" />
            <span className="hidden sm:inline">Portfolio</span>
          </>
        )}
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-healthcare-accent rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
