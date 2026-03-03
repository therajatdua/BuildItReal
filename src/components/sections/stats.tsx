"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data";

const statColors = ["text-accent", "text-purple", "text-teal", "text-amber"];

function AnimatedNumber({ value, suffix, color }: { value: string; suffix?: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix && <span className={color}>{suffix}</span>}
    </span>
  );
}

function Stats() {
  return (
    <section className="py-20 md:py-28 border-y border-border bg-cream-dark">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} color={statColors[i % statColors.length]} />
              </div>
              <p className="mt-2 text-sm font-mono text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stats };
