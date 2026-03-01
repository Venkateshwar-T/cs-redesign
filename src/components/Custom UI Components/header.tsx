'use client';
import { useEffect, useState, useRef } from "react";
import { Navbar } from "./navbar";
import { NavSearchBar } from "./nav-search-bar";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const scrollPos = useRef(0);

  // Robust scroll locking for Nav Search Bar
  useEffect(() => {
    if (isSearchOpen) {
      scrollPos.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = '100%';
    } else {
      const wasFixed = document.body.style.position === 'fixed';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (wasFixed) {
        window.scrollTo(0, scrollPos.current);
      }
    }
    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isSearchOpen]);
    
  return (
    <>
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)} 
        isSearchOpen={isSearchOpen}
      />
      <NavSearchBar 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        className="w-[80%] md:w-[70%] lg:w-[36rem]"
        placeholder="What are you looking for?" 
      />
    </>
  );
}
