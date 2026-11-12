import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollReset from "@/components/ScrollReset";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paveldinesh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioData.profile.name} — ${portfolioData.profile.role}`,
    template: `%s | ${portfolioData.profile.name}`,
  },
  description: portfolioData.profile.tagline,
  keywords: [
    "Pavel Dinesh",
    "UI/UX Designer",
    "Frontend UI Developer",
    "Design Systems",
    "Portfolio",
    "Product Designer",
    "Next.js Developer",
    "Interaction Design",
  ],
  authors: [{ name: portfolioData.profile.name, url: siteUrl }],
  creator: portfolioData.profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${portfolioData.profile.name} — ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
    siteName: `${portfolioData.profile.name} Portfolio`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.profile.name} — ${portfolioData.profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.profile.name} — ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
    images: ["/images/og-image.jpg"],
    creator: "@paveldinesh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-5 focus:py-2.5 focus:bg-[#F14417] focus:text-white focus:rounded-full focus:font-mono focus:text-sm focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white transition-all"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <ScrollReset />
          <ScrollProgress />
          <CustomCursor />
          <div id="main-content" className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
