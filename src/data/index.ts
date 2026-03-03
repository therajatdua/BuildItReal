import type { Project, Service, Testimonial, NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
  title: "Clixy",
  slug: "clixy",
  description:
    "Modern digital agency website showcasing performance marketing, branding, and web development services with a bold, conversion-focused UI.",
  tags: ["Agency", "Marketing", "React", "Landing Page"],
  liveUrl: "https://clixy-one.vercel.app/",
  },
  {
    title: "TravelWithUs",
  slug: "travelwithus",
  description:
    "A visually immersive travel booking platform featuring curated destinations, city-based themes, and seamless user experience for modern explorers.",
  tags: ["Travel", "UI/UX", "Responsive", "Landing Page"],
  liveUrl: "https://travelwithus-psi.vercel.app/",
  },
  {
    title: "IronPeak Fitness",
  slug: "ironpeak-fitness",
  description:
    "High-performance fitness and gym website designed to drive memberships through bold visuals, structured programs, and strong call-to-action sections.",
  tags: ["Fitness", "Gym", "Landing Page", "Branding"],
  liveUrl: "https://ironpeak-fitness-peach.vercel.app/",
  },
];

export const services: Service[] = [
  {
    title: "Web Design",
    slug: "web-design",
    description:
      "Bespoke, conversion-focused designs that reflect your brand and resonate with your audience. Every pixel with purpose.",
    number: "01",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Performance-first development with Next.js, React and modern tooling. Fast, accessible, and built to scale.",
    number: "02",
  },
  {
    title: "E-Commerce",
    slug: "ecommerce",
    description:
      "End-to-end online stores with seamless checkout, inventory management and payment gateway integration.",
    number: "03",
  },
  {
    title: "Branding & Identity",
    slug: "branding",
    description:
      "Logo design, visual identity systems and brand guidelines that give your business a distinct, memorable presence.",
    number: "04",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "FreshBasket",
    quote:
      "Build It Real transformed our online presence completely. The new site drove a 3x increase in orders within the first month. Their attention to detail is unmatched.",
  },
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "CloudMetrics",
    quote:
      "Working with them felt like having an in-house design team. They understood our product deeply and delivered a dashboard our users love.",
  },
  {
    name: "Kavita Reddy",
    role: "Marketing Head",
    company: "Tara Finserv",
    quote:
      "From branding to the final website, every step was thoughtful and professional. They truly care about the craft and it shows in every interaction.",
  },
];
