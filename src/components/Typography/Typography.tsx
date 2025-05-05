import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define typography variants using cva
const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold tracking-tight',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-medium tracking-tight',
      h5: 'text-lg font-medium',
      h6: 'text-base font-medium',
      p: 'text-base',
      label: 'text-sm font-medium',
      caption: 'text-xs',
      helper: 'text-xs',
    },
    color: {
      default: 'text-gray-900 dark:text-white',
      muted: 'text-gray-600 dark:text-gray-300',
      primary: 'text-blue-600 dark:text-blue-400',
      destructive: 'text-red-600 dark:text-red-400',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'default',
  },
});

type TypographyProps = VariantProps<typeof typographyVariants> & {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, color, className, children, as, ...props }, ref) => {
    const Comp = as || (variant === 'p' || variant === 'helper' || variant === 'caption' || variant === 'label' ? 'p' : variant) || 'p';
    
    return (
      <Comp
        ref={ref}
        className={typographyVariants({ variant, color, className })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };