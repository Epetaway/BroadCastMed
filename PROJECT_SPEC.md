# Dana-Farber Provider Education CMS Specification (BroadcastMed Case Study)

## Overview
This project is a demonstration of a provider-facing content management system (CMS) inspired by Dana Farber Cancer Institute communications. It recreates the types of clinical education hubs, physician resource pages, symposia, research articles, and email campaigns you built as a Front‑End Developer at BroadcastMed.

The site is implemented with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS and is structured as a series of reusable templates fed by an in-memory content layer. All pages adhere to WCAG 2.1 AA accessibility guidelines and follow a Dana Farber design aesthetic: vivid institutional blue and gold, clean sans‑serif typography, generous whitespace, and intuitive navigation.

## Global Elements

### Header
- **Logo:** Text‑based logo: *Dana‟Farber Provider Education* with a small “Demo” label.
- **Navigation:** Horizontal nav with links to Home (`/`), Provider Resources (`/provider-resources`), Symposia (`/symposia`), Research (`/research`), Clinical Guidance (`/clinical-guidance`). On mobile, the nav collapses into a simple menu.
- **Audience Pill:** A right‑aligned pill reading **“For Healthcare Professionals”**.
- **Search (optional):** A search bar may be included in the header to allow users to search across content.

### Footer
- **Institutional Footer:** Dark blue band containing:
  - Text: *Dana‟Farber Cancer Institute – Provider Education (Demo)*.
  - Address: “450 Brookline Avenue, Boston, MA 02215”.
  - Links: **Contact**, **Terms**, **Privacy**, **Accessibility**.
  - Disclaimer: “This platform is a demonstration inspired by Dana‟Farber communications. Content is fictional and not intended for clinical use.”

### Design System
- **Colors:**  
  - `df-blue` – primary brand blue for CTAs and nav highlights.  
  - `df-blue-dark` – darker blue for headings and footer backgrounds.  
  - `df-gold` – gold accent used for badges and highlights.  
  - `neutrals` – a palette from light (`neutral50`) to dark (`neutral900`) for backgrounds and text.  
- **Typography:**  
  - Sans‑serif stack similar to system UI: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.  
  - Display, h1–h3, body‑md, body‑sm styles.  
  - Headings use `df-blue-dark`; body copy uses dark neutral for readability.  
- **Spacing & Radii:**  
  - Use Tailwind’s default spacing scale (4, 8, 12, 16 px etc.).  
  - Use `rounded-md` for buttons and `rounded-lg` for cards.  
- **Shadows:**  
  - Subtle shadows (`shadow-sm`) for cards, `shadow-md` for modals.  
- **Motion:**  
  - Use Framer Motion for gentle fade and slide‑up effects on cards and hero sections.  
  - Respect users’ `prefers-reduced-motion` setting by disabling animations if set.  

### Placeholder Images
- Use high‑quality medical or abstract images as placeholders for all hero, card, and article images:  
  - Hero images: `/public/images/medical-placeholder-hero.jpg`  
  - Resource cards: `/public/images/medical-placeholder-resource.jpg`  
  - Article bodies: `/public/images/medical-placeholder-article.jpg`  
- Alt text should be descriptive, e.g., “Medical illustration placeholder”.

## Pages

### 1. Landing Page (`/`)
A succinct overview of the platform with CTAs to key sections.

#### Hero Section
- **Eyebrow:** *For Healthcare Professionals*.  
- **Title:** *Dana‟Farber Provider Education Platform*.  
- **Subtitle:** “On‑demand oncology education, research highlights, and clinical guidance for physicians and care teams.”  
- **Primary CTA:** *Browse Physician Resources* → `/provider-resources`.  
- **Secondary CTA:** *View Symposia & CME* → `/symposia`.  
- **Image:** `medical-placeholder-hero.jpg` spanning the width of the hero section.  

#### What You’ll Find
Three cards describe major platform categories. Each card includes a placeholder image, a title, and a brief description:
1. **On‑Demand Education** – “Stay up to date with expert‑led educational sessions covering emerging treatments, clinical updates, and multidisciplinary care.”  
2. **Symposia & CME** – “Access symposium sessions and CME‑accredited content designed to support evidence‑based care across oncology subspecialties.”  
3. **Clinical Guidance & Research** – “Explore practical guidance, research summaries, and insights from Dana‟Farber experts to support clinical decision‑making.”  

#### Featured This Month
- A large spotlight card highlighting a featured symposium or article.  
- Example spotlight: *Advances in Management of Early‑Stage Non‑Small Cell Lung Cancer* with a brief summary and a CTA to its detail page.  

