# Dana-Farber Provider Education CMS — Full Page-By-Page Specification & Copy Document

*(BroadcastMed Case Study Demo Project)*

**Audience:** Physicians, residents, fellows, oncology clinicians, and healthcare professionals.  
**Voice/Tone:** Clear, concise, professional, evidence-based, academic medical center tone (Dana-Farber style).  
**Images:** Use `medical-image-placeholder.jpg` or similar throughout (no real patient images).

## Global System Elements (Applies to All Pages)

### Header
- Logo (text): **Dana-Farber Provider Education**
- Nav Links:
  - Home
  - Provider Resources
  - Symposia
  - Research
  - Clinical Guidance
- Right Pill: **For Healthcare Professionals**
- Optional: Search bar

### Footer
- Dark blue institutional footer:
  - **Dana-Farber Cancer Institute – Provider Education (Demo)**
  - “450 Brookline Avenue, Boston, MA 02215”
  - Contact, Terms, Privacy, Accessibility links
  - Small disclaimer:
    > This platform is a demonstration inspired by Dana-Farber communications. Content is fictional and not intended for clinical use.

### Design Tokens
- Primary Blue
- Gold Accent
- Navy Headings
- Neutral Grays
- Typography:
  - Display → page titles
  - H1 → hero section titles
  - H2 → section headers
  - Body MD / Body SM → article content

### Medical Image Placeholder Pattern
Use one of:
- `/images/medical-placeholder-hero.jpg`
- `/images/medical-placeholder-resource.jpg`
- `/images/medical-placeholder-article.jpg`

*(Replaced later with stock institutional images if desired.)*

## Page 1 — `/` — Platform Overview

### Hero Section
**Image:** `medical-placeholder-hero.jpg` (wide banner)  
**Eyebrow:** For Healthcare Professionals  
**Title:** Dana-Farber Provider Education Platform  
**Subtitle:** On-demand oncology education, research highlights, and clinical guidance for physicians and care teams.  
**Primary CTA:** Browse Physician Resources → `/provider-resources`  
**Secondary CTA:** View Symposia & CME → `/symposia`

### Section: What You’ll Find Here
3 Feature Cards:

#### Card 1 — On-Demand Education
**Image:** `medical-placeholder-resource.jpg`  
**Copy:**  
Stay up to date with expert-led educational sessions covering emerging treatments, clinical updates, and multidisciplinary care.

#### Card 2 — Symposia & CME
**Image:** `medical-placeholder-resource.jpg`  
**Copy:**  
Access symposium sessions and CME-accredited content designed to support evidence-based care across oncology subspecialties.

#### Card 3 — Clinical Guidance & Research
**Image:** `medical-placeholder-resource.jpg`  
**Copy:**  
Explore practical guidance, research summaries, and insights from Dana-Farber experts to support clinical decision-making.

### Section: Featured This Month
**Featured Resource (Example):**
- **Eyebrow:** Featured Symposium
- **Title:** Advances in Management of Early-Stage Non-Small Cell Lung Cancer
- **Summary:** A multidisciplinary review of surgical, medical, and radiation strategies for optimizing outcomes in patients with early-stage disease.
- **CTA:** View Symposium → `/symposia/early-stage-nsclc`
- **Image:** `medical-placeholder-hero.jpg`

## Page 2 — `/provider-resources` — Physician Resources Hub

This page mirrors the Fox Chase Physician Resources layout.

### Hero Banner
- **Eyebrow:** Physician Resources
- **Title:** Education On-Demand
- **Subtitle:** Curated oncology education for busy clinicians—from best practices to emerging research insights.
- **CTA Button:** Explore Latest Programs
- **Image:** `medical-placeholder-hero.jpg`

### Right-Column Quick Actions
Place as a vertical side menu (desktop) or below hero (mobile):

- Refer a Patient
- Find a Clinical Trial
- Find a Physician
- Contact Us

