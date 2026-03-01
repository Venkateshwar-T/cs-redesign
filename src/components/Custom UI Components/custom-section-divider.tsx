import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
      <div ref={ref} className="relative flex items-center w-full py-8 -my-12 md:-my-8" {...props}>
        {/* Left Line with animation*/}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[2px] lg:h-[3px] bg-gold w-12 md:w-[70px] lg:w-[136px] flex-shrink-0 origin-right" 
        />
        
        {/* Text Area */}
        <div className={cn("relative z-20 pointer-events-none", className)}>
          <h1 className="text-lg md:text-xl lg:text-2xl font-[600] font-inter italic text-foreground leading-none whitespace-nowrap">
            {topTitle}
          </h1>
          <h2 className="absolute top-full left-0 -mt-1 md:-mt-3 -ml-1 lg:-ml-2 text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none whitespace-nowrap">
            {bottomTitle}
          </h2>
        </div>

        {/* Right Line with animation*/}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[2px] lg:h-[3px] bg-gold flex-grow origin-left" 
        />
      </div>
    );
  }
);

CustomSectionDivider.displayName = "CustomSectionDivider";

export { CustomSectionDivider };