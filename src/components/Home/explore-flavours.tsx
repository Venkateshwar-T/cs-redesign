'use client'

import React, { useState } from 'react';
import FlavourCard from '../Custom UI Components/flavour-card';

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
    return (
        <div className="w-full p-6 md:p-10">
            <div className="relative bg-white/20 border-2 border-purple rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] lg:hover:border-gold mb-8">
                {/* Text on Border */}
                <div className="absolute -top-[0.7rem] md:-top-[1.1rem] lg:-top-[1.2rem] left-10 md:left-20 lg:left-24 z-20 flex flex-col items-start pointer-events-none">
                    <h1
                    className="-mb-1 md:-mb-3 text-lg md:text-xl lg:text-2xl font-[600] font-inter italic text-foreground leading-none">
                        EXPLORE
                    </h1>
                    <h1 className="-ml-1 lg:-ml-2 text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none">
                        FLAVOURS
                    </h1>
                </div>
                {/* Flavour cards */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 lg:gap-10 p-4 pt-10 md:p-8 md:pt-12 lg:pt-16">
                    {flavours.map((flavour, index) => {
                        const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
                        return (
                            <div
                                key={index}
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
                            </div>
                        );
                    })}
                </div>
            </div>
      </div>
    );
}