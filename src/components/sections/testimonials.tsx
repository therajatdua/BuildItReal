"use client";

import { testimonials } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

function Testimonials() {
  return (
    <SectionShell id="about">
      <SectionHeader
        label="Kind Words"
        title="What our clients say"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" stagger={0.15}>
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <div className="border-2 border-ink p-6 md:p-8 h-full flex flex-col">
              {/* Quote mark */}
              <span className="text-5xl font-serif text-accent leading-none select-none">&ldquo;</span>
              <blockquote className="mt-2 text-ink/70 text-sm leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <div className="mt-6 pt-4 border-t-2 border-ink/10">
                <p className="font-bold text-sm text-ink">{t.name}</p>
                <p className="text-xs text-ink/40 font-mono mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Testimonials };
