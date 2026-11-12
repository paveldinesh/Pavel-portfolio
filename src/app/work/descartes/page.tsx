import type { Metadata } from "next";
import DescartesClient from "./DescartesClient";

export const metadata: Metadata = {
  title: "Descartes — Surgical AI Dashboard Case Study",
  description:
    "End-to-end surgical activity dashboard, procedural workflows, and comparative analytics platform designed for operating room consistency and clinical planning.",
  alternates: {
    canonical: "/work/descartes",
  },
  openGraph: {
    title: "Descartes — Surgical AI Dashboard Case Study | Pavel Dinesh",
    description:
      "End-to-end surgical activity dashboard, procedural workflows, and comparative analytics platform designed for operating room consistency and clinical planning.",
    url: "/work/descartes",
    images: [
      {
        url: "/images/projects/descartes/hero.webp",
        width: 1024,
        height: 766,
        alt: "Descartes Dashboard and Live Monitor preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descartes — Surgical AI Dashboard Case Study",
    description:
      "End-to-end surgical activity dashboard, procedural workflows, and comparative analytics platform.",
    images: ["/images/projects/descartes/hero.webp"],
  },
};

export default function DescartesPage() {
  return <DescartesClient />;
}

