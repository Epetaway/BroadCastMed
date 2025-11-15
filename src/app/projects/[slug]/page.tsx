import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { ProjectDetailClient } from './ProjectDetailClient';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}