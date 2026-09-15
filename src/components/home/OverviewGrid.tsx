import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  BookMarked,
  Users,
  Presentation,
  Landmark,
  ScrollText,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    href: "/education",
    icon: GraduationCap,
    title: "Education",
    description: "Ph.D. (Kalyani University), M.Com. & B.Com. (Hons.) from Rajshahi University, and secondary schooling records.",
  },
  {
    href: "/career",
    icon: Briefcase,
    title: "Academic Career",
    description: "Full teaching timeline from Lecturer (1993) to Professor, with subjects taught at every level.",
  },
  {
    href: "/research",
    icon: FlaskConical,
    title: "Research Projects",
    description: "Institutionally funded research on banking MIS, NGOs, FDI, accounting standards, and SME financing.",
  },
  {
    href: "/publications",
    icon: ScrollText,
    title: "Publications",
    description: "37+ published & accepted articles, plus a substantial submitted-articles archive spanning 1998–2023.",
  },
  {
    href: "/books",
    icon: BookMarked,
    title: "Books",
    description: "Authored & co-authored textbooks in Cost Accounting, Business Communication, and Bank Management, plus a Springer book chapter.",
  },
  {
    href: "/supervision",
    icon: Users,
    title: "Supervision",
    description: "12 M.Phil. and 5 Ph.D. degrees awarded under supervision, with several candidates ongoing.",
  },
  {
    href: "/seminars",
    icon: Presentation,
    title: "Seminars & Conferences",
    description: "National & international seminar papers, and 30+ webinars/conferences as keynote speaker or resource person.",
  },
  {
    href: "/academic-service",
    icon: Landmark,
    title: "Academic Service",
    description: "Departmental chairmanship, editorial board memberships, and committee roles at Islamic University and beyond.",
  },
];

export function OverviewGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Academic Archive"
          title="A complete record of a three-decade academic career"
          description="Every section below draws directly from the professor's official curriculum vitae — organized for easy exploration rather than condensed away."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition hover:border-gold/50 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-gold-soft">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-navy">
                {item.title}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
