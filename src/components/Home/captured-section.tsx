"use client";

import { CustomSectionDivider } from "../Custom UI Components/custom-section-divider";
import ImageSlideshow from "../Custom UI Components/image-slideshow";
import { motion } from "framer-motion";

type CapturedSectionProps = {
    images: string[];
  };
  
export default function CapturedSection({ images }: CapturedSectionProps) {
  return (
    
      <div className="w-full overflow-hidden">
        <CustomSectionDivider className="-my-12 md:-my-8" topTitle="CAPTURED" bottomTitle="MOMENTS." />
        <div className="flex flex-col md:flex-row items-center md:h-[20rem] lg:h-[26rem] w-full justify-between px-6 md:px-10 lg:px-12 gap-6 lg:gap-8 my-12">

        {/* Text - Sliding from Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-[80%] md:w-[45%] lg:w-[50%] justify-center gap-4 md:gap-8 lg:px-12 pt-4 md:pt-0"
        >
          <div className="font-lora text-sm md:text-[1.1rem] lg:text-[1.3rem] font-[500] lg:tracking-wider lg:leading-snug">
            A curated glimpse into our handcrafted collections and real-world celebrations.
            <br />
            Every box tells a story of elegance and artisanal passion.
            From intimate milestones to grand declarations, our bespoke
            chocolates are designed to transform fleeting
            moments into enduring memories.
          </div>

          <div className="text-xs md:text-[0.9rem] lg:text-[1.1rem] text-end font-lora font-thin mr-6">
            - Team ChocoSmiley
          </div>
        </motion.div>

        {/* Slideshow - Sliding from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[300px] md:h-full w-full md:w-[55%] lg:w-[50%] lg:px-8"
        >
          <ImageSlideshow images={images} />
        </motion.div>

      </div>
    </div>
    
  );
}