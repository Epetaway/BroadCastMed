import { ClinicalGuidanceDetail, Specialty, ResourceType } from '@/types/content';
import { getResearchImage } from '@/lib/images';

export const clinicalGuidance: ClinicalGuidanceDetail[] = [
  {
    id: 'early-onset-crc-recognition',
    slug: 'early-onset-crc-recognition',
    type: ResourceType.ClinicalGuidance,
    title: 'Early Symptom Recognition in Young-Onset Colorectal Cancer',
    summary:
      'Practical guidance for identifying and evaluating concerning GI symptoms in patients under age 50, addressing the rise in early-onset colorectal cancer.',
    specialty: Specialty.Colorectal,
    date: '2024-10-20',
    image: getResearchImage('early-onset-crc-recognition'),
    intendedAudience: [
      'Medical Oncologists',
      'Gastroenterologists',
      'Primary Care Clinicians',
      'Physician Assistants and Nurse Practitioners',
    ],
    whenToUse: [
      'Patient presents with unexplained GI symptoms (rectal bleeding, abdominal pain, change in bowel habits)',
      'Family history of colorectal cancer or hereditary cancer syndromes',
      'Persistent symptoms despite initial empiric treatment',
      'Iron-deficiency anemia of unclear etiology in patients <50',
    ],
    keySteps: [
      'Obtain comprehensive personal and family history, including age of cancer diagnoses in relatives',
      'Assess symptom duration, severity, and associated constitutional symptoms (weight loss, fatigue)',
      'Perform physical examination including digital rectal examination',
      'Order appropriate laboratory studies (CBC, iron studies, CEA if clinical suspicion high)',
      'Recommend diagnostic colonoscopy for persistent or concerning symptoms—do not delay based on age alone',
      'Educate patient about warning signs and importance of follow-up',
      'Consider genetic counseling referral if family history suggests hereditary syndrome',
    ],
    relatedContent: ['early-symptoms-crc', 'cancer-factfinder-toolkit'],
    articleBody: [
      {
        heading: 'Background',
        content: [
          'Colorectal cancer incidence in adults younger than 50 has increased by approximately 2% annually over the past two decades. Many young patients experience diagnostic delays because symptoms are attributed to benign conditions such as hemorrhoids or irritable bowel syndrome.',
          'Earlier recognition and appropriate diagnostic evaluation are critical to improving outcomes in this population. Primary care clinicians and gastroenterologists play essential roles in identifying at-risk patients.',
        ],
      },
      {
        heading: 'Red Flag Symptoms',
        content: [
          'Rectal bleeding (especially bright red blood or melena) persisting >2 weeks',
          'Iron-deficiency anemia without identifiable source',
          'Unintentional weight loss (>5% body weight over 3-6 months)',
          'Persistent change in bowel habits (new-onset constipation, diarrhea, or alternating patterns)',
          'Abdominal pain or cramping not explained by other diagnoses',
          'Palpable abdominal or rectal mass',
        ],
      },
      {
        heading: 'Diagnostic Approach',
        content: [
          'Do not delay colonoscopy in symptomatic patients under 50 based solely on age. Current guidelines support diagnostic colonoscopy for concerning symptoms regardless of screening recommendations.',
          'If initial colonoscopy is negative but symptoms persist, consider repeat evaluation in 6-12 months or advanced imaging (CT enterography, MR enterography) to assess for small bowel pathology.',
          'For patients with family history of colorectal cancer, genetic counseling may identify hereditary syndromes (Lynch syndrome, familial adenomatous polyposis) requiring intensified surveillance.',
        ],
      },
      {
        heading: 'Patient Education Points',
        content: [
          'Emphasize that many GI symptoms in young adults are benign, but persistent or worsening symptoms warrant evaluation',
          'Encourage patients to report any changes in symptoms or new symptoms',
          'Discuss importance of colonoscopy preparation compliance for optimal examination',
          'Provide resources such as Cancer FactFinder for evidence-based information on colorectal cancer',
        ],
      },
    ],
  },
  {
    id: 'immunotherapy-toxicity-management',
    slug: 'immunotherapy-toxicity-management',
    type: ResourceType.ClinicalGuidance,
    title: 'Managing Immune-Related Adverse Events in Checkpoint Inhibitor Therapy',
    summary:
      'Evidence-based strategies for recognizing, grading, and treating immune-related adverse events in patients receiving PD-1, PD-L1, and CTLA-4 inhibitors.',
    specialty: Specialty.General,
    date: '2024-09-10',
    image: getResearchImage('immunotherapy-toxicity-management'),
    intendedAudience: [
      'Medical Oncologists',
      'Hematology-Oncology Fellows',
      'Oncology Advanced Practice Providers',
      'Oncology Nursing Staff',
    ],
    whenToUse: [
      'Initiating checkpoint inhibitor therapy in any patient',
      'Patient on immunotherapy reports new symptoms (fatigue, rash, diarrhea, dyspnea)',
      'Laboratory abnormalities detected during routine monitoring (elevated LFTs, TSH changes)',
      'Suspected immune-related adverse event requiring escalation of care',
    ],
    keySteps: [
      'Establish baseline organ function before initiating therapy (CBC, CMP, LFTs, TSH)',
      'Educate patients about common immune-related symptoms and when to seek care',
      'Monitor for irAEs at each visit with targeted symptom assessment and laboratory evaluation',
      'Grade irAEs using CTCAE criteria (Grade 1: asymptomatic/mild; Grade 2: moderate; Grade 3: severe; Grade 4: life-threatening)',
      'Implement treatment algorithm: Grade 1—monitor; Grade 2—hold therapy + consider steroids; Grade 3-4—permanently discontinue + high-dose steroids',
      'Consult subspecialists for organ-specific toxicities (endocrinology for thyroiditis, gastroenterology for colitis, pulmonology for pneumonitis)',
      'Document irAE and management in treatment record for future reference',
    ],
    relatedContent: ['immunotherapy-combination-trials', 'asco-preview-2025'],
    articleBody: [
      {
        heading: 'Common Immune-Related Adverse Events',
        subsections: [
          {
            heading: 'Dermatologic',
            content: [
              'Rash, pruritus (most common, usually Grade 1-2)',
              'Management: topical steroids for mild; oral steroids for severe',
            ],
          },
          {
            heading: 'Gastrointestinal',
            content: [
              'Diarrhea, colitis (can be severe with CTLA-4 inhibitors)',
              'Management: hold therapy for ≥Grade 2; stool studies to rule out infection; high-dose steroids + infliximab for steroid-refractory cases',
            ],
          },
          {
            heading: 'Hepatic',
            content: [
              'Transaminitis (AST/ALT elevation), hepatitis',
              'Management: hold therapy for Grade 2+; steroids for Grade 3-4; mycophenolate for steroid-refractory cases',
            ],
          },
          {
            heading: 'Endocrine',
            content: [
              'Hypothyroidism, hyperthyroidism, hypophysitis, adrenal insufficiency',
              'Management: hormone replacement as indicated; thyroid dysfunction often does not require therapy discontinuation; adrenal crisis requires emergency treatment',
            ],
          },
          {
            heading: 'Pulmonary',
            content: [
              'Pneumonitis (can be life-threatening)',
              'Management: high suspicion for dyspnea or cough; CT chest to evaluate; permanently discontinue therapy for Grade 3-4; high-dose steroids + bronchoscopy if diagnosis uncertain',
            ],
          },
        ],
      },
      {
        heading: 'Steroid Tapering',
        content: [
          'For irAEs requiring systemic steroids, initiate prednisone 1-2 mg/kg/day (or methylprednisolone equivalent) depending on severity.',
          'Taper slowly over 4-6 weeks minimum to prevent irAE flare. Rapid tapers are associated with symptom recurrence.',
          'Monitor for steroid-related complications (hyperglycemia, infection risk, mood changes) and provide prophylaxis (PCP, gastric protection) as indicated.',
        ],
      },
      {
        heading: 'Resuming Immunotherapy',
        content: [
          'For Grade 2 irAEs, consider resuming therapy once symptoms improve to Grade 1 or baseline and steroid dose is ≤10 mg prednisone daily.',
          'Grade 3-4 irAEs generally warrant permanent discontinuation, though exceptions exist (e.g., endocrinopathies managed with hormone replacement).',
          'Carefully weigh risk-benefit with patient, considering cancer prognosis, alternative treatment options, and patient preferences.',
        ],
      },
    ],
  },
];

export function getClinicalGuidanceBySlug(slug: string): ClinicalGuidanceDetail | undefined {
  return clinicalGuidance.find((guide) => guide.slug === slug);
}

export function getAllClinicalGuidance(): ClinicalGuidanceDetail[] {
  return clinicalGuidance;
}
