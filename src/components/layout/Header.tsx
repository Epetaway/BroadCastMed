import Link from 'next/link';
import { navigation } from '@/data/site';
import { ViewModeToggle } from './ViewModeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-healthcare-primary">Earl Hickson</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-healthcare-primary"
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
  );
}