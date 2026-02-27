import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";
import { SearchBar } from "@/components/search-bar";
import ReviewCard from "@/components/review-card";
import ImageSlideshow from "@/components/image-slideshow";
import Image from 'next/image';
import FlavourCard from "@/components/flavour-card";
import { CustomSectionDivider } from "@/components/custom-section-divider";
import CategoryCard from "@/components/category-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ReviewContainer } from "@/components/review-container";

export default function Home() {
  //const categoryImage = PlaceHolderImages.find(p => p.id === 'category-card-1');

  return (
    <main className="flex flex-col items-center gap-8">
      {/* Search Bar */}
      <SearchBar className="w-[80%] md:w-[70%] lg:w-[36rem]" placeholder="What are you looking for?" />
      
      {/* Image Slideshow */}
      <CustomSectionDivider className="-my-12 md:-my-8" topTitle="CAPTURED" bottomTitle="MOMENTS."/>
      <div className="flex flex-row items-center justify-between gap-40">
        <div className="flex flex-col gap-6 w-[460px] font-lora text-[1.3rem] font-[500]">
          A curated glimpse into our handcrafted collections and real-world celebrations. 
          <br></br>Every box tells a story of elegance and artisanal passion. 
          From intimate milestones to grand declarations, our bespoke 
          chocolates are designed to transform fleeting 
          moments into enduring memories.
          <div className="text-[1.1rem] text-end font-lora font-thin mr-6">- Team ChocoSmiley</div>
        </div>
        <ImageSlideshow images={["/choco1.png", "/choco2.png", "/choco3.png","/choco4.png"]}></ImageSlideshow>
      </div>
      {/* Reviews */}
      <CustomSectionDivider className="-my-12 md:-my-8" topTitle="SWEET" bottomTitle="COMMENDATIONS."/>
      <ReviewContainer />
      <p className="text-gold font-fredoka font-semibold">“Handcrafted with love, just for you”</p>

    </main>
  );
}
