import React from 'react';
import Image from 'next/image';
import { CustomButton } from './custom-button';
import { Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black border-gold border-t-[1px] text-white w-full px-6 md:px-10">
      <div className="flex flex-col py-4 md:py-8 lg:py-12">

        {/* INDULGE IN THE EXCEPTIONAL. and Button */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-4">
          <p className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold italic">INDULGE IN THE</p>
          <p className="text-3xl md:text-4xl lg:text-6xl text-gold font-[800]">EXCEPTIONAL.</p>
        </div>
        <h2 className="text-xs md:text-[1rem] text-[#A3A3A3] font-semibold pt-1">Receive early access to seasonal collections and bespoke flavor releases.</h2>
        <CustomButton className="w-60 justify-start rounded-full pl-6 my-4 md:my-8 py-2 md:py-3 mx-0 md:mx-4 lg:mx-6" animateArrow length={24} showArrow>Join the Community</CustomButton>
        
        {/* Logos and Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mx-0 md:mx-4 lg:mx-6 font-poppins">
          
          {/* Logos */}
          <div className="flex flex-col items-start -ml-2 gap-1 md:gap-0">
            
            <div className="relative h-14 lg:h-16 aspect-[3/1]">
              <Image 
              src={'/choco-smiley-logo.png'} 
              alt='Choco Smiley Logo'
              draggable={false}
              fill
              priority
              sizes="(max-width: 768px) 120px,
                      (max-width: 1024px) 170px,
                      200px"
              className="object-contain" />
            </div>
            
            <p className="mx-4 mb-1 text-white/80 text-xs lg:text-sm">Driven By</p>
            
            <div className="relative h-12 lg:h-14 aspect-[3/1]">
              <Image 
              src={'/choco-smiley-logo.png'} 
              alt='Choco Smiley Logo' 
              draggable={false}
              fill
              priority
              sizes="(max-width: 768px) 120px,
                      (max-width: 1024px) 170px,
                      200px"
              className="object-contain" />
            </div>
          
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col gap-1 md:gap-0">
            <h2 className="font-semibold text-sm lg:text-md pb-1 md:pb-4">Contact Us</h2>
            <a href="mailto:chocosmiley79@gmail.com" className="flex items-center gap-2 text-xs lg:text-sm font-[300] hover:text-gold"><Mail size={16}/><span>chocosmiley79@gmail.com</span></a>
            <a href="tel:+917411414007" className="flex items-center gap-2 text-xs lg:text-sm font-[300] hover:text-gold"><FaWhatsapp size={16}/><span>+91 74114 14007</span></a>
          </div>
          
          <div className="flex flex-col gap-1 md:gap-0">
            <h2 className="font-semibold text-sm lg:text-md pb-1 md:pb-4">Company</h2>
            <Link href="" className="flex items-center gap-2 font-[300] text-xs lg:text-sm hover:text-gold">About Us</Link>
            <Link href="" className="flex items-center gap-2 font-[300] text-xs lg:text-sm hover:text-gold">FAQs</Link>
            <Link href="" className="flex items-center gap-2 font-[300] text-xs lg:text-sm hover:text-gold">Explore</Link>
          </div>
          
          <div className="flex flex-col gap-1 md:gap-0">
            <h2 className="font-semibold text-sm lg:text-md pb-1 md:pb-4">Policies</h2>
            <Link href="" className="flex items-center gap-2 font-[300] text-xs lg:text-sm hover:text-gold">Privacy Policy</Link>
            <Link href="" className="flex items-center gap-2 font-[300] text-xs lg:text-sm hover:text-gold">Terms & Conditions</Link>
          </div>
          
          <div className="flex flex-col gap-1 md:gap-0">
            <h2 className="font-semibold text-sm lg:text-md pb-1 md:pb-4">Follow Us</h2>
              <div className="flex flex-row gap-2">
                <a href="mailto:chocosmiley79@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><FaInstagram size={28}/></a>
                <a href="tel:+917411414007" target="_blank" rel="noopener noreferrer "className="flex items-center gap-2 hover:text-gold"><FiFacebook size={28}/></a>
              </div>
          </div>
        
        </div>
      </div>
      
      <div className="text-center text-xs text-white border-t border-white py-8 font-poppins">
        © {new Date().getFullYear()} Choco Smiley. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
