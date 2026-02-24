import React from 'react';
import Image from 'next/image';
import { CustomButton } from './custom-button';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Section */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <h2 className="text-5xl font-lora -tracking-wider">
            <em className="font-light not-italic">INDULGE IN THE</em>
            <br />
            <span className="text-gold font-bold">EXCEPTIONAL.</span>
          </h2>
          <p className="text-[#A3A3A3] max-w-sm">
            Receive early access to seasonal collections and bespoke flavor releases.
          </p>
          <CustomButton className="w-60 justify-start rounded-full pl-6" animateArrow length={36} showArrow>
            Join the Community
          </CustomButton>
          <div className="flex flex-col gap-6 mt-auto pt-10">
            <Image src="https://placehold.co/120x40/000000/FFFFFF?text=LOGO" alt="Logo" width={120} height={40} className="opacity-70" />
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#A3A3A3]">Driven by</span>
              <Image src="https://placehold.co/80x30/000000/FFFFFF?text=DRIVEN_BY" alt="Driven by Logo" width={80} height={30} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gold">Contact</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="mailto:samplemail@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail size={16} />
                  <span>samplemail@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+9191083832033" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={16} />
                  <span>+91 91083832033</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gold">Company</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="#" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Explore</Link></li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gold">Policies</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider text-gold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-xs text-[#A3A3A3] mt-20 border-t border-white/20 pt-8">
        © {new Date().getFullYear()} Choco Smiley. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
