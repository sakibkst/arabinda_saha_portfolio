// Source: Annexure No. 01 (Personal Information), cover page, and Annexure 38 (contact letterhead).
// Sensitive identifiers (national ID / smart card number, blood group, private family
// specifics) are intentionally kept out of the public-facing site — see `restrictedDetails`
// below, which exists for data-completeness/audit purposes only and is never rendered.

export const professor = {
  name: "Professor Dr. Arabinda Saha",
  shortName: "Dr. Arabinda Saha",
  status: "Professor",
  department: "Department of Accounting & Information Systems",
  faculty: "Faculty of Business Administration",
  university: "Islamic University",
  universityLocation: "Kushtia-7003, Bangladesh",
  qualificationsShort: "B.Com (Hons.), M.Com, Ph.D (Kalyani University, India)",
  tagline:
    "Professor of Accounting & Information Systems specializing in banking performance, financial management, and the socio-economic role of NGOs and SMEs in Bangladesh.",

  presentAddress: {
    lines: [
      "Radha Krishna Bhavan",
      "35/5 UNC Road, Amlapara",
      "Post Off. Kushtia, Dist.: Kushtia, Bangladesh",
    ],
    phone: "0088-071-74910-21, PABX-2217 (Off.), 2514 (Personal Chamber)",
    website: "www.aisiu.info",
    emails: ["dr.arabinda.iu@gmail.com", "dr.asaha@ais.iu.ac.bd"],
    mobiles: ["+88-01711-575073", "+88-01916-507015", "+88-01876771000"],
  },

  // Islamic University campus, Kushtia — used for the contact page map marker.
  campusCoordinates: { lat: 23.7229, lng: 89.1493 },

  permanentAddress: {
    village: "Amlapara, Kushtia",
    postOffice: "Kushtia",
    policeStation: "Kushtia",
    district: "Kushtia",
    division: "Khulna",
    country: "Bangladesh",
  },

  // Public-appropriate personal facts only.
  personal: {
    fatherName: "Late Dr. Nil Madhab Saha",
    motherName: "Gouri Bala Saha",
    placeOfBirth: "Tangail, Bangladesh",
    nationality: "Bangladeshi (By Birth)",
    religion: "Sonatan Dharma",
    maritalStatus: "Married",
    dateOfBirth: "01.05.1962",
    universityRegistrationNo: "868",
  },

  family: {
    spouse: "Alpana Rani Saha (B.Sc., M.A.)",
    children: [
      "Ananya Saha (Daughter) — B.Tech, MBA, Uttar Pradesh, India",
      "Anindya Saha (Son) — Student of BBA, Dept. of Finance & Banking, Islamic University, Kushtia",
    ],
  },

  researchInterests: [
    "Banking",
    "Accounting",
    "Costing",
    "Financing",
    "Management",
    "Marketing",
    "NGOs",
    "MNCs",
    "Insurance",
    "Economics",
    "Companies & Industrial Sectors",
  ],

  interests: [
    "Research activities & academic issues",
    "Enjoying religious festivals",
    "Computer, Internet, Movies, Novels and Poems",
    "Travel",
    "Cricket",
    "Company of good friends and dynamic team members",
  ],

  computerSkills: [
    "Windows (various versions)",
    "Microsoft Office Package",
    "Excel (Xls)",
    "SPSS",
    "Business Forecasting",
    "Facebook, WhatsApp, Zoom, Webinar, Google Meet",
    "Keen user of Internet through different softwares",
  ],

  // Kept for data-completeness/audit only — never rendered on the public site.
  restrictedDetails: {
    smartCardNo: "REDACTED — present in source, withheld from public site",
    bloodGroup: "REDACTED — present in source, withheld from public site",
  },
} as const;

export const quickFacts = {
  yearsOfTeaching: "1993 – Present (30+ years, spanning Lecturer through Professor)",
  currentRoleSince: "2008 (Professor, Dept. of Accounting & Information Systems)",
  mphilAwarded: 12,
  phdAwarded: 5,
  mphilOngoing: 3,
  phdOngoing: 5,
  totalPublicationsRecorded: 37, // "Number of Total Printed & Accepted Articles" per Annexure 17/18
} as const;
