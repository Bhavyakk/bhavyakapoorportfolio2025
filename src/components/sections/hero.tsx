import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { AlternatingText } from "@/components/ui/alternating-text";
import { Button } from "@/components/ui/button";
import { AnimatedStars } from "@/components/ui/animated-stars";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Rocket, Download, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="home" className="min-h-screen flex items-center justify-center relative bg-black particles-dark overflow-hidden">
      <ParallaxSection speed={0.3}>
        <AnimatedStars />
      </ParallaxSection>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="hero-title-glow" style={{ fontSize: "120px", lineHeight: "1" }}>
            <AnimatedText
              text="BHAVYA KAPOOR"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6"
              delay={0}
              speed={6}
              keepCursorAfterComplete={true}
            />
          </h1>
          
          {/* Animated Subheading */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 font-light tracking-wide min-h-[2.5rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <AlternatingText
              texts={["Product Designer", "Social Media Strategist", "Visual Designer"]}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide"
              delay={2000}
              switchInterval={2500}
            />
          </motion.h2>
          
          

          {/* Hero Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MagneticButton
              className="group relative w-48 h-14 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white text-lg font-semibold rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden"
              onClick={() => scrollToSection("projects")}
              strength={0.4}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Rocket className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Projects</span>
            </MagneticButton>
            <MagneticButton
              className="group w-48 h-14 border-2 border-white/30 text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-lg shadow-2xl hover:shadow-white/20"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/BHAVYA_KAPOOR_RESUME_2025.pdf';
                link.download = 'BHAVYA_KAPOOR_RESUME_2025.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              strength={0.4}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span className="group-hover:animate-pulse">Download CV</span>
            </MagneticButton>
          </motion.div>

          
        </div>
      </div>
    </main>
  );
}
