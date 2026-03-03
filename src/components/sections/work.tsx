"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const cardColors = [
  { accent: "text-accent", bg: "bg-accent-soft", border: "hover:border-accent/40", dot: "bg-accent" },
  { accent: "text-purple", bg: "bg-purple-soft", border: "hover:border-purple/40", dot: "bg-purple" },
  { accent: "text-teal", bg: "bg-teal-soft", border: "hover:border-teal/40", dot: "bg-teal" },
];

function Work() {
  return (
    <SectionShell id="work">
      <SectionHeader
        label="// Selected Work"
        title="Projects that speak for themselves"
        description="Real websites, live on the internet. Crafted with obsessive attention to detail from our studio in India."
      />

      <StaggerContainer className="space-y-6 md:space-y-8" stagger={0.15}>
        {projects.map((project, i) => {
          const colors = cardColors[i % cardColors.length];
          return (
            <StaggerItem key={project.slug}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <motion.div
                  className={`relative rounded-2xl overflow-hidden border border-border ${colors.border} transition-all duration-500 bg-white`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px] lg:min-h-[380px]">
                    {/* Info — left side */}
                    <div className="p-7 md:p-10 flex flex-col justify-between order-2 lg:order-1 bg-white">
                      <div>
                        {/* Number + label */}
                        <div className="flex items-center gap-3 mb-5">
                          <span className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center`}>
                            <span className={`font-mono text-xs font-bold ${colors.accent}`}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </span>
                          <div className="h-[1px] flex-1 max-w-[40px] bg-border" />
                          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Project</span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-2xl md:text-3xl font-bold text-ink group-hover:${colors.accent} transition-colors duration-300`}>
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Bottom row */}
                      <div className="mt-6 flex items-end justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                        <div className={`w-10 h-10 rounded-full border-2 border-border group-hover:border-transparent flex items-center justify-center transition-all duration-300 shrink-0`} style={{ backgroundColor: 'transparent' }}>
                          <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink group-hover:rotate-45 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Preview — right side (screenshot) */}
                    <div className="relative order-1 lg:order-2 overflow-hidden">
                      {/* Soft colored background */}
                      <div className={`absolute inset-0 ${colors.bg}`} />

                      {/* Browser chrome mockup */}
                      <div className="relative m-4 md:m-6 rounded-xl overflow-hidden shadow-lg border border-black/[0.06] bg-white">
                        {/* Dots bar */}
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-cream-dark/80 border-b border-border">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-olive/60" />
                          <span className="ml-3 flex-1 h-5 rounded-full bg-border/60 max-w-[180px]" />
                        </div>

                        {/* Screenshot */}
                        <div className="relative aspect-[16/10] bg-cream-dark overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.imageUrl}
                            alt={`${project.title} preview`}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-ink flex items-center gap-1.5">
                              Visit Live <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Work };
