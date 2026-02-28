import React from 'react';
import { CategoryCard } from '../Custom UI Components/category-card';

export function ExploreCategories() {
    return (
        <div className="w-full p-6 md:p-10">
            <div className="relative bg-white/20 border-2 border-purple rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] lg:hover:border-gold">
                {/* Text on Border */}
                <div className="absolute -top-[0.7rem] md:-top-[1.1rem] lg:-top-[1.2rem] left-10 md:left-20 lg:left-24 z-20 flex flex-col items-start pointer-events-none">
                    <h1
                    className="-mb-1 md:-mb-3 text-lg md:text-xl lg:text-2xl font-[600] font-inter italic text-foreground leading-none">
                        EXPLORE
                    </h1>
                    <h1 className="-ml-1 lg:-ml-2 text-xl md:text-2xl lg:text-3xl font-[800] font-inter text-gold leading-none">
                        CATEGORIES
                    </h1>
                </div>
                {/* Category cards */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-3 p-5 md:p-8 pt-10 md:pt-12 lg:pt-16">                   
                    <CategoryCard className="row-span-2 col-span-2 md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:row-span-1 lg:col-span-1" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-full md:row-span-1 md:col-span-4 lg:col-span-1 lg:row-span-2" title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-4 lg:col-span-1 lg:row-span-2"title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                    <CategoryCard className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-3"title={'Hampers'} subtitle={'Gourmet'} imageSrc={'/choco1.png'} />
                </div>
            </div>
        </div>
    );
}