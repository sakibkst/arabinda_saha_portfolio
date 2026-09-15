import type { CareerPosition, CourseArea } from "@/types";

// Source: Annexure No. 03 (Teaching Experience) and Annexure No. 04 (Summary).
// NOTE (verification flag): Annexure 03 states the Professor appointment service period
// as "23.09.2008 to onward", while the Annexure 04 summary table states "04.08.2008 to
// Going on" for the same position. Both figures are preserved from the source rather than
// silently reconciled — see `note` below.
export const careerPositions: CareerPosition[] = [
  {
    id: "professor",
    title: "Professor",
    department: "Department of Accounting & Information Systems",
    institution: "Islamic University",
    location: "Kushtia, Khulna",
    country: "Bangladesh",
    from: "2008",
    to: "Present",
    areas: ["BBA", "MBA", "M.Phil.", "Ph.D.", "EMBA", "Open University"],
    note:
      "Service period recorded as 23.09.2008 in Annexure 03 (Teaching Experience) and as 04.08.2008 in Annexure 04 (Summary) of the source CV — both dates preserved for verification.",
  },
  {
    id: "associate-professor",
    title: "Associate Professor",
    department: "Department of Accounting & Information Systems",
    institution: "Islamic University",
    location: "Kushtia, Khulna",
    country: "Bangladesh",
    from: "04.08.2004",
    to: "22.09.2008",
    areas: ["BBA", "MBA", "M.Phil. Course Work"],
  },
  {
    id: "assistant-professor",
    title: "Assistant Professor",
    department: "Department of Accounting & Information Systems",
    institution: "Islamic University",
    location: "Kushtia, Khulna",
    country: "Bangladesh",
    from: "03.09.1999",
    to: "03.08.2004",
    areas: ["BBA", "MBA", "M.Phil. Course Work"],
  },
  {
    id: "lecturer-iu",
    title: "Lecturer",
    department: "Department of Accounting",
    institution: "Islamic University",
    location: "Kushtia, Khulna",
    country: "Bangladesh",
    from: "03.09.1998",
    to: "02.09.1999",
    areas: ["BBA", "MBA", "M.Phil. Course Work"],
    note: "Counted service period: 2 Years, 6 Months & 25 Days.",
  },
  {
    id: "lecturer-chilmari",
    title: "Lecturer",
    department: "Department of Accounting",
    institution: "Chilmari Degree College",
    location: "Chilmari, Kurigram, Rajshahi",
    country: "Bangladesh",
    from: "13.05.1993",
    to: "02.09.1998",
    areas: ["Intermediate level", "B.Com", "BBS"],
    note: "Servicing years: Five Years Plus.",
  },
  {
    id: "visiting-professor",
    title: "Visiting Professor (Course Teacher)",
    department: "Dept. of Finance & Banking, Dept. of Human Resource Management",
    institution: "Islamic University",
    location: "Kushtia",
    country: "Bangladesh",
    from: "2008",
    to: "Present",
    areas: ["Course teaching across affiliated departments"],
  },
];

// Subjects/areas taught, compiled from Annexure 03 & 04 "Main Course of Study" columns
// across each career level.
export const teachingAreasByLevel: CourseArea[] = [
  {
    level: "Lecturer — Chilmari Degree College",
    subjects: ["Accounting", "Management", "Finance", "Banking"],
  },
  {
    level: "Lecturer — Islamic University",
    subjects: [
      "Accounting",
      "Costing",
      "Management",
      "MIS",
      "Accounting Information Systems",
      "Business Law",
      "Banking",
    ],
  },
  {
    level: "Assistant Professor",
    subjects: [
      "Accounting",
      "Marketing",
      "Costing",
      "Auditing",
      "Business Communication",
      "Business Ethics",
    ],
  },
  {
    level: "Associate Professor",
    subjects: [
      "Computer",
      "Micro & Macro Economics",
      "Business Ethics",
      "Business English",
      "Legal Environment of Business",
      "Financial Management",
    ],
  },
  {
    level: "Professor",
    subjects: [
      "Strategic Management",
      "Managerial Finance",
      "Portfolio Management",
      "Business Communication",
      "Business Ethics",
      "Corporate Finance",
      "Financial Management",
      "Human Resource Management",
      "Micro & Macro Economics",
    ],
  },
  {
    level: "M.Com. Coursework (as student)",
    subjects: [
      "Accounting Theory I & II",
      "Advanced Costing",
      "Management Accounting",
      "MIS",
      "Public & Social Accounting",
      "Advanced Financial Management",
      "Business Policy",
      "Research Methodology",
    ],
  },
];

export const allTeachingLevels = [
  "BBA",
  "MBA",
  "M.Phil.",
  "Ph.D.",
  "EMBA",
  "Open University",
] as const;
