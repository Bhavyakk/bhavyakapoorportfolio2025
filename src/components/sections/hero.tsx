import { motion, useScroll, useTransform } from "framer-motion";
import { AlternatingText } from "@/components/ui/alternating-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CopyEmailChip } from "@/components/ui/mini-widgets";
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
      className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#030505] pt-20 sm:pt-24 md:pt-24 pb-4 sm:pb-6"
    >
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full flex-1 flex flex-col justify-center my-auto">
        <motion.div style={{ opacity }} className="max-w-6xl mx-auto w-full">

          {/* Typography-led Hero */}
          <div className="mb-4 sm:mb-6 flex flex-col items-start w-full">
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

          <div className="flex flex-col md:flex-row justify-between items-end w-full mt-6 md:mt-8 gap-6 md:gap-8">
            {/* Animated Subheading & Copy Email Pill */}
            <motion.div
              className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide min-h-[2rem] flex flex-wrap items-center gap-4 w-full md:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <AlternatingText
                texts={["UI/UX Designer", "AI Video Specialist", "Visual Designer", "Creative Specialist"]}
                className="text-base sm:text-lg md:text-xl font-light text-[#f3f6f5]"
                delay={2000}
                switchInterval={3000}
              />
              <span className="hidden sm:inline-block w-8 h-[1px] bg-white/20"></span>
              <CopyEmailChip />
            </motion.div>

            {/* Minimalist CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton
                className="group relative px-6 py-4 md:px-8 md:py-5 bg-transparent border border-white/20 hover:border-teal-400/50 rounded-full flex items-center gap-4 transition-all duration-500 hover-target"
                onClick={() => scrollToSection("projects")}
                strength={0.5}
              >
                <span className="text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">Explore Work</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-400 transition-colors duration-500">
                  <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-black transition-colors duration-500" />
                </div>
              </MagneticButton>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
