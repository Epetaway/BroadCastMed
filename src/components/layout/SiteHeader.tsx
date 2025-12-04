import Link from 'next/link';
import { Menu } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-df-blue">Dana-Farber</span>
          <span className="hidden text-xl font-light text-gray-600 sm:inline">
            Provider Education
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/provider-resources"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-df-blue"
          >
            Provider Resources
          </Link>
          <Link
            href="/symposia"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-df-blue"
          >
            Symposia
          </Link>
          <Link
            href="/research"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-df-blue"
          >
            Research
          </Link>
          <Link
            href="/dev-view"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-df-blue"
          >
            Developer View
          </Link>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
