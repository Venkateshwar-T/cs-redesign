"use client";

import React, { useRef, useEffect, useState } from 'react';
import ReviewCard from '../Custom UI Components/review-card';
import { CustomSectionDivider } from '../Custom UI Components/custom-section-divider';
import { motion } from 'framer-motion';

export function ReviewSection() {
    const reviews = [
        { name: "Alice M.", text: "Absolutely phenomenal experience. Will definitely return.", stars: 5 },
        { name: "David K.", text: "Exceeded all expectations. The quality is unmatched.", stars: 5 },
        { name: "Sarah L.", text: "A truly bespoke service that makes you feel valued.", stars: 4 },
        { name: "James T.", text: "Brilliant execution from start to finish.", stars: 5 },
        { name: "Emma R.", text: "Highly recommend for anyone looking for the best.", stars: 5 },
    ];
    
    const infiniteReviews = [...reviews, ...reviews];
    const tagline = "“Handcrafted with love, just for you”";

    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const xPos = useRef(0);
    const dragStartX = useRef(0);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const speed = 0.5;
        const animate = () => {
            if (!isDragging && containerRef.current) {
                const singleSetWidth = containerRef.current.scrollWidth / 2;
                xPos.current -= speed;
                
                if (xPos.current <= -singleSetWidth) {
                    xPos.current += singleSetWidth;
                } else if (xPos.current > 0) {
                    xPos.current -= singleSetWidth;
                }
                
                containerRef.current.style.transform = `translateX(${xPos.current}px)`;
            }
            animationRef.current = requestAnimationFrame(animate);
        };
        
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isDragging]);

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true);
        dragStartX.current = e.clientX - xPos.current;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging || !containerRef.current) return;
        xPos.current = e.clientX - dragStartX.current;
        containerRef.current.style.transform = `translateX(${xPos.current}px)`;
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };
    
    const sentenceVariants = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };

    const letterVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    return (
        <>
          <CustomSectionDivider className="-ml-[8px] -mr-[3px] lg:-ml-[11px] lg:-mr-[5px]" topTitle="SWEET" bottomTitle="COMMENDATIONS." />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full overflow-hidden bg-transparent pb-5 md:pb-8 mt-6 md:mt-10"
          >
            <div 
              ref={containerRef}
              className={`flex w-max gap-8 px-4 mt-12 select-none touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {infiniteReviews.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  reviewerName={review.name}
                  reviewText={review.text}
                  stars={review.stars} 
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 lg:w-32 bg-gradient-to-r from-background/40 md:from-background/80 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 lg:w-32 bg-gradient-to-l from-background/40 md:from-background/80 to-transparent"></div>
          </motion.div>

        <motion.p 
          variants={sentenceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm md:text-lg text-gold font-fredoka font-[500] pt-8"
        >
          {tagline.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </>
    );
}