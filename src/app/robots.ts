import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/signup", "/login", "/privacy"],
        disallow: [
          "/dashboard",
          "/patients/",
          "/reports/",
          "/intake/",
          "/outcomes/",
          "/setup-practice",
          "/api/",
        ],
      },
    ],
    sitemap: "https://dentaldiagnostix.com/sitemap.xml",
  };
}
