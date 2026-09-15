"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, GraduationCap, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { professor } from "@/data/professor";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy">
      {/* Subtle academic motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative py-20 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-soft"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {professor.status}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {professor.name}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {professor.department}, {professor.faculty}
              <br />
              {professor.university}, {professor.universityLocation}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/55"
            >
              {professor.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={4}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
              >
                Explore Academic Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/publications"
                className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4" />
                Research & Publications
              </Link>
              <Link
                href="/documents/professor-cv.pdf"
                className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-2 py-3 text-sm font-medium text-white/70 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-full min-w-0 max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-2xl">
              <Image
                src="/professor.png"
                alt={professor.name}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
