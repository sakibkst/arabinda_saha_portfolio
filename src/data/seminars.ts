import type { SeminarPaper } from "@/types";

// Source: Annexure No. 20 (National Seminar Papers) and Annexure No. 21 / 34
// (International Seminar Papers).
export const seminarPapers: SeminarPaper[] = [
  // ---- National Seminar Papers ----
  {
    id: "seminar-n1",
    scope: "National",
    title: "Present Scenario of Banking Sector in Bangladesh",
    date: "2007",
    role: "Presenter",
    note: "Presented as Associate Professor, Dept. of Accounting & Information Systems, Islamic University.",
  },
  {
    id: "seminar-n2",
    scope: "National",
    title: "Performance Indicators of Banking Sector in Bangladesh: A Comparative Overview of NCBs, PCBs, SCBs & FCBs",
    event: "Two Day Seminar",
    organizer: "Department of Commerce, Bharatidasan University",
    location: "Tiruchirappalli, Tamil Nadu, India",
    date: "7–8 April 2007",
    role: "Presidential Address",
  },
  {
    id: "seminar-n3",
    scope: "National",
    title: "Present Scenario of Capital Market in Bangladesh: An Evaluation",
    event: "Two Day Seminar",
    organizer: "Department of Commerce & Financial Studies, Bharatidasan University",
    location: "Tiruchirappalli, Tamil Nadu, India",
    date: "19–20 January 2008",
    role: "Presenter",
  },
  {
    id: "seminar-n4",
    scope: "National",
    title: "Strategies for Refinancing of SMEs in Bangladesh: Problems & Constraints",
    date: "June 2007",
    role: "Presenter",
    note: 'Based on "Policy Strategies for Development of Small & Medium Enterprises (SMEs) 2005", SME Cell, Ministry of Industries, Government of the People\'s Republic of Bangladesh.',
  },

  // ---- International Seminar / Conference Papers ----
  {
    id: "seminar-i1",
    scope: "International",
    title: "Performance Indicators of Banking Sector in Bangladesh: A Comparative Overview of NCBs, PCBs, SCBs & FCBs",
    event: 'Two Day International Seminar — "Emerging Paradigm in Financial Services"',
    organizer: "Department of Commerce & Business Studies, Bharatidasan University",
    location: "Tiruchirappalli, Tamil Nadu, India",
    date: "7–8 April 2007",
    role: "Presenter",
  },
  {
    id: "seminar-i2",
    scope: "International",
    title: "IAS 38 – Accounting for Intangible Assets: Treatments & Disclosures of Commercial Banks in Bangladesh",
    event: "XXXII All India Accounting Conference & International Seminar on Accounting Education and Research",
    organizer: "Institute of Commerce and Management, Jiwaji University, Gwalior & Indian Accounting Association (Gwalior Branch)",
    location: "Gwalior, India",
    date: "14–15 November 2009",
    role: "Presenter",
  },
  {
    id: "seminar-i3",
    scope: "International",
    title: "Banking Scenario of Bangladesh During 1993–2004",
    event: "International Symposium 2006",
    organizer: "Sabaragamuwa University of Sri Lanka",
    location: "Belihuloya, Sri Lanka",
    date: "29 March 2006",
    role: "Presenter",
  },
  {
    id: "seminar-i4",
    scope: "International",
    title: "Micro-Credit Management of NGOs in Bangladesh: A Statistical Measurement",
    event: "Two Days ICSSR Sponsored International Seminar",
    organizer: "Department of Commerce, Udai Pratap Autonomous College",
    location: "Varanasi, India",
    date: "22–23 February 2010",
    role: "Presenter",
  },
  {
    id: "seminar-i5",
    scope: "International",
    title: "Financing Strategies of SMEs in Bangladesh",
    event: '"International Finance Conference 2014" — Current Issues in Finance in Developing Nations',
    organizer: "Department of Business Management, University of Calcutta & Indian Accounting Association, Kolkata Branch",
    location: "Kolkata, India",
    date: "December 2013 / 2014",
    role: "Presenter (as Chairman, Dept. of AIS, IU)",
  },
  {
    id: "seminar-i6",
    scope: "International",
    title: "Foreign Direct Investment in Global Perspectives",
    event: "International Conference on Marketing Paradigms in Emerging Economies (ICOM '12)",
    organizer: "Faculty of Management Studies (FMS), Banaras Hindu University",
    location: "Varanasi, Uttar Pradesh, India",
    date: "4–5 December 2012",
    role: "Presenter (as Chairman, Dept. of AIS, IU)",
  },
  {
    id: "seminar-i7",
    scope: "International",
    title: "Criticism of Financing Strategies of SMEs in Bangladesh",
    event: "Sydney International Business Research Conference 2015",
    organizer: "University of Western Sydney, Campbelltown",
    location: "Sydney, Australia",
    date: "17–19 April 2015",
    role: "Presenter (as Chairman, Dept. of AIS, IU)",
  },
  {
    id: "seminar-i8",
    scope: "International",
    title: "Foreign Direct Investment in Global Perspectives: Lessons for Developing Economies",
    event: "Twenty Second International Conference",
    organizer: "Hilton New Orleans Riverside, Louisiana",
    location: "New Orleans, Louisiana, USA",
    date: "11–14 November 2010",
    role: "Presenter",
    coAuthors: ["Amitav Saha, Lecturer, Department of Management, University of Rajshahi, Bangladesh"],
  },
];

