import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExaminationsExplorer } from "@/components/explorer/ExaminationsExplorer";
import { externalExaminations, examinerBoards } from "@/data/examinations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "External Examinations",
  description: "Foreign and internal Ph.D./M.Phil. thesis evaluation records.",
  path: "/examinations",
});

export default function ExaminationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexures 10 & 36"
        title="External Examiner & Thesis Evaluation"
        description="Ph.D. and M.Phil. thesis evaluations conducted as an external examiner, principally for Indian universities (Bharathiar, Bharathidasan, Alagappa, Annamalai, Periyar, Kalyani, Vidyasagar), alongside internal M.Phil. evaluations at Islamic University."
      />

      <Container className="py-16">
        <ExaminationsExplorer items={externalExaminations} />

        <section className="mt-16">
          <h2 className="text-lg font-semibold text-navy">External Examiner Board Memberships</h2>
          <p className="mt-1 text-sm text-foreground-muted">
            Standing external-examiner appointments at partner universities and boards.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {examinerBoards.map((b) => (
              <Card key={b.id} className="p-5">
                <p className="text-sm font-semibold text-navy">{b.institution}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {b.levels.map((l) => (
                    <Badge key={l} variant="outline">
                      {l}
                    </Badge>
                  ))}
                </div>
                <p className="mt-2 text-xs font-medium text-gold">{b.years}</p>
              </Card>
            ))}
          </div>
        </section>

        <p className="mt-10 rounded-md border border-dashed border-border-strong bg-surface-muted/60 p-5 text-sm text-foreground-muted">
          The complete correspondence for each evaluation above — appointment/acceptance letters, detailed
          evaluation reports, and honorarium claim forms — is reproduced verbatim in the source CV, available
          via the <a href="/documents/professor-cv.pdf" className="font-medium text-gold hover:underline">full downloadable CV</a>.
        </p>
      </Container>
    </>
  );
}
