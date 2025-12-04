import { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className }: ShellProps) {
  return (
    <div className={className}>
      <div className="container mx-auto px-4 py-8 md:py-12">{children}</div>
    </div>
  );
}
