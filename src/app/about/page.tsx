import type { Metadata } from "next";
import { Mail, Phone, Globe, MapPin, Home, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { professor } from "@/data/professor";
import { references } from "@/data/references";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: professor.tagline,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Profile"
        title={professor.name}
        description={`${professor.status} · ${professor.department}, ${professor.faculty}, ${professor.university}`}
      />

      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0 space-y-14">
          <section>
            <SectionHeading eyebrow="Overview" title="Academic Profile" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground-muted">
              <p>
                {professor.name} is {professor.status.toLowerCase()} in the {professor.department},{" "}
                {professor.faculty}, {professor.university}, {professor.universityLocation}. He holds a
                Ph.D. from the Department of Commerce, Kalyani University, India (1998), and an M.Com. and
                B.Com. (Hons.) from the Department of Accounting, Rajshahi University, Bangladesh.
              </p>
              <p>
                His academic career spans more than three decades — beginning as a Lecturer at Chilmari
                Degree College in 1993, joining Islamic University in 1998, and progressing through
                Assistant Professor, Associate Professor, and Professor, in addition to serving a
                three-year term as Chairman of the Department of Accounting & Information Systems
                (2012–2015).
              </p>
              <p>
                {professor.qualificationsShort}. University Registration No. {professor.personal.universityRegistrationNo}.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Focus Areas" title="Research Interests" />
            <div className="mt-5 flex flex-wrap gap-2.5">
              {professor.researchInterests.map((r) => (
                <Badge key={r} variant="navy" className="px-3.5 py-2 text-xs">
                  {r}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Digital Literacy" title="Computer & Digital Skills" />
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {professor.computerSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading eyebrow="Beyond Academia" title="Interests" />
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {professor.interests.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border bg-surface-muted px-4 py-3 text-sm text-foreground-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading eyebrow="Personal Information" title="Family" />
            <Card className="mt-5 p-6">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div className="text-sm leading-relaxed text-foreground-muted">
                  <p>
                    <span className="font-medium text-navy">Father:</span> {professor.personal.fatherName}
                  </p>
                  <p>
                    <span className="font-medium text-navy">Mother:</span> {professor.personal.motherName}
                  </p>
                  <p>
                    <span className="font-medium text-navy">Spouse:</span> {professor.family.spouse}
                  </p>
                  <ul className="mt-1 list-disc pl-5">
                    {professor.family.children.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
           
          </section>
        </div>

        <aside className="min-w-0 space-y-8 lg:sticky lg:top-24 lg:self-start">
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span className="break-all">{professor.presentAddress.emails.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span>{professor.presentAddress.mobiles.join(" · ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span>{professor.presentAddress.website}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Home className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span>{professor.presentAddress.lines.join(", ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span>
                  Permanent Address: {professor.permanentAddress.village}, {professor.permanentAddress.district}, {professor.permanentAddress.division}, {professor.permanentAddress.country}
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">References</h3>
            <ul className="mt-4 space-y-5">
              {references.map((r) => (
                <li key={r.id} className="text-sm">
                  <p className="font-medium text-navy">{r.name}</p>
                  <ul className="mt-1 space-y-0.5 text-xs text-foreground-muted">
                    {r.designation.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  {(r.phone || r.mobile) && (
                    <p className="mt-1 text-xs text-foreground-muted">
                      {[r.phone, r.mobile].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </Container>
    </>
  );
}
