import React from 'react';
import ReviewCard from '../Custom UI Components/review-card';
import { CustomSectionDivider } from '../Custom UI Components/custom-section-divider';

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

    return (
        <>
          <CustomSectionDivider className="-my-12 md:-my-8" topTitle="SWEET" bottomTitle="COMMENDATIONS." />
          
          <div className="relative w-full overflow-hidden bg-background pb-5 md:pb-8 mt-6 md:mt-10">
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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background/40 md:from-background/80 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/40 md:from-background/80 to-transparent"></div>
          </div>
        <p className="text-sm md:text-lg text-gold font-fredoka font-[500] pt-8">“Handcrafted with love, just for you”</p>
      </>
    );
}