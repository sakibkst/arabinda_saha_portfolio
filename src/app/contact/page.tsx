import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { LeafletMap } from "@/components/ui/LeafletMap";
import { professor } from "@/data/professor";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Official contact information for Professor Dr. Arabinda Saha.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="Official academic contact details, Department of Accounting & Information Systems, Islamic University, Kushtia."
      />

      <Container className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-[1fr_1fr]">
        <Card className="p-8">
          <h2 className="text-lg font-semibold text-navy">{professor.name}</h2>
          <p className="mt-1 text-sm text-foreground-muted">
            {professor.status} · {professor.department}
          </p>
          <p className="text-sm text-foreground-muted">
            {professor.faculty}, {professor.university}, {professor.universityLocation}
          </p>

          <div className="mt-8 space-y-5">
            <a
              href={`mailto:${professor.presentAddress.emails[0]}`}
              className="flex items-center gap-3 rounded-md border border-border p-4 text-sm transition hover:border-gold/50 hover:bg-surface-muted"
            >
              <Mail className="h-5 w-5 text-navy" />
              <div>
                <p className="font-medium text-navy">Email</p>
                <p className="text-foreground-muted">{professor.presentAddress.emails.join(" · ")}</p>
              </div>
            </a>
            <a
              href={`tel:${professor.presentAddress.mobiles[0].replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-3 rounded-md border border-border p-4 text-sm transition hover:border-gold/50 hover:bg-surface-muted"
            >
              <Phone className="h-5 w-5 text-navy" />
              <div>
                <p className="font-medium text-navy">Phone / Mobile</p>
                <p className="text-foreground-muted">{professor.presentAddress.mobiles.join(" · ")}</p>
                <p className="text-foreground-muted">Office: {professor.presentAddress.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-md border border-border p-4 text-sm">
              <Globe className="h-5 w-5 text-navy" />
              <div>
                <p className="font-medium text-navy">Website</p>
                <p className="text-foreground-muted">{professor.presentAddress.website}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border border-border p-4 text-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
              <div>
                <p className="font-medium text-navy">Address</p>
                <p className="text-foreground-muted">{professor.presentAddress.lines.join(", ")}</p>
              </div>
            </div>
          </div>

          <a
            href="/documents/professor-cv.pdf"
            className="mt-8 flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-navy-deep"
          >
            <Download className="h-4 w-4" />
            Download Full Academic CV
          </a>
        </Card>

        <Card className="overflow-hidden p-0">
          <LeafletMap
            lat={professor.campusCoordinates.lat}
            lng={professor.campusCoordinates.lng}
            label={`${professor.university}, ${professor.universityLocation}`}
            className="h-full min-h-[320px] w-full"
          />
        </Card>
      </Container>
    </>
  );
}
