import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VAIDIK | Full Stack Brutalist",
  description: "Professional Full Stack Developer specializing in high-performance NeoBrutalist web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#FFFDF5] text-[#121212] font-display selection:bg-[#121212] selection:text-[#FBFF48]`}
      >
        {children}
      </body>
    </html>
  );
}
