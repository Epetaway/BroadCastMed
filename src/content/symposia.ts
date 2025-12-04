/**
 * Symposia Content - Dana-Farber Provider Education CMS
 */

import { SymposiumDetail, Specialty, ResourceType } from "@/types/content";
import { getSymposiumImage } from "@/lib/images";

export const symposia: SymposiumDetail[] = [
  {
    id: "early-symptoms-crc",
    slug: "early-symptoms-crc",
    seriesName: "Gut Instincts Series",
    type: ResourceType.Symposium,
    title: "Early Symptom Presentation in Colorectal Cancer",
    summary:
      "Understanding subtle GI symptoms and supportive care strategies for patients with colorectal cancer.",
    specialty: Specialty.Colorectal,
    date: "2025-01-15",
    image: getSymposiumImage("early-symptoms-crc"),
    cmeCredits: "1.0",
    durationMinutes: 60,
    presenters: ["Dr. Sarah Johnson, MD", "Dr. Michael Chen, MD"],
    learningObjectives: [
      "Identify key GI symptoms that warrant colorectal cancer evaluation in patients under 50",
      "Understand evidence-based supportive care strategies for CRC patients",
      "Recognize appropriate timing for specialty referrals and colonoscopy",
    ],
    relatedContent: ["cancer-factfinder-toolkit", "early-onset-crc-recognition"],
    articleBody: [
      {
        heading: "Overview",
        content: [
          "Colorectal cancer incidence in adults under age 50 has been rising steadily over the past two decades. Early recognition of subtle GI symptoms and comprehensive supportive care are critical to improving outcomes in this population.",
          "This session provides practical guidance for primary care and oncology clinicians on symptom recognition, diagnostic evaluation, and evidence-based supportive care interventions.",
        ],
      },
      {
        heading: "Recognizing Early Symptoms",
        content: [
          "Rectal bleeding (bright red or maroon blood) persisting beyond 2 weeks",
          "Persistent change in bowel habits (new-onset diarrhea, constipation, or alternating patterns)",
          "Unexplained iron-deficiency anemia in the absence of other causes",
          "Unintentional weight loss exceeding 5% of body weight over 3-6 months",
          "Persistent abdominal pain or cramping not explained by other diagnoses",
        ],
      },
    ],
  },
  {
    id: "asco-preview-2025",
    slug: "asco-preview-2025",
    seriesName: "ASCO Preview Series",
    type: ResourceType.Symposium,
    title: "Emerging Oncology Research from ASCO 2025",
    summary:
      "Preview of key clinical trials and research presentations from the upcoming ASCO Annual Meeting across multiple oncology subspecialties.",
    specialty: Specialty.General,
    date: "2025-02-20",
    image: getSymposiumImage("asco-preview-2025"),
    cmeCredits: "1.5",
    durationMinutes: 90,
    presenters: [
      "Dr. Emily Rodriguez, MD, PhD",
      "Dr. James Patterson, MD",
      "Dr. Lisa Wang, MD",
    ],
    learningObjectives: [
      "Review anticipated practice-changing clinical trial results to be presented at ASCO 2025",
      "Discuss emerging therapeutic approaches in immunotherapy, targeted therapy, and precision medicine",
    ],
    relatedContent: ["immunotherapy-combination-trials", "cancer-factfinder-toolkit"],
    articleBody: [
      {
        heading: "Overview",
        content: [
          "The American Society of Clinical Oncology (ASCO) Annual Meeting serves as the premier forum for presenting groundbreaking oncology research.",
        ],
      },
    ],
  },
];

export function getSymposiumBySlug(slug: string): SymposiumDetail | undefined {
  return symposia.find((symposium) => symposium.slug === slug);
}

export function getAllSymposia(): SymposiumDetail[] {
  return symposia;
}

export function getSymposiaBySpecialty(specialty: Specialty): SymposiumDetail[] {
  if (specialty === Specialty.General) {
    return symposia;
  }
  return symposia.filter((symposium) => symposium.specialty === specialty);
}
