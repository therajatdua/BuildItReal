"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

function SectionShell({ children, className, id, noPadding }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative", !noPadding && "py-24 md:py-32 lg:py-40", className)}>
      <div className="container-main">
        {children}
      </div>
    </section>
  );
}

function SectionHeader({
  label,
  title,
  description,
  className,
  center,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-16 md:mb-20", center && "text-center mx-auto", "max-w-3xl", className)}>
      {label && (
        <span className="label-mono mb-4 block text-accent">{label}</span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionShell, SectionHeader };
