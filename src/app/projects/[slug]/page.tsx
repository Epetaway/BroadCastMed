"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';
import { useViewMode } from '@/context/ViewModeContext';
import { ArrowLeft, ExternalLink, Github, Monitor, Tablet, Smartphone, Code, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const { viewMode } = useViewMode();
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [expandedSnippet, setExpandedSnippet] = useState<number | null>(null);

  if (!project) {
    notFound();
  }

  const currentView = viewMode === 'developer' ? project.developerView : project.portfolioView;

  const toggleSnippet = (index: number) => {
    setExpandedSnippet(expandedSnippet === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-healthcare-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 bg-healthcare-primary/10 text-healthcare-primary text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.role}</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <h2 className="text-xl text-healthcare-primary font-medium">{currentView.headline}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{currentView.summary}</p>
          </div>

          {/* Technology Stack */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-healthcare-primary text-healthcare-primary rounded-lg hover:bg-healthcare-primary/10 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Responsive Preview Toggle */}
        <div className="mb-8">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Responsive Design Preview</h3>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeDevice === 'desktop' ? 'bg-healthcare-primary text-white' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setActiveDevice('tablet')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeDevice === 'tablet' ? 'bg-healthcare-primary text-white' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Tablet className="w-4 h-4" />
                <span>Tablet</span>
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  activeDevice === 'mobile' ? 'bg-healthcare-primary text-white' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <div className="text-center text-muted-foreground">
                <p className="mb-2">Preview for {activeDevice} view</p>
                <div className={`mx-auto bg-healthcare-primary/10 rounded ${
                  activeDevice === 'desktop' ? 'w-full h-64' : 
                  activeDevice === 'tablet' ? 'w-3/4 h-56' : 
                  'w-1/2 h-48'
                }`}>
                  <div className="flex items-center justify-center h-full">
                    <span className="text-healthcare-primary font-medium">
                      {activeDevice.charAt(0).toUpperCase() + activeDevice.slice(1)} Layout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold">Key Achievements</h2>
          <div className="grid gap-6">
            {currentView.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-healthcare-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation (Developer View Only) */}
        {viewMode === 'developer' && project.technicalDetails && (
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold">Technical Implementation</h2>
            
            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Challenges</h3>
                <ul className="space-y-2">
                  {project.technicalDetails.challenges.map((challenge, index) => (
                    <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Solutions</h3>
                <ul className="space-y-2">
                  {project.technicalDetails.solutions.map((solution, index) => (
                    <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code Snippets */}
            {project.technicalDetails.codeSnippets && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Code Examples</h3>
                {project.technicalDetails.codeSnippets.map((snippet, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSnippet(index)}
                      className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Code className="w-4 h-4 text-healthcare-primary" />
                        <div className="text-left">
                          <h4 className="font-medium">{snippet.title}</h4>
                          <p className="text-sm text-muted-foreground">{snippet.description}</p>
                        </div>
                      </div>
                      {expandedSnippet === index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSnippet === index && (
                      <div className="p-4 bg-white border-t">
                        <pre className="text-sm overflow-x-auto">
                          <code className="language-{snippet.language}">
                            {snippet.code}
                          </code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Before/After Improvements */}
        {project.images?.beforeAfter && (
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold">UX Improvements</h2>
            <div className="space-y-8">
              {project.images.beforeAfter.map((improvement, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">{improvement.description}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Before</h4>
                      <div className="bg-white rounded border p-4 h-48 flex items-center justify-center">
                        <span className="text-muted-foreground">Before Image</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">After</h4>
                      <div className="bg-white rounded border p-4 h-48 flex items-center justify-center">
                        <span className="text-healthcare-primary">After Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Outcomes */}
        {project.outcomes && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Project Outcomes</h2>
            <div className="grid gap-6">
              {project.outcomes.metrics && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Metrics & Results</h3>
                  <ul className="space-y-2">
                    {project.outcomes.metrics.map((metric, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.outcomes.feedback && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Stakeholder Feedback</h3>
                  <ul className="space-y-2">
                    {project.outcomes.feedback.map((feedback, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {feedback}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}