import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/education";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Education",
  description: "Complete educational qualifications, from S.S.C. through Ph.D.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 02"
        title="Educational Qualifications"
        description="Every academic qualification recorded in the professor's official CV, presented in reverse-chronological order (most advanced degree first)."
      />

      <Container className="py-16">
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
          {education.map((e) => (
            <li key={e.id} className="relative">
              <span className="absolute -left-[31px] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-navy text-gold-soft sm:-left-[47px]">
                <GraduationCap className="h-4 w-4" />
              </span>
              <Card className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-navy">{e.degree}</h2>
                  {e.year && <Badge variant="gold">{e.year}</Badge>}
                  {e.result && <Badge>{e.result}</Badge>}
                  {e.percentage && <Badge variant="outline">{e.percentage}</Badge>}
                </div>
                <p className="mt-2 text-sm font-medium text-foreground-muted">
                  {e.institution}
                  {e.university && e.university !== e.institution ? `, ${e.university}` : ""}
                  {e.country ? `, ${e.country}` : ""}
                </p>
                {e.researchWork && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    <span className="font-medium text-navy">Research work: </span>
                    &ldquo;{e.researchWork}&rdquo;
                  </p>
                )}
                {e.subject && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{e.subject}</p>
                )}
                {e.details && (
                  <p className="mt-2 text-xs text-foreground-muted">{e.details}</p>
                )}
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
