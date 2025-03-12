import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testinomials";
import { navItems } from "@/data";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="dark:bg-slate-950 bg-white ">
      <HeroHighlight>
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </HeroHighlight>
    </main>
  );
}
