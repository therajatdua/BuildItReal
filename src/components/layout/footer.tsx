"use client";

import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data";
import { FadeIn, TextReveal } from "@/components/ui/motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream overflow-hidden">
      {/* Big CTA */}
      <div className="container-main pt-24 md:pt-32 pb-16 md:pb-20">
        <FadeIn>
          <p className="label-mono text-cream/30 mb-6">Got a project?</p>
        </FadeIn>
        <TextReveal>
          <a href="#contact" className="group inline-flex items-end gap-4 md:gap-6">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none hover:text-accent transition-colors duration-300">
              Let&apos;s work
              <br />
              together
            </span>
            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-accent mb-2 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </TextReveal>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-main py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            <span className="font-bold tracking-tight">Build It Real</span>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-cream/40 hover:text-cream transition-colors link-underline">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-mono text-cream/30">
            <span>hello@builditreal.in</span>
            <span>Gwalior, India</span>
            <span>&copy; {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
