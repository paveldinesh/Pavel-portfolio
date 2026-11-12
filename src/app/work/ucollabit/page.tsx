import type { Metadata } from "next";
import UcollabitClient from "./UcollabitClient";

export const metadata: Metadata = {
  title: "Ucollabit — Creative Collaboration Platform Case Study",
  description: "Mobile and web design ecosystem for seamless creative collaboration.",
  alternates: { canonical: "/work/ucollabit" },
  openGraph: {
    title: "Ucollabit — Creative Collaboration Platform Case Study | Pavel Dinesh",
    description: "Mobile and web design ecosystem for seamless creative collaboration.",
    url: "/work/ucollabit",
    images: [{ url: "/images/projects/ucollabit/hero.webp", width: 1134, height: 850, alt: "Ucollabit overview" }],
  },
};

export default function UcollabitPage() {
  return <UcollabitClient />;
}

