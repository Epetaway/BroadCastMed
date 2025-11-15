"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useViewMode } from "@/context/ViewModeContext";

export default function ProjectsPage() {
  const { viewMode } = useViewMode();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">My Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of healthcare-focused front-end development projects, 
            featuring CMS platforms, responsive email campaigns, and accessible user interfaces.
          </p>
          <div className="flex items-center justify-center">
            <div className="px-3 py-1 bg-muted rounded-full text-sm">
              Viewing: <span className="font-medium capitalize">{viewMode}</span> perspective
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}