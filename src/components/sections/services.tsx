"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { services } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/ui/motion";

const serviceColors = ["text-accent", "text-purple", "text-teal", "text-amber"];

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="services" className="bg-ink text-cream">
      <SectionHeader
        label="// What We Do"
        title="Services that move the needle"
        description="We keep it focused — every service is designed to help your business grow."
        className="[&_h2]:text-cream [&_p]:text-cream/40 [&_.label-mono]:text-accent"
      />

      <div className="max-w-3xl">
        {services.map((service, i) => {
          const color = serviceColors[i % serviceColors.length];
          return (
            <FadeIn key={service.slug} delay={i * 0.08}>
              <div className="border-b border-cream/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-7 flex items-center justify-between gap-6 text-left group cursor-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-sm ${color} opacity-60`}>{service.number}</span>
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${openIndex === i ? color : "text-cream group-hover:text-cream/70"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    {openIndex === i ? (
                      <Minus className={`w-4 h-4 ${color}`} />
                    ) : (
                      <Plus className="w-4 h-4 text-cream/40 group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-[3.75rem] text-cream/50 text-sm md:text-base leading-relaxed max-w-lg">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}

export { Services };
