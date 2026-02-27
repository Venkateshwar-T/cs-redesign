"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  className?: string;
}

export default function ImageSlideshow({ images, className = "" }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative h-[450px] w-[700px] rounded-[2rem] overflow-hidden bg-gray-900 ${className}`}>
      
      {/* Images */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          draggable={false}
          fill
          sizes="(max-width: 768px) 120px,
                      (max-width: 1024px) 170px,
                      340px"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Indicators */}
      <div className="absolute bottom-4 left-6 md:bottom-7 md:left-8 flex items-center space-x-1 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-[0.3rem] rounded-md transition-all duration-300 ease-in-out ${
              index === currentIndex 
                ? 'w-10 bg-gold' 
                : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