// Source: Annexure No. 22 / 26 — National & International Seminars Coordinated.
export const seminarsCoordinated = [
  {
    id: "coord-1",
    title: "International Seminar 2007",
    organizer: "Department of Accounting & Information Systems, Islamic University, Kushtia",
    role: "Coordinator (as Associate Professor)",
    date: "December 2007",
  },
  {
    id: "coord-2",
    title: "International Seminar 2014",
    organizer: "Department of Accounting & Information Systems, Islamic University, Kushtia",
    role: "Coordinator (as Professor & Chairman)",
    date: "22–23 December 2014",
  },
];

// Source: Annexure No. 23 — List of Study Tours Coordinated.
export const studyTours = [
  {
    id: "tour-1",
    title: "Study Tours — BBA (Hons.) & MBA Students",
    institution: "Department of Accounting & Information Systems, Islamic University, Kushtia",
    years: "Several times across multiple academic years",
  },
];

// Source: Annexure No. 37 — Institutions/organizations visited on study tours.
export const studyTourDestinations = [
  "Various Banks, Government Organizations, NGOs & Insurance Companies in Kushtia",
  "BRB Cables Industries, Kushtia",
  "BATCL, Kushtia",
  "R&W Company, Kushtia",
  "GK, Kushtia",
  "Sugar Mills, Kushtia",
  "Paper Mills, Pakshi, Kushtia",
  "Bulbul Textiles, Kushtia",
  "Textiles Mills Ltd., Kushtia",
  "Mobarakgonj Sugar Mills, Jhenidah",
  "Jessore Jute Mills, Jessore",
  "TATA Company, Cement Factories, Cream Factories",
  "Rajshahi Jute Mills, Textiles Mills, Sericulture, DCT Co-office of Rajshahi",
  "Rajshahi University, Dhaka University",
  "Dhaka Stock Exchange, Chittagong Stock Exchange",
  "Beximco Pharmaceuticals, Square Pharmaceuticals, Gazipur",
  "Bangladesh Shilpa Rin Sangstha (BSRS), Dhaka",
  "Bangladesh Chemical Industries Corporation (BCIC), Dhaka",
  "Walton",
  "Bangladesh Bank",
  "Life Insurance Corporation (LIC)",
  "BRAC, TMSS",
  "Bangladesh Academy for Rural Development (BARD), Bogra & Cumilla",
  "TDH, Rangpur",
  "Carew & Company, Renwick & Joggeswar Company",
  "…and others",
];
