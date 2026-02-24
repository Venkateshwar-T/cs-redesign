import { CustomButton } from "@/components/custom-button";
import { CustomInput } from "@/components/custom-input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      
      <div className="flex flex-col gap-4 mt-8">
        <CustomInput className="w-60" placeholder="Email"/>
        <CustomButton className="w-60" showArrow>Sign in</CustomButton>
        <CustomButton className="w-60 bg-white hover:bg-white/90"leadingIcon={<img src="/google.svg" className="h-4 w-4" />}>Continue with Google</CustomButton>
      </div>
    </main>
  );
}
