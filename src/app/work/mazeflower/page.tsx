import type { Metadata } from "next";
import MazeFlowerClient from "./MazeFlowerClient";

export const metadata: Metadata = {
  title: "MazeFlower — Music Social Platform Case Study",
  description:
    "A music-centered social platform connecting fans, artists, and merchandise vendors through shared listening, personalized discovery, and song-linked commerce.",
  alternates: {
    canonical: "/work/mazeflower",
  },
  openGraph: {
    title: "MazeFlower — Music Social Platform Case Study | Pavel Dinesh",
    description:
      "A music-centered social platform connecting fans, artists, and merchandise vendors through shared listening, personalized discovery, and song-linked commerce.",
    url: "/work/mazeflower",
    images: [
      {
        url: "/images/projects/mazeflower/hero.webp",
        width: 1800,
        height: 1125,
        alt: "MazeFlower Planetary System and connected music ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MazeFlower — Music Social Platform Case Study",
    description:
      "A music-centered social platform connecting fans, artists, and merchandise vendors through shared listening.",
    images: ["/images/projects/mazeflower/hero.webp"],
  },
};

export default function MazeFlowerPage() {
  return <MazeFlowerClient />;
}

