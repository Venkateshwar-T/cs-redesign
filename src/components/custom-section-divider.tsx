import React from 'react';
import { cn } from '@/lib/utils';

export interface CustomSectionDividerProps {
  topTitle?: string;
  bottomTitle?: string;
  offset?: number;
  className?: string;
}

const CustomSectionDivider = React.forwardRef<HTMLDivElement, CustomSectionDividerProps>(
  ({ 
    className,
    topTitle="CAPTURED",
    bottomTitle="MOMENTS",
    offset=100,
    ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full h-32", className)} {...props}>
        {/* The Line */}
        <div className="absolute top-1/2 w-full h-[3px] bg-gold -translate-y-1/2 z-10 pointer-events-none" />
        
        {/* CAPTURED (Bisected by the line) */}
        <div className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none bg-background"
          style={{ left: `${offset}px` }}>
          <h1 className="text-2xl font-[600] font-inter italic text-foreground leading-none">
          {topTitle}
          </h1>
        </div>

        {/* MOMENTS (Below the line) */}
        <div className="absolute top-1/2 left-8 z-20 pt-2 pointer-events-none"
          style={{ left: `${offset-2}px` }}>
          <h2 className="text-3xl font-[700] font-inter text-gold leading-none">
          {bottomTitle}
          </h2>
        </div>
      </div>
    );
  }
);

CustomSectionDivider.displayName = "CustomSectionDivider";

export { CustomSectionDivider };