### 2. Provider Resources Page (`/provider-resources`)
The main hub for physicians, inspired by the Fox Chase example.

#### Hero Banner
- **Eyebrow:** *Physician Resources*.  
- **Title:** *Education On‑Demand*.  
- **Subtitle:** “Curated oncology education for busy clinicians—from best practices to emerging research insights.”  
- **CTA:** *Explore Latest Programs* (scrolls to Recently Added section).  
- **Image:** `medical-placeholder-hero.jpg`.  

#### Quick Actions (Right‑Column)
Displayed vertically on desktop or below the hero on mobile:
- **Refer a Patient**  
- **Find a Clinical Trial**  
- **Find a Physician**  
- **Contact Us**  
Each action links to an external resource or placeholder page.

#### Recently Added
- **Section Title:** *Recently Added*.  
- **View More Link:** “View All Symposia” → `/symposia`.  
- **Resource Grid:** A responsive grid (1 column mobile, 2 on tablet, 3 on desktop) of `ResourceCard` components representing the six most recent resources.  
- Each `ResourceCard` includes:
  - Type badge (Symposium, News, Video, Clinical Guidance).  
  - Title and a concise summary (2–3 lines).  
  - Specialty tag and date.  
  - Placeholder image.  
  - CTA (e.g., *View Details*, *Read Article*).  

### 3. Symposia List Page (`/symposia`)
A listing of on‑demand symposia and series with filtering.

#### Page Header
- **Title:** *Symposia & Educational Programs*.  
- **Subtitle:** “On‑demand learning from Dana‟Farber specialists across oncology subspecialties.”  
- **Optional Banner Image:** `medical-placeholder-hero.jpg`.  

#### Filter Bar
- Specialty filters: All, Colorectal, Breast, GU, Gyn, Hematologic, General.  
- Format filter (optional): All, Live, On Demand.

#### Symposium Cards
Same layout as `ResourceCard`. Example:
- **Series:** *Gut Instincts Series*  
- **Title:** *Understanding Early Symptom Presentation in CRC*  
- **Date:** Jan 2025  
- **Specialty:** Colorectal  
- **CTA:** View Program → `/symposia/early-symptoms-crc`  

### 4. Symposium Detail Page (`/symposia/[slug]`)
A deep‑dive view for a single symposium or series.

#### Hero Section
- **Series Label:** e.g., “Gut Instincts Series” or “ASCO Preview”.  
- **Title:** The session title.  
- **Subtitle:** A brief abstract summarizing the session.  
- **CTA:** *Watch Session* or *View On‑Demand*.  
- **Image:** `medical-placeholder-hero.jpg`.

#### MetaBar
A horizontal bar below the hero containing:
- Type: Symposium  
- Specialty  
- Duration (minutes)  
- CME credits (if available)  
- Date  

#### Learning Objectives
A bulleted list of 3–5 objectives.

#### Article Body
Structured content broken into sections:
- **Overview** – a 1‑2 paragraph introduction.  
- **Section:** Recognizing Early Symptoms – bullet list of symptoms.  
- **Section:** Supportive Care Strategies – paragraphs describing supportive care.  
- **Section:** When to Refer – bullet list of referral indicators.  
Each section may include an optional heading, text, and bullet lists.

#### Related Content
At the bottom, show 2–3 `ResourceCard` components linking to related resources (e.g., Ostomy care guidance, Cancer FactFinder update, Fertility preservation video).

### 5. Research Article Page (`/research/[slug]`)
A news or research highlight detail page.

#### Hero
- **Title:** e.g., *Cancer FactFinder Launches New Evidence‑Based Toolkit*.  
- **Subtitle:** A one‑sentence description of the announcement.  
- **Specialty:** General (or specific).  
- **Date:** Publication date.  
- **Image:** `medical-placeholder-article.jpg`.  

#### Article Sections
- **Background** – context and problem statement.  
- **Key Findings** – bullet list of key discoveries or outcomes.  
- **Clinical Relevance** – paragraphs describing how the findings impact clinical practice.  
- **Additional Resources** – bullet list of links or downloads (optional).  

#### Related Content
Show additional `ResourceCard` items relevant to the topic.

### 6. Clinical Guidance Page (`/clinical-guidance/[slug]`)
Practical how‑to guidance for clinicians.

#### Header
- **Title:** e.g., *Early Symptom Recognition in Young‑Onset CRC*.  
- **Subtitle:** Short explanation of the guidance purpose.  
- **Image:** `medical-placeholder-article.jpg`.  

