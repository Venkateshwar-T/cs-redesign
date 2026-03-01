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
  title = "Flavour",
  className,
}: FlavourCardProps) {
  return (
    <div
  className={cn(
    "group flex flex-col items-center gap-2 cursor-pointer",
    className
  )}
>
  <div className="relative w-full mx-auto max-w-[120px] md:max-w-[180px] aspect-square rounded-full overflow-hidden bg-purple transition-all duration-300 group-hover:ring-4 group-hover:ring-gold">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100px,
             (max-width: 1024px) 130px,
             200px"
      draggable={false}
      className="object-cover object-center transition-all duration-300 lg:group-hover:rotate-180"
    />
  </div>

  <div className="uppercase text-center text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] font-bold transition-all duration-300 group-hover:text-gold">
    {title}
  </div>
</div>
  );
}
