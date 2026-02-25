import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  showArrow?: boolean;
  leadingIcon?: React.ReactNode;
  animateArrow?: boolean;
  length?: number;
  
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({
      className,
      asChild = false,
      children,
      showArrow = false,
      leadingIcon,
      animateArrow = false,
      length = 0,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "group inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gold px-0 py-3 text-sm font-[600] font-poppins text-purple transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {leadingIcon && (
          <span className="mr-2 flex items-center">
            {leadingIcon}
          </span>
        )}
        {children}
        {showArrow && (
          <ArrowRight className={cn(
            "ml-2 h-4 w-4 transition-transform duration-200",
            animateArrow && "group-hover:translate-x-[var(--arrow-move)]"
          )} 
          style={
            animateArrow
              ? ({ ["--arrow-move" as any]: `${length ?? 4}px` })
              : undefined
          }/>
        )}
        
      </Comp>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