*(All CTA buttons, set to placeholder `#` or external URLs.)*

### Section: Recently Added
**Section Title:** Recently Added  
**Optional CTA:** View All Symposia → `/symposia`

#### Resource Card Format (Six Examples Included)

##### Resource Card Example 1
- **Type:** Symposium
- **Title:** Symptom Management in Young Adults with Colorectal Cancer
- **Summary:** Practical guidance for identifying and managing symptom clusters in young-onset CRC patients.
- **Specialty:** Colorectal
- **Date:** Jan 2025
- **Image:** `medical-placeholder-resource.jpg`
- **CTA:** View Details → `/symposia/young-adult-crc`

##### Resource Card Example 2
- **Type:** News
- **Title:** Cancer FactFinder: New Educational Tool for Patients & Providers
- **Summary:** Fact-based, evidence-driven insights designed to address common cancer myths and FAQs.
- **Specialty:** General Oncology
- **Date:** Jan 2025
- **Image:** `medical-placeholder-resource.jpg`
- **CTA:** Read Article → `/research/cancer-factfinder`

##### Resource Card Example 3
- **Type:** Video
- **Title:** Addressing Fertility Concerns in Young Adults with Cancer
- **Summary:** A concise overview of fertility preservation options and counseling strategies.
- **Specialty:** Gyn / GU
- **Date:** Feb 2025
- **Image:** `medical-placeholder-resource.jpg`
- **CTA:** Watch Video

##### Resource Card Example 4
- **Type:** Clinical Guidance
- **Title:** Best Practices in Ostomy Care for Oncology Patients
- **Summary:** Key steps for pre-operative counseling, post-operative care, and optimizing comfort and function.
- **Specialty:** Colorectal
- **Date:** Dec 2024
- **Image:** `medical-placeholder-resource.jpg`
- **CTA:** View Guidance

## Page 3 — `/symposia` — Symposia List

### Page Header
- **Title:** Symposia & Educational Programs
- **Subtitle:** On-demand learning from Dana-Farber specialists across oncology subspecialties.
- **Image:** Optional banner image: `medical-placeholder-hero.jpg`

### Filters
- All Specialties
- Colorectal
- Breast
- GU
- Gyn
- Hematologic
- General

### Symposium Cards
Same format as resource cards.

#### Example Card:
- **Series:** Gut Instincts Series
- **Title:** Understanding Early Symptom Presentation in CRC
- **Date:** Jan 2025
- **Specialty:** Colorectal
- **Image:** `medical-placeholder-resource.jpg`
- **CTA:** View Program → `/symposia/early-symptoms-crc`

## Page 4 — `/symposia/[slug]` — Symposium Detail Page

### Hero Section
- **Series Label:** Gut Instincts Series
- **Title:** Symptom Management in Young Adults with Colorectal Cancer
- **Subtitle:** A practical review of symptom recognition and supportive care in young-onset CRC.
- **CTA:** Watch Session
- **Image:** `medical-placeholder-hero.jpg`

### MetaBar
- Type: Symposium
- Specialty: Colorectal
- Duration: 24 mins
- CME Credits: 0.75
- Date: Jan 2025

### Learning Objectives (Bulleted List)
- Identify early symptom patterns in young-onset colorectal cancer.
- Counsel patients on symptom expectations during treatment.
- Implement supportive strategies to reduce symptom burden.

### ArticleBody Sections

#### Section 1 — Overview
Body text explaining clinical context.

#### Section 2 — Recognizing Early Symptoms
Bullet list:
- Abdominal discomfort
- Unexplained anemia
- Altered bowel habits

#### Section 3 — Supportive Care Strategies
Body text + optional bullets.

#### Section 4 — When to Refer
Bullets:
- Persistent rectal bleeding
- Rapid symptom progression
- Lack of response to first-line interventions

### RelatedContent
3 clickable cards pointing to:
- Ostomy care guidance
- Cancer FactFinder update
- Fertility preservation video

