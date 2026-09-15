"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import type { Publication } from "@/types";

const statusVariant = {
  Published: "gold",
  Accepted: "navy",
  Submitted: "outline",
} as const;

export function PublicationsExplorer({ items }: { items: Publication[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="publications"
      searchPlaceholder="Search publication titles or journals…"
      getSearchText={(p) => `${p.title} ${p.journal ?? ""} ${p.year}`}
      filters={[
        { key: "level", label: "Academic Level", getValue: (p) => p.level },
        { key: "status", label: "Status", getValue: (p) => p.status },
      ]}
      renderItem={(p) => (
        <Card key={p.id} className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            {p.serial && <Badge variant="outline">#{p.serial}</Badge>}
            <Badge variant={statusVariant[p.status]}>{p.status}</Badge>
            <Badge>{p.level}</Badge>
            {p.international && <Badge variant="gold">International</Badge>}
          </div>
          <h3 className="mt-3 text-base font-semibold leading-snug text-navy">{p.title}</h3>
          {p.journal && <p className="mt-2 text-sm text-foreground-muted">{p.journal}</p>}
          <p className="mt-1 text-sm text-foreground-muted">
            {[p.volume, p.pages, p.year].filter(Boolean).join(" · ")}
          </p>
          {p.note && <p className="mt-2 text-xs italic text-foreground-muted">{p.note}</p>}
        </Card>
      )}
    />
  );
}
