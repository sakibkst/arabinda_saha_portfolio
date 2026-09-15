import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { editorialRoles, committeeRoles, departmentalPortfolio } from "@/data/academicService";
import { buildMetadata } from "@/lib/seo";
import type { CommitteeRole } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Academic Service",
  description: "Editorial board memberships, departmental leadership, and institutional committee roles.",
  path: "/academic-service",
});

function groupByCategory(roles: CommitteeRole[]) {
  const groups = new Map<string, CommitteeRole[]>();
  for (const r of roles) {
    const list = groups.get(r.category) ?? [];
    list.push(r);
    groups.set(r.category, list);
  }
  return groups;
}

export default function AcademicServicePage() {
  const grouped = groupByCategory(committeeRoles);

  return (
    <>
      <PageHeader
        eyebrow="Annexures 09–11, 24–33"
        title="Academic Service"
        description="Editorial responsibilities, departmental leadership, committee memberships, and institutional roles held throughout the professor's career."
      />

      <Container className="py-16 space-y-16">
        <section>
          <SectionHeading eyebrow="Leadership" title="Departmental Chairmanship" />
          <Card className="mt-6 p-6">
            <p className="text-base font-semibold text-navy">
              {departmentalPortfolio.role} — {departmentalPortfolio.department}
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              {departmentalPortfolio.faculty}, {departmentalPortfolio.institution}
            </p>
            <p className="mt-2 text-sm font-medium text-gold">{departmentalPortfolio.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{departmentalPortfolio.note}</p>
          </Card>
        </section>

        <section>
          <SectionHeading eyebrow="Publication Governance" title="Editorial Board Memberships" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {editorialRoles.map((e) => (
              <Card key={e.id} className="p-6">
                <Badge variant="gold">{e.status ?? e.period}</Badge>
                <h3 className="mt-3 text-base font-semibold text-navy">{e.journal}</h3>
                <p className="mt-2 text-sm font-medium text-foreground-muted">{e.role}</p>
                <p className="mt-1 text-sm text-foreground-muted">{e.institution}</p>
                {e.volume && <p className="mt-1 text-sm text-foreground-muted">{e.volume}</p>}
                <p className="mt-2 text-xs font-medium text-gold">{e.period}</p>
              </Card>
            ))}
          </div>
        </section>

        {Array.from(grouped.entries()).map(([category, roles]) => (
          <section key={category}>
            <SectionHeading eyebrow="Institutional Roles" title={category} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {roles.map((r) => (
                <Card key={r.id} className="p-5">
                  <p className="text-sm font-semibold text-navy">{r.role}</p>
                  <p className="mt-1 text-sm text-foreground-muted">{r.organization}</p>
                  <p className="mt-2 text-xs font-medium text-gold">{r.years}</p>
                  {r.note && <p className="mt-1 text-xs italic text-foreground-muted">{r.note}</p>}
                </Card>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
