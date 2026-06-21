import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { AlternatingText } from "@/components/ui/alternating-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="home" className="min-h-screen flex items-center justify-center relative  overflow-hidden">
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Typography-led Hero */}
          <div className="mb-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <h1 className="font-serif text-[4rem] leading-[0.9] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-medium tracking-tight text-white mb-[-10px] sm:mb-[-20px]">
                BHAVYA
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden flex items-center gap-4 sm:gap-8"
            >
              <h1 className="font-serif text-[4rem] leading-[0.9] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-500">
                KAPOOR
              </h1>
            </motion.div>
          </div>
          
          {/* Animated Subheading */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide min-h-[2.5rem] mb-12 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gray-600"></span>
            <AlternatingText
              texts={["Product Designer", "Visual Artist", "Brand Strategist"]}
              className="text-lg sm:text-xl md:text-2xl font-light text-gray-300"
              delay={2000}
              switchInterval={3000}
            />
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gray-600"></span>
          </motion.div>

          {/* Minimalist CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <MagneticButton
              className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-3 transition-all duration-300 backdrop-blur-md"
              onClick={() => scrollToSection("projects")}
              strength={0.3}
            >
              <span className="text-white text-sm uppercase tracking-widest font-medium">Explore Work</span>
              <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/40 transition-colors">
                <ArrowDownRight className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
              </div>
            </MagneticButton>
          </motion.div>
          
        </div>
      </div>
    </main>
  );
}
