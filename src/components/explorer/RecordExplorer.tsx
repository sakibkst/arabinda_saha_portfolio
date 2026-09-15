"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExplorerFilter<T> {
  key: string;
  label: string;
  getValue: (item: T) => string;
  options?: string[];
}

export function RecordExplorer<T>({
  items,
  getSearchText,
  filters = [],
  renderItem,
  pageSize = 10,
  emptyMessage = "No records match your search.",
  searchPlaceholder = "Search records…",
  resultNoun = "records",
}: {
  items: T[];
  getSearchText: (item: T) => string;
  filters?: ExplorerFilter<T>[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
  emptyMessage?: string;
  searchPlaceholder?: string;
  resultNoun?: string;
}) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterOptions = useMemo(() => {
    return filters.map((f) => ({
      ...f,
      options: f.options ?? Array.from(new Set(items.map((i) => f.getValue(i)))).filter(Boolean).sort(),
    }));
  }, [filters, items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (q && !getSearchText(item).toLowerCase().includes(q)) return false;
      for (const f of filterOptions) {
        const selected = activeFilters[f.key];
        if (selected && selected !== "All" && f.getValue(item) !== selected) return false;
      }
      return true;
    });
  }, [items, query, activeFilters, filterOptions, getSearchText]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const activeFilterCount = Object.values(activeFilters).filter((v) => v && v !== "All").length;

  function updateFilter(key: string, value: string) {
    setPage(1);
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
  }

  function clearFilters() {
    setActiveFilters({});
    setQuery("");
    setPage(1);
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={searchPlaceholder}
            className="w-full rounded-md border border-border-strong bg-surface py-2.5 pl-10 pr-3 text-sm text-foreground outline-none ring-gold/40 transition focus:ring-2"
            aria-label={searchPlaceholder}
          />
        </div>
        {filterOptions.length > 0 && (
          <button
            type="button"
            onClick={() => setFiltersOpen((o) => !o)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-navy transition hover:bg-surface-muted",
              filtersOpen && "bg-surface-muted"
            )}
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 rounded-full bg-gold px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        )}
      </div>

      {filtersOpen && filterOptions.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-3 rounded-md border border-border bg-surface-muted/60 p-4">
          {filterOptions.map((f) => (
            <label key={f.key} className="flex items-center gap-2 text-sm">
              <span className="text-foreground-muted">{f.label}:</span>
              <select
                value={activeFilters[f.key] ?? "All"}
                onChange={(e) => updateFilter(f.key, e.target.value)}
                className="rounded-md border border-border-strong bg-surface px-2 py-1.5 text-sm text-navy outline-none focus:ring-2 focus:ring-gold/40"
              >
                <option value="All">All</option>
                {f.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          ))}
          {(activeFilterCount > 0 || query) && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto flex items-center gap-1 text-sm font-medium text-gold hover:underline"
            >
              <X className="h-3.5 w-3.5" /> Clear all
            </button>
          )}
        </div>
      )}

      <p className="mt-4 text-sm text-foreground-muted">
        Showing <span className="font-medium text-navy">{filtered.length}</span> of{" "}
        <span className="font-medium text-navy">{items.length}</span> {resultNoun}
      </p>

      <div className="mt-4 flex flex-col gap-4">
        {pageItems.length === 0 && (
          <div className="rounded-lg border border-dashed border-border-strong p-10 text-center text-sm text-foreground-muted">
            {emptyMessage}
          </div>
        )}
        {pageItems.map((item, i) => renderItem(item, (currentPage - 1) * pageSize + i))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 rounded-md border border-border-strong px-3 py-2 text-sm font-medium text-navy transition hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          <span className="px-3 text-sm text-foreground-muted">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 rounded-md border border-border-strong px-3 py-2 text-sm font-medium text-navy transition hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
