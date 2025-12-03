import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Shell } from '@/components/layout/Shell';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'Projects - Dana-Farber Provider Education',
  description: 'Healthcare-focused development projects',
};

export default function ProjectsPage() {
  return (
    <Shell>
      <SectionHeader
        title="Development Projects"
        subtitle="A showcase of healthcare-focused front-end development projects"
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Shell>
  );
}
