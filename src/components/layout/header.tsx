"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data";
import { cn } from "@/lib/utils";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b-2 border-ink">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ink flex items-center justify-center">
            <span className="text-cream font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-ink">
            Build It Real
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wider text-ink hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-ink text-cream text-sm font-semibold uppercase tracking-wider border-2 border-ink hover:bg-accent hover:border-accent transition-all"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream border-b-2 border-ink overflow-hidden"
          >
            <nav className="container-main py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold uppercase tracking-wider text-ink hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-ink text-cream text-sm font-semibold uppercase tracking-wider text-center border-2 border-ink hover:bg-accent hover:border-accent transition-all"
              >
                Start a Project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };
