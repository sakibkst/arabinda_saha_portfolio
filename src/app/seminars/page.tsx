import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SeminarsExplorer } from "@/components/explorer/SeminarsExplorer";
import { seminarPapers, seminarsCoordinated, studyTours, studyTourDestinations } from "@/data/seminars";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Seminars & Papers",
  description: "National and international seminar papers presented.",
  path: "/seminars",
});

export default function SeminarsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexures 20, 21 & 34"
        title="Seminar Papers Presented"
        description="National and international seminar papers presented across universities and research institutes in Bangladesh, India, Sri Lanka, and the United States."
      />

      <Container className="py-16">
        <SeminarsExplorer items={seminarPapers} />

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-navy">Seminars Coordinated</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {seminarsCoordinated.map((s) => (
              <Card key={s.id} className="p-5">
                <p className="text-sm font-semibold text-navy">{s.title}</p>
                <p className="mt-1 text-sm text-foreground-muted">{s.organizer}</p>
                <p className="mt-1 text-sm text-foreground-muted">{s.role}</p>
                <p className="mt-1 text-xs font-medium text-gold">{s.date}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-navy">Study Tours Coordinated</h2>
          <Card className="mt-6 p-6">
            {studyTours.map((t) => (
              <div key={t.id}>
                <p className="text-sm font-semibold text-navy">{t.title}</p>
                <p className="mt-1 text-sm text-foreground-muted">{t.institution}</p>
                <p className="mt-1 text-xs font-medium text-gold">{t.years}</p>
              </div>
            ))}
            <p className="mt-4 text-sm font-medium text-navy">Institutions & organizations visited:</p>
            <ul className="mt-2 grid list-disc gap-1.5 pl-5 text-sm text-foreground-muted sm:grid-cols-2">
              {studyTourDestinations.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Card>
        </section>
      </Container>
    </>
  );
}
