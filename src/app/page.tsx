import { CustomButton } from "@/components/Custom UI Components/custom-button";
import { CustomInput } from "@/components/Custom UI Components/custom-input";
import { SearchBar } from "@/components/Home/search-bar";
import ReviewCard from "@/components/Custom UI Components/review-card";
import ImageSlideshow from "@/components/Custom UI Components/image-slideshow";
import Image from 'next/image';
import FlavourCard from "@/components/Custom UI Components/flavour-card";
import { CustomSectionDivider } from "@/components/Custom UI Components/custom-section-divider";
import CategoryCard from "@/components/Custom UI Components/category-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ReviewSection } from "@/components/Home/review-section";
import CapturedSection from "@/components/Home/captured-section";
import { ExploreCategories } from "@/components/Home/explore-categories";
import { ExploreFlavours } from "@/components/Home/explore-flavours";

export default function Home() {
  //const categoryImage = PlaceHolderImages.find(p => p.id === 'category-card-1');

  return (
    <main className="flex flex-col items-center">

      {/* Search Bar */}
      <SearchBar className="mb-4 md:mb-0 w-[80%] md:w-[70%] lg:w-[36rem]" placeholder="What are you looking for?" />
      
      {/* Categories */}
      <ExploreCategories />
      
      {/* Flavours */}
      <ExploreFlavours />

      {/* Text and Image Slideshow */}
      <CapturedSection images={["/choco1.png", "/choco2.png", "/choco3.png","/choco4.png"]} />
        
      {/* Reviews */}
      <ReviewSection />

    </main>
  );
}

