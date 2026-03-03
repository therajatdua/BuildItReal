import type { Project, Service, Testimonial, NavItem, Stat } from "@/types";

export const navigation: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Clixy",
    slug: "clixy",
    description:
      "Modern digital agency website showcasing performance marketing, branding, and web development services with a bold, conversion-focused UI.",
    tags: ["Agency", "Marketing", "React"],
    liveUrl: "https://clixy-one.vercel.app/",
    imageUrl: "https://image.thum.io/get/width/1280/crop/800/https://clixy-one.vercel.app/",
  },
  {
    title: "TravelWithUs",
    slug: "travelwithus",
    description:
      "A visually immersive travel booking platform featuring curated destinations, city-based themes, and seamless UX for modern explorers.",
    tags: ["Travel", "UI/UX", "Responsive"],
    liveUrl: "https://travelwithus-psi.vercel.app/",
    imageUrl: "https://image.thum.io/get/width/1280/crop/800/https://travelwithus-psi.vercel.app/",
  },
  {
    title: "IronPeak Fitness",
    slug: "ironpeak-fitness",
    description:
      "High-performance fitness and gym website designed to drive memberships through bold visuals and strong call-to-action sections.",
    tags: ["Fitness", "Branding", "Landing Page"],
    liveUrl: "https://ironpeak-fitness-peach.vercel.app/",
    imageUrl: "https://image.thum.io/get/width/1280/crop/800/https://ironpeak-fitness-peach.vercel.app/",
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
    title: "E-Commerce Solutions",
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

export const stats: Stat[] = [
  { value: "50", suffix: "+", label: "Projects Delivered" },
  { value: "98", suffix: "%", label: "Client Satisfaction" },
  { value: "3", suffix: "x", label: "Avg. Conversion Lift" },
  { value: "24", suffix: "hr", label: "Response Time" },
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

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dig into your brand, goals, audience, and competitors. Deep understanding before a single pixel.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Wireframes, user flows, and a clear roadmap. We align on the 'what' and the 'why' before building.",
  },
  {
    number: "03",
    title: "Design",
    description: "High-fidelity designs that look stunning and convert. Iterative refinement until it feels perfect.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Clean, performant code. We build with Next.js, React, and modern tooling — fast, accessible, SEO-ready.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Smooth deployment, performance monitoring, and ongoing support. We don't disappear after launch.",
  },
];
