import type { Metadata } from "next";
import WebhostersClient from "./WebhostersClient";

export const metadata: Metadata = {
  title: "Webhosters — Hosting Discovery & Reviews Case Study",
  description: "Enterprise web hosting directory, user review workflows, and comparison platform.",
  alternates: { canonical: "/work/webhosters" },
  openGraph: {
    title: "Webhosters — Hosting Discovery & Reviews Case Study | Pavel Dinesh",
    description: "Enterprise web hosting directory, user review workflows, and comparison platform.",
    url: "/work/webhosters",
    images: [{ url: "/images/projects/webhosters/main-screen.webp", width: 1800, height: 1424, alt: "Webhosters main screen" }],
  },
};

export default function WebhostersPage() {
  return <WebhostersClient />;
}

