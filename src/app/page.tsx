import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <>
      <h1 className="text-[#F3CF42] font-bold my-8">INPUT FIELDS:</h1>
      <div className="flex flex-col gap-8">
        <CustomInput className="w-60 h-12" placeholder="EMAIL OR PHONE"/>
        <CustomInput className="w-60 h-12" type="password" showPasswordToggle placeholder="PASSWORD"/>
        <CustomInput className="w-60 h-12" type="password" showPasswordToggle placeholder="CONFIRM PASSWORD"/>
      </div>
      <h1 className="text-[#F3CF42] font-bold my-8">BUTTONS:</h1>
      <div className="flex flex-col gap-4">
        <CustomButton className="w-60" showArrow>Sign in</CustomButton>
        <CustomButton className="w-60" showArrow>Create Account</CustomButton>
        <CustomButton className="w-60" showArrow>Send Reset Link</CustomButton>
        <CustomButton className="w-60 justify-start rounded-full pl-6" animateArrow length={36} showArrow>Join the Community</CustomButton>
        <CustomButton className="w-60 bg-white hover:bg-white/90"leadingIcon={<img src="/google.svg" className="h-4 w-4" />}>Continue with Google</CustomButton>
      </div>
      
      <h1 className="text-[#F3CF42] font-bold my-8">SEARCH BAR:</h1>
      <div className="w-96">
        <SearchBar placeholder="What are you looking for?" />
      </div>
      </>
    </main>
  );
}
