"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const quoteColors = [
  { icon: "text-accent", bg: "bg-accent-soft" },
  { icon: "text-purple", bg: "bg-purple-soft" },
  { icon: "text-teal", bg: "bg-teal-soft" },
];

function Testimonials() {
  return (
    <SectionShell id="testimonials" className="bg-cream-dark">
      <SectionHeader
        label="// Kind Words"
        title="Trusted by ambitious brands"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
        {testimonials.map((t, i) => {
          const colors = quoteColors[i % quoteColors.length];
          return (
            <StaggerItem key={t.name}>
              <motion.div
                className="relative bg-white p-8 md:p-10 rounded-2xl border border-border hover:border-border transition-all duration-500 h-full flex flex-col group shadow-sm"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}>
                  <Quote className={`w-4 h-4 ${colors.icon}`} />
                </div>

                <blockquote className="text-ink/70 text-sm md:text-[15px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <span className={`${colors.icon} font-bold text-sm`}>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-ink">{t.name}</p>
                    <p className="text-xs text-muted font-mono mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Testimonials };
