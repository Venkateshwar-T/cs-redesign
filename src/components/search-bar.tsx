"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-12 w-full items-center rounded-full bg-white px-6",
          className
        )}
      >
        <Search className="h-5 w-5 text-gray-400" />
        <input
          ref={ref}
          className="ml-3 w-full bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none"
          {...props}
        />
        <span className="ml-3 text-sm font-bold text-[#5D2B79]">
          SEARCH
        </span>
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
