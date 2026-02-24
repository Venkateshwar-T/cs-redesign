import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FlavourCardProps {
  src?: string;
  alt?: string;
  title?: React.ReactNode;
  size?: number;
  className?: string;
}

export default function FlavourCard({ 
  src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", 
  alt = "Flavour",
  size = 128,
  title = "Flavour",
  className,
}: FlavourCardProps) {
  return (
    <div 
      style={{ width: size, height: size }}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-full bg-purple transition-all duration-300 hover:ring-4 hover:ring-gold cursor-pointer",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        draggable={false}
        className="w-full h-full rounded-full object-cover"
      />
      <h1 className="uppercase text-center text-xs font-bold transiton-all duration-300 group-hover:text-gold">{title}</h1>
    </div>
  );
}
