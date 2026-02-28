
"use client";

import * as React from "react";
import Image from "next/image";
import { CustomButton } from "../Custom UI Components/custom-button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    //disabling scroll when search bar in focus
    useEffect(() => {
      if (isFocused) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [isFocused]);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 
            ${isFocused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsFocused(false)} />
        <div
          className={`flex h-9 md:h-12 w-[100%] items-center rounded-full transition-all duration-300 bg-white px-2 md:px-4 
          ${ isFocused
            ? "z-50 scale-110 shadow-2xl ring-4 ring-purple" 
            : "shadow-sm border border-gray-200"} 
          ${className}`} >
        
          <Image src="/search_icon.png" alt="Search icon" width={28} height={28} draggable={false} className=""/>
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="ml-2 md:ml-3 w-full bg-transparent text-sm md:text-lg text-gray-800 placeholder:text-[#818181] font-[500] focus:outline-none"
            {...props} />
          <CustomButton className="bg-transparent py-1 px-2 text-xs md:text-sm hover:bg-transparent hover:text-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/20">SEARCH</CustomButton>
        </div>
      </motion.div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
