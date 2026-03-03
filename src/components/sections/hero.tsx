"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/ui/motion";

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center bg-cream overflow-hidden">
      {/* Warm gradient blobs */}
      <div className="absolute top-16 right-[8%] w-[450px] h-[450px] rounded-full bg-accent/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-32 left-[5%] w-[350px] h-[350px] rounded-full bg-purple/[0.06] blur-[110px] pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-teal/[0.04] blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #1B1B18 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div className="container-main relative pt-32 md:pt-40 pb-20">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent-soft rounded-full border border-accent/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
              Available for projects
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <TextReveal delay={0.4}>
            <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] font-bold tracking-tight text-ink leading-[0.95]">
              We craft digital
            </h1>
          </TextReveal>
          <TextReveal delay={0.55}>
            <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] font-bold tracking-tight leading-[0.95]">
              <span className="text-outline">experiences</span> that
            </h1>
          </TextReveal>
          <TextReveal delay={0.7}>
            <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] font-bold tracking-tight text-accent leading-[0.95]">
              convert.
            </h1>
          </TextReveal>
        </div>

        {/* Bottom */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            className="text-base md:text-lg text-muted leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            High-performance websites for ambitious brands.
            Based in India, working globally.
          </motion.p>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-accent text-white text-sm font-semibold rounded-full shadow-[4px_4px_0_0_#1B1B18] hover:shadow-[2px_2px_0_0_#1B1B18] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-4 text-ink text-sm font-semibold border-2 border-ink/15 rounded-full hover:border-ink/40 transition-all"
            >
              Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export { Hero };
