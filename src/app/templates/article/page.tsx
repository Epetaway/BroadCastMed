'use client';

import { useEffect, useState } from 'react';
import { Calendar, User, Clock, Tag, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Author {
  name: string;
  credentials: string;
  affiliation: string;
}

interface Subsection {
  subheading: string;
  content: string;
}

interface BodySection {
  heading: string;
  content: string;
  subsections?: Subsection[];
}

interface ArticleData {
  id: string;
  title: string;
  authors: Author[];
  publishDate: string;
  lastUpdated: string;
  specialty: string;
  contentType: string;
  readTime: string;
  abstract: string;
  keyTakeaways: string[];
  bodySections: BodySection[];
  references: string[];
  tags: string[];
  intendedAudience: string[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ArticleTemplate() {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load article content from JSON
    fetch('/content/oncology-article.json')
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading article:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0075e6] mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-neutral-700">Article not found</p>
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
            {/* Article Header */}
            <div className="bg-gradient-to-r from-[#0075e6] to-[#00b3b3] text-white p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {article.contentType}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {article.specialty}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

              <div className="flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Published: {new Date(article.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime} read
                </div>
              </div>
            </div>

            {/* Authors */}
            <div className="border-b border-neutral-200 p-6 bg-neutral-50">
              <h2 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                Authors
              </h2>
              <div className="flex flex-wrap gap-4">
                {article.authors.map((author, index) => (
                  <div key={index} className="flex items-start">
                    <User className="w-5 h-5 text-[#0075e6] mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">
                        {author.name}, {author.credentials}
                      </p>
                      <p className="text-sm text-neutral-600">{author.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <div className="p-8 border-b border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Abstract</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">{article.abstract}</p>
            </div>

            {/* Key Takeaways */}
            <div className="p-8 bg-[#e6f2ff] border-b border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#0075e6]" />
                Key Takeaways
              </h2>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0075e6] font-bold mr-3 mt-1">▸</span>
                    <span className="text-neutral-800">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Content */}
            <div className="p-8">
              {article.bodySections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8 last:mb-0">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-[#0075e6] pl-4">
                    {section.heading}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700 leading-relaxed mb-4 whitespace-pre-line">
                      {section.content}
                    </p>

                    {section.subsections && section.subsections.length > 0 && (
                      <div className="ml-4 mt-6 space-y-6">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                              {subsection.subheading}
                            </h3>
                            <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                              {subsection.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* References */}
            <div className="p-8 bg-neutral-50 border-t border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">References</h2>
              <ol className="space-y-2">
                {article.references.map((reference, index) => (
                  <li key={index} className="text-sm text-neutral-700">
                    <span className="font-semibold mr-2">{index + 1}.</span>
                    {reference}
                  </li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="p-6 border-t border-neutral-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="w-4 h-4 text-neutral-600" />
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Intended Audience */}
            <div className="p-6 bg-neutral-50 border-t border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong>Intended Audience:</strong> {article.intendedAudience.join(', ')}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
