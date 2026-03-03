export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  liveUrl: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  number: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}
