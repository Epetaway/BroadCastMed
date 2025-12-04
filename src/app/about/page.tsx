'use client';

import { skills } from '@/data/site';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="max-w-4xl mx-auto space-y-16"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="text-center space-y-6" variants={fadeInUp}>
          <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Front-End Developer with expertise in healthcare CMS platforms, responsive email
            development, and accessible user interfaces.
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.section className="space-y-6" variants={fadeInUp}>
          <h2 className="text-3xl font-bold">Professional Background</h2>
          <div className="prose prose-gray max-w-none space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I specialize in building front-end solutions for healthcare organizations, with
              extensive experience in content management systems, enterprise email campaigns, and
              clinical workflow interfaces. My work focuses on creating accessible, responsive
              designs that serve both healthcare professionals and patients.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Over my career, I&apos;ve collaborated with medical content strategists, clinical
              teams, and marketing professionals to deliver user-centered solutions that improve how
              healthcare information is accessed and shared. I have particular expertise in
              cross-client email compatibility, CMS template development, and implementing
              stakeholder feedback into tangible UX improvements.
            </p>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section className="space-y-8" variants={fadeInUp}>
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-healthcare-primary/50 transition-colors"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-healthcare-primary">
                Front-End Development
              </h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center">
                    <span className="mr-2 text-healthcare-primary">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-healthcare-secondary/50 transition-colors"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-healthcare-secondary">Email Development</h3>
              <ul className="space-y-2">
                {skills.email.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center">
                    <span className="mr-2 text-healthcare-secondary">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-healthcare-accent/50 transition-colors"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-healthcare-accent">CMS & Tools</h3>
              <ul className="space-y-2">
                {skills.cms.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center">
                    <span className="mr-2 text-healthcare-accent">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-healthcare-primary/50 transition-colors"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-healthcare-primary">Development Tools</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center">
                    <span className="mr-2 text-healthcare-primary">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4 p-6 bg-card border border-border rounded-xl hover:border-healthcare-secondary/50 transition-colors"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-healthcare-secondary">Healthcare Domain</h3>
              <ul className="space-y-2">
                {skills.healthcare.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center">
                    <span className="mr-2 text-healthcare-secondary">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Highlights */}
        <motion.section className="space-y-6" variants={fadeInUp}>
          <h2 className="text-3xl font-bold">Experience Highlights</h2>
          <div className="space-y-6">
            <motion.div
              className="border-l-4 border-healthcare-primary pl-6 space-y-2 py-4"
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-healthcare-primary">
                Healthcare CMS Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built content management templates and front-end systems for major cancer centers
                and physician networks, enabling rapid publication of treatment guidelines, CME
                content, and clinical resources.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-healthcare-secondary pl-6 space-y-2 py-4"
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-healthcare-secondary">
                Enterprise Email Campaigns
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developed responsive HTML email templates with cross-client compatibility for
                oncology newsletters, CME course promotions, and clinical communications, using
                table-based layouts and Marketo integration.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-healthcare-accent pl-6 space-y-2 py-4"
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold text-healthcare-accent">
                Stakeholder Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Worked closely with clinical teams, content strategists, and marketing professionals
                to implement UX improvements, including referral form redesigns, content carousel
                implementations, and accessibility enhancements.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section className="space-y-6" variants={fadeInUp}>
          <h2 className="text-3xl font-bold">Beyond Code</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m passionate about the intersection of technology and healthcare, particularly
              how thoughtful design can improve patient outcomes and physician workflows. I stay
              current with healthcare accessibility standards, medical device compatibility, and
              emerging trends in clinical user experience design.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center space-y-6 bg-gradient-to-br from-healthcare-primary/5 to-healthcare-secondary/5 rounded-2xl p-12 border border-border"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I&apos;m always interested in discussing healthcare technology projects, front-end
            development challenges, and opportunities to improve clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-healthcare-primary text-white text-lg font-medium rounded-xl hover:bg-healthcare-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Schedule a Call
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-healthcare-primary text-healthcare-primary text-lg font-medium rounded-xl hover:bg-healthcare-primary/10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
