import React from 'react';
import { cn } from '@/lib/utils';

export interface CustomSectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomSectionDivider = React.forwardRef<HTMLDivElement, CustomSectionDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full h-32", className)} {...props}>
        {/* The Line */}
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gold -translate-y-1/2 z-10 pointer-events-none" />
        
        {/* CAPTURED (Bisected by the line) */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20 pointer-events-none bg-background px-2">
          <h1 className="text-2xl font-bold italic text-foreground tracking-tight leading-none">
            CAPTURED
          </h1>
        </div>

        {/* MOMENTS (Below the line) */}
        <div className="absolute top-1/2 left-8 z-20 pt-2 pointer-events-none">
          <h2 className="text-3xl font-bold text-gold tracking-widest leading-none">
            MOMENTS
          </h2>
        </div>
      </div>
    );
  }
);

CustomSectionDivider.displayName = "CustomSectionDivider";

export { CustomSectionDivider };
