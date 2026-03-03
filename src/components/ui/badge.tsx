import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "outline" | "accent";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const styles: Record<BadgeVariant, string> = {
  default: "bg-ink text-cream",
  outline: "bg-transparent text-ink border-2 border-ink",
  accent: "bg-accent text-cream",
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-mono font-semibold uppercase tracking-widest",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
