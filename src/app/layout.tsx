import type {Metadata} from 'next';
import './globals.css';
import { Poppins, Fredoka, Lora } from "next/font/google";
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

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
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable} ${fredoka.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Inter&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        <div className='flex-grow pt-0'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
