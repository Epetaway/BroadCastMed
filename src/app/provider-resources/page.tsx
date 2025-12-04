import { Shell } from '@/components/layout/Shell';
import { ResourceGrid } from '@/components/content/ResourceGrid';
import { getAllSymposia } from '@/content/symposia';
import { ArrowRight, UserPlus, Search, Phone, FileText } from 'lucide-react';
import Link from 'next/link';
import { getHeroImage } from '@/lib/images';

export const metadata = {
  title: 'Provider Resources - Dana-Farber Provider Education',
  description:
    'Access oncology education, symposia, research updates, and clinical guidance for healthcare professionals.',
};

export default function ProviderResourcesPage() {
  // Get all resources (for now, just symposia)
  const symposia = getAllSymposia();
  const recentResources = symposia.slice(0, 6);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-df-blue-dark to-df-blue text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${getHeroImage('provider-resources')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <Shell>
            <div className="py-16 md:py-24">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Education On-Demand</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Access the latest oncology education, research updates, and clinical guidance from
                Dana-Farber Cancer Institute.
              </p>
            </div>
          </Shell>
        </div>
      </div>

      <Shell>
        <div className="py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Recently Added Resources */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Recently Added</h2>
                <p className="text-muted-foreground">
                  Latest educational content and clinical updates
                </p>
              </div>

              <ResourceGrid resources={recentResources} />

              <div className="mt-8 text-center">
                <Link
                  href="/symposia"
                  className="inline-flex items-center text-df-blue hover:text-df-blue-dark font-medium"
                >
                  View All Symposia
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar - Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-6">Quick Actions</h3>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg hover:border-df-blue hover:shadow-sm transition-all"
                  >
                    <UserPlus className="w-5 h-5 text-df-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Refer a Patient</h4>
                      <p className="text-xs text-muted-foreground">Submit a patient referral</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg hover:border-df-blue hover:shadow-sm transition-all"
                  >
                    <Search className="w-5 h-5 text-df-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Find a Clinical Trial</h4>
                      <p className="text-xs text-muted-foreground">Search available trials</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg hover:border-df-blue hover:shadow-sm transition-all"
                  >
                    <FileText className="w-5 h-5 text-df-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Find a Physician</h4>
                      <p className="text-xs text-muted-foreground">
                        Search Dana-Farber specialists
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg hover:border-df-blue hover:shadow-sm transition-all"
                  >
                    <Phone className="w-5 h-5 text-df-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">Contact Us</h4>
                      <p className="text-xs text-muted-foreground">Reach our provider line</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 p-4 bg-df-blue/5 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Need Help?</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Our provider services team is available to assist you.
                  </p>
                  <p className="text-sm font-medium text-df-blue">1-877-442-3324</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </>
  );
}
