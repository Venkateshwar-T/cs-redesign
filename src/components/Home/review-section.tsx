
"use client";

import React from 'react';
import ReviewCard from '../Custom UI Components/review-card';
import { CustomSectionDivider } from '../Custom UI Components/custom-section-divider';
import { motion } from 'framer-motion';

// Added a style block for the infinite scroll animation
const MarqueeStyles = () => (
  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 1rem)); }
    }
    .animate-marquee {
      animation: scroll 40s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
);

export function ReviewSection() {
    const reviews = [
        { name: "Alice M.", text: "Absolutely phenomenal experience. Will definitely return.", stars: 5 },
        { name: "David K.", text: "Exceeded all expectations. The quality is unmatched.", stars: 5 },
        { name: "Sarah L.", text: "A truly bespoke service that makes you feel valued.", stars: 4 },
        { name: "James T.", text: "Brilliant execution from start to finish.", stars: 5 },
        { name: "Emma R.", text: "Highly recommend for anyone looking for the best.", stars: 5 },
        ];
    // Duplicating the array creates the seamless infinite loop
    const infiniteReviews = [...reviews, ...reviews];

    const tagline = "“Handcrafted with love, just for you”";
    
    // Typing animation logic
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
            className="relative w-full overflow-hidden bg-background pb-5 md:pb-8 mt-6 md:mt-10"
          >
            <MarqueeStyles />

            {/* Container that handles the horizontal scroll and pause on hover */}
            <div className="flex w-max gap-8 px-4 animate-marquee mt-12">
              {infiniteReviews.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  reviewerName={review.name}
                  reviewText={review.text}
                  stars={review.stars} />
              ))}
            </div>

            {/* Gradient fades for the edges */}
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
