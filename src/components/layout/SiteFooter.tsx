import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-df-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Dana-Farber Cancer Institute</h3>
            <p className="text-sm text-gray-300">Provider Education Platform</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/provider-resources" className="text-gray-300 hover:text-white">
                  Provider Resources
                </Link>
              </li>
              <li>
                <Link href="/symposia" className="text-gray-300 hover:text-white">
                  Symposia &amp; CME
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white">
                  Research Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies/danafarber" className="text-gray-300 hover:text-white">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/dev-view" className="text-gray-300 hover:text-white">
                  Developer View
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">Technical</h4>
            <p className="text-sm text-gray-300">
              Built with Next.js 14, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>Demo project showcasing BroadcastMed CMS and email campaign expertise</p>
        </div>
      </div>
    </footer>
  );
}
