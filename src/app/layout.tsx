import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioDisk from "./AudioDisk";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake - Licensed Clinical Psychologist",
  description: "Professional therapy services in a safe, supportive environment. Specializing in anxiety, depression, trauma, and relationship counseling.",
  keywords: "therapy, psychologist, counseling, anxiety, depression, trauma, relationships",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
    href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&display=swap"
    rel="stylesheet"
  />
  
      </head>
      <body className={`${inter.variable} antialiased`}>
        
        <AudioDisk />
        {children}
      </body>
    </html>
  );
}