#### Content Sections
- **Audience:** Brief description of the target clinicians (e.g., medical oncologists, primary care clinicians, gastroenterologists).  
- **When to Use This Guidance:** Bulleted list of scenarios (e.g., unexplained GI symptoms, family history of CRC, persistent rectal bleeding).  
- **Key Steps:** Numbered list of steps (e.g., gather history, assess symptoms, recommend colonoscopy, educate the patient).  
- **Full Article Body:** Additional narrative sections for background, algorithms, and recommendations.  

#### Related Content
At bottom, show 2–3 related resources.

### 7. Email Templates Preview Page (`/emails/preview`)
Demonstrates responsive HTML email templates.

#### Header
- **Title:** *Email Campaign Templates*.  
- **Subtitle:** “Dana‟Farber–styled HTML emails designed for cross‑client compatibility.”  

#### Email Cards
Two `EmailPreviewCard` items:
1. **ASCO Preview Email**  
   - *Title:* *Special Edition: ASCO Preview*.  
   - *Description:* “Newsletter format featuring upcoming ASCO topics, key research areas, and expert commentary.”  
   - *Previews:*  
     - Desktop: An `<iframe>` referencing `/emails/dfci-asco-preview.html`.  
     - Mobile: An optional narrow iframe representing a 375 px viewport.  
2. **Gut Instincts Series Email**  
   - *Title:* *Gut Instincts Series: Episode Highlight*.  
   - *Description:* “Program update showcasing colorectal cancer supportive care and symptom management insights.”  
   - *Previews:* Similar to above but referencing `/emails/dfci-gut-instincts.html`.

### 8. Developer View Page (`/dev-view`)
A page for engineers and recruiters to understand the project structure.

#### Sections
- **Architecture Overview:** A diagram or text description showing the Next.js routing structure, component hierarchy, content modules, and email templates.  
- **Content Model:** Render the TypeScript interfaces for `BaseResource`, `SymposiumDetail`, `ResearchDetail`, `ClinicalGuidanceDetail`, and `ProviderResourcesContent`.  
- **Design System:** Visual swatches of the color palette and typography scale.  
- **Performance & Accessibility:** Explanation of performance optimizations (lazy loading, next/image) and accessibility strategies (landmarks, keyboard navigation, contrast compliance).  

### 9. Case Study Narrative (`/case-studies/danafarber`)
*(Optional but recommended for portfolio)*

A narrative page explaining how this demo reflects your BroadcastMed experience. Include sections on:
- **Challenges:** Building scalable CMS templates, ensuring performance and accessibility, creating cross‑client email campaigns.  
- **Solutions:** Use of Next.js for static and server components, Tailwind design system, robust content models.  
- **Outcomes:** Summarize the improvements (e.g., improved Lighthouse scores, reusable templates) and highlight your role and impact.  

## Components

The site should be constructed from the following components:

### Layout Components (`components/layout`)
- **SiteHeader:** Implements the global header with logo, nav links, audience pill, and search if present.  
- **SiteFooter:** Implements the global footer with institutional text, links, and disclaimer.  
- **Shell:** Wraps pages with header, main content container, and footer.  

### UI Primitives (`components/ui`)
- **Button:** Supports primary (blue), secondary (outline), and ghost (text) variants; small and medium sizes; includes visible focus rings.  
- **Badge / Pill:** Rounded pills used for content type indicators (Symposium, News, Video, Guidance) and specialties; styled with blue or gold backgrounds.  
- **Card:** Base card component with padding, background, shadow, and keyboard focus styles; accepts `href` to make the whole card clickable.  
- **SectionHeader:** Standardized section headers with optional eyebrow, title, and description.  
- **TagList:** Displays an array of small tags representing topics or specialties.  
- **EmailPreviewCard:** Displays a card with a title, description, and iframes for desktop and mobile previews of an email template.  

### Content Components (`components/content`)
- **HeroBanner:** Accepts `eyebrow`, `title`, `subtitle`, call‑to‑action props, and an optional image path; used on several pages.  
- **ResourceCard:** Shows type badge, title, summary, specialty, date, and an image; uses `Card` under the hood.  
- **ResourceGrid:** Responsive wrapper to layout an array of `ResourceCard` components across breakpoints.  
- **ResourceFilters:** Renders filter pill buttons and notifies its parent of changes; controlled by state in the parent page.  
- **MetaBar:** Displays metadata fields such as type, specialty, duration, CME credits, and date below a hero section.  
- **ArticleBody:** Iterates through `ContentSection` objects and renders headings, paragraphs, and bullet lists appropriately.  
- **RelatedContent:** Receives an array of `BaseResource` objects and renders a smaller list or grid of `ResourceCard` items.  

