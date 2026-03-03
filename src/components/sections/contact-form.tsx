"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/ui/motion";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionShell id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <FadeIn direction="none">
          <SectionHeader
            label="// Let's Connect"
            title="Ready to build something real?"
            description="Tell us about your project. We respond within 24 hours — no sales pitch, just a genuine conversation."
            className="mb-0"
          />

          <div className="mt-10 space-y-5">
            {[
              { text: "Based in Gwalior, working with clients worldwide", color: "bg-accent-soft text-accent" },
              { text: "Typical project timeline: 4–8 weeks", color: "bg-purple-soft text-purple" },
              { text: "hello@builditreal.in", color: "bg-teal-soft text-teal" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-olive/30 bg-teal-soft p-10 md:p-12 flex flex-col items-center justify-center text-center h-full min-h-[420px]"
            >
              <CheckCircle className="w-14 h-14 text-teal mb-5" />
              <h3 className="text-2xl font-bold text-ink">Message Sent!</h3>
              <p className="mt-2 text-sm text-muted max-w-xs">
                We&apos;ll get back to you within 24 hours. Talk soon!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-white p-8 md:p-10 space-y-5 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="label-mono mb-2 block" htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="w-full px-4 py-3.5 bg-cream border border-border rounded-xl text-ink text-sm focus:border-accent focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all placeholder:text-muted/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label-mono mb-2 block" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full px-4 py-3.5 bg-cream border border-border rounded-xl text-ink text-sm focus:border-accent focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all placeholder:text-muted/50"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="label-mono mb-2 block" htmlFor="budget">Budget Range</label>
                <select
                  id="budget" name="budget"
                  className="w-full px-4 py-3.5 bg-cream border border-border rounded-xl text-ink text-sm focus:border-accent focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all"
                >
                  <option value="">Select a range</option>
                  <option value="50k-1l">&#8377;50K — &#8377;1L</option>
                  <option value="1l-3l">&#8377;1L — &#8377;3L</option>
                  <option value="3l-5l">&#8377;3L — &#8377;5L</option>
                  <option value="5l+">&#8377;5L+</option>
                </select>
              </div>

              <div>
                <label className="label-mono mb-2 block" htmlFor="message">Project Details</label>
                <textarea
                  id="message" name="message" rows={4} required
                  className="w-full px-4 py-3.5 bg-cream border border-border rounded-xl text-ink text-sm focus:border-accent focus:ring-1 focus:ring-accent/20 focus:outline-none transition-all placeholder:text-muted/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent text-white text-sm font-semibold rounded-full shadow-[4px_4px_0_0_#1B1B18] hover:shadow-[2px_2px_0_0_#1B1B18] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-none"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </SectionShell>
  );
}

export { ContactForm };
