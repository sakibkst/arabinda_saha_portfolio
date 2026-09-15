"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
        className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border-strong/70 bg-gradient-to-b from-surface to-surface-muted/60 px-3 py-2 text-sm text-foreground-muted shadow-sm transition-all hover:border-gold/60 hover:shadow-md hover:shadow-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
      >
        <Search className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:scale-110" />
        <span className="hidden text-foreground-muted transition-colors group-hover:text-navy sm:inline">
          Search archive…
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-navy-deep/70 p-4 pt-[10vh] backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl ring-1 ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1 bg-gradient-to-r from-gold via-gold-soft to-gold" />
              <div className="flex items-center gap-3 border-b border-border px-4 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Search className="h-4 w-4 text-gold" />
                </span>
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
                  className="rounded-full p-1.5 text-foreground-muted transition hover:bg-surface-muted hover:text-navy"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {query.trim() === "" && (
                  <p className="px-3 py-6 text-center text-sm text-foreground-muted">
                    Try "banking", "NGO", "M.Phil", or "Bharathidasan".
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
                    className="block rounded-xl px-3 py-2.5 transition hover:bg-surface-muted"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
