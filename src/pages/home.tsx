import { ParticleBackground } from "@/components/ui/particle-background";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { BrandMarquee } from "@/components/ui/brand-marquee";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
// import Experience from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative">
      <ScrollIndicator />
      <ParticleBackground />
      <Navigation />
      <Hero />
      <section className="py-12 bg-[#030505] border-y border-white/5 relative z-10">
        <BrandMarquee />
      </section>
      <About />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
