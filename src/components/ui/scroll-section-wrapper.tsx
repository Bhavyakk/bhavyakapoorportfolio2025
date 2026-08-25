import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollSectionWrapperProps {
  children: ReactNode;
  sectionNumber: string;
  id?: string;
  className?: string;
  parallaxSpeed?: [number, number]; // [start, end] values for y transform
}

export function ScrollSectionWrapper({ 
  children, 
  sectionNumber, 
  id, 
  className = "",
  parallaxSpeed = [0, 400]
}: ScrollSectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yNumber = useTransform(scrollYProgress, [0, 1], parallaxSpeed);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id={id} 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Oversized Parallax Background Number */}
      <motion.div
        style={{ y: yNumber, opacity }}
        className="absolute top-1/4 right-[-5%] md:right-[5%] section-bg-number text-[30vw] md:text-[40vw] font-serif leading-[0.8] tracking-tighter mix-blend-screen text-white/5 pointer-events-none select-none z-0"
      >
        {sectionNumber}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
