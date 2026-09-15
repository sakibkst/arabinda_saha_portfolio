import type { DocumentArchiveItem } from "@/types";

// The professor's complete academic record — including full correspondence for each
// thesis evaluation, appointment letters, and detailed evaluation reports — is preserved
// verbatim in the source CV document, available in full via the Download CV action.
// This archive indexes the major categories for quick reference.
export const documentArchive: DocumentArchiveItem[] = [
  {
    id: "doc-cv",
    title: "Complete Academic CV / Résumé",
    category: "CV / Academic Profile",
    year: "2025",
    description:
      "The full 188-page academic résumé of Professor Dr. Arabinda Saha, covering personal information, education, career, research, publications, supervision, and academic service.",
    href: "/documents/professor-cv.pdf",
  },
  {
    id: "doc-mphil-supervision",
    title: "M.Phil. Supervision Records",
    category: "Supervision",
    description: "Complete list of Master of Philosophy theses supervised, with award/registration details.",
    href: "/supervision/mphil",
  },
  {
    id: "doc-phd-supervision",
    title: "Ph.D. Supervision Records",
    category: "Supervision",
    description: "Complete list of Doctor of Philosophy theses supervised, with award/registration details.",
    href: "/supervision/phd",
  },
  {
    id: "doc-examiner",
    title: "External Examiner & Thesis Evaluation Reports",
    category: "Examinations",
    description:
      "Foreign Ph.D./M.Phil. external examination records across Bharathiar, Bharathidasan, Alagappa, Annamalai, Periyar, Kalyani, and Vidyasagar Universities. Full acceptance letters, detailed evaluation reports, and honorarium claim forms for each entry are reproduced in the source CV PDF.",
    href: "/examinations",
  },
  {
    id: "doc-publications",
    title: "Publications & Research Works",
    category: "Publications",
    description: "Full bibliographic record across Lecturer, Assistant Professor, Associate Professor (national & international), Accepted, and Submitted categories.",
    href: "/publications",
  },
  {
    id: "doc-books",
    title: "Books & Book Chapters",
    category: "Publications",
    description: "Authored and co-authored textbooks and the Springer-published book chapter.",
    href: "/books",
  },
  {
    id: "doc-seminars",
    title: "Seminar & Conference Papers",
    category: "Seminars",
    description: "National and international seminar papers, keynote addresses, and webinar participation records (2006–2023).",
    href: "/seminars",
  },
  {
    id: "doc-service",
    title: "Academic Service & Committee Records",
    category: "Academic Service",
    description: "Editorial board memberships, departmental chairmanship, committee roles, and external examiner board memberships.",
    href: "/academic-service",
  },
];