## Page 5 — `/research/[slug]` — Research Article Detail

### Hero
- **Title:** Cancer FactFinder Launches New Evidence-Based Toolkit
- **Subtitle:** Helping clinicians counter misinformation with scientifically validated insights.
- **Date:** Jan 2025
- **Specialty:** General
- **Image:** `medical-placeholder-article.jpg`

### Sections
- Background
- Key Findings
- Clinical Relevance
- Additional Resources

## Page 6 — `/clinical-guidance/[slug]` — Guidance Detail

### Header
- **Title:** Early Symptom Recognition in Young-Onset CRC
- **Subtitle:** Practical steps to support early detection and timely referral.
- **Image:** `medical-placeholder-article.jpg`

### Sections
#### Audience
> Medical oncologists, primary care clinicians, gastroenterologists.

#### When to Use This Guidance
Bullets:
- Unexplained GI symptoms
- Family history of CRC
- Persistent rectal bleeding

#### Key Steps
1. Collect detailed family history.
2. Assess symptom duration and intensity.
3. Determine need for colonoscopy.
4. Provide patient education resources.

#### Full Article Body (2–4 sections)

## Page 7 — `/emails/preview` — Email Templates Preview

### Header
- **Title:** Email Campaign Templates
- **Subtitle:** Dana-Farber–styled HTML emails designed for cross-client compatibility.

### Email Preview Cards

#### Card 1 — ASCO Preview Email
- **Title:** Special Edition: ASCO Preview
- **Description:** Newsletter format featuring upcoming ASCO topics, key research areas, and expert commentary.
- **Desktop Preview:** iframe → `/emails/dfci-asco-preview.html`
- **Mobile Preview:** iframe, 375px width
- **Image:** Use `medical-placeholder-resource.jpg` inside email header.

#### Card 2 — Gut Instincts Series Email
- **Title:** Gut Instincts Series: Episode Highlight
- **Description:** Program update showcasing colorectal cancer supportive care and symptom management insights.
- **Preview:** `/emails/dfci-gut-instincts.html`

## Page 8 — `/dev-view` — Architecture / Engineering View

### Sections
#### Architecture Overview
Diagram showing:
- app routes
- content modules
- design system
- email templates

#### Content Model
Render TypeScript interfaces.

#### Design System Tokens
Color swatches (blue, gold, navy, neutrals)  
Typography examples

#### Performance Techniques
- `next/image`
- route-level code splitting
- server components

#### Accessibility Features
- Semantic HTML
- Keyboard navigation
- Visible focus ring
- WCAG AA contrast

## Page 9 — `/case-studies/danafarber` (Optional but Recommended)

**Purpose:** Portfolio storytelling.

### Copy Example:
> This demonstration project recreates the provider-facing CMS and email systems I delivered while supporting BroadcastMed’s clinical education platforms.  
>  
> Using modern engineering patterns (Next.js 14, TypeScript, Tailwind), this project simulates how Dana-Farber educational content—like symposia programs, research updates, and clinical guidance—can be structured into scalable templates and reusable components to support oncology clinicians.

## Visual / Branding Requirements

- **Dana-Farber Blue (Primary):** Deep, institutional blue  
- **Gold Accent:** Gold banner markers, CTA accents  
- **Clean neutrals:** Whites, grays  
- **Typography:** Clear sans-serif, academic tone  
- **Card layout:** White background, generous whitespace  
- **Hero style:** Blue gradient or solid blue block with gold accent bar  
- **CTA buttons:** “Learn More”, “View Details”, “Watch Now”

## Acceptance Criteria

- All pages load with no console errors.
- All pages include:
  - Metadata
  - Proper headings
  - Medical image placeholders
- Tailwind design tokens applied consistently.
- Emails render successfully in `/emails/preview`.
- Linting passes (`npm run lint`).
- Keyboard accessible.
- WCAG AA contrast.
