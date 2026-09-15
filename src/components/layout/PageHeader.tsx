import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-navy">
      <Container className="py-14 sm:py-16">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
