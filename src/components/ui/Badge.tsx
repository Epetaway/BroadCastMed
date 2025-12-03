import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          'bg-df-blue text-white': variant === 'default',
          'bg-df-gold text-df-blue-dark': variant === 'secondary',
          'border border-df-blue text-df-blue': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}
