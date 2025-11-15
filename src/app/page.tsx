import Link from "next/link";
import { ArrowRight, Code, Heart, Users } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Front-End Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-healthcare-primary font-medium">
              Healthcare • CMS • Email Campaigns
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build accessible, responsive web interfaces and enterprise email systems 
              for healthcare organizations. Specializing in clinical content management, 
              physician workflows, and cross-client email compatibility.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-healthcare-primary text-healthcare-primary rounded-lg hover:bg-healthcare-primary/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-healthcare-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-healthcare-primary" />
              </div>
              <h3 className="text-xl font-semibold">Healthcare CMS Development</h3>
              <p className="text-muted-foreground">
                Building content management templates for treatment guidelines, 
                physician resources, and clinical workflows.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-healthcare-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-healthcare-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Responsive Email Campaigns</h3>
              <p className="text-muted-foreground">
                Enterprise-grade HTML emails with cross-client compatibility 
                for CME courses, newsletters, and clinical communications.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-healthcare-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-healthcare-accent" />
              </div>
              <h3 className="text-xl font-semibold">Stakeholder Collaboration</h3>
              <p className="text-muted-foreground">
                Working with clinical teams, content strategists, and marketing 
                to implement UX improvements and accessibility features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <Link
              href="/projects"
              className="text-healthcare-primary hover:underline font-medium"
            >
              View All Projects →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
