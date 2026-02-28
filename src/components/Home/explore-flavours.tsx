'use client'

import React, { useState } from 'react';
import FlavourCard from '../Custom UI Components/flavour-card';
import { motion } from 'framer-motion';

export function ExploreFlavours() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const flavours = [
        { src: "/almonds.png", alt: "Roasted Almond", title: <>Roasted<br/>Almond</> },
        { src: "/hazelnut.png", alt: "Hazelnut Crunch", title: <>Hazelnut<br/>Crunch</> },
        { src: "/caramel.png", alt: "Salted Caramel", title: <>Salted<br/>Caramel</> },
        { src: "/coffee.png", alt: "Mocha Bliss", title: <>Mocha<br/>Bliss</> },
        { src: "/berry.png", alt: "Berry Burst", title: <>Berry<br/>Burst</> },
        { src: "/dark.png", alt: "Dark Cocoa", title: <>Dark<br/>Cocoa</> },
      ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div className="w-full p-6 md:p-10">
            <motion.fieldset 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative bg-white/20 border-[0.1rem] md:border-[0.15rem] border-purple rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] lg:hover:border-gold mb-8"
            >
                {/* Legend natively breaks the border */}
                <legend className="ml-10 md:ml-16 lg:ml-24 px-0 relative pointer-events-none">
                    <div className="-translate-y-[0.05rem] md:-translate-y-[0.09rem] lg:-translate-y-[0.05rem] -ml-[3px] -mr-[2px]">
                        {/* Only this text controls the width of the gap now */}
                        <h1 className="text-lg md:text-xl lg:text-2xl font-[600] font-inter italic leading-none whitespace-nowrap">
                            EXPLORE
                        </h1>
                        {/* Absolute positioning prevents this from widening the legend */}
                        <h1 className="absolute top-full left-0 -mt-1 md:-mt-3 -ml-1 lg:-ml-2 text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none whitespace-nowrap">
                            FLAVOURS
                        </h1>
                    </div>
                </legend>

                {/* Flavour cards */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 lg:gap-10 p-4 md:p-8 pt-6 md:pt-10">
                    {flavours.map((flavour, index) => {
                        const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`transition-all duration-300 ${
                                    isDimmed ? "opacity-70" : ""
                                }`}
                            >
                                <FlavourCard
                                    src={flavour.src}
                                    alt={flavour.alt}
                                    title={flavour.title}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.fieldset>
      </div>
    );
}