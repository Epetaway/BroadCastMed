'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Folder,
  FileCode,
  Gauge,
  Shield,
  Palette,
  Mail,
  Layout,
  Database,
  Zap,
} from 'lucide-react';

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

export default function DeveloperView() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Code2 className="w-16 h-16 text-[#0075e6] mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">Developer View</h1>
              <p className="text-xl text-neutral-400">
                Technical architecture, design system, and implementation details for the
                BroadcastMed platform
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Architecture Overview */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Folder className="w-8 h-8 text-[#0075e6] mr-3" />
              Project Architecture
            </h2>
            <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
              <div className="font-mono text-sm space-y-1 text-neutral-300">
                <div className="text-[#00b3b3]">BroadCastMed/</div>
                <div className="ml-4">
                  <span className="text-[#d4a843]">├── src/</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">│ ├── app/</span>{' '}
                  <span className="text-neutral-600">// Next.js App Router pages</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── templates/</span>{' '}
                  <span className="text-neutral-600">// CMS templates</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── emails/</span>{' '}
                  <span className="text-neutral-600">// HTML email campaigns</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── case-studies/</span>{' '}
                  <span className="text-neutral-600">// Project showcases</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ └── dev-view/</span>{' '}
                  <span className="text-neutral-600">// This page</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">│ ├── components/</span>{' '}
                  <span className="text-neutral-600">// Reusable UI components</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── ui/</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── content/</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ └── navigation/</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">│ ├── design-system/</span>{' '}
                  <span className="text-neutral-600">// Design tokens & theme</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── tokens.ts</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ ├── typography.ts</span>
                </div>
                <div className="ml-12">
                  <span className="text-neutral-500">│ │ └── colors.ts</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">│ ├── content/</span>{' '}
                  <span className="text-neutral-600">// JSON content data</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">│ └── context/</span>{' '}
                  <span className="text-neutral-600">// React context providers</span>
                </div>
                <div className="ml-4">
                  <span className="text-[#d4a843]">└── public/</span>
                </div>
                <div className="ml-8">
                  <span className="text-neutral-500">└── assets/</span>{' '}
                  <span className="text-neutral-600">// Images & static files</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Design System */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Palette className="w-8 h-8 text-[#00b3b3] mr-3" />
              Healthcare Design System
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 text-[#0075e6]">Color Tokens</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#0075e6] mr-3"></div>
                    <div>
                      <div className="font-mono text-sm">clinicalBlue.500</div>
                      <div className="text-xs text-neutral-500">#0075e6</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#00b3b3] mr-3"></div>
                    <div>
                      <div className="font-mono text-sm">clinicalTeal.500</div>
                      <div className="text-xs text-neutral-500">#00b3b3</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#e02424] mr-3"></div>
                    <div>
                      <div className="font-mono text-sm">accentRed.500</div>
                      <div className="text-xs text-neutral-500">#e02424</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-semibold mb-4 text-[#00b3b3]">Typography Scale</h3>
                <div className="space-y-2 text-neutral-300">
                  <div className="font-mono text-xs">heading-xl: 3rem / 48px</div>
                  <div className="font-mono text-xs">heading-lg: 2.25rem / 36px</div>
                  <div className="font-mono text-xs">heading-md: 1.875rem / 30px</div>
                  <div className="font-mono text-xs">body-lg: 1.125rem / 18px</div>
                  <div className="font-mono text-xs">body-md: 1rem / 16px</div>
                  <div className="font-mono text-xs">body-sm: 0.875rem / 14px</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CMS Implementation */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Layout className="w-8 h-8 text-[#d4a843] mr-3" />
              CMS Template System
            </h2>
            <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
              <p className="text-neutral-300 mb-6">
                Dynamic content loading system with modular component architecture
              </p>
              <div className="bg-neutral-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-neutral-300">
                  <code>{`// Article Template Data Structure
interface ArticleData {
  id: string;
  title: string;
  authors: Author[];
  publishDate: string;
  specialty: string;
  abstract: string;
  keyTakeaways: string[];
  bodySections: BodySection[];
  references: string[];
  tags: string[];
  intendedAudience: string[];
}

// Dynamic content loading
useEffect(() => {
  fetch('/content/oncology-article.json')
    .then((res) => res.json())
    .then((data) => setArticle(data));
}, []);`}</code>
                </pre>
              </div>
            </div>
          </motion.section>

          {/* Email System */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Mail className="w-8 h-8 text-[#0075e6] mr-3" />
              Email Campaign Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                <h3 className="text-lg font-semibold mb-4">Cross-Client Strategy</h3>
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#00b3b3] mr-2">▸</span>
                    <span>Table-based HTML layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00b3b3] mr-2">▸</span>
                    <span>Inline CSS for maximum compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00b3b3] mr-2">▸</span>
                    <span>MSO conditionals for Outlook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00b3b3] mr-2">▸</span>
                    <span>Media queries for responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00b3b3] mr-2">▸</span>
                    <span>Progressive enhancement approach</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                <h3 className="text-lg font-semibold mb-4">Testing Matrix</h3>
                <div className="space-y-2 text-neutral-300 text-sm">
                  <div className="flex justify-between">
                    <span>Outlook 2016/2019/365</span>
                    <span className="text-green-400">✓ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gmail (Desktop/Mobile)</span>
                    <span className="text-green-400">✓ 98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Apple Mail (iOS/macOS)</span>
                    <span className="text-green-400">✓ 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yahoo Mail</span>
                    <span className="text-green-400">✓ 96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile Clients</span>
                    <span className="text-green-400">✓ 97%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Performance */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Gauge className="w-8 h-8 text-[#00b3b3] mr-3" />
              Performance Optimizations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0075e6] to-[#005db3] rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">95+</div>
                <div className="text-sm">Lighthouse Performance</div>
              </div>
              <div className="bg-gradient-to-br from-[#00b3b3] to-[#008f8f] rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">100</div>
                <div className="text-sm">Accessibility Score</div>
              </div>
              <div className="bg-gradient-to-br from-[#d4a843] to-[#b8902e] rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">-40%</div>
                <div className="text-sm">Bundle Size Reduction</div>
              </div>
            </div>
          </motion.section>

          {/* Accessibility */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Shield className="w-8 h-8 text-[#e02424] mr-3" />
              Accessibility Implementation
            </h2>
            <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#0075e6]">WCAG 2.1 AA</h3>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    <li>• Semantic HTML5 structure</li>
                    <li>• Proper heading hierarchy</li>
                    <li>• ARIA labels on interactive elements</li>
                    <li>• Color contrast ratios 4.5:1+</li>
                    <li>• Focus indicators on all controls</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#00b3b3]">Navigation</h3>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    <li>• Skip-to-content link</li>
                    <li>• Full keyboard navigation</li>
                    <li>• Screen reader compatibility</li>
                    <li>• Landmark regions</li>
                    <li>• Focus management</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
