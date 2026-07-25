import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://levelquest.app"; // TODO: replace with your real domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}