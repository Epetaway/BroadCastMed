import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: "clinical-content-platform",
    title: "Clinical Content Platform & Email Campaign System",
    role: "Front-End Developer",
    category: "Healthcare",
    featured: true,
    tech: [
      "HTML5",
      "CSS3 / SCSS",
      "JavaScript ES6+",
      "Bootstrap 5",
      "CMS Templates",
      "Responsive Email Development",
      "Cross-Browser Support",
      "Accessibility"
    ],

    developerView: {
      headline: "CMS-driven oncology platform with reusable UI templates and enterprise HTML email development",
      summary:
        "Worked on a clinical content platform delivering treatment updates, CME opportunities, and oncology research to physicians. Built front-end templates, responsive layouts, and modular email campaigns using HTML, CSS, JavaScript, and Bootstrap. Improved user flows, content structures, and mobile usability based on stakeholder feedback from clinical and marketing teams.",
      bullets: [
        "Developed CMS-driven pages for treatment guidelines, oncology updates, physician signup flows, and unsubscribe confirmation journeys.",
        "Built modular HTML email templates for cancer research newsletters, CME course promotions, and clinical communication campaigns.",
        "Ensured cross-client compatibility (Outlook, Gmail, Apple Mail) with table-based responsive email layouts and carefully scoped CSS.",
        "Created reusable components for hero banners, content summaries, CTA rows, image + text blocks, and multi-article sections.",
        "Optimized physician content pages for readability, hierarchy, spacing, and accessibility, following healthcare content standards.",
        "Implemented stakeholder feedback (e.g., rotating content carousels, updated referral forms, improved headers, and user flow copy).",
        "Enhanced mobile responsiveness across all pages using Bootstrap grid, custom SCSS, and media-query refinements.",
        "Improved clinical signup and 'refer-a-patient' workflows with clearer fields, dropdowns, and call-center guidance.",
        "Added UTM tracking and analytics hooks to CTAs for engagement measurement on oncology and CME content.",
        "Collaborated across clinical, marketing, and technical teams to ship fast, accurate, and compliant oncology content UIs."
      ]
    },

    portfolioView: {
      headline: "Helping physicians access critical oncology information quickly and easily",
      summary:
        "This project brings together a physician resource website and coordinated HTML email campaigns to share important cancer treatment updates. I focused on building clean, mobile-friendly templates that help busy clinicians read, sign up, and take action without friction.",
      bullets: [
        "Designed clean, readable layouts so clinicians can skim treatment updates and guidelines easily.",
        "Built user-friendly signup and unsubscribe experiences that respect physician inboxes and preferences.",
        "Created modular email templates for spreading research news, CME invitations, and clinical announcements.",
        "Improved referral workflows with clearer fields and direct call-center contact guidance.",
        "Ensured every page and email works seamlessly on desktop, tablet, and mobile.",
        "Collaborated closely with medical content teams to keep the experience accurate and helpful."
      ]
    },

    links: {
      demo: "",
      repo: "",
      caseStudy: "/projects/clinical-content-platform"
    },

    images: {
      hero: "/images/projects/clinical-platform/hero.jpg",
      gallery: [
        "/images/projects/clinical-platform/cms-templates.jpg",
        "/images/projects/clinical-platform/email-campaigns.jpg",
        "/images/projects/clinical-platform/mobile-responsive.jpg",
        "/images/projects/clinical-platform/accessibility.jpg"
      ],
      beforeAfter: [
        {
          before: "/images/projects/clinical-platform/referral-before.jpg",
          after: "/images/projects/clinical-platform/referral-after.jpg",
          description: "Improved 'refer-a-patient' form with clearer fields, specialty dropdowns, and call-center guidance"
        },
        {
          before: "/images/projects/clinical-platform/carousel-before.jpg",
          after: "/images/projects/clinical-platform/carousel-after.jpg",
          description: "Added rotating content carousels for new oncology updates and treatment guidelines"
        }
      ]
    },

    technicalDetails: {
      challenges: [
        "Cross-client email compatibility across Outlook, Gmail, and mobile clients",
        "CMS template flexibility while maintaining design consistency",
        "Healthcare content accessibility and readability standards",
        "Mobile responsiveness for physician workflow requirements",
        "Stakeholder feedback integration across multiple teams"
      ],
      solutions: [
        "Table-based email layouts with progressive enhancement and MSO conditionals",
        "Modular component architecture with configurable content blocks",
        "WCAG 2.1 AA compliance with semantic HTML and proper heading hierarchy",
        "Bootstrap grid system with custom breakpoints for medical device usage",
        "Structured feedback review process with UX documentation and implementation tracking"
      ],
      codeSnippets: [
        {
          title: "Responsive Email Table Structure",
          description: "Cross-client compatible email layout using table-based structure with media queries",
          code: `<!-- Responsive email container with Outlook fallbacks -->
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td>
      <!--[if mso]>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
        <tr><td>
      <![endif]-->
      
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 20px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333;">
              <!-- Content blocks go here -->
            </td>
          </tr>
        </table>
      </div>
      
      <!--[if mso]>
        </td></tr>
      </table>
      <![endif]-->
    </td>
  </tr>
</table>

<style>
  @media screen and (max-width: 600px) {
    .mobile-stack { display: block !important; width: 100% !important; }
    .mobile-hide { display: none !important; }
    .mobile-padding { padding: 10px !important; }
  }
</style>`,
          language: "html"
        },
        {
          title: "CMS Component Structure",
          description: "Modular component pattern for CMS-driven content blocks",
          code: `// Reusable content block component for CMS templates
interface ContentBlockProps {
  type: 'hero' | 'text' | 'image-text' | 'cta' | 'carousel';
  data: {
    headline?: string;
    body?: string;
    image?: string;
    ctaText?: string;
    ctaUrl?: string;
    items?: Array<{ title: string; content: string; }>;
  };
  layout?: 'left' | 'right' | 'center';
  variant?: 'primary' | 'secondary' | 'medical';
}

const ContentBlock: React.FC<ContentBlockProps> = ({ 
  type, 
  data, 
  layout = 'center', 
  variant = 'primary' 
}) => {
  const baseClasses = 'content-block mb-8 p-6 rounded-lg';
  const variantClasses = {
    primary: 'bg-blue-50 border-blue-200',
    secondary: 'bg-gray-50 border-gray-200',
    medical: 'bg-green-50 border-green-200'
  };

  switch (type) {
    case 'hero':
      return (
        <div className={\`\${baseClasses} \${variantClasses[variant]} text-center\`}>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {data.headline}
          </h1>
          {data.body && (
            <p className="text-lg text-gray-700 mb-6">{data.body}</p>
          )}
          {data.ctaText && (
            <a 
              href={data.ctaUrl} 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {data.ctaText}
            </a>
          )}
        </div>
      );
    
    case 'image-text':
      return (
        <div className={\`\${baseClasses} \${variantClasses[variant]}\`}>
          <div className={\`grid md:grid-cols-2 gap-6 items-center \${layout === 'right' ? 'md:grid-flow-col-dense' : ''}\`}>
            <div className={layout === 'right' ? 'md:col-start-2' : ''}>
              <h2 className="text-2xl font-semibold mb-3">{data.headline}</h2>
              <p className="text-gray-700">{data.body}</p>
            </div>
            <div className={layout === 'right' ? 'md:col-start-1' : ''}>
              <img 
                src={data.image} 
                alt={data.headline}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

export default ContentBlock;`,
          language: "tsx"
        }
      ]
    },

    outcomes: {
      metrics: [
        "Improved email open rates through responsive design optimization",
        "Reduced content publishing time with modular CMS templates",
        "Enhanced mobile usability across all physician-facing pages",
        "Streamlined referral workflows with clearer form interactions"
      ],
      feedback: [
        "Clinical stakeholders praised improved content hierarchy and readability",
        "Marketing team noted faster campaign deployment with modular email templates",
        "Physicians appreciated mobile-friendly layouts for on-the-go access",
        "Content editors found CMS templates intuitive and flexible"
      ],
      improvements: [
        "Implemented rotating carousels for featured oncology content",
        "Enhanced 'refer-a-patient' forms with specialty-specific fields",
        "Added accessibility features for diverse clinical audiences",
        "Created consistent brand experience across web and email platforms"
      ]
    }
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};