"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withSeparator?: boolean;
}

function SectionShell({ children, className, id, withSeparator = true }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className="container-main">
        {children}
      </div>
      {withSeparator && (
        <div className="container-main mt-20 md:mt-28">
          <div className="dot-line" />
        </div>
      )}
    </section>
  );
}

function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 md:mb-16 max-w-2xl", className)}>
      {label && (
        <span className="label-mono mb-4 block">{label}</span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-ink/60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionShell, SectionHeader };
