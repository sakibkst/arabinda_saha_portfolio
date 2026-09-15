"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const categoryVariant: Record<TimelineEvent["category"], "navy" | "gold" | "default" | "outline"> = {
  education: "default",
  career: "navy",
  milestone: "gold",
  service: "outline",
};

const categoryLabel: Record<TimelineEvent["category"], string> = {
  education: "Education",
  career: "Career",
  milestone: "Milestone",
  service: "Service",
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="relative border-l border-border pl-6 sm:pl-8">
      {events.map((event, i) => (
        <motion.li
          key={event.id}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
          className={cn("relative pb-10 last:pb-0")}
        >
          <span
            className={cn(
              "absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-surface sm:-left-[39px]",
              "bg-gold"
            )}
            aria-hidden
          />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-navy">{event.year}</span>
            <Badge variant={categoryVariant[event.category]}>{categoryLabel[event.category]}</Badge>
          </div>
          <h3 className="mt-1.5 text-base font-semibold text-navy">{event.title}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-foreground-muted">
            {event.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
