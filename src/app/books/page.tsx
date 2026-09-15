import type { Metadata } from "next";
import { BookMarked } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { books } from "@/data/books";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Books",
  description: "Authored and co-authored textbooks and book chapters.",
  path: "/books",
});

export default function BooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Annexure No. 12"
        title="Books"
        description="Textbooks and book chapters authored or co-authored across the professor's career."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {books.map((b) => (
            <Card key={b.id} className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy">
                  <BookMarked className="h-5 w-5" />
                </span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  <Badge variant="gold">{b.role}</Badge>
                  <Badge variant={b.status === "Published" ? "navy" : "outline"}>{b.status}</Badge>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{b.title}</h3>
              {b.subtitle && <p className="mt-1 text-sm font-medium text-foreground-muted">{b.subtitle}</p>}
              {b.audience && <p className="mt-1 text-sm text-foreground-muted">{b.audience}</p>}
              {b.publisher && (
                <p className="mt-3 text-sm text-foreground-muted">
                  Publisher: {b.publisher}
                  {b.publisherAddress ? `, ${b.publisherAddress}` : ""}
                </p>
              )}
              {b.editor && <p className="mt-1 text-sm text-foreground-muted">Editor: {b.editor}</p>}
              {b.chapter && (
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  {b.chapter}
                  {b.chapterPages ? ` (pp. ${b.chapterPages})` : ""}
                </p>
              )}
              {b.isbn && (
                <p className="mt-3 text-xs text-foreground-muted">
                  {b.isbn.map((i) => (
                    <span key={i} className="mr-3">
                      ISBN {i}
                    </span>
                  ))}
                </p>
              )}
              <p className="mt-auto pt-4 text-sm font-medium text-gold">{b.year}</p>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
