"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from './custom-button';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-10",
        isScrolled ? "bg-purple shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Logos */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/Choco Smiley Logo.png"
              alt="Choco Smiley Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="hidden sm:block">
            <Image
              src="/Online Chocolate Store.png"
              alt="Online Chocolate Store"
              width={150}
              height={30}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/faqs" className="hover:text-gold transition-colors">
            FAQs
          </Link>
        </div>

        {/* Right Side: Button and Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <CustomButton className="w-32 rounded-full h-10 text-xs">
            Enquire Now
          </CustomButton>
          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:text-gold transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FaFacebookF size={18} />
            </a>
            <Link href="/profile" className="ml-2">
              <Image
                src="/profile_icon.png"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border-2 border-transparent hover:border-gold transition-all"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Link href="/profile">
              <Image
                src="/profile_icon.png"
                alt="Profile"
                width={28}
                height={28}
                className="rounded-full"
              />
            </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div
        className={cn(
          "fixed inset-0 bg-purple/95 z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold text-white">
          About
        </Link>
        <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold text-white">
          FAQs
        </Link>
        <CustomButton className="w-48 rounded-full py-4 mt-4">
          Enquire Now
        </CustomButton>
        <div className="flex gap-8 text-white mt-4">
          <FaInstagram size={32} />
          <FaFacebookF size={28} />
        </div>
      </div>
    </nav>
  );
}
