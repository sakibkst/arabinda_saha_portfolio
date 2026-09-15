import type { ResearchProject } from "@/types";

// Source: Annexure No. 07 — List of Projects.
// NOTE: The source document numbers both the 4th and 5th project below as "No. 4" —
// preserved as-is and flagged rather than silently renumbered.
export const projects: ResearchProject[] = [
  {
    id: "project-1",
    serial: "No. 1",
    title:
      "Management Information System of Private & Public Sector Commercial Banks in Bangladesh",
    role: "Project Director (as Assistant Professor)",
    year: "May 2001",
    institution: "Faculty of Business Administration, Islamic University, Kushtia",
    awardingBody: "Islamic University",
    status: "Completed",
    description: "Report accepted & completed by the Faculty of Business Administration, Islamic University, Kushtia, Bangladesh.",
  },
  {
    id: "project-2",
    serial: "No. 2",
    title: "The Role of NGOs for the Economic Development of Bangladesh",
    role: "Project Director (as Associate Professor)",
    year: "January 2007",
    institution: "Faculty of Business Administration, Islamic University, Kushtia",
    awardingBody: "Islamic University",
    status: "Completed",
    description: "Report submitted, accepted & completed by the Faculty of Business Administration, Islamic University, Kushtia, Bangladesh.",
  },
  {
    id: "project-3",
    serial: "No. 3",
    title: "Socio-economic Impact of Foreign Direct Investment (FDI) in Bangladesh: Problems & Prospects",
    role: "Project Director (as Professor)",
    year: "March 2008",
    institution: "Bangladesh University Grants Commission (BUGC), Sher-e-Bangla Nagar, Dhaka-1207",
    awardingBody: "Bangladesh University Grants Commission (BUGC)",
    status: "Completed, Awarded",
  },
  {
    id: "project-4",
    serial: "No. 4",
    title:
      "Need for Application of International Accounting Standards for Developing Accounting & Information Systems of Public & Private Universities in Bangladesh: A Comparative Study",
    role: "Project Director (as Professor)",
    year: "April 2009",
    institution:
      "Department of Accounting & Information Systems, Faculty of Business Administration, Islamic University, Kushtia",
    awardingBody: "Islamic University",
    status: "Completed",
  },
  {
    id: "project-5",
    serial: "No. 4 (as listed in source)",
    title:
      "Financing Strategies for SMEs: A Comparative Study on State Owned Commercial Banks & Private Commercial Banks in Bangladesh",
    role: "Project Director (as Professor)",
    year: "April 2013",
    institution:
      "Department of Accounting & Information Systems, Faculty of Business Administration, Islamic University, Kushtia",
    awardingBody: "Islamic University",
    status: "Completed",
    description:
      "Numbered 'No. 4' in the source CV, duplicating the serial of the preceding project — preserved as-is for verification.",
  },
];
