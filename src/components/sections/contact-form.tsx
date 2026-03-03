"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell, SectionHeader } from "@/components/layout/section-shell";
import { FadeIn } from "@/components/ui/motion";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionShell id="contact" withSeparator={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <FadeIn direction="left">
          <SectionHeader
            label="Start a Project"
            title="Let's build something great"
            description="Tell us about your project and we'll get back to you within 24 hours. No fluff, no sales pitch — just a real conversation."
            className="mb-0"
          />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
              <p className="text-sm text-ink/50">Based in New Delhi, working with clients worldwide</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
              <p className="text-sm text-ink/50">Typical project timeline: 4-8 weeks</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
              <p className="text-sm text-ink/50">hello@builditreal.in</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border-2 border-olive p-8 md:p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
            >
              <CheckCircle className="w-12 h-12 text-olive mb-4" />
              <h3 className="text-xl font-bold text-ink">Message Sent</h3>
              <p className="mt-2 text-sm text-ink/50">
                We&apos;ll be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="border-2 border-ink p-6 md:p-8 space-y-6">
              <div>
                <label className="label-mono mb-2 block" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-ink/20 text-ink text-sm focus:border-ink focus:outline-none transition-colors placeholder:text-ink/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="label-mono mb-2 block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-ink/20 text-ink text-sm focus:border-ink focus:outline-none transition-colors placeholder:text-ink/30"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="label-mono mb-2 block" htmlFor="budget">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-transparent border-2 border-ink/20 text-ink text-sm focus:border-ink focus:outline-none transition-colors"
                >
                  <option value="">Select a range</option>
                  <option value="50k-1l">₹50K — ₹1L</option>
                  <option value="1l-3l">₹1L — ₹3L</option>
                  <option value="3l-5l">₹3L — ₹5L</option>
                  <option value="5l+">₹5L+</option>
                </select>
              </div>

              <div>
                <label className="label-mono mb-2 block" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-ink/20 text-ink text-sm focus:border-ink focus:outline-none transition-colors placeholder:text-ink/30 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </SectionShell>
  );
}

export { ContactForm };
