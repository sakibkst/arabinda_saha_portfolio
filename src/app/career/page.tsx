import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { careerPositions, teachingAreasByLevel, allTeachingLevels } from "@/data/career";
import { departmentalPortfolio } from "@/data/academicService";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Academic Career",
  description: "Teaching experience timeline from Lecturer to Professor, with subjects taught at every level.",
  path: "/career",
});

export default function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 03–04"
        title="Academic Career & Teaching Experience"
        description="A complete record of every academic appointment, from Lecturer at Chilmari Degree College (1993) to Professor at Islamic University, Kushtia."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerPositions.map((c) => (
            <Card key={c.id} className="flex flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-navy">{c.title}</h3>
              </div>
              <p className="mt-1 text-sm font-medium text-gold">
                {c.from} – {c.to}
              </p>
              <p className="mt-3 text-sm text-foreground-muted">{c.department}</p>
              <p className="text-sm text-foreground-muted">
                {c.institution}
                {c.location ? `, ${c.location}` : ""}
              </p>
              {c.areas && c.areas.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.areas.map((a) => (
                    <Badge key={a}>{a}</Badge>
                  ))}
                </div>
              )}
              {c.note && (
                <p className="mt-4 rounded-md bg-surface-muted p-3 text-xs leading-relaxed text-foreground-muted">
                  {c.note}
                </p>
              )}
            </Card>
          ))}
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Departmental Leadership"
            title="Chairmanship & Ph.D. Seminar Oversight"
          />
          <Card className="mt-6 p-6">
            <p className="text-sm font-semibold text-navy">
              {departmentalPortfolio.role}, {departmentalPortfolio.department}
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              {departmentalPortfolio.faculty}, {departmentalPortfolio.institution}
            </p>
            <p className="mt-1 text-sm font-medium text-gold">{departmentalPortfolio.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {departmentalPortfolio.note}
            </p>
          </Card>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Curriculum" title="Teaching Levels" />
          <div className="mt-5 flex flex-wrap gap-2">
            {allTeachingLevels.map((l) => (
              <Badge key={l} variant="navy" className="px-3 py-1.5">
                {l}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading eyebrow="By Academic Level" title="Teaching Areas & Subjects" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {teachingAreasByLevel.map((t) => (
              <Card key={t.level} className="p-6">
                <h3 className="text-sm font-semibold text-navy">{t.level}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.subjects.map((s) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
