"use client";

import { processSteps } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const stepColors = [
  { num: "text-accent/20 group-hover:text-accent/40", title: "group-hover:text-accent" },
  { num: "text-purple/20 group-hover:text-purple/40", title: "group-hover:text-purple" },
  { num: "text-teal/20 group-hover:text-teal/40", title: "group-hover:text-teal" },
  { num: "text-amber/20 group-hover:text-amber/40", title: "group-hover:text-amber" },
  { num: "text-rose/20 group-hover:text-rose/40", title: "group-hover:text-rose" },
];

function Process() {
  return (
    <SectionShell id="process">
      <SectionHeader
        label="// How We Work"
        title="A process built on clarity"
        description="No surprises, no wasted time. Just a clear path from idea to launch."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0" stagger={0.1}>
        {processSteps.map((step, i) => {
          const colors = stepColors[i % stepColors.length];
          return (
            <StaggerItem key={step.number}>
              <div className="group relative p-6 md:p-8 border border-border hover:bg-cream-dark transition-all duration-500 h-full">
                <span className={`text-5xl font-bold font-mono transition-colors duration-500 ${colors.num}`}>
                  {step.number}
                </span>
                <h3 className={`mt-4 text-lg font-bold text-ink transition-colors duration-300 ${colors.title}`}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Process };
