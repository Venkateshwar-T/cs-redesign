import type {Metadata} from 'next';
import './globals.css';
import { Poppins, Fredoka, Lora } from "next/font/google";
import { Footer } from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'CS Redesign',
  description: 'A minimalist display page showing "Hello" and "Choco Smiley".',
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fredoka",
});

export default function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable} ${fredoka.variable}`}>
      <head>
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header/>
        <main className='flex-1 pb-16 pt-24 md:pt-28'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
