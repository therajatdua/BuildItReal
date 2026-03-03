"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, #1A1A1A 0, #1A1A1A 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #1A1A1A 0, #1A1A1A 1px, transparent 1px, transparent 60px)",
      }} />

      <div className="container-main relative pt-28 md:pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="label-mono">Web Design Studio — India</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We design
            <br />
            websites that
            <br />
            <span className="text-accent">work.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-ink/60 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            High-performance websites built with intention.
            Clean design, sharp code, real results for ambitious brands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button variant="primary">
              <a href="#contact">Start a Project</a>
            </Button>
            <Button variant="secondary">
              <a href="#work">View Our Work</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-ink/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };
