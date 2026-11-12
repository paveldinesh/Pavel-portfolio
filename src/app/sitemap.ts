import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paveldinesh.com";

  const routes = [
    "",
    "/work/descartes",
    "/work/tiny-bits-of-love",
    "/work/mazeflower",
    "/work/military-pcs",
    "/work/ucollabit",
    "/work/webhosters",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

