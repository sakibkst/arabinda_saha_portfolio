import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { professor } from "@/data/professor";

export function ResearchFocus() {
  return (
    <section className="border-y border-border bg-surface-muted/60 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Areas of Specialization"
            title="Research Interests"
            description="As documented across the professor's teaching record, funded projects, and publication history."
          />
          <div className="flex flex-wrap content-start gap-2.5">
            {professor.researchInterests.map((r) => (
              <Badge key={r} variant="navy" className="px-3.5 py-2 text-xs">
                {r}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
