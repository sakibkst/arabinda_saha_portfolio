import type { EditorialRole, CommitteeRole } from "@/types";

// Source: Annexure No. 09/10/28/49 — Editorial Board Memberships.
export const editorialRoles: EditorialRole[] = [
  {
    id: "editorial-1",
    journal: "The Islamic University Studies — Journal of the Faculty of Business Administration (JFBA), Part C",
    role: "Editor (In Charge)",
    institution: "Islamic University, Kushtia",
    volume: "Vol. 6, No. 1 & 2",
    period: "July 2007 – June 2008",
    status: "Completed",
  },
  {
    id: "editorial-2",
    journal: "The Islamic University Studies — Journal of the Faculty of Business Administration (JFBA), Part C",
    role: "Editor",
    institution: "Islamic University, Kushtia",
    volume: "Vol. 14, No. 1 & 2",
    period: "July 2018 – 2019",
    status: "Completed",
  },
];

// Source: Annexure No. 24/45 — Portfolio (Chairman) and Annexure No. 25 — Ph.D. Seminars Conducted.
export const departmentalPortfolio = {
  role: "Chairman",
  department: "Department of Accounting & Information Systems",
  faculty: "Faculty of Business Administration",
  institution: "Islamic University, Kushtia",
  period: "15.02.2012 – 14.02.2015 (Three Years)",
  note:
    "During this term, numerous Ph.D. (First & Second) seminars were conducted in the department across different research fields, under the chairmanship of Professor Dr. Arabinda Saha.",
};

// Source: Annexures 29–33 — Co-coordinator, Members, Convener/Co-convener, and Committees.
export const committeeRoles: CommitteeRole[] = [
  {
    id: "committee-1",
    organization: "Islamic University, Kushtia",
    role: "Member, Academic Committee, Department of Accounting & Information Systems",
    category: "Member",
    years: "Ongoing",
  },
  {
    id: "committee-2",
    organization: "Islamic University, Kushtia",
    role: "Academic Councilor",
    category: "Member",
    years: "Ongoing",
  },
  {
    id: "committee-3",
    organization: "Islamic University, Kushtia",
    role: "Member, Board of Advanced Studies",
    category: "Member",
    years: "Ongoing",
  },
  {
    id: "committee-4",
    organization: "Islamic University, Kushtia",
    role: "Vice-President, Banga Bandhu Parishad",
    category: "Member",
    years: "Ongoing",
  },
  {
    id: "committee-5",
    organization: "Islamic University, Kushtia",
    role: "Member, Progatishil Teachers' Forum (Shapla Forum)",
    category: "Member",
    years: "Ongoing",
  },
  {
    id: "committee-6",
    organization: "Islamic University, Kushtia",
    role: "Former Member, Academic Council of Madrasha Board, Islamic University",
    category: "Member",
    years: "2013",
  },
  {
    id: "committee-7",
    organization: "Bangladesh Accounting Association, Dhaka",
    role: "Initiator & Co-convener",
    category: "Convener / Co-convener",
    years: "2012",
    note: "Recorded in the source CV as \"But Failed.\"",
  },
  {
    id: "committee-8",
    organization: "Bangladesh Accounting Association, Dhaka",
    role: "Organizing Secretary, Central Committee",
    category: "Convener / Co-convener",
    years: "2020 – Ongoing",
  },
  {
    id: "committee-9",
    organization: "Bangladesh Accounting Association, Dhaka",
    role: "Chairperson, Membership Development Committee",
    category: "Convener / Co-convener",
    years: "2020 – Ongoing",
  },
  {
    id: "committee-10",
    organization: "Islamic University, Kushtia",
    role: "Co-coordinator, Internship Program (MBA 2006), Department of Accounting & Information Systems",
    category: "Coordinator / Co-coordinator",
    years: "2008",
  },
  {
    id: "committee-11",
    organization:
      "Department of Accounting & Information Systems (Jagannath University, Rajshahi University); Department of Accounting (Chittagong University); Department of Accounting & Information Systems (Jatio Kabi Kazi Nazrul Islam University, Jessore Science & Technology & National University)",
    role: "External Member / Board Member",
    category: "External Member",
    years: "Various years, ongoing",
  },
  {
    id: "committee-12",
    organization: "Investigation Board of Madrashas under Islamic University, Kushtia (Bagerhat, Kotalipara, Pangsha-Rajbari, Faridpur, Kashiani-Faridpur, Serajganj, Nilphamary, Cox's Bazar)",
    role: "Convener",
    category: "Convener / Co-convener",
    years: "2008–2015",
  },
];
