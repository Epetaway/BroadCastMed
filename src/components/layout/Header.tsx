import Link from 'next/link';
import { navigation } from '@/data/site';
import { ViewModeToggle } from './ViewModeToggle';

export function Header() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-healthcare-primary focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2" aria-label="Earl Hickson Home">
                <span className="font-bold text-xl text-healthcare-primary">Earl Hickson</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-healthcare-primary focus:outline-none focus:text-healthcare-primary"
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <ViewModeToggle />
            </nav>

            {/* Mobile menu button would go here */}
            <div className="md:hidden">
              <ViewModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
