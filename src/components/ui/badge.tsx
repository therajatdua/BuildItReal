import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "outline" | "accent";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const styles: Record<BadgeVariant, string> = {
  default: "bg-ink text-cream",
  outline: "bg-transparent text-muted border border-border",
  accent: "bg-accent text-white",
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-widest rounded-full",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
