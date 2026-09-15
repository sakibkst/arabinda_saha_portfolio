import { Container } from "@/components/ui/Container";
import { publications } from "@/data/publications";
import { supervisionSummary } from "@/data/supervision";
import { books } from "@/data/books";
import { conferences } from "@/data/conferences";
import { externalExaminations } from "@/data/examinations";

const stats = [
  {
    label: "Years in Academia",
    value: "30+",
    detail: "1993 – Present, Lecturer through Professor",
  },
  {
    label: "Publications Recorded",
    value: String(publications.length),
    detail: "Published, accepted & submitted articles",
  },
  {
    label: "M.Phil. Supervised",
    value: `${supervisionSummary.mphilAwarded} awarded`,
    detail: `${supervisionSummary.mphilOngoing} ongoing / submitted`,
  },
  {
    label: "Ph.D. Supervised",
    value: `${supervisionSummary.phdAwarded} awarded`,
    detail: `${supervisionSummary.phdOngoing} ongoing / submitted`,
  },
  {
    label: "External Examinations",
    value: `${externalExaminations.length}+`,
    detail: "Foreign & internal Ph.D./M.Phil. thesis evaluations",
  },
  {
    label: "Conferences & Webinars",
    value: `${conferences.length}+`,
    detail: "Keynotes, resource-person & guest-of-honour roles",
  },
  {
    label: "Books & Chapters",
    value: String(books.length),
    detail: "Including a Springer-published chapter",
  },
];

export function QuickStats() {
  return (
    <section className="border-b border-border bg-surface-muted/60">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
          {stats.map((s) => (
            <div key={s.label} className="text-left">
              <p className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-foreground-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