### Dev Components (`components/dev`)
- **ArchitectureDiagram:** Presents a static diagram or list outlining the app structure.  
- **DesignTokensPreview:** Displays color swatches and typography samples to illustrate the design system.  

## Content Model

Define TypeScript interfaces to simulate a CMS:

```
export type Specialty =
  | "Colorectal"
  | "Breast"
  | "GU"
  | "Gyn"
  | "Hematologic"
  | "General";

export type ResourceType =
  | "Symposium"
  | "News"
  | "Video"
  | "Clinical Guidance";

export interface BaseResource {
  id: string;
  slug: string;
  type: ResourceType;
  title: string;
  summary: string;
  specialty: Specialty;
  date: string;       // ISO date string
  image: string;      // relative path to placeholder image
  tags?: string[];
}

export interface ContentSection {
  heading?: string;
  body: string;
  bullets?: string[];
}

export interface SymposiumDetail extends BaseResource {
  seriesName?: string;     // e.g., "Gut Instincts", "ASCO Preview"
  cmeCredits?: string;
  durationMinutes?: number;
  presenters: string[];
  learningObjectives: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ResearchDetail extends BaseResource {
  studyType?: string;
  source?: string;
  keyFindings: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ClinicalGuidanceDetail extends BaseResource {
  audience: string;
  whenToUse: string[];
  keySteps: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ProviderResourcesContent {
  heroSpotlight: SymposiumDetail;
  recentResources: BaseResource[];
}
```

Example modules under `/content`:
- `providerResources.ts` exporting `ProviderResourcesContent`.  
- `symposia.ts` exporting `SymposiumDetail[]`.  
- `research.ts` exporting `ResearchDetail[]`.  
- `clinicalGuidance.ts` exporting `ClinicalGuidanceDetail[]`.  

## Email Templates

HTML email templates should live in `/public/emails` and follow these guidelines:

### Shared Rules
- Use table‑based layout for maximum client compatibility.  
- Keep the email width between 600 px and 640 px.  
- Use inline CSS for all styles; avoid external stylesheets.  
- Use alt text for all images and ensure a text‑only fallback.  

### `dfci-asco-preview.html` (Special Edition: ASCO Preview)
- **Header:** Contains a simplified Dana‟Farber logo and an “ASCO Preview” banner.  
- **Hero:** Title “Special Edition: ASCO Preview”, introduction text, CTA button (“View Program Overview”).  
- **Story Blocks:** Two or three sections each with an image (placeholder), headline, summary, and “Learn More” link.  
- **Footer:** Contact information, unsubscribe link, address.  

### `dfci-gut-instincts.html` (Gut Instincts Series Update)
- **Header:** Identifies the program: *Young‑Onset Colorectal Cancer Center – Gut Instincts Series*.  
- **Hero:** Episode title and summary with a CTA (“Watch Episode” or “View Series”).  
- **Secondary Section:** Highlights another resource (e.g., Cancer FactFinder).  
- **Footer:** Contact details and legal/regulatory content.  

## Acceptance Criteria

1. **Complete Pages:** All routes listed in this specification must be implemented with their described content and layouts.  
2. **Design Consistency:** The color palette, typography scale, spacing, and component styles must align with the Dana‟Farber design system described above.  
3. **Accessibility:** All pages must meet WCAG 2.1 AA standards: semantic HTML, keyboard navigation, visible focus styles, aria labels, and color contrast.  
4. **Performance:** Use `next/image` for images, lazy‑load non‑critical components, and minimize client bundle size. Pages should achieve high Lighthouse scores (Performance ≥ 90, Accessibility = 100).  
5. **Content Models:** Data for resources, symposia, research, and guidance articles should be stored in `/content` modules and consumed via server components or simple API routes.  
6. **Responsive Design:** Layouts must adapt across breakpoints (mobile, tablet, desktop) with appropriate grid collapses and reflow.  
7. **Email Previews:** The email preview page must render both HTML templates correctly in iframes at desktop and mobile widths.  
8. **Developer Documentation:** The `dev-view` page must present architecture, design tokens, content models, performance notes, and accessibility considerations.  
9. **Project Narrative:** Include the optional case study page to connect this demo to the real BroadcastMed role, highlighting challenges, solutions, and outcomes.  

---

This specification provides a comprehensive blueprint for building the Dana‟Farber Provider Education CMS demo. Follow it closely to ensure the final implementation reflects both the aesthetics of Dana‟Farber communications and the technical excellence of a modern Next.js application.
