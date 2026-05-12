import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const DOMAIN = "https://www.kinastudio.co.ke";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
