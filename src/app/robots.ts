import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/how-it-works",
          "/sample-report",
          "/for-practices",
          "/modules",
          "/modules/tensiondx",
          "/modules/noshowpredictor",
          "/modules/treatmentacceptancecoach",
          "/modules/electivecaseidentifier",
          "/modules/negativereviewwarning",
          "/modules/lapsedpatientreactivation",
          "/blog",
          "/signup",
          "/login",
          "/privacy",
        ],
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
