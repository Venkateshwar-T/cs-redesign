import { SearchBar } from "@/components/Home/search-bar";
import { ReviewSection } from "@/components/Home/review-section";
import CapturedSection from "@/components/Home/captured-section";
import { ExploreCategories } from "@/components/Home/explore-categories";
import { ExploreFlavours } from "@/components/Home/explore-flavours";
import { AuthModal } from "@/components/Custom UI Components/authmodal";

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

