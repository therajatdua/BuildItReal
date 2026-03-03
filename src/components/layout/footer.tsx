"use client";

import { navigation } from "@/data";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cream flex items-center justify-center">
                <span className="text-ink font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                Build It Real
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              A design studio from India crafting bespoke digital
              experiences for brands that demand excellence.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="label-mono mb-4 text-cream/40">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-mono mb-4 text-cream/40">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-cream/60">
              <span>hello@builditreal.in</span>
              <span>Gwalior, India</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-mono">
            &copy; {year} Build It Real. All rights reserved.
          </p>
          <p className="text-xs text-cream/40 font-mono">
            Designed &amp; Built in India
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
