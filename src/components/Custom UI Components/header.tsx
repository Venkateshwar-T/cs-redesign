'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { NavSearchBar } from "./nav-search-bar";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

    //disabling scroll when search bar in focus
    useEffect(() => {
    if (isSearchOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
    return () => {
        document.body.style.overflow = "";
    };
    }, [isSearchOpen]);
  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <NavSearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} 
        className="w-[80%] md:w-[70%] lg:w-[36rem]"
        placeholder="What are you looking for?" />
    </>
  );
}