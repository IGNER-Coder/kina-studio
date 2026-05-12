import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const DOMAIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kina-studio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
