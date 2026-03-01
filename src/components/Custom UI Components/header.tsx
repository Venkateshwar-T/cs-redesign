'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { NavSearchBar } from "./nav-search-bar";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Robust scroll locking for Nav Search Bar
  useEffect(() => {
    if (isSearchOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      if (scrollY && document.body.style.position === 'fixed') {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
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
