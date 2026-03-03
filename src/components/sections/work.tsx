"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

function Work() {
  return (
    <SectionShell id="work">
      <SectionHeader
        label="Selected Work"
        title="Websites we brought to life"
        description="Real projects, live on the internet. Each one crafted with care from our studio in India."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.1}>
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <motion.div
                className="relative border-2 border-ink bg-cream overflow-hidden"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
              >
                {/* Live iframe preview */}
                <div className="aspect-[4/3] relative overflow-hidden bg-white">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} preview`}
                    className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/70 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider">Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 border-t-2 border-ink">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-sm text-ink group-hover:text-accent transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="mt-1 text-xs text-ink/50 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[9px] px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}

export { Work };
