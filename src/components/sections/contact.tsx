import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleText = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section id="contact" ref={containerRef} className="relative min-h-screen flex flex-col justify-end bg-[#030505] overflow-hidden pt-32 pb-16">
      
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full flex-1">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-24 md:mb-0">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-light text-[#f3f6f5] mb-8 leading-snug">
              Have a project in mind?<br/>
              <span className="text-gray-500">Let's create something amazing together.</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:bhavya.kapoorr@gmail.com"
                className="group flex items-center gap-4 text-xl font-medium text-white hover:text-teal-400 transition-colors duration-300 hover-target"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-teal-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span>bhavya.kapoorr@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/bhavyakapoorr/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-xl font-medium text-white hover:text-blue-400 transition-colors duration-300 hover-target"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="mt-16 md:mt-0 text-left md:text-right">
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">Location</p>
            <p className="text-xl text-white font-light">India<br/>Available Worldwide</p>
          </div>
        </div>

        {/* Massive Scaling Footer Text */}
        <div className="w-full overflow-hidden mt-auto flex justify-center items-end border-b border-white/10 pb-8">
          <motion.h1 
            style={{ scale: scaleText, y: yText }}
            className="font-serif text-[22vw] md:text-[18vw] leading-[0.7] tracking-tighter text-[#f3f6f5] uppercase mix-blend-difference hover-target cursor-default transform-origin-bottom"
          >
            LET'S TALK
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
