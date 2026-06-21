import { motion, useScroll, useTransform } from "framer-motion";
import { AlternatingText } from "@/components/ui/alternating-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yText2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030505]"
    >
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center">
        <motion.div style={{ opacity }} className="max-w-6xl mx-auto w-full">
          
          {/* Typography-led Hero */}
          <div className="mb-8 flex flex-col items-start w-full">
            <motion.div
              style={{ y: yText1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden w-full"
            >
              <h1 className="font-serif text-[24vw] md:text-[15vw] leading-[0.8] tracking-[-0.04em] text-[#f3f6f5] uppercase hover-target mix-blend-difference">
                BHAVYA
              </h1>
            </motion.div>
            
            <motion.div
              style={{ y: yText2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden w-full flex justify-end"
            >
              <h1 className="font-serif text-[24vw] md:text-[15vw] leading-[0.8] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-500 uppercase hover-target">
                KAPOOR
              </h1>
            </motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end w-full mt-12 gap-8">
            {/* Animated Subheading */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide min-h-[2.5rem] flex items-center gap-3 w-full md:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <AlternatingText
                texts={["Product Designer", "UI/UX Specialist", "Creative Developer"]}
                className="text-lg sm:text-xl md:text-2xl font-light text-[#f3f6f5]"
                delay={2000}
                switchInterval={3000}
              />
              <span className="hidden sm:inline-block w-12 h-[1px] bg-white/20"></span>
            </motion.div>

            {/* Minimalist CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton
                className="group relative px-8 py-5 bg-transparent border border-white/20 hover:border-teal-400/50 rounded-full flex items-center gap-4 transition-all duration-500 hover-target"
                onClick={() => scrollToSection("projects")}
                strength={0.5}
              >
                <span className="text-white text-sm uppercase tracking-[0.2em] font-medium">Explore Work</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-400 transition-colors duration-500">
                  <ArrowDownRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-500" />
                </div>
              </MagneticButton>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </main>
  );
}
