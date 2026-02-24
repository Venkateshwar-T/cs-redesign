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

export default function Home() {
  const categoryImage = PlaceHolderImages.find(p => p.id === 'category-card-1');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0">
      <>
      <h1 className="text-gold font-bold my-8">INPUT FIELDS</h1>
      <div className="flex flex-col gap-8">
        <CustomInput className="w-60 h-12" placeholder="EMAIL OR PHONE"/>
        <CustomInput className="w-60 h-12" type="password" showPasswordToggle placeholder="PASSWORD"/>
        <CustomInput className="w-60 h-12" type="password" showPasswordToggle placeholder="CONFIRM PASSWORD"/>
      </div>

      <h1 className="text-gold font-bold my-8">BUTTONS</h1>

      <div className="flex flex-col items-center gap-4">
        <CustomButton className="w-36 rounded-full">Enquire Now</CustomButton>
        <CustomButton className="w-60" showArrow>Sign in</CustomButton>
        <CustomButton className="w-60" showArrow>Create Account</CustomButton>
        <CustomButton className="w-60" showArrow>Send Reset Link</CustomButton>
        <CustomButton className="w-60 justify-start rounded-full pl-6" animateArrow length={36} showArrow>Join the Community</CustomButton>
        <CustomButton className="w-60 bg-white hover:bg-white/90"leadingIcon={<Image src="/google.png" alt="Google" width={16} height={16} draggable={false}/>}>Continue with Google</CustomButton>
      </div>
      
      <h1 className="text-gold font-bold my-8">SEARCH BAR</h1>

      <div className="w-[36rem]">
        <SearchBar placeholder="What are you looking for?" />
      </div>

      <h1 className="text-gold font-bold my-8">REVIEW CARDS</h1>

      <div className="flex row gap-6">
        <ReviewCard className="w-[24rem]"
        stars={5} 
        reviewText="“The chocolates are very sweet,soft and have that hint of dark chocolate...they are absolutely amazing...its a must try!!”"
        reviewerName="Amrutha"
        />
        <ReviewCard className="w-[24rem]"
        stars={5} 
        reviewText="“Melts in mouth !!!! Just tried the chocolate with nuts - lovedddddd it. Gotta try the plain chocolate!”"
        reviewerName="SUDHASMITA SAHOO"
        />
      </div>

      <h1 className="text-gold font-bold my-8">IMAGE SLDESHOW</h1>
      <ImageSlideshow images={["/choco1.png", "/choco2.png", "/choco3.png", "/choco4.png"]}></ImageSlideshow>
      
      <h1 className="text-gold font-bold my-8">FLAVOUR CARDS</h1>
      <FlavourCard src="/almonds.png"
        alt="Roasted Almond" 
        size={142}
        title={<>Roasted<br/>Almond</>}
        className="mb-8"
        >
      </FlavourCard>

      <h1 className="text-gold font-bold mt-16">SECTION DIVIDERS</h1>
      <div className="w-full">
        <CustomSectionDivider topTitle="CAPTURED" bottomTitle="MOMENTS." offset={120}/>
        <CustomSectionDivider topTitle="SWEET" bottomTitle="COMMENDATIONS."  offset={120}/>
      </div>
      
      <h1 className="text-gold font-bold my-8">CATEGORY CARD</h1>
      <div className="w-80 mb-8">
        {categoryImage && (
          <CategoryCard 
            title="Luxury" 
            subtitle="Chocolate" 
            imageSrc={categoryImage.imageUrl}
          />
        )}
      </div>
      </>
    </main>
  );
}
