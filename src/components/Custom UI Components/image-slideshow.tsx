"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  className?: string;
}

export default function ImageSlideshow({ images, className = "" }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const startX = useRef(0);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    if (!images || images.length === 0 || isDragging) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [images, isDragging]);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length);
    } else if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setIsTransitioning(false);
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(currentX - startX.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsTransitioning(true);
    if (dragOffset > 50) {
      setCurrentIndex((prev) => prev - 1);
    } else if (dragOffset < -50) {
      setCurrentIndex((prev) => prev + 1);
    }
    setDragOffset(0);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className={`relative rounded-[1rem] md:rounded-[2rem] w-full h-full overflow-hidden bg-gray-900 touch-pan-y select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={() => isDragging && handleTouchEnd()}
    >
      <div 
        className="flex w-full h-full"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transition: isTransitioning && !isDragging ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={`${src}-${index}`} className="relative w-full h-full shrink-0">
            <Image
              src={src}
              alt={`Slide`}
              draggable={false}
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 450px"
              className="object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

      <div className="absolute bottom-4 left-6 md:bottom-7 md:left-8 flex items-center space-x-1 z-20">
        {images.map((_, index) => {
          const visualIndex = currentIndex === 0 
            ? images.length - 1 
            : currentIndex === extendedImages.length - 1 
              ? 0 
              : currentIndex - 1;

          return (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 1);
                setDragOffset(0);
              }}
              aria-label={`Go to image ${index + 1}`}
              className={`h-[0.3rem] rounded-md transition-all duration-300 ease-in-out ${
                index === visualIndex
                  ? 'w-10 bg-gold' 
                  : 'w-4 bg-white/30 hover:bg-white/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}