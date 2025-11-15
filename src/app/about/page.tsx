import { skills } from '@/data/site';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Front-End Developer with expertise in healthcare CMS platforms, 
            responsive email development, and accessible user interfaces.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Professional Background</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building front-end solutions for healthcare organizations, 
              with extensive experience in content management systems, enterprise email 
              campaigns, and clinical workflow interfaces. My work focuses on creating 
              accessible, responsive designs that serve both healthcare professionals 
              and patients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over my career, I&apos;ve collaborated with medical content strategists, 
              clinical teams, and marketing professionals to deliver user-centered 
              solutions that improve how healthcare information is accessed and shared. 
              I have particular expertise in cross-client email compatibility, 
              CMS template development, and implementing stakeholder feedback into 
              tangible UX improvements.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-healthcare-primary">Front-End Development</h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-healthcare-primary">Email Development</h3>
              <ul className="space-y-2">
                {skills.email.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-healthcare-primary">CMS & Tools</h3>
              <ul className="space-y-2">
                {skills.cms.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-healthcare-primary">Development Tools</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-healthcare-primary">Healthcare Domain</h3>
              <ul className="space-y-2">
                {skills.healthcare.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Experience Highlights</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-healthcare-primary pl-6 space-y-2">
              <h3 className="text-lg font-semibold">Healthcare CMS Development</h3>
              <p className="text-muted-foreground">
                Built content management templates and front-end systems for major cancer centers 
                and physician networks, enabling rapid publication of treatment guidelines, 
                CME content, and clinical resources.
              </p>
            </div>
            
            <div className="border-l-4 border-healthcare-secondary pl-6 space-y-2">
              <h3 className="text-lg font-semibold">Enterprise Email Campaigns</h3>
              <p className="text-muted-foreground">
                Developed responsive HTML email templates with cross-client compatibility 
                for oncology newsletters, CME course promotions, and clinical communications, 
                using table-based layouts and Marketo integration.
              </p>
            </div>
            
            <div className="border-l-4 border-healthcare-accent pl-6 space-y-2">
              <h3 className="text-lg font-semibold">Stakeholder Collaboration</h3>
              <p className="text-muted-foreground">
                Worked closely with clinical teams, content strategists, and marketing 
                professionals to implement UX improvements, including referral form redesigns, 
                content carousel implementations, and accessibility enhancements.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Beyond Code</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m passionate about the intersection of technology and healthcare, particularly 
              how thoughtful design can improve patient outcomes and physician workflows. 
              I stay current with healthcare accessibility standards, medical device compatibility, 
              and emerging trends in clinical user experience design.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in discussing healthcare technology projects, 
            front-end development challenges, and opportunities to improve clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-primary/90 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Call
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-healthcare-primary text-healthcare-primary rounded-lg hover:bg-healthcare-primary/10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}