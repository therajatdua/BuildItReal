"use client";

const items = [
  "Web Design", "Development", "Branding", "UI/UX",
  "E-Commerce", "Next.js", "React", "Figma", "Strategy",
];

function Marquee() {
  const row = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 mx-6">
      <span className="text-2xl md:text-3xl font-bold uppercase tracking-wide whitespace-nowrap">
        {item}
      </span>
      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
    </span>
  ));

  return (
    <div className="py-6 md:py-8 bg-ink text-cream overflow-hidden">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

export { Marquee };
