/**
 * Symposia Content - Dana-Farber Provider Education CMS
 */

import type { SymposiumDetail } from '@/types/content';

export const symposiaData: SymposiumDetail[] = [
  {
    id: 'sym-001',
    slug: 'early-symptoms-crc',
    type: 'Symposium',
    title: 'Understanding Early Symptom Presentation in CRC',
    summary:
      'Explore critical early warning signs of colorectal cancer in younger patients, with a focus on symptom recognition and timely referral strategies.',
    specialty: 'Colorectal',
    date: '2025-01-15',
    image: '/images/medical-placeholder-hero.jpg',
    tags: ['Early Detection', 'Young-Onset CRC', 'Symptom Recognition'],
    seriesName: 'Gut Instincts Series',
    cmeCredits: '1.0 AMA PRA Category 1 Credit',
    durationMinutes: 60,
    presenters: [
      'Dr. Sarah Chen, MD - Medical Oncology',
      'Dr. Michael Torres, MD - Gastroenterology',
    ],
    learningObjectives: [
      'Identify key early symptoms of colorectal cancer in patients under 50',
      'Understand risk stratification for young-onset CRC',
      'Implement evidence-based referral pathways for suspicious symptoms',
      'Discuss supportive care considerations for young CRC patients',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'Young-onset colorectal cancer (CRC) is rising at an alarming rate. This session provides practical guidance for recognizing early symptoms and implementing timely referrals.',
      },
      {
        heading: 'Recognizing Early Symptoms',
        body: 'Early detection is critical for improving outcomes in young-onset CRC. Key symptoms to monitor include:',
        bullets: [
          'Persistent rectal bleeding or blood in stool',
          'Unexplained changes in bowel habits lasting >4 weeks',
          'Abdominal pain or cramping not explained by other causes',
          'Unintentional weight loss',
          'Iron-deficiency anemia without clear source',
        ],
      },
      {
        heading: 'Supportive Care Strategies',
        body: 'Young patients with CRC face unique psychosocial and physical challenges. Supportive care should address fertility preservation, nutritional support, and mental health screening.',
      },
      {
        heading: 'When to Refer',
        body: 'Consider immediate referral for colonoscopy when:',
        bullets: [
          'Any rectal bleeding in patients <50 without hemorrhoid history',
          'Persistent GI symptoms with family history of CRC',
          'Iron-deficiency anemia without menstrual loss',
          'Palpable abdominal mass',
        ],
      },
    ],
    relatedIds: ['res-002', 'guid-001'],
  },
  {
    id: 'sym-002',
    slug: 'asco-preview-2025',
    type: 'Symposium',
    title: 'ASCO 2025 Preview: Emerging Oncology Research',
    summary:
      'A comprehensive preview of key abstracts and research presentations from the upcoming ASCO annual meeting.',
    specialty: 'General',
    date: '2025-05-01',
    image: '/images/medical-placeholder-hero.jpg',
    tags: ['ASCO', 'Clinical Trials', 'Research Updates'],
    seriesName: 'ASCO Preview',
    cmeCredits: '1.5 AMA PRA Category 1 Credits',
    durationMinutes: 90,
    presenters: [
      'Dr. Jennifer Park, MD, PhD - Hematologic Malignancies',
      'Dr. Robert Kim, MD - Solid Tumors',
    ],
    learningObjectives: [
      'Review breakthrough abstracts in immunotherapy and targeted therapy',
      'Understand emerging biomarker strategies across tumor types',
      'Identify practice-changing research from ASCO 2025',
      'Discuss implications for clinical decision-making',
    ],
    sections: [
      {
        heading: 'Overview',
        body: 'This session highlights the most impactful research to be presented at ASCO 2025, with expert commentary on clinical applications.',
      },
      {
        heading: 'Key Research Areas',
        body: 'Focus areas include novel immunotherapy combinations, precision oncology advances, and supportive care innovations.',
        bullets: [
          'CAR-T cell therapy updates in hematologic malignancies',
          'Antibody-drug conjugates in solid tumors',
          'Liquid biopsy for minimal residual disease monitoring',
          'Patient-reported outcomes in cancer survivorship',
        ],
      },
    ],
    relatedIds: ['res-001'],
  },
];

export function getSymposiumBySlug(slug: string): SymposiumDetail | undefined {
  return symposiaData.find((sym) => sym.slug === slug);
}

export function getSymposiaBySpecialty(specialty?: string): SymposiumDetail[] {
  if (!specialty || specialty === 'All') {
    return symposiaData;
  }
  return symposiaData.filter((sym) => sym.specialty === specialty);
}
