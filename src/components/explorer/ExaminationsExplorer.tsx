"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import type { ExaminerRecord } from "@/types";

export function ExaminationsExplorer({ items }: { items: ExaminerRecord[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="evaluations"
      searchPlaceholder="Search thesis titles, researchers, or universities…"
      getSearchText={(e) => `${e.thesisTitle} ${e.researcher} ${e.university} ${e.supervisor ?? ""}`}
      filters={[
        { key: "university", label: "University", getValue: (e) => e.university },
        { key: "degreeType", label: "Degree", getValue: (e) => e.degreeType },
      ]}
      renderItem={(e) => (
        <Card key={e.id} className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">#{e.serial}</Badge>
            <Badge variant="gold">{e.degreeType}</Badge>
            <Badge>{e.university}</Badge>
          </div>
          <h3 className="mt-3 text-base font-semibold leading-snug text-navy">{e.thesisTitle}</h3>
          <p className="mt-2 text-sm font-medium text-foreground-muted">
            Researcher: {e.researcher}
            {e.researcherDetails ? ` — ${e.researcherDetails}` : ""}
          </p>
          {e.supervisor && (
            <p className="mt-1 text-sm text-foreground-muted">
              Supervisor: {e.supervisor}
              {e.supervisorInstitution ? `, ${e.supervisorInstitution}` : ""}
            </p>
          )}
          <p className="mt-2 text-xs text-foreground-muted">
            {[e.refNo, e.date, e.reportDate ? `Report: ${e.reportDate}` : undefined]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {e.note && <p className="mt-2 text-xs italic text-foreground-muted">{e.note}</p>}
        </Card>
      )}
    />
  );
}
