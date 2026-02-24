"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CustomButton } from "./custom-button";

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-12 w-full items-center rounded-full bg-white pr-2 px-4",
          className
        )}
      >
        <Image src="/search_icon.png" alt="Search icon" width={28} height={28} draggable={false}/>
        <input
          ref={ref}
          className="ml-3 w-full bg-transparent text-gray-800 placeholder:text-[#818181] font-semibold focus:outline-none"
          {...props}
        />
        <CustomButton className="bg-transparent py-1 px-1 text-sm hover:bg-transparent hover:text-[#5D2B79]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2B79]/20">SEARCH</CustomButton>
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
