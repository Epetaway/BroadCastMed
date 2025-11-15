import { ContactInfo, NavigationItem } from '@/types';

export const contactInfo: ContactInfo = {
  email: "earl.hickson@email.com",
  linkedin: "https://linkedin.com/in/earlhickson",
  github: "https://github.com/epetaway",
  location: "New York, NY"
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const skills = {
  frontend: [
    "HTML5 & CSS3",
    "JavaScript ES6+",
    "TypeScript",
    "React & Next.js",
    "Vue.js",
    "Bootstrap & Tailwind CSS",
    "Responsive Design",
    "Accessibility (WCAG)"
  ],
  email: [
    "HTML Email Development",
    "Cross-Client Compatibility",
    "Marketo Templates",
    "Campaign Automation",
    "A/B Testing",
    "Email Analytics"
  ],
  cms: [
    "FarCry CMS",
    "WordPress",
    "Drupal",
    "Contentful",
    "Template Development",
    "Component Architecture"
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "npm & yarn",
    "Webpack & Vite"
  ],
  healthcare: [
    "Medical Content Standards",
    "HIPAA Compliance Awareness",
    "Clinical Workflow Design",
    "Physician User Experience",
    "Healthcare Accessibility",
    "Medical Device Compatibility"
  ]
};