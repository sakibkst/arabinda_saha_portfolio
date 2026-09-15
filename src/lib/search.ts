import type { SearchRecord } from "@/types";
import { education } from "@/data/education";
import { careerPositions } from "@/data/career";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { books } from "@/data/books";
import { mphilSupervision, phdSupervision } from "@/data/supervision";
import { seminarPapers } from "@/data/seminars";
import { conferences } from "@/data/conferences";
import { externalExaminations } from "@/data/examinations";
import { committeeRoles, editorialRoles } from "@/data/academicService";

function buildIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];

  education.forEach((e) =>
    records.push({
      id: `edu-${e.id}`,
      type: "Education",
      title: `${e.degree} — ${e.institution}`,
      description: e.researchWork ?? e.subject,
      href: "/education",
      tags: [e.degree, e.university ?? "", e.year ?? ""],
    })
  );

  careerPositions.forEach((c) =>
    records.push({
      id: `career-${c.id}`,
      type: "Career",
      title: `${c.title} — ${c.institution}`,
      description: `${c.from} – ${c.to}`,
      href: "/career",
      tags: [c.title, c.institution, ...(c.areas ?? [])],
    })
  );

  projects.forEach((p) =>
    records.push({
      id: `project-${p.id}`,
      type: "Project",
      title: p.title,
      description: `${p.role} · ${p.year}`,
      href: "/research",
      tags: [p.status, p.year],
    })
  );

  publications.forEach((p) =>
    records.push({
      id: `pub-${p.id}`,
      type: "Publication",
      title: p.title,
      description: `${p.journal ?? ""} (${p.year})`,
      href: "/publications",
      tags: [p.level, p.status, p.year],
    })
  );

  books.forEach((b) =>
    records.push({
      id: `book-${b.id}`,
      type: "Book",
      title: b.title,
      description: b.subtitle ?? b.publisher,
      href: "/books",
      tags: [b.role, b.year],
    })
  );

  [...mphilSupervision, ...phdSupervision].forEach((s) =>
    records.push({
      id: `sup-${s.id}`,
      type: "Supervision",
      title: s.title,
      description: `${s.degree} · ${s.researcher} (${s.status})`,
      href: s.degree === "M.Phil" ? "/supervision/mphil" : "/supervision/phd",
      tags: [s.degree, s.status, s.researcher],
    })
  );

  seminarPapers.forEach((s) =>
    records.push({
      id: `seminar-${s.id}`,
      type: "Seminar",
      title: s.title,
      description: `${s.scope} · ${s.event ?? ""} ${s.date ?? ""}`,
      href: "/seminars",
      tags: [s.scope, s.date ?? ""],
    })
  );

  conferences.forEach((c) =>
    records.push({
      id: `conf-${c.id}`,
      type: "Conference",
      title: c.title,
      description: `${c.host} · ${c.date}`,
      href: "/conferences",
      tags: [c.scope, c.role],
    })
  );

  externalExaminations.forEach((e) =>
    records.push({
      id: `exam-${e.id}`,
      type: "Examination",
      title: e.thesisTitle,
      description: `${e.researcher} · ${e.university}`,
      href: "/examinations",
      tags: [e.degreeType, e.university],
    })
  );

  [...committeeRoles, ...editorialRoles.map((e) => ({ id: e.id, organization: e.institution, role: e.role, category: "Member" as const, years: e.period }))].forEach(
    (c) =>
      records.push({
        id: `committee-${c.id}`,
        type: "Committee",
        title: c.role,
        description: c.organization,
        href: "/academic-service",
        tags: [c.category, c.years],
      })
  );

  return records;
}

export const searchIndex: SearchRecord[] = buildIndex();

export function search(query: string, limit = 20): SearchRecord[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .filter((r) => {
      const haystack = `${r.title} ${r.description ?? ""} ${(r.tags ?? []).join(" ")}`.toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, limit);
}
