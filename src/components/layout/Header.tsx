"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Download, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { navItems, flatNavLinks } from "./navConfig";
import { professor } from "@/data/professor";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-gold-soft">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-navy">{professor.shortName}</span>
            <span className="text-[11px] text-foreground-muted">Islamic University, Kushtia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground-muted transition hover:bg-surface-muted hover:text-navy"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-0 top-full z-20 w-64 translate-y-1 rounded-lg border border-border bg-surface p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-surface-muted hover:text-navy"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground-muted transition hover:bg-surface-muted hover:text-navy"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <GlobalSearch />
          <Link
            href="/documents/professor-cv.pdf"
            className="flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-deep"
          >
            <Download className="h-4 w-4" />
            CV
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <div className="mb-2">
              <GlobalSearch />
            </div>
            {flatNavLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/documents/professor-cv.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Download Full CV
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
