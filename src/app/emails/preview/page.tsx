import { Metadata } from 'next';
import { Shell } from '@/components/layout/Shell';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Mail, Eye, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Template Preview | Dana-Farber Provider Education',
  description:
    'Preview responsive HTML email templates for provider education campaigns with cross-client compatibility.',
};

const emailTemplates = [
  {
    id: 'asco-preview',
    name: 'ASCO 2025 Preview',
    description: 'Conference preview email with CME registration CTA and key topics list',
    series: 'ASCO Preview Series',
    file: '/emails/dfci-asco-preview.html',
    features: [
      'Responsive table-based layout',
      'MSO conditional comments for Outlook',
      'Mobile-optimized with media queries',
      'Accessible semantic HTML',
      'Inline CSS for cross-client support',
    ],
  },
  {
    id: 'gut-instincts',
    name: 'Gut Instincts: Early CRC Symptoms',
    description: 'Educational email highlighting red flag symptoms and clinical guidance',
    series: 'Gut Instincts Series',
    file: '/emails/dfci-gut-instincts.html',
    features: [
      '600px max-width container',
      'Dana-Farber blue + gold branding',
      'Dual CTA buttons (Register + Clinical Guide)',
      'Warning box with red flag symptoms',
      'Gmail, iOS, Yahoo, Outlook compatible',
    ],
  },
];

export default function EmailPreviewPage() {
  return (
    <Shell>
      <SectionHeader
        title="Email Template Gallery"
        subtitle="Responsive HTML email templates for Dana-Farber Provider Education campaigns with 98% cross-client compatibility"
      />

      <div className="mt-12 space-y-8">
        {emailTemplates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{template.series}</Badge>
                <Badge variant="outline">HTML Email</Badge>
              </div>
              <CardTitle className="text-2xl text-df-blue-dark">{template.name}</CardTitle>
              <p className="mt-2 text-gray-600">{template.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-df-blue">
                  Technical Features
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-df-blue">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 border-t pt-6">
                <Link
                  href={template.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-df-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-df-blue-dark focus:outline-none focus:ring-2 focus:ring-df-blue focus:ring-offset-2"
                >
                  <Eye className="h-4 w-4" />
                  Preview Email
                </Link>
                <Link
                  href={template.file}
                  download
                  className="inline-flex items-center gap-2 rounded-md border-2 border-df-blue px-4 py-2 text-sm font-semibold text-df-blue transition-colors hover:bg-df-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-df-blue focus:ring-offset-2"
                >
                  <Download className="h-4 w-4" />
                  Download HTML
                </Link>
                <a
                  href={`mailto:?subject=Test Email&body=View: ${typeof window !== 'undefined' ? window.location.origin : ''}${template.file}`}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <Mail className="h-4 w-4" />
                  Send Test
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Email Development Notes */}
      <div className="mt-12 rounded-lg border-2 border-df-blue bg-blue-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-df-blue-dark">
          Email Development Best Practices
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-df-blue">Cross-Client Compatibility</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Table-based layouts (not CSS Grid/Flexbox)</li>
              <li>• Inline CSS for styling</li>
              <li>• MSO conditional comments for Outlook</li>
              <li>• Tested in Gmail, iOS Mail, Yahoo, Outlook 2016+</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-df-blue">Responsive Design</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 600px max-width container</li>
              <li>• @media queries for mobile stacking</li>
              <li>• Fluid images (width: 100%)</li>
              <li>• Touch-friendly button sizing (44px min)</li>
            </ul>
          </div>
        </div>
      </div>
    </Shell>
  );
}
