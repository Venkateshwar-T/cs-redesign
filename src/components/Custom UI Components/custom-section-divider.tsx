import React from 'react';
import { cn } from '@/lib/utils';

export interface CustomSectionDividerProps {
  topTitle?: string;
  bottomTitle?: string;
  className?: string;
}

const CustomSectionDivider = React.forwardRef<HTMLDivElement, CustomSectionDividerProps>(
  ({ 
    className,
    topTitle="CAPTURED",
    bottomTitle="MOMENTS",
    ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full py-8", className)} {...props}>
        {/* The Line */}
        <div className="absolute top-1/2 w-full h-[2px] md:h-[3px] bg-gold -translate-y-1/2 z-10 pointer-events-none" />
        
        {/* CAPTURED (Bisected by the line) */}
        <div className="absolute top-1/2 -translate-y-1/2 z-20 left-12 md:left-[70px] lg:left-[136px] pointer-events-none bg-background">
          <h1 className="text-lg md:text-xl lg:text-2xl font-[600] font-inter italic text-foreground leading-none">
          {topTitle}
          </h1>
        </div>

        {/* MOMENTS (Below the line) */}
        <div className="absolute top-1/2 z-20 pt-[0.3rem] md:pt-1 left-11 md:left-16 lg:left-32 pointer-events-none">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none">
          {bottomTitle}
          </h2>
        </div>
      </div>
    );
  }
);

CustomSectionDivider.displayName = "CustomSectionDivider";

export { CustomSectionDivider };
