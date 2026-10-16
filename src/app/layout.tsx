import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} — ${portfolioData.profile.role}`,
  description: portfolioData.profile.tagline,
  keywords: [
    "Pavel Dinesh",
    "UI/UX Designer",
    "Frontend UI Developer",
    "Design Systems",
    "Portfolio",
    "Product Designer",
  ],
  authors: [{ name: portfolioData.profile.name }],
  creator: portfolioData.profile.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#0B0B0A] text-[#F5F4F1] antialiased selection:bg-[#F5F4F1] selection:text-[#0B0B0A] min-h-screen relative font-body"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <div className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
