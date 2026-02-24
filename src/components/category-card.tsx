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
    <div className={cn("relative group overflow-hidden rounded-lg cursor-pointer aspect-[3/4]", className)}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
        <span className="text-gold text-sm font-semibold tracking-wider mb-1 uppercase">
          {subtitle}
        </span>
        <h1 className="text-white text-3xl font-bold mb-4">
          {title}
        </h1>
        <div className="h-[4px] w-[4px] bg-gold rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
      </div>
    </div>
  );
}

export default CategoryCard;
