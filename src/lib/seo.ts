import type { Metadata } from "next";
import { professor } from "@/data/professor";

export const siteConfig = {
  name: professor.name,
  url: "https://arabindasaha-portfolio.example.edu",
  description: professor.tagline,
};

export function buildMetadata(opts: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = `${opts.title} | ${professor.shortName}`;
  const description = opts.description ?? siteConfig.description;
  const url = `${siteConfig.url}${opts.path ?? ""}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: professor.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: professor.name,
    jobTitle: professor.status,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: professor.university,
      department: professor.department,
    },
    affiliation: professor.faculty,
    email: professor.presentAddress.emails[0],
    url: siteConfig.url,
    alumniOf: ["Kalyani University", "Rajshahi University"],
  };
}
