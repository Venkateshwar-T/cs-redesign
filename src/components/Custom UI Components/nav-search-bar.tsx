"use client";

import * as React from "react";
import Image from "next/image";
import { CustomButton } from "./custom-button";

export interface NavSearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOpen?: boolean;
  onClose?: () => void;
}

const NavSearchBar = React.forwardRef<HTMLInputElement, NavSearchBarProps>(
  ({ isOpen, onClose, className, ...props }, forwardedRef) => {
    //handling focus on search bar
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(forwardedRef, () => inputRef.current as HTMLInputElement);
    React.useEffect(() => {
      if (isOpen && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, [isOpen]);

    return (
      <>
        {/* Backdrop */}
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />
        
        {/* Wrapper */}
        <div
          className={`fixed top-20 md:top-28 left-0 right-0 flex justify-center z-50 transition-all duration-300 ${
            isOpen ? "scale-110 opacity-100" : "scale-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* Search Bar */}
          <div className={`flex h-9 md:h-10 lg:h-12 items-center rounded-full bg-white shadow-2xl ring-4 ring-purple px-2 md:px-4 ${className}`}>
            <Image src="/search_icon.png" alt="Search icon" width={28} height={28} draggable={false} />
            <input
              ref={inputRef}
              className="ml-2 md:ml-3 w-full bg-transparent text-sm md:text-lg text-gray-800 placeholder:text-[#818181] font-[500] focus:outline-none"
              onKeyDown={(e) => e.key === 'Escape' && onClose?.()}
              {...props} 
            />
            <CustomButton className="bg-transparent py-1 px-2 text-xs md:text-sm hover:bg-transparent hover:text-purple/90 focus-visible:outline-none">
              SEARCH
            </CustomButton>
          </div>
        </div>
      </>
    );
  }
);
NavSearchBar.displayName = "NavSearchBar";

export { NavSearchBar };