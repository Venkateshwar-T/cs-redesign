"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from './custom-button';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { Menu, X, User, HelpCircle, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // handling on scroll nav bar bg solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-purple shadow-md" : "bg-transparent"
      )}
    >
      <div className="h-20 md:h-24 flex items-center justify-between px-3 md:px-8 lg:px-20">
        {/* Left Side: Logos */}
        <div className="flex items-center gap-0 md:gap-1">
          <Link href="/" className="relative h-12 md:h-14 lg:h-16 aspect-[3/1]">
            <Image
              src="/Choco Smiley Logo.png"
              alt="Choco Smiley Logo"
              fill
              draggable={false}
              priority
              sizes="(max-width: 768px) 120px,
                      (max-width: 1024px) 170px,
                      200px"
              className="object-contain"
            />
          </Link>
          <div className="relative h-10 md:h-12 lg:h-14 aspect-[2/1]">
            <Image
              src="/Online Chocolate Store.png"
              alt="Online Chocolate Store"
              fill
              draggable={false}
              priority
              sizes="(max-width: 768px) 120px,
                      (max-width: 1024px) 170px,
                      200px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-lg text-white font-poppins font-[400]">
          <Link href="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="/faqs" className="hover:text-gold transition-colors">
            FAQs
          </Link>
        </div>

        {/* Right Side: Button and Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <CustomButton
            onClick={onOpenSearch}
            className={`bg-white rounded-full md:h-8 md:w-8 lg:h-10 lg:w-10 hover:bg-white/90 transition-all duration-300 ${
              isScrolled
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <Image src="/search_icon.png" alt="Search icon" width={28} height={28} className="h-5 w-5 lg:h-6 lg:w-6" draggable={false} />
          </CustomButton>
          
          <CustomButton className="w-28 lg:w-32 rounded-full h-8 lg:h-10 text-xs lg:text-sm">
            Enquire Now
          </CustomButton>
          <div className="h-6 lg:h-8 w-[0.5px] bg-white"></div>
          <div className="flex items-center gap-2 text-white">
            <a href="#" className="hover:text-gold transition-colors">
              <FaInstagram className="h-6 w-6 lg:h-7 lg:w-7"/>
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FiFacebook className="h-6 w-6 lg:h-7 lg:w-7"/>
            </a>
            <Image
              src="/profile_icon.png"
              alt="Profile"
              width={40}
              height={40}
              sizes="40px"
              draggable={false}
              className="h-9 w-9 lg:h-10 lg:w-10 rounded-full border-2 border-transparent hover:border-gold transition-all"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-row items-center gap-2">
          <CustomButton
            onClick={onOpenSearch}
            className={`bg-white rounded-full h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10  hover:bg-white/90 transition-all duration-300 ${
              isScrolled
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <Image src="/search_icon.png" alt="Search icon" width={28} height={28} className="h-5 w-5 lg:h-6 lg:w-6" draggable={false} />
          </CustomButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu (Drawer) */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 bg-purple z-50 transition-transform duration-300 md:hidden flex flex-col items-start p-6 w-[70%] font-poppins",
           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={16} />
        </button>

        {/* 1. User Avatar & 2. Username */}
        <div className="flex flex-col items-center w-full mt-8 mb-6">
          <div className="relative w-20 h-20 rounded-full border-2 border-gold overflow-hidden mb-2">
            <Image
              src="/profile_icon.png"
              alt="Profile"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <span className="text-gold font-semibold text-lg">Username</span>
        </div>

        {/* 3. Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* 4. Links with icons */}
        <div className="flex flex-col gap-6 w-full text-white">
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <User size={18} /> About Us
          </Link>
          <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <HelpCircle size={18} /> FAQs
          </Link>
          <Link href="/privacy" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <ShieldCheck size={18} /> Privacy Policy
          </Link>
          <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 hover:text-gold transition-colors text-sm">
            <FileText size={18} /> Terms & Conditions
          </Link>
        </div>

        {/* 5. Divider */}
        <div className="w-full h-[1px] bg-white/20 my-8" />

        {/* 6. Connect text & 7. Social row */}
        <div className="w-full">
          <p className="text-white/60 text-xs mb-4 uppercase tracking-widest">Connect with us on</p>
          <div className="flex gap-3 text-white">
            <a href="#" className="hover:text-gold transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FiFacebook size={22} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
