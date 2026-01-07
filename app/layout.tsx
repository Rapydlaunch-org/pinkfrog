import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PINK FROG - MOTION PICTURES | Voices of the North East",
  description: "Premium film production house showcasing the untold stories of North East India's tribes.",
};

import NavigationMenu from "@/components/NavigationMenu";
import BackgroundElements from '@/components/BackgroundElements';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&family=Chewy&family=Slackey&family=Fredoka:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,500;1,500&family=Outfit:wght@100..900&family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Stack+Sans+Text:wght@200..700&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-[#ffffff] text-white"
      >
        <BackgroundElements />
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
