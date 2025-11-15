"use client";

import { Project } from '@/types';
import { useViewMode } from '@/context/ViewModeContext';
import Link from 'next/link';
import { ArrowUpRight, Code, Heart } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { viewMode } = useViewMode();
  const currentView = viewMode === 'developer' ? project.developerView : project.portfolioView;

  return (
    <div className="group relative bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-healthcare-primary/10 text-healthcare-primary text-xs font-medium rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Heart className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </span>
          )}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-healthcare-primary" />
        </Link>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-healthcare-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {project.role}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {currentView.summary}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>
      
      {viewMode === 'developer' && (
        <div className="flex items-center text-xs text-muted-foreground">
          <Code className="w-3 h-3 mr-1" />
          Technical Implementation Details
        </div>
      )}
      
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project details`}
      />
    </div>
  );
}