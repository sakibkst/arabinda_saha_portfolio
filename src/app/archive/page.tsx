import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowUpRight, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { documentArchive } from "@/data/documentArchive";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Document Archive",
  description: "Index of supporting academic documents and where to find them.",
  path: "/archive",
});

export default function ArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Complete Records"
        title="Document Archive"
        description="An index to the professor's supporting academic documents. The full, unabridged CV — including detailed correspondence for every thesis evaluation — is available as a single download below."
      >
        <Link
          href="/public/documents/professor-cv.pdf"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
        >
          <Download className="h-4 w-4" />
          Download Full Academic CV (PDF)
        </Link>
      </PageHeader>

      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {documentArchive.map((d) => (
            <Card key={d.id} className="flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy">
                  <FileText className="h-5 w-5" />
                </span>
                <Badge variant="gold">{d.category}</Badge>
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{d.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                {d.description}
              </p>
              {d.href && (
                <Link
                  href={d.href}
                  className="mt-4 flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
                >
                  {d.href.endsWith(".pdf") ? "Download" : "View section"}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
