import type { SupervisionRecord } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const statusVariant = {
  Awarded: "gold",
  Ongoing: "navy",
  Submitted: "outline",
  "Thesis Submitted": "outline",
} as const;

export function SupervisionCard({ record }: { record: SupervisionRecord }) {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{record.serial}</Badge>
        <Badge variant={statusVariant[record.status as keyof typeof statusVariant] ?? "default"}>
          {record.status}
        </Badge>
        {record.session && <Badge>Session {record.session}</Badge>}
        {record.registrationNo && <Badge>{record.registrationNo}</Badge>}
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-navy">{record.title}</h3>
      <p className="mt-2 text-sm font-medium text-foreground-muted">{record.researcher}</p>
      {record.researcherDesignation && (
        <p className="mt-1 text-sm text-foreground-muted">{record.researcherDesignation}</p>
      )}
      {record.department && (
        <p className="mt-1 text-sm text-foreground-muted">{record.department}</p>
      )}
      {record.date && <p className="mt-2 text-sm font-medium text-gold">{record.date}</p>}
      {record.note && (
        <p className="mt-2 text-xs italic text-foreground-muted">{record.note}</p>
      )}
    </Card>
  );
}
