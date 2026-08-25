import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { CopyEmailChip } from "@/components/ui/mini-widgets";
import { ScrollSectionWrapper } from "@/components/ui/scroll-section-wrapper";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleText = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const letterSpacing = useTransform(scrollYProgress, [0.5, 1], ["0.5em", "-0.04em"]);

  return (
    <ScrollSectionWrapper 
      id="contact" 
      sectionNumber="05"
      className="pt-32 pb-16 bg-[#030505] min-h-screen flex flex-col justify-end"
      parallaxSpeed={[-100, 100]}
    >
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full flex-1">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-24 md:mb-0">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-light text-[#f3f6f5] mb-6 leading-snug">
              Have a project in mind?<br/>
              <span className="text-gray-500">Let's create something amazing together.</span>
            </h3>

            {/* Quick Response Time Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/40 border border-teal-500/30 text-xs font-mono text-teal-300 mb-8">
              <Zap className="w-3.5 h-3.5 fill-teal-400" />
              <span>Typical Response Time: &lt; 30 mins</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href="mailto:bhavya.kapoorr@gmail.com"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 text-xl font-medium text-white hover:text-teal-400 transition-colors duration-300 hover-target"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-teal-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span>bhavya.kapoorr@gmail.com</span>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/bhavyakapoorr/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 text-xl font-medium text-white hover:text-blue-400 transition-colors duration-300 hover-target"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 md:mt-0 text-left md:text-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">Location</p>
            <p className="text-xl text-white font-light">India<br/>Available Worldwide</p>
          </motion.div>
        </div>

        {/* Decorative horizontal rule that draws on scroll */}
        <motion.div 
          style={{ scaleX: scrollYProgress, originX: 0 }}
          className="h-[1px] w-full bg-gradient-to-r from-teal-500/50 via-teal-400/10 to-transparent mb-12 will-change-transform"
        />

        {/* Massive Scaling Footer Text */}
        <div className="w-full overflow-hidden mt-auto flex justify-center items-end pb-8">
          <motion.h1 
            style={{ scale: scaleText, y: yText, letterSpacing }}
            className="font-serif text-[22vw] md:text-[18vw] leading-[0.7] text-[#f3f6f5] uppercase mix-blend-difference hover-target cursor-default transform-origin-bottom will-change-transform"
          >
            LET'S TALK
          </motion.h1>
        </div>

      </div>
    </ScrollSectionWrapper>
  );
}
