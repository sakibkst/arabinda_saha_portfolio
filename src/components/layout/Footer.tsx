import Link from "next/link";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { professor } from "@/data/professor";
import { flatNavLinks } from "./navConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold-soft">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-white">{professor.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {professor.department}
            <br />
            {professor.faculty}
            <br />
            {professor.university}, {professor.universityLocation}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {flatNavLinks.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
            More
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {flatNavLinks.slice(6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/documents/professor-cv.pdf" className="text-white/70 transition hover:text-white">
                Download Full CV
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <a href={`mailto:${professor.presentAddress.emails[0]}`} className="hover:text-white break-all">
                {professor.presentAddress.emails[0]}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <span>{professor.presentAddress.mobiles[0]}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <span>{professor.university}, {professor.universityLocation}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>© {year} {professor.name}. All rights reserved.</p>
          <p>Academic portfolio compiled from the official curriculum vitae.</p>
        </Container>
      </div>
    </footer>
  );
}
