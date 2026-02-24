import type {Metadata} from 'next';
import './globals.css';

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
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Inter&family=Lora:ital@1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
