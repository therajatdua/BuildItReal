"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data";
import { cn } from "@/lib/utils";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-main flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-ink">Build It Real</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline px-4 py-2 text-sm font-medium text-ink/60 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-light transition-colors shadow-[3px_3px_0_0_#1B1B18] hover:shadow-[1px_1px_0_0_#1B1B18] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-20 bg-cream z-40"
          >
            <nav className="container-main py-10 flex flex-col gap-2">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-bold text-ink hover:text-accent transition-colors py-3 border-b border-border"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };
