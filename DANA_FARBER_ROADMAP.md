# Dana-Farber Provider Education CMS - Implementation Roadmap

## Project Status: Foundation Phase Complete ✅

This document tracks the transformation of BroadCastMed into a Dana-Farber Provider Education CMS per PROJECT_SPEC.md.

## Completed (Foundation Phase)

### Design System ✅
- [x] Created Dana-Farber color palette (vivid blue + gold)
  - `--df-blue`: Primary brand blue (#0066cc)
  - `--df-blue-dark`: Dark blue for headings (#003d7a)  
  - `--df-gold`: Gold accent (#ffc107)
- [x] Updated globals.css with DF color variables
- [x] Integrated colors into Tailwind v4 theme

### Content Model ✅
- [x] Defined TypeScript interfaces in `/src/types/content.ts`:
  - `BaseResource`, `SymposiumDetail`, `ResearchDetail`, `ClinicalGuidanceDetail`
  - `Specialty` and `ResourceType` enums
  - `ContentSection` for article bodies
  - `ProviderResourcesContent` for homepage
- [x] Created sample symposia content in `/src/content/symposia.ts`
  - Gut Instincts Series symposium (Early Symptoms CRC)
  - ASCO Preview symposium

### Assets ✅
- [x] Generated 3 medical placeholder SVG images:
  - `medical-placeholder-hero.jpg` (1200x600)
  - `medical-placeholder-resource.jpg` (800x500)
  - `medical-placeholder-article.jpg` (1000x600)
- [x] Images use Dana-Farber blue/gold palette

### Build Status ✅
- [x] TypeScript compilation: 0 errors
- [x] All dependencies installed
- [x] Code formatted with Prettier

## Phase 2: Core Components (Next Priority)

### Layout Components
- [ ] **SiteHeader** - Dana-Farber logo, horizontal nav, audience pill, search
- [ ] **SiteFooter** - Institutional footer with disclaimer
- [ ] **Shell** - Wraps pages with header/footer

### UI Primitives
- [ ] **Button** - Primary/secondary/ghost variants with DF blue styling
- [ ] **Badge/Pill** - Content type and specialty indicators
- [ ] **Card** - Base card with DF shadows and hover states
- [ ] **SectionHeader** - Eyebrow + title + description pattern
- [ ] **TagList** - Small specialty/topic tags
- [ ] **EmailPreviewCard** - iframe-based email preview

### Content Components
- [ ] **HeroBanner** - Reusable hero with eyebrow/title/subtitle/CTA/image
- [ ] **ResourceCard** - Type badge, title, summary, specialty, date, image
- [ ] **ResourceGrid** - Responsive grid wrapper (1/2/3 columns)
- [ ] **ResourceFilters** - Filter pills for specialty/format selection
- [ ] **MetaBar** - Metadata display (type, specialty, duration, CME, date)
- [ ] **ArticleBody** - Renders ContentSection[] with headings/bullets
- [ ] **RelatedContent** - Grid of related ResourceCards

### Dev Components
- [ ] **ArchitectureDiagram** - Visual/text project structure
- [ ] **DesignTokensPreview** - Color swatches and typography samples

## Phase 3: Pages & Routes

### Top-Level Pages
- [ ] **Landing** (`/`) - Hero, What You'll Find cards, Featured This Month
- [ ] **Provider Resources** (`/provider-resources`) - Hero, Quick Actions sidebar, Recently Added grid
- [ ] **Symposia List** (`/symposia`) - Header, filter bar, symposium cards grid
- [ ] **Symposium Detail** (`/symposia/[slug]`) - Hero, MetaBar, learning objectives, article body, related content
- [ ] **Research Article** (`/research/[slug]`) - Hero, key findings, clinical relevance, related content
- [ ] **Clinical Guidance** (`/clinical-guidance/[slug]`) - Header, audience, when to use, key steps, body
- [ ] **Email Preview** (`/emails/preview`) - Email cards with desktop/mobile iframes
- [ ] **Developer View** (`/dev-view`) - Architecture, content model, design system, performance notes
- [ ] **Case Study** (`/case-studies/danafarber`) - Challenges, solutions, outcomes narrative

## Phase 4: Email Templates

- [ ] **ASCO Preview Email** (`/public/emails/dfci-asco-preview.html`)
  - Table-based layout, 600px width
  - Inline CSS, MSO conditionals
  - Header, hero, story blocks, footer
  
- [ ] **Gut Instincts Email** (`/public/emails/dfci-gut-instincts.html`)
  - Gut Instincts Series branding
  - Episode highlight, secondary section, footer

## Phase 5: Content Population

- [ ] Create `/src/content/research.ts` with `ResearchDetail[]`
- [ ] Create `/src/content/clinicalGuidance.ts` with `ClinicalGuidanceDetail[]`
- [ ] Create `/src/content/providerResources.ts` with `ProviderResourcesContent`
- [ ] Expand symposia with 4-6 total items
- [ ] Add 3-4 research articles
- [ ] Add 2-3 clinical guidance items

## Phase 6: Polish & QA

### Accessibility (WCAG 2.1 AA)
- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] ARIA labels on all interactive elements
- [ ] Keyboard navigation throughout
- [ ] Visible focus rings with DF blue
- [ ] Color contrast compliance (4.5:1 for text)
- [ ] Skip-to-content link
- [ ] Screen reader testing

### Performance
- [ ] Use `next/image` for all images
- [ ] Lazy-load non-critical components
- [ ] Code splitting per route
- [ ] Lighthouse score ≥90 performance
- [ ] Lighthouse score =100 accessibility

### Responsive Design
- [ ] Mobile (< 640px) - single column, collapsed nav
- [ ] Tablet (640px-1024px) - 2 column grids
- [ ] Desktop (≥ 1024px) - 3 column grids
- [ ] Test on Chrome, Firefox, Safari

### Final QA
- [ ] Lint entire codebase (0 warnings)
- [ ] Type-check all files (0 errors)
- [ ] Build succeeds without errors
- [ ] All routes render correctly
- [ ] Email iframes display properly
- [ ] Filter functionality works
- [ ] Navigation flows correctly

## Phase 7: Documentation

- [ ] Update README with Dana-Farber project overview
- [ ] Document all routes and pages
- [ ] Explain content model and structure
- [ ] Include screenshots of all major pages
- [ ] Add deployment instructions
- [ ] Create case study narrative linking to BroadcastMed work

## Estimated Timeline

- **Phase 2** (Components): 8-12 hours
- **Phase 3** (Pages): 12-16 hours
- **Phase 4** (Emails): 4-6 hours
- **Phase 5** (Content): 3-4 hours
- **Phase 6** (QA): 6-8 hours
- **Phase 7** (Docs): 2-3 hours

**Total**: 35-49 hours of development work

## Current State

The foundation is complete and ready for component development. All TypeScript types are defined, the design system is integrated, and sample content demonstrates the structure. Next step is to build the core component library, then implement pages incrementally.

---

*Last Updated: December 3, 2025*
