import type {Metadata} from 'next';
import './globals.css';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'CS Redesign',
  description: 'A minimalist display page showing "Hello" and "Choco Smiley".',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Inter&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
        <div className='flex-grow'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
