import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CategoryCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  className?: string;
}

export function CategoryCard({ title, subtitle, imageSrc, className }: CategoryCardProps) {
  return (
    <div className={cn("relative group overflow-hidden rounded-[2rem] border-gold transition-all duration-100 hover:border-2 cursor-pointer", className)}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-4 pb-6 flex flex-col justify-end">
        <span className="text-gold text-sm font-semibold italic tracking-wider uppercase">
          {subtitle}
        </span>
        <h1 className="text-white text-3xl font-medium mb-4">
          {title}
        </h1>
        <div className="h-[4px] w-[4px] bg-gold rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
      </div>
    </div>
  );
}

export default CategoryCard;
