import type { Metadata } from "next";
import TinyBitsClient from "./TinyBitsClient";

export const metadata: Metadata = {
  title: "Tiny Bits of Love — Mobile App Case Study",
  description:
    "Mindful relationship wellness mobile app on iOS and Android turning friendships into a living tree you can nurture through micro-affirmations.",
  alternates: {
    canonical: "/work/tiny-bits-of-love",
  },
  openGraph: {
    title: "Tiny Bits of Love — Mobile App Case Study | Pavel Dinesh",
    description:
      "Mindful relationship wellness mobile app on iOS and Android turning friendships into a living tree you can nurture through micro-affirmations.",
    url: "/work/tiny-bits-of-love",
    images: [
      {
        url: "/images/projects/tiny-bits/hero-trio.webp",
        width: 1024,
        height: 576,
        alt: "Tiny Bits of Love mobile app overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Bits of Love — Mobile App Case Study",
    description:
      "Mindful relationship wellness mobile app on iOS and Android turning friendships into a living tree.",
    images: ["/images/projects/tiny-bits/hero-trio.webp"],
  },
};

export default function TinyBitsPage() {
  return <TinyBitsClient />;
}

