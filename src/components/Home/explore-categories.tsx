"use client";

import React, { useRef } from 'react';
import { CategoryCard } from '../Custom UI Components/category-card';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ExploreCategories() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4 });

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full p-4 md:p-10 md:pb-0 lg:pb-10"
        >
            <fieldset 
                ref={ref}
                className={cn(
                    "relative bg-white/20 border-[0.1rem] md:border-[0.15rem] rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] transition-all duration-500",
                    isInView ? "border-gold shadow-[0_0_15px_rgba(243,207,66,0.3)]" : "border-purple"
                )}
            >
                {/* Legend natively breaks the border */}
                <legend className="ml-10 md:ml-16 lg:ml-24 px-0 relative pointer-events-none">
                    <div className="translate-y-[0.01rem] md:translate-y-[0.01rem] lg:translate-y-[0.06rem] -ml-[5px] -mr-[2px]">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-[600] font-inter italic text-foreground leading-none whitespace-nowrap">
                            EXPLORE
                        </h1>
                        <h1 className="absolute top-full left-0 -mt-1 md:-mt-3 -ml-1 lg:-ml-2 text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none whitespace-nowrap">
                            CATEGORIES
                        </h1>
                    </div>
                </legend>
                
                {/* Category cards - Adjusted top padding (pt) since legend handles spacing */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-3 p-5 md:p-8 pt-8 md:pt-10">                  
                    <CategoryCard className="row-span-2 col-span-2 md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:row-span-1 lg:col-span-1" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-full md:row-span-1 md:col-span-4 lg:col-span-1 lg:row-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-4 lg:col-span-1 lg:row-span-2"title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-3"title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                </div>
            </fieldset>
        </motion.div>
    );
}
