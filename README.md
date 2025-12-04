# Earl Hickson Portfolio – BroadcastMed Healthcare CMS & Email Campaign Platform

> **A production-quality portfolio microsite demonstrating expertise in healthcare CMS development, responsive email campaigns, and accessible user interfaces for clinical oncology content delivery.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub_Pages-success?logo=github)](https://epetaway.github.io/BroadCastMed)

---

## 🎯 Project Overview

This portfolio showcases real-world experience building **BroadcastMed**, a clinical oncology content platform serving healthcare professionals. The project demonstrates:

- **CMS Template Engineering**: Modular, reusable components for clinical content
- **Email Campaign Systems**: 50+ responsive HTML emails with 98% cross-client compatibility
- **Healthcare Design System**: Purpose-built color tokens, typography, and components
- **Performance Excellence**: Lighthouse scores of 95+ with full WCAG 2.1 AA compliance
- **Production-Ready Code**: TypeScript, Next.js 14 App Router, modern React patterns

---

## 🚀 Key Features

### 📝 **Live CMS Templates**
Fully functional healthcare content templates with realistic oncology data:
- **[Article Template](/templates/article)** - Clinical updates with authors, abstract, sections, and references
- **[Resource Template](/templates/resource)** - Patient education guides with downloadable materials
- **Landing Page System** - JSON-driven content management

### 📧 **Email Campaign Library**
Enterprise-grade HTML email system:
- Responsive newsletter templates with table-based layouts
- Cross-client compatibility (Outlook, Gmail, iOS Mail)
- Inline CSS with progressive enhancement
- MSO conditional comments for Outlook rendering

### 🏥 **Healthcare Design System**
Complete design token system (`/src/design-system/`):
- **Clinical Color Palette**: Blue (#0075e6), Teal (#00b3b3), Red (#e02424)
- **Typography Scale**: Semantic heading and body styles
- **Component Tokens**: Spacing, radius, shadows optimized for medical content

### 📊 **Case Study & Developer View**
- **[BroadcastMed Case Study](/case-studies/broadcastmed)** - Project overview, role, and outcomes
- **[Developer View](/dev-view)** - Architecture, design system, and technical implementation

---

## 💼 Role & Impact

### Lead Front-End Developer & UI/UX Designer

**Healthcare CMS Development**
- Architected modular CMS template system reducing publishing time by 40%
- Built reusable component library for clinical content (treatment guidelines, research updates)
- Implemented responsive layouts optimized for medical device compatibility
- Created stakeholder-driven UX improvements based on clinical team feedback

**Enterprise Email Campaign Systems**
- Developed 50+ responsive HTML email templates for oncology content
- Achieved 98% cross-client rendering accuracy (Outlook, Gmail, Apple Mail)
- Implemented table-based responsive design with mobile-first approach
- Integrated UTM tracking and analytics for engagement measurement

**Performance & Accessibility Engineering**
- Optimized Lighthouse performance scores to 95+ across all metrics
- Achieved WCAG 2.1 AA compliance with semantic HTML and ARIA labels
- Implemented code splitting and lazy loading, reducing bundle size by 40%
- Full keyboard navigation and screen reader support

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 with App Router, React 19 |
| **Language** | TypeScript 5 (strict mode) |
| **Styling** | Tailwind CSS 4 with custom healthcare design tokens |
| **Animation** | Framer Motion for performant micro-interactions |
| **Icons** | Lucide React |
| **Code Quality** | ESLint, Prettier, TypeScript strict |
| **Deployment** | GitHub Pages (static export) |

---

## 📁 Project Structure

```
BroadCastMed/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── templates/
│   │   │   ├── article/             # Clinical article template
│   │   │   └── resource/            # Patient resource template
│   │   ├── emails/
│   │   │   └── newsletter.html      # Responsive email template
│   │   ├── case-studies/
│   │   │   └── broadcastmed/        # Project case study
│   │   ├── dev-view/                # Technical documentation
│   │   ├── projects/                # Portfolio projects
│   │   ├── about/                   # About page
│   │   └── contact/                 # Contact page
│   ├── components/
│   │   ├── layout/                  # Header, Footer, Navigation
│   │   ├── projects/                # Project cards
│   │   ├── ui/                      # Reusable UI components
│   │   ├── content/                 # Content components
│   │   └── navigation/              # Navigation components
│   ├── design-system/
│   │   ├── tokens.ts               # Color, spacing, typography tokens
│   │   ├── typography.ts           # Typography system
│   │   └── colors.ts               # Semantic color mappings
│   ├── content/
│   │   ├── oncology-article.json   # Article template data
│   │   ├── oncology-resource.json  # Resource template data
│   │   └── landing.json            # Landing page content
│   ├── context/                    # React context providers
│   ├── data/                       # Site configuration
│   ├── lib/                        # Utility functions
│   └── types/                      # TypeScript definitions
└── public/
    └── assets/
        ├── screenshots/            # Portfolio screenshots
        └── medical-images/         # Medical SVG assets
```

---

## 🏗️ Architecture Highlights

### CMS Template System
- **Dynamic Content Loading**: JSON-based content management
- **Modular Components**: Reusable blocks (hero, sections, CTAs)
- **Type-Safe**: Full TypeScript interfaces for all content types
- **Responsive**: Mobile-first with healthcare device optimization

### Email Campaign Architecture
- **Table-Based Layouts**: Maximum email client compatibility
- **Progressive Enhancement**: Modern features for capable clients
- **Inline CSS**: Scoped styles with media queries
- **Outlook Optimization**: MSO conditional comments

### Design System
- **Token-Based**: Centralized design decisions
- **Semantic Naming**: Clinical context-aware colors
- **Scalable**: Easy to extend and maintain
- **Accessible**: WCAG 2.1 AA compliant from the ground up

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Epetaway/BroadCastMed.git
   cd BroadCastMed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
```

---

## 📸 Screenshots

### Homepage & Templates
<table>
  <tr>
    <td align="center">
      <img src="./public/assets/screenshots/broadcastmed-landing.png.svg" alt="Landing Page" width="400"/><br/>
      <strong>Landing Page</strong>
    </td>
    <td align="center">
      <img src="./public/assets/screenshots/broadcastmed-clinical-content.png.svg" alt="Clinical Templates" width="400"/><br/>
      <strong>Article Template</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./public/assets/screenshots/broadcastmed-email-campaigns.png.svg" alt="Email System" width="400"/><br/>
      <strong>Email Campaign</strong>
    </td>
    <td align="center">
      <img src="./public/assets/screenshots/broadcastmed-developer-view.png.svg" alt="Developer View" width="400"/><br/>
      <strong>Developer View</strong>
    </td>
  </tr>
</table>

---

## 🎨 Design System

### Clinical Color Palette
```css
/* Primary Clinical Blue */
--clinical-blue-500: #0075e6;

/* Secondary Clinical Teal */
--clinical-teal-500: #00b3b3;

/* Accent Red (Alerts) */
--accent-red-500: #e02424;

/* Neutral Scale */
--neutral-50: #f8f9fa;
--neutral-900: #212529;
```

### Typography Scale
```css
heading-xl: 3rem (48px)      /* Hero headings */
heading-lg: 2.25rem (36px)   /* Page titles */
heading-md: 1.875rem (30px)  /* Section headings */
body-lg: 1.125rem (18px)     /* Lead paragraphs */
body-md: 1rem (16px)         /* Body text */
body-sm: 0.875rem (14px)     /* Small text */
```

---

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: All interactive elements meet contrast requirements
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Keyboard Navigation**: Full support with visible focus indicators
- **Screen Reader Friendly**: ARIA labels and descriptions throughout
- **Skip Links**: Quick navigation for keyboard users

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| Bundle Size Reduction | -40% |
| Cross-Client Email Compatibility | 98% |

---

## 🌐 Live Demo

**Portfolio**: [https://epetaway.github.io/BroadCastMed](https://epetaway.github.io/BroadCastMed)

### Key Pages
- [Article Template](https://epetaway.github.io/BroadCastMed/templates/article) - Clinical oncology content
- [Resource Template](https://epetaway.github.io/BroadCastMed/templates/resource) - Patient education
- [Case Study](https://epetaway.github.io/BroadCastMed/case-studies/broadcastmed) - Project overview
- [Developer View](https://epetaway.github.io/BroadCastMed/dev-view) - Technical details

---

## 📝 What This Demonstrates

### Technical Expertise
✅ **Modern React Architecture**: Next.js 16 App Router with Server Components  
✅ **TypeScript Mastery**: Strict mode with comprehensive type safety  
✅ **Design System Creation**: Token-based, scalable, maintainable  
✅ **Email Development**: Cross-client HTML emails at enterprise scale  
✅ **Performance Optimization**: Code splitting, lazy loading, bundle optimization  
✅ **Accessibility Engineering**: WCAG 2.1 AA compliance throughout  

### Domain Knowledge
✅ **Healthcare UX**: Medical content presentation and clinical workflows  
✅ **CMS Architecture**: Flexible, modular template systems  
✅ **Email Compatibility**: Outlook, Gmail, iOS Mail rendering optimization  
✅ **Stakeholder Collaboration**: Iterative design with clinical teams  

---

## 🤝 Contact

**Earl Hickson**  
Front-End Developer | Healthcare CMS & Email Campaign Specialist

- 📧 Email: [earl.hickson@email.com](mailto:earl.hickson@email.com)
- 💼 LinkedIn: [linkedin.com/in/earlhickson](https://linkedin.com/in/earlhickson)
- 🐙 GitHub: [github.com/epetaway](https://github.com/epetaway)
- 🌐 Portfolio: [epetaway.github.io/BroadCastMed](https://epetaway.github.io/BroadCastMed)

---

## 📄 License

This project is private and proprietary. All rights reserved © 2024 Earl Hickson.

---

**Built with ❤️ and ☕ to demonstrate real-world healthcare CMS and email campaign development expertise.**
