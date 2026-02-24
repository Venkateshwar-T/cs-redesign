import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  showArrow?: boolean;
  leadingIcon?: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({
      className,
      asChild = false,
      children,
      showArrow = false,
      leadingIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#F3CF42] px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-[#F3CF42]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
          <ArrowRight className="ml-2 h-4 w-4" />
        )}
      </Comp>
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton };
