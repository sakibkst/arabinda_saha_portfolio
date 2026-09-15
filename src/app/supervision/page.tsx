import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { mphilSupervision, phdSupervision, supervisionSummary } from "@/data/supervision";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Research Supervision",
  description: "M.Phil. and Ph.D. supervision records.",
  path: "/supervision",
});

export default function SupervisionIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexures 08–09"
        title="Research Supervision"
        description="Master of Philosophy (M.Phil.) and Doctor of Philosophy (Ph.D.) candidates supervised across the professor's academic career."
      />

      <Container className="grid gap-6 py-16 sm:grid-cols-2">
        <Link href="/supervision/mphil" className="group">
          <Card className="flex h-full flex-col p-8 transition group-hover:border-gold/50 group-hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/5 text-navy">
              <Users className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-navy">M.Phil. Supervision</h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {mphilSupervision.length} recorded theses · {supervisionSummary.mphilAwarded} awarded,{" "}
              {supervisionSummary.mphilOngoing} ongoing / submitted.
            </p>
            <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gold">
              View full list <ArrowRight className="h-4 w-4" />
            </span>
          </Card>
        </Link>

        <Link href="/supervision/phd" className="group">
          <Card className="flex h-full flex-col p-8 transition group-hover:border-gold/50 group-hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/5 text-navy">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-navy">Ph.D. Supervision</h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {phdSupervision.length} recorded theses · {supervisionSummary.phdAwarded} awarded,{" "}
              {supervisionSummary.phdOngoing} ongoing / submitted.
            </p>
            <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gold">
              View full list <ArrowRight className="h-4 w-4" />
            </span>
          </Card>
        </Link>
      </Container>
    </>
  );
}
