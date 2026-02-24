import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FlavourCardProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function FlavourCard({ 
  src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", 
  alt = "Profile",
  size = 128,
  className,
}: FlavourCardProps) {
  return (
    <div 
      style={{ width: size, height: size }}
      className={cn(
        "rounded-full bg-purple p-2 transition-all duration-300 hover:ring-4 hover:ring-gold cursor-pointer",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
