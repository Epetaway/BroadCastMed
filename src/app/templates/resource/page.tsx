'use client';

import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Download,
  ArrowLeft,
  Info,
  AlertCircle,
  Phone,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Section {
  heading: string;
  content: string;
  icon: string;
}

interface DownloadableMaterial {
  title: string;
  description: string;
  format: string;
  size: string;
}

interface ResourceData {
  id: string;
  title: string;
  category: string;
  specialty: string;
  publishDate: string;
  lastUpdated: string;
  intendedAudience: string[];
  readTime: string;
  description: string;
  keyTakeaways: string[];
  sections: Section[];
  downloadableMaterials: DownloadableMaterial[];
  relatedResources: string[];
  tags: string[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    info: <Info className="w-6 h-6" />,
    alert: <AlertCircle className="w-6 h-6" />,
    phone: <Phone className="w-6 h-6" />,
    treatment: <Activity className="w-6 h-6" />,
    schedule: <Clock className="w-6 h-6" />,
    lifestyle: <Activity className="w-6 h-6" />,
  };
  return icons[iconName] || <Info className="w-6 h-6" />;
};

export default function ResourceTemplate() {
  const [resource, setResource] = useState<ResourceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/oncology-resource.json')
      .then((res) => res.json())
      .then((data) => {
        setResource(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading resource:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0075e6] mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading resource...</p>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-neutral-700">Resource not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-[#0075e6] hover:text-[#005db3] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.article
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00b3b3] to-[#0075e6] text-white p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {resource.category}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {resource.specialty}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>

              <div className="flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {resource.readTime} read
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 border-b border-neutral-200">
              <p className="text-lg text-neutral-700 leading-relaxed">{resource.description}</p>
            </div>

            {/* Key Takeaways */}
            <div className="p-8 bg-[#e6f7f7] border-b border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                {resource.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00b3b3] font-bold mr-3 mt-1">▸</span>
                    <span className="text-neutral-800">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div className="p-8">
              {resource.sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f2ff] flex items-center justify-center text-[#0075e6] mr-4">
                      {getIconComponent(section.icon)}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                        {section.heading}
                      </h2>
                      <div className="prose prose-lg max-w-none">
                        <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Downloadable Materials */}
            {resource.downloadableMaterials && resource.downloadableMaterials.length > 0 && (
              <div className="p-8 bg-neutral-50 border-t border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Download className="w-5 h-5 mr-2 text-[#0075e6]" />
                  Downloadable Materials
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {resource.downloadableMaterials.map((material, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white border border-neutral-200 rounded-lg hover:border-[#0075e6] hover:shadow-md transition-all cursor-pointer"
                    >
                      <h3 className="font-semibold text-neutral-900 mb-2">{material.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">{material.description}</p>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <span>{material.format}</span>
                        <span>{material.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Resources */}
            {resource.relatedResources && resource.relatedResources.length > 0 && (
              <div className="p-8 border-t border-neutral-200">
                <h2 className="text-lg font-bold text-neutral-900 mb-4">Related Resources</h2>
                <ul className="space-y-2">
                  {resource.relatedResources.map((related, index) => (
                    <li key={index}>
                      <a href="#" className="text-[#0075e6] hover:text-[#005db3] hover:underline">
                        {related}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Intended Audience */}
            <div className="p-6 bg-neutral-50 border-t border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong>Intended Audience:</strong> {resource.intendedAudience.join(', ')}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
