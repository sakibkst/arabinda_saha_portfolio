"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import type { ConferenceEvent } from "@/types";

export function ConferencesExplorer({ items }: { items: ConferenceEvent[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="events"
      searchPlaceholder="Search conference titles, hosts, or roles…"
      getSearchText={(c) => `${c.title} ${c.topic ?? ""} ${c.host} ${c.role}`}
      filters={[
        { key: "scope", label: "Scope", getValue: (c) => c.scope },
        { key: "role", label: "Role", getValue: (c) => c.role },
      ]}
      renderItem={(c) => (
        <Card key={c.id} className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={c.scope === "International" ? "gold" : c.scope === "Webinar" ? "outline" : "navy"}>
              {c.scope}
            </Badge>
            <Badge variant="outline">{c.date}</Badge>
          </div>
          <h3 className="mt-3 text-base font-semibold leading-snug text-navy">{c.title}</h3>
          {c.topic && <p className="mt-2 text-sm text-foreground-muted">{c.topic}</p>}
          <p className="mt-2 text-sm text-foreground-muted">{c.host}</p>
          {c.location && <p className="mt-1 text-sm text-foreground-muted">{c.location}</p>}
          <p className="mt-2 text-sm font-medium text-gold">{c.role}</p>
        </Card>
      )}
    />
  );
}
