(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58472,e=>{"use strict";let t=(0,e.i(75254).default)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);e.s(["Code",()=>t],58472)},16005,e=>{"use strict";var t=e.i(43476),a=e.i(45239),i=e.i(22016),s=e.i(75254);let r=(0,s.default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);var l=e.i(58472);let n=(0,s.default)("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);function o({project:e}){let{viewMode:s}=(0,a.useViewMode)(),o="developer"===s?e.developerView:e.portfolioView;return(0,t.jsxs)("div",{className:"group relative bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("span",{className:"px-2 py-1 bg-healthcare-primary/10 text-healthcare-primary text-xs font-medium rounded-full",children:e.category}),e.featured&&(0,t.jsxs)("span",{className:"flex items-center space-x-1 text-xs text-muted-foreground",children:[(0,t.jsx)(n,{className:"w-3 h-3 fill-current"}),(0,t.jsx)("span",{children:"Featured"})]})]}),(0,t.jsx)(i.default,{href:`/projects/${e.slug}`,className:"opacity-0 group-hover:opacity-100 transition-opacity",children:(0,t.jsx)(r,{className:"w-5 h-5 text-muted-foreground hover:text-healthcare-primary"})})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-2 group-hover:text-healthcare-primary transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-3",children:e.role}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm leading-relaxed",children:o.summary})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.tech.slice(0,4).map(e=>(0,t.jsx)("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded",children:e},e)),e.tech.length>4&&(0,t.jsxs)("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded",children:["+",e.tech.length-4," more"]})]}),"developer"===s&&(0,t.jsxs)("div",{className:"flex items-center text-xs text-muted-foreground",children:[(0,t.jsx)(l.Code,{className:"w-3 h-3 mr-1"}),"Technical Implementation Details"]}),(0,t.jsx)(i.default,{href:`/projects/${e.slug}`,className:"absolute inset-0 z-10","aria-label":`View ${e.title} project details`})]})}e.s(["ProjectCard",()=>o],16005)},63936,e=>{"use strict";var t=e.i(43476);let a=[{slug:"clinical-content-platform",title:"Clinical Content Platform & Email Campaign System",role:"Front-End Developer",category:"Healthcare",featured:!0,tech:["HTML5","CSS3 / SCSS","JavaScript ES6+","Bootstrap 5","CMS Templates","Responsive Email Development","Cross-Browser Support","Accessibility"],developerView:{headline:"CMS-driven oncology platform with reusable UI templates and enterprise HTML email development",summary:"Worked on a clinical content platform delivering treatment updates, CME opportunities, and oncology research to physicians. Built front-end templates, responsive layouts, and modular email campaigns using HTML, CSS, JavaScript, and Bootstrap. Improved user flows, content structures, and mobile usability based on stakeholder feedback from clinical and marketing teams.",bullets:["Developed CMS-driven pages for treatment guidelines, oncology updates, physician signup flows, and unsubscribe confirmation journeys.","Built modular HTML email templates for cancer research newsletters, CME course promotions, and clinical communication campaigns.","Ensured cross-client compatibility (Outlook, Gmail, Apple Mail) with table-based responsive email layouts and carefully scoped CSS.","Created reusable components for hero banners, content summaries, CTA rows, image + text blocks, and multi-article sections.","Optimized physician content pages for readability, hierarchy, spacing, and accessibility, following healthcare content standards.","Implemented stakeholder feedback (e.g., rotating content carousels, updated referral forms, improved headers, and user flow copy).","Enhanced mobile responsiveness across all pages using Bootstrap grid, custom SCSS, and media-query refinements.","Improved clinical signup and 'refer-a-patient' workflows with clearer fields, dropdowns, and call-center guidance.","Added UTM tracking and analytics hooks to CTAs for engagement measurement on oncology and CME content.","Collaborated across clinical, marketing, and technical teams to ship fast, accurate, and compliant oncology content UIs."]},portfolioView:{headline:"Helping physicians access critical oncology information quickly and easily",summary:"This project brings together a physician resource website and coordinated HTML email campaigns to share important cancer treatment updates. I focused on building clean, mobile-friendly templates that help busy clinicians read, sign up, and take action without friction.",bullets:["Designed clean, readable layouts so clinicians can skim treatment updates and guidelines easily.","Built user-friendly signup and unsubscribe experiences that respect physician inboxes and preferences.","Created modular email templates for spreading research news, CME invitations, and clinical announcements.","Improved referral workflows with clearer fields and direct call-center contact guidance.","Ensured every page and email works seamlessly on desktop, tablet, and mobile.","Collaborated closely with medical content teams to keep the experience accurate and helpful."]},links:{demo:"",repo:"",caseStudy:"/projects/clinical-content-platform"},images:{hero:"/images/projects/clinical-platform/hero.jpg",gallery:["/images/projects/clinical-platform/cms-templates.jpg","/images/projects/clinical-platform/email-campaigns.jpg","/images/projects/clinical-platform/mobile-responsive.jpg","/images/projects/clinical-platform/accessibility.jpg"],beforeAfter:[{before:"/images/projects/clinical-platform/referral-before.jpg",after:"/images/projects/clinical-platform/referral-after.jpg",description:"Improved 'refer-a-patient' form with clearer fields, specialty dropdowns, and call-center guidance"},{before:"/images/projects/clinical-platform/carousel-before.jpg",after:"/images/projects/clinical-platform/carousel-after.jpg",description:"Added rotating content carousels for new oncology updates and treatment guidelines"}]},technicalDetails:{challenges:["Cross-client email compatibility across Outlook, Gmail, and mobile clients","CMS template flexibility while maintaining design consistency","Healthcare content accessibility and readability standards","Mobile responsiveness for physician workflow requirements","Stakeholder feedback integration across multiple teams"],solutions:["Table-based email layouts with progressive enhancement and MSO conditionals","Modular component architecture with configurable content blocks","WCAG 2.1 AA compliance with semantic HTML and proper heading hierarchy","Bootstrap grid system with custom breakpoints for medical device usage","Structured feedback review process with UX documentation and implementation tracking"],codeSnippets:[{title:"Responsive Email Table Structure",description:"Cross-client compatible email layout using table-based structure with media queries",code:`<!-- Responsive email container with Outlook fallbacks -->
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
</style>`,language:"html"},{title:"CMS Component Structure",description:"Modular component pattern for CMS-driven content blocks",code:`// Reusable content block component for CMS templates
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

export default ContentBlock;`,language:"tsx"}]},outcomes:{metrics:["Improved email open rates through responsive design optimization","Reduced content publishing time with modular CMS templates","Enhanced mobile usability across all physician-facing pages","Streamlined referral workflows with clearer form interactions"],feedback:["Clinical stakeholders praised improved content hierarchy and readability","Marketing team noted faster campaign deployment with modular email templates","Physicians appreciated mobile-friendly layouts for on-the-go access","Content editors found CMS templates intuitive and flexible"],improvements:["Implemented rotating carousels for featured oncology content","Enhanced 'refer-a-patient' forms with specialty-specific fields","Added accessibility features for diverse clinical audiences","Created consistent brand experience across web and email platforms"]}}];var i=e.i(16005),s=e.i(45239);function r(){let{viewMode:e}=(0,s.useViewMode)();return(0,t.jsx)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,t.jsxs)("div",{className:"text-center space-y-4 mb-12",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold tracking-tight",children:"My Work"}),(0,t.jsx)("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"A showcase of healthcare-focused front-end development projects, featuring CMS platforms, responsive email campaigns, and accessible user interfaces."}),(0,t.jsx)("div",{className:"flex items-center justify-center",children:(0,t.jsxs)("div",{className:"px-3 py-1 bg-muted rounded-full text-sm",children:["Viewing: ",(0,t.jsx)("span",{className:"font-medium capitalize",children:e})," perspective"]})})]}),(0,t.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:a.map(e=>(0,t.jsx)(i.ProjectCard,{project:e},e.slug))})]})})}e.s(["default",()=>r],63936)}]);