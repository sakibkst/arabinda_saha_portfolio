"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { search } from "@/lib/search";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the academic archive"
        className="flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-2 text-sm text-foreground-muted transition hover:border-gold/50 hover:text-navy"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search archive…</span>
        <kbd className="hidden rounded border border-border-strong bg-surface-muted px-1.5 py-0.5 text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-navy-deep/60 p-4 pt-[10vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 text-foreground-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publications, supervision, seminars, projects…"
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-foreground-muted"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="rounded p-1 text-foreground-muted hover:bg-surface-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-6 text-center text-sm text-foreground-muted">
                  Try “banking”, “NGO”, “M.Phil”, or “Bharathidasan”.
                </p>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-foreground-muted">
                  No matching records found.
                </p>
              )}
              {results.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 transition hover:bg-surface-muted"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-surface-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                      {r.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-navy">{r.title}</p>
                  {r.description && (
                    <p className="mt-0.5 line-clamp-1 text-xs text-foreground-muted">
                      {r.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
