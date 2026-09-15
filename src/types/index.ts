// ---------------------------------------------------------------------------
// Core academic-record types for the professor portfolio.
// Every field is sourced from the professor's official CV/resume PDF.
// Optional fields reflect information that was not stated in the source.
// ---------------------------------------------------------------------------

export interface Education {
  id: string;
  degree: string;
  year?: string;
  institution: string;
  university?: string;
  country?: string;
  result?: string;
  percentage?: string;
  subject?: string;
  researchWork?: string;
  details?: string;
  note?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  institution: string;
  location?: string;
  country?: string;
  from: string;
  to: string;
  areas?: string[];
  note?: string;
}

export interface CourseArea {
  level: string;
  subjects: string[];
}

export type ProjectStatus = "Completed" | "Approved" | "Ongoing" | "Awarded";

export interface ResearchProject {
  id: string;
  serial: string;
  title: string;
  role: string;
  year: string;
  institution: string;
  awardingBody?: string;
  status: string;
  description?: string;
}

export type SupervisionDegree = "M.Phil" | "Ph.D";
export type SupervisionStatus = "Awarded" | "Ongoing" | "Submitted" | "Thesis Submitted";

export interface SupervisionRecord {
  id: string;
  serial: string;
  degree: SupervisionDegree;
  title: string;
  researcher: string;
  researcherDesignation?: string;
  institution?: string;
  department?: string;
  session?: string;
  registrationNo?: string;
  date?: string;
  status: SupervisionStatus | string;
  note?: string;
}

export interface ExaminerRecord {
  id: string;
  serial: string;
  degreeType: "Ph.D" | "M.Phil";
  researcher: string;
  researcherDetails?: string;
  thesisTitle: string;
  supervisor?: string;
  supervisorInstitution?: string;
  university: string;
  refNo?: string;
  date?: string;
  reportDate?: string;
  country?: string;
  note?: string;
}

export type PublicationLevel =
  | "Lecturer"
  | "Assistant Professor"
  | "Associate Professor"
  | "Associate Professor (International)"
  | "Professor";

export type PublicationStatus = "Published" | "Accepted" | "Submitted";

export interface Publication {
  id: string;
  serial?: string;
  title: string;
  journal?: string;
  publisher?: string;
  volume?: string;
  pages?: string;
  year: string;
  level: PublicationLevel;
  status: PublicationStatus;
  international?: boolean;
  note?: string;
}

export interface Book {
  id: string;
  title: string;
  role: "Author" | "Co-Author";
  subtitle?: string;
  audience?: string;
  publisher?: string;
  publisherAddress?: string;
  editor?: string;
  isbn?: string[];
  chapter?: string;
  chapterPages?: string;
  year: string;
  status: "Published" | "Final Stage / To be Published";
  level?: string;
}

export type SeminarScope = "National" | "International";

export interface SeminarPaper {
  id: string;
  title: string;
  scope: SeminarScope;
  event?: string;
  organizer?: string;
  location?: string;
  date?: string;
  role?: string;
  coAuthors?: string[];
  note?: string;
}

export interface ConferenceEvent {
  id: string;
  title: string;
  topic?: string;
  host: string;
  location?: string;
  date: string;
  role: string;
  scope: SeminarScope | "Webinar";
}

export interface EditorialRole {
  id: string;
  journal: string;
  role: string;
  institution: string;
  volume?: string;
  period: string;
  status?: string;
}

export interface CommitteeRole {
  id: string;
  organization: string;
  role: string;
  category:
    | "Member"
    | "Convener / Co-convener"
    | "Coordinator / Co-coordinator"
    | "External Member"
    | "Examiner";
  years: string;
  note?: string;
}

export interface ExaminerBoard {
  id: string;
  institution: string;
  levels: string[];
  years: string;
}

export interface StudyTour {
  id: string;
  title: string;
  institution: string;
  years: string;
  note?: string;
}

export interface Reference {
  id: string;
  name: string;
  designation: string[];
  institution: string;
  phone?: string;
  mobile?: string;
}

export interface DocumentArchiveItem {
  id: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  href?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: "education" | "career" | "milestone" | "service";
}

/** A generic searchable record used to power the global search index. */
export interface SearchRecord {
  id: string;
  type:
    | "Publication"
    | "Project"
    | "Supervision"
    | "Seminar"
    | "Conference"
    | "Book"
    | "Education"
    | "Career"
    | "Committee"
    | "Examination"
    | "Page";
  title: string;
  description?: string;
  href: string;
  tags?: string[];
}
