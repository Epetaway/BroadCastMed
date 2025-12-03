'use client';

import { motion } from 'framer-motion';
import {
  Layout,
  Mail,
  Users,
  CheckCircle2,
  Code2,
  Gauge,
  Shield,
  FileText,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function BroadcastMedCaseStudy() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0075e6] to-[#00b3b3] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                Case Study
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                BroadcastMed Clinical Oncology Platform
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Building a comprehensive CMS and email campaign system for healthcare professionals
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Overview */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Project Overview</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                BroadcastMed is a clinical oncology content platform delivering evidence-based
                education to healthcare professionals. The platform combines a flexible CMS for
                treatment guidelines and clinical updates with a sophisticated email campaign system
                reaching thousands of physicians.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                As Lead Front-End Developer, I architected and implemented the entire front-end
                system, including CMS templates, responsive email campaigns, and performance
                optimizations.
              </p>
            </div>
          </motion.section>

          {/* My Role */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">My Role & Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#0075e6]">
                <Layout className="w-8 h-8 text-[#0075e6] mb-4" />
                <h3 className="text-xl font-semibold mb-3">CMS Template Engineering</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Designed and built modular content templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Created reusable component architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implemented dynamic content loading systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#00b3b3]">
                <Mail className="w-8 h-8 text-[#00b3b3] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Campaign Development</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Built 50+ responsive HTML email templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ensured cross-client compatibility (Outlook, Gmail, iOS)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Achieved 98% rendering accuracy across clients</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#d4a843]">
                <Gauge className="w-8 h-8 text-[#d4a843] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Optimized Lighthouse scores to 90+</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implemented lazy loading and code splitting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00b3b3] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reduced bundle size by 40%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#e02424]">
                <Shield className="w-8 h-8 text-[#e02424] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Accessibility Compliance</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Achieved WCAG 2.1 AA compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Implemented semantic HTML and ARIA labels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Full keyboard navigation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Technical Approach */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Technical Approach</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 flex items-center">
                    <Code2 className="w-5 h-5 text-[#0075e6] mr-2" />
                    Architecture & Technology Stack
                  </h3>
                  <ul className="space-y-2 text-neutral-700 ml-7">
                    <li>• Next.js 14 with App Router for optimal performance and SEO</li>
                    <li>• TypeScript for type safety and better developer experience</li>
                    <li>• Tailwind CSS with custom healthcare design system</li>
                    <li>• Framer Motion for smooth, performant animations</li>
                    <li>• JSON-based content management for flexibility</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-[#00b3b3] mr-2" />
                    CMS Template System
                  </h3>
                  <ul className="space-y-2 text-neutral-700 ml-7">
                    <li>• Modular component architecture with reusable blocks</li>
                    <li>• Dynamic content loading from JSON data sources</li>
                    <li>• Support for multiple content types (articles, resources, guidelines)</li>
                    <li>• Responsive layouts optimized for medical device compatibility</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 flex items-center">
                    <Mail className="w-5 h-5 text-[#d4a843] mr-2" />
                    Email Development Strategy
                  </h3>
                  <ul className="space-y-2 text-neutral-700 ml-7">
                    <li>• Table-based HTML layout for maximum compatibility</li>
                    <li>• Inline CSS with media queries for responsive design</li>
                    <li>• MSO conditional comments for Outlook optimization</li>
                    <li>• Progressive enhancement approach for modern clients</li>
                    <li>• Comprehensive testing across 15+ email clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Business Outcomes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0075e6] to-[#005db3] text-white rounded-xl p-8 text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Email Campaigns Deployed</div>
              </div>
              <div className="bg-gradient-to-br from-[#00b3b3] to-[#008f8f] text-white rounded-xl p-8 text-center">
                <div className="text-5xl font-bold mb-2">40%</div>
                <div className="text-lg">Faster Content Publishing</div>
              </div>
              <div className="bg-gradient-to-br from-[#d4a843] to-[#b8902e] text-white rounded-xl p-8 text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg">Cross-Client Compatibility</div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-[#0075e6]/10 to-[#00b3b3]/10 rounded-2xl p-12 border border-[#0075e6]/20">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Explore the Live Implementation
              </h2>
              <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                See the CMS templates and email campaigns in action
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/templates/article"
                  className="inline-flex items-center px-8 py-4 bg-[#0075e6] text-white text-lg font-medium rounded-xl hover:bg-[#005db3] transition-all shadow-lg"
                >
                  View Article Template
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/dev-view"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#0075e6] text-[#0075e6] text-lg font-medium rounded-xl hover:bg-[#0075e6]/10 transition-colors"
                >
                  Developer View
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
