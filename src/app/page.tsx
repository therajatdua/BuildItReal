import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
