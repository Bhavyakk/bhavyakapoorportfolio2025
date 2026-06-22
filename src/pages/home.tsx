import { ReactLenis } from "@studio-freight/react-lenis";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
// import Experience from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="relative">
        <NoiseOverlay />
        <ScrollIndicator />
        <ParticleBackground />
        <Navigation />
        <Hero />
        <About />
        <Education />
        {/* <Experience /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}
