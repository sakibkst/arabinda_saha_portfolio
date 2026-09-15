"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import type { ResearchProject } from "@/types";

export function ProjectsExplorer({ items }: { items: ResearchProject[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="projects"
      searchPlaceholder="Search project titles…"
      getSearchText={(p) => `${p.title} ${p.role} ${p.institution}`}
      filters={[{ key: "status", label: "Status", getValue: (p) => p.status }]}
      renderItem={(p) => (
        <Card key={p.id} className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold">{p.serial}</Badge>
            <Badge>{p.year}</Badge>
            <Badge variant="outline">{p.status}</Badge>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">{p.title}</h3>
          <p className="mt-2 text-sm font-medium text-foreground-muted">{p.role}</p>
          <p className="mt-1 text-sm text-foreground-muted">{p.institution}</p>
          {p.awardingBody && (
            <p className="mt-1 text-sm text-foreground-muted">Awarding body: {p.awardingBody}</p>
          )}
          {p.description && (
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{p.description}</p>
          )}
        </Card>
      )}
    />
  );
}
