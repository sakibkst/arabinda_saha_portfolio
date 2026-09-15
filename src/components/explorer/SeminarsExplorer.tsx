"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import type { SeminarPaper } from "@/types";

export function SeminarsExplorer({ items }: { items: SeminarPaper[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="papers"
      searchPlaceholder="Search paper titles, events, or locations…"
      getSearchText={(s) => `${s.title} ${s.event ?? ""} ${s.organizer ?? ""} ${s.location ?? ""}`}
      filters={[{ key: "scope", label: "Scope", getValue: (s) => s.scope }]}
      renderItem={(s) => (
        <Card key={s.id} className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={s.scope === "International" ? "gold" : "navy"}>{s.scope}</Badge>
            {s.date && <Badge variant="outline">{s.date}</Badge>}
          </div>
          <h3 className="mt-3 text-base font-semibold leading-snug text-navy">{s.title}</h3>
          {s.event && <p className="mt-2 text-sm font-medium text-foreground-muted">{s.event}</p>}
          {s.organizer && <p className="mt-1 text-sm text-foreground-muted">{s.organizer}</p>}
          {s.location && <p className="mt-1 text-sm text-foreground-muted">{s.location}</p>}
          {s.role && <p className="mt-2 text-sm font-medium text-gold">{s.role}</p>}
          {s.coAuthors && s.coAuthors.length > 0 && (
            <p className="mt-2 text-xs text-foreground-muted">Co-author(s): {s.coAuthors.join("; ")}</p>
          )}
          {s.note && <p className="mt-2 text-xs italic text-foreground-muted">{s.note}</p>}
        </Card>
      )}
    />
  );
}
