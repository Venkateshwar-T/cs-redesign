import * as React from 'react';
import { cn } from "@/lib/utils";

export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stars?: number;
  reviewText?: string;
  reviewerName?: string;
}

const StarIcon = () => (
  <svg 
    className="w-5 h-5 fill-[#F3CF42]" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ 
    stars = 5,
    reviewText = "Incredible service and amazing attention to detail. Highly recommend!",
    reviewerName = "John Doe",
    className, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-white rounded-[2rem] shadow-[4px_4px_0_#F3CF42] p-6 text-black flex flex-col gap-4",
          className
        )}
        {...props}
      >
        <span 
          className="font-fredoka absolute -top-11 right-1 text-[10rem] text-[#F3CF42] leading-none select-none pointer-events-none"
        >
          ”
        </span>
        
        <div className="flex gap-1">
          {Array.from({ length: Math.max(0, Math.min(stars, 5)) }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        <p 
          className="font-lora text-[#5D2B79] font-semibold italic text-lg"
        >
          {reviewText}
        </p>

        <hr className="border-t border-black w-full" />

        <div className="flex justify-between items-center text-sm w-full">
          <span className="uppercase font-fredoka text-[1rem] text-[#5D2B79] font-semibold tracking-wider">{reviewerName}</span>
          <span className="text-[#A3A3A3] text-sm font-medium">Reviewed on Google</span>
        </div>
      </div>
    );
  }
);
ReviewCard.displayName = "ReviewCard";

export default ReviewCard;
