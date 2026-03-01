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
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
      } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      };
    }, [isFocused]);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        {/* Background Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 
            ${isFocused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsFocused(false)} />
        
        {/* Search Bar */}
        <div
          className={`flex h-9 md:h-10 lg:h-12 w-[100%] items-center rounded-full transition-all duration-300 bg-white px-2 md:px-4 
          ${ isFocused
            ? "z-50 scale-110 shadow-2xl ring-4 ring-purple" 
            : "shadow-sm border border-gray-200"} 
          ${className}`} >
          
          {/* Search Icon Image */}
          <Image src="/search_icon.png" alt="Search icon" width={28} height={28} draggable={false} />
          {/* Search Input */}
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="ml-2 md:ml-3 w-full bg-transparent text-sm md:text-lg text-gray-800 placeholder:text-[#818181] font-[500] focus:outline-none"
            type="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            {...props} />
          {/* Search Button */}
          <CustomButton className="bg-transparent py-1 px-2 text-xs md:text-sm hover:bg-transparent hover:text-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/20">SEARCH</CustomButton>
        </div>
      </motion.div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
