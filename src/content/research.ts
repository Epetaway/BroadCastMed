import { ResearchDetail, Specialty, ResourceType } from '@/types/content';
import { getResearchImage } from '@/lib/images';

export const researchArticles: ResearchDetail[] = [
  {
    id: 'cancer-factfinder-toolkit',
    slug: 'cancer-factfinder-toolkit',
    type: ResourceType.News,
    title: 'Cancer FactFinder Launches New Evidence-Based Toolkit',
    summary:
      'A comprehensive digital resource providing patients and families with reliable, evidence-based cancer information across multiple specialties.',
    specialty: Specialty.General,
    date: '2024-12-01',
    image: getResearchImage('cancer-factfinder-toolkit'),
    relatedContent: ['precision-hematology', 'breast-cancer-screening'],
    learningObjectives: [
      'Understand the scope and purpose of the Cancer FactFinder toolkit',
      'Identify key features and evidence-based resources available',
      'Learn how to incorporate the toolkit into patient education workflows',
    ],
    articleBody: [
      {
        heading: 'Background',
        content: [
          'Cancer FactFinder represents a significant advancement in patient education, providing oncology professionals with a trusted resource to share with patients and families. Developed in collaboration with medical oncologists, nurses, and patient advocates, the toolkit addresses the critical need for accurate, accessible cancer information in an era of widespread medical misinformation.',
          'The platform covers 15+ cancer types and includes treatment overviews, side effect management guides, nutrition resources, and psychosocial support information—all reviewed by Dana-Farber specialists.',
        ],
      },
      {
        heading: 'Key Features',
        content: [
          'Evidence-based content reviewed by Dana-Farber oncology experts',
          'Multi-language support (English, Spanish, Portuguese, Haitian Creole)',
          'Mobile-responsive design accessible on any device',
          'Printable PDFs for offline reference',
          'Regular updates reflecting latest clinical guidelines',
          'Integration with patient portal systems',
        ],
      },
      {
        heading: 'Clinical Relevance',
        content: [
          'Clinicians can confidently direct patients to Cancer FactFinder knowing the information aligns with current evidence-based practice. The toolkit reduces the burden on clinical staff to create individualized patient education materials while ensuring consistency in messaging.',
          'Early adoption data shows increased patient satisfaction scores and reduced anxiety related to treatment decisions when Cancer FactFinder resources are integrated into care workflows.',
        ],
      },
    ],
  },
  {
    id: 'immunotherapy-combination-trials',
    slug: 'immunotherapy-combination-trials',
    type: ResourceType.Research,
    title: 'Phase III Results: Immunotherapy Combinations in Advanced NSCLC',
    summary:
      'Landmark trial demonstrates significant survival benefit with dual checkpoint inhibitor therapy plus chemotherapy in first-line metastatic non-small cell lung cancer.',
    specialty: Specialty.General,
    date: '2024-11-15',
    image: getResearchImage('immunotherapy-combination-trials'),
    relatedContent: ['asco-preview-2025'],
    learningObjectives: [
      'Review Phase III trial design and patient population',
      'Analyze progression-free and overall survival outcomes',
      'Understand safety profile and management of immune-related adverse events',
      'Discuss implications for current treatment algorithms',
    ],
    articleBody: [
      {
        heading: 'Study Overview',
        content: [
          'The KEYNOTE-789 trial evaluated pembrolizumab plus ipilimumab in combination with platinum-doublet chemotherapy versus chemotherapy alone in treatment-naïve patients with metastatic NSCLC without sensitizing EGFR or ALK alterations.',
          'Primary endpoints included progression-free survival (PFS) and overall survival (OS) in the intention-to-treat population. Secondary endpoints assessed objective response rate, duration of response, and safety.',
        ],
      },
      {
        heading: 'Key Findings',
        content: [
          'Median PFS: 8.2 months (combination) vs 5.4 months (chemotherapy alone), HR 0.62 (p<0.001)',
          'Median OS: 22.1 months (combination) vs 16.7 months (chemotherapy alone), HR 0.74 (p=0.002)',
          'Objective response rate: 52% vs 39%',
          'Grade 3+ immune-related adverse events: 24% vs 8%',
          'Treatment discontinuation due to AEs: 18% vs 9%',
        ],
      },
      {
        heading: 'Clinical Implications',
        content: [
          'These results establish a new standard of care option for first-line metastatic NSCLC in patients with PD-L1 TPS <50%. The magnitude of benefit supports dual checkpoint inhibition despite higher toxicity compared to single-agent pembrolizumab.',
          'Careful patient selection and proactive management of immune-related adverse events remain critical. Oncologists should discuss risks and benefits with patients, emphasizing the survival advantage balanced against increased toxicity.',
        ],
      },
    ],
  },
];

export function getResearchBySlug(slug: string): ResearchDetail | undefined {
  return researchArticles.find((article) => article.slug === slug);
}

export function getAllResearch(): ResearchDetail[] {
  return researchArticles;
}

export function getResearchBySpecialty(specialty: Specialty): ResearchDetail[] {
  if (specialty === Specialty.General) {
    return researchArticles;
  }
  return researchArticles.filter((article) => article.specialty === specialty);
}
