import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variants = {
  default: "bg-surface-muted text-navy border border-border-strong/60",
  gold: "bg-gold/10 text-gold border border-gold/30",
  navy: "bg-navy text-white border border-navy",
  outline: "bg-transparent text-foreground-muted border border-border-strong",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
