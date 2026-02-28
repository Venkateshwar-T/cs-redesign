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
    <div className={cn("relative group min-h-[120px] md:min-h-[180px] min-w-[50px] overflow-hidden rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] border-gold transition-all duration-100 hover:border-2 cursor-pointer", className)}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-2 md:p-3 pb-4 lg:pb-6 flex flex-col justify-end">
        <span className="text-gold text-[0.5rem] md:text-[0.7rem] font-semibold italic tracking-wider uppercase">
          {subtitle}
        </span>
        <h1 className="text-white text-sm md:text-xl font-medium mb-1 md:mb-2 lg:mb-3 break-words">
          {title}
        </h1>
        <div className="h-[2px] w-full md:h-[4px] lg:w-[4px] bg-gold rounded-full transition-all duration-300 ease-out lg:group-hover:w-full" />
      </div>
    </div>
  );
}

export default CategoryCard;
