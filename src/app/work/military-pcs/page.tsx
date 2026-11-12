import type { Metadata } from "next";
import MilitaryPCSClient from "./MilitaryPCSClient";

export const metadata: Metadata = {
  title: "MilitaryPCS — Relocation Command Center Case Study",
  description:
    "A military-first relocation platform bringing housing discovery, financial planning, base exploration, and verified local professionals into one unified experience.",
  alternates: {
    canonical: "/work/military-pcs",
  },
  openGraph: {
    title: "MilitaryPCS — Relocation Command Center Case Study | Pavel Dinesh",
    description:
      "A military-first relocation platform bringing housing discovery, financial planning, base exploration, and verified local professionals into one unified experience.",
    url: "/work/military-pcs",
    images: [
      {
        url: "/images/projects/military-pcs/main-screen.webp",
        width: 1800,
        height: 1350,
        alt: "MilitaryPCS command center interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MilitaryPCS — Relocation Command Center Case Study",
    description:
      "A military-first relocation platform bringing housing discovery, financial planning, and base exploration together.",
    images: ["/images/projects/military-pcs/main-screen.webp"],
  },
};

export default function MilitaryPCSPage() {
  return <MilitaryPCSClient />;
}

