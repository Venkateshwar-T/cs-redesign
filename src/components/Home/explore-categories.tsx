"use client";

import React from 'react';
import { CategoryCard } from '../Custom UI Components/category-card';
import { motion } from 'framer-motion';

export function ExploreCategories() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full p-6 md:p-10 md:pb-0 lg:pb-10"
        >
            <fieldset className="relative bg-white/20 border-[0.1rem] md:border-[0.15rem] border-purple rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] transition-all duration-300 lg:hover:border-gold">
                {/* Legend natively breaks the border */}
                <legend className="ml-10 md:ml-16 lg:ml-24 px-0 relative pointer-events-none">
                    <div className="-translate-y-[0.05rem] md:-translate-y-[0.09rem] lg:-translate-y-[0.05rem] -ml-[3px] -mr-[2px]">
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