'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail, Layout, Users } from 'lucide-react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-healthcare-primary/10 text-healthcare-primary rounded-full text-sm font-medium"
              variants={fadeInUp}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Lead Designer & Front-End Engineer</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Healthcare CMS &<br />
              Email Campaign Expert
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building accessible, responsive web platforms and enterprise email systems for
              healthcare organizations. Specializing in{' '}
              <span className="text-healthcare-primary font-semibold">
                clinical content management
              </span>
              , <span className="text-healthcare-secondary font-semibold">physician workflows</span>
              , and{' '}
              <span className="text-healthcare-accent font-semibold">
                cross-client email compatibility
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-healthcare-primary text-white text-lg font-medium rounded-xl hover:bg-healthcare-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-healthcare-primary text-healthcare-primary text-lg font-medium rounded-xl hover:bg-healthcare-primary/10 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            variants={staggerContainer}
          >
            <motion.div className="p-6 bg-card border border-border rounded-xl" variants={fadeInUp}>
              <div className="text-3xl font-bold text-healthcare-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Email Campaigns Deployed</div>
            </motion.div>
            <motion.div className="p-6 bg-card border border-border rounded-xl" variants={fadeInUp}>
              <div className="text-3xl font-bold text-healthcare-secondary mb-2">WCAG 2.1 AA</div>
              <div className="text-sm text-muted-foreground">Accessibility Compliance</div>
            </motion.div>
            <motion.div className="p-6 bg-card border border-border rounded-xl" variants={fadeInUp}>
              <div className="text-3xl font-bold text-healthcare-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Cross-Client Compatibility</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Expertise */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforming healthcare communication through modern web technologies and
                user-centered design
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-healthcare-primary/50"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-primary to-healthcare-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-healthcare-primary transition-colors">
                  Healthcare CMS Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building content management templates for treatment guidelines, physician
                  resources, and clinical workflows. Expertise in creating reusable, scalable
                  component systems.
                </p>
              </motion.div>

              <motion.div
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-healthcare-secondary/50"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-secondary to-healthcare-secondary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-healthcare-secondary transition-colors">
                  Responsive Email Campaigns
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-grade HTML emails with cross-client compatibility for CME courses,
                  newsletters, and clinical communications. Table-based layouts for Outlook, Gmail,
                  and mobile.
                </p>
              </motion.div>

              <motion.div
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-healthcare-accent/50"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-healthcare-accent to-healthcare-accent/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-healthcare-accent transition-colors">
                  Stakeholder Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Working with clinical teams, content strategists, and marketing to implement UX
                  improvements and accessibility features. User research and iterative design.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Templates Showcase */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Live CMS Templates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore fully functional healthcare CMS templates with realistic oncology content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:border-healthcare-primary/50"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-healthcare-primary to-healthcare-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Article Template</h3>
              <p className="text-muted-foreground mb-6">
                Clinical updates with authors, references, and structured sections
              </p>
              <Link
                href="/templates/article"
                className="inline-flex items-center text-healthcare-primary font-semibold group-hover:underline"
              >
                View Template
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:border-healthcare-secondary/50"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-healthcare-secondary to-healthcare-secondary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resource Template</h3>
              <p className="text-muted-foreground mb-6">
                Patient education guides with downloadable materials
              </p>
              <Link
                href="/templates/resource"
                className="inline-flex items-center text-healthcare-secondary font-semibold group-hover:underline"
              >
                View Template
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:border-healthcare-accent/50"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-healthcare-accent to-healthcare-accent/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Campaigns</h3>
              <p className="text-muted-foreground mb-6">
                Responsive HTML emails with cross-client compatibility
              </p>
              <Link
                href="/case-studies/broadcastmed"
                className="inline-flex items-center text-healthcare-accent font-semibold group-hover:underline"
              >
                View Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="flex items-center justify-between mb-12" variants={fadeInUp}>
            <div>
              <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
              <p className="text-lg text-muted-foreground">
                Showcasing clinical content platforms and email campaign systems
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center text-healthcare-primary hover:underline font-semibold text-lg group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div className="grid gap-6" variants={staggerContainer}>
            {featuredProjects.map((project) => (
              <motion.div key={project.slug} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="md:hidden text-center mt-8" variants={fadeInUp}>
            <Link
              href="/projects"
              className="inline-flex items-center text-healthcare-primary hover:underline font-semibold text-lg group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
