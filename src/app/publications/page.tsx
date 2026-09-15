import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PublicationsExplorer } from "@/components/explorer/PublicationsExplorer";
import { publications, newspaperFeatures } from "@/data/publications";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Publications & Research Works",
  description: "Complete bibliographic record of published, accepted, and submitted articles (1998–2023).",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexures 13–18"
        title="Publications & Research Works"
        description={`${publications.length} articles recorded across Lecturer, Assistant Professor, Associate Professor (national & international), Accepted, and Submitted categories.`}
      />

      <Container className="py-16">
        <PublicationsExplorer items={publications} />

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-navy">Newspaper Features</h2>
          <p className="mt-1 text-sm text-foreground-muted">Annexure No. 19 — Submitted Features for Daily Newspaper.</p>
          <div className="mt-5 grid gap-4">
            {newspaperFeatures.map((f) => (
              <Card key={f.id} className="p-6">
                <h3 className="text-base font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{f.outlet}</p>
                <p className="mt-1 text-sm text-foreground-muted">
                  {f.date} · {f.levelAtTime}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
