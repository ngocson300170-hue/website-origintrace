import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about-us",
  "/products",
  "/chemops",
  "/industries",
  "/government",
  "/contact",
  "/terms",
  "/privacy-policy",
  "/delete-account",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://origintrace.vn${route}`,
    lastModified: new Date("2026-09-17"),
  }));
}
