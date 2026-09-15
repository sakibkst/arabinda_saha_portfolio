import type { Education } from "@/types";

// Source: Annexure No. 02 — Educational Qualifications
export const education: Education[] = [
  {
    id: "phd",
    degree: "Ph.D.",
    year: "1998",
    institution: "Department of Commerce",
    university: "Kalyani University",
    country: "India",
    researchWork: "Profitability of the Private Commercial Banks in Bangladesh",
    details: "Awarded by the Department of Commerce, Kalyani University, INDIA.",
  },
  {
    id: "research-work-ru",
    degree: "Research Work",
    year: "1990",
    institution: "Department of Accounting",
    university: "Rajshahi University",
    country: "Bangladesh",
    researchWork: "Performance Evaluation of Jute Industry in Bangladesh",
  },
  {
    id: "mcom",
    degree: "M.Com.",
    year: "1987 (held in 1990)",
    institution: "Department of Accounting",
    university: "Rajshahi University",
    country: "Bangladesh",
    result: "Upper Second Class",
    percentage: "59.40%",
    subject:
      "Actg. Theory-I, Actg. Theory-II, Adv. Costing, Mgt. Actg., MIS, Public & Social Actg., Adv. Financial Mgt., Business Policy, Research Methodology, Thesis Paper & Viva Voce.",
  },
  {
    id: "bcom-hons",
    degree: "B.Com. (Hons.)",
    year: "1986 (held in 1989)",
    institution: "Department of Accounting",
    university: "Rajshahi University",
    country: "Bangladesh",
    result: "Upper Second Class",
    percentage: "59.20%",
    subject:
      "1st Year: Principles of Actg. I & II, Principles of Auditing, Business Law, Business Management I & II, Com. Audit, Com. Law, Viva Voce. 2nd Year: Adv. Costing II, Taxation I & II, Principles of Economics, Business Statistics I & II, Adv. Actg. II, Money & Banking, Viva Voce. 3rd Year: Adv. Accounting III, Costing III, Business Finance I & II, Business Mathematics, Business Insurance, Principles of Marketing, International Trade, Budgeting, Bangladesh Economics, Viva Voce.",
  },
  {
    id: "hsc",
    degree: "H.S.C.",
    year: "1983",
    institution: "Taluk Nagar Degree College",
    university: "Dhaka Board",
    country: "Bangladesh",
    result: "Second Division, Commerce Group",
    subject:
      "Bengali I & II, English I & II, Book Keeping & Actg. I & II, Business Method I & II, Economics & Commercial Geography I & II.",
    details: "Dist.: Manikgonj, Bangladesh",
  },
  {
    id: "ssc",
    degree: "S.S.C.",
    year: "1981",
    institution: "Taluk Nagar High School",
    university: "Dhaka Board",
    country: "Bangladesh",
    result: "Commerce Group",
    subject:
      "Bengali I & II, English I & II, General Mathematics, General Science, Economics, Book Keeping, Business Method, Commercial Geography.",
    details: "Taluk Nagar, Dist.: Manikgonj, Bangladesh",
  },
];
