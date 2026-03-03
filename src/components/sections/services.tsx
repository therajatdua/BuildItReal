"use client";

import { services } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

function Services() {
  return (
    <SectionShell id="services" className="bg-ink text-cream">
      <SectionHeader
        label="What We Do"
        title="Services built for growth"
        description="We keep it focused. Every service is designed to move your business forward."
        className="[&_h2]:text-cream [&_p]:text-cream/50 [&_.label-mono]:text-cream/40"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" stagger={0.1}>
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <div className="border-2 border-cream/20 p-6 md:p-8 hover:border-accent transition-colors group">
              <span className="font-mono text-4xl font-bold text-cream/10 group-hover:text-accent/30 transition-colors">
                {service.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-cream group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-cream/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Services };
