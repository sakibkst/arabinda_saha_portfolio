"use client";

import { RecordExplorer } from "@/components/explorer/RecordExplorer";
import { SupervisionCard } from "@/components/academic/SupervisionCard";
import type { SupervisionRecord } from "@/types";

export function SupervisionExplorer({ items }: { items: SupervisionRecord[] }) {
  return (
    <RecordExplorer
      items={items}
      resultNoun="theses"
      searchPlaceholder="Search thesis titles or researchers…"
      getSearchText={(s) => `${s.title} ${s.researcher} ${s.session ?? ""}`}
      filters={[{ key: "status", label: "Status", getValue: (s) => s.status }]}
      renderItem={(s) => <SupervisionCard key={s.id} record={s} />}
    />
  );
}
