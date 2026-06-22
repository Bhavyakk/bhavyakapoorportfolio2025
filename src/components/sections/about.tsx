import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Star } from "lucide-react";
import profileImage from "../../assets/bhavya-profile-new.jpg";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skills = [
    "UI/UX Design", "Figma", "Design Research", 
    "Branding", "Interaction Design", "Prototyping"
  ];

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const textRevealVariant = {
    hidden: { y: "100%", opacity: 0, rotate: 2 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-40 relative overflow-hidden bg-[#030505]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-32 md:mb-40">
          <motion.h2 
            style={{ y }}
            className="font-serif text-[18vw] md:text-[12vw] leading-[0.8] text-[#f3f6f5] opacity-5 uppercase tracking-tighter hover:opacity-40 transition-opacity duration-700 hover-target cursor-default"
          >
            Behind the<br/>Pixels
          </motion.h2>
        </div>

        {/* Scroll Revealed Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          
          {/* Left Column: Image with Internal Parallax & Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* The Image Window */}
            <div className="aspect-[3/4] overflow-hidden rounded-xl hover-target group relative bg-[#111]">
              <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply pointer-events-none" />
              <motion.img 
                style={{ y: imgY }}
                src={profileImage} 
                alt="Bhavya Kapoor" 
                loading="lazy"
                decoding="async"
                className="w-full h-[130%] object-cover absolute top-[-15%] left-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-white font-serif text-xl mix-blend-difference">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>India</span>
              </div>
            </div>

            {/* Rotating SVG Badge (Bottom Right) */}
            <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 w-40 h-40 md:w-56 md:h-56 z-30 pointer-events-none select-none hidden sm:block">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[11.5px] font-mono tracking-[0.2em] uppercase fill-[#f3f6f5]/80">
                  <textPath href="#circlePath" startOffset="0%">
                    CREATIVE • DESIGNER • VISUAL • ARTIST •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Floating Glass Stat (Top Left) */}
            <div className="absolute top-10 -left-6 md:-left-12 z-30 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl shadow-2xl hidden sm:block animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-teal-400 fill-teal-400" />
                </div>
                <div>
                  <div className="text-3xl font-serif text-white">3+</div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Years Exp</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Bio with Staggered Reveal */}
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            <div className="overflow-hidden py-2">
              <motion.h3 
                initial={{ y: "100%", opacity: 0, rotate: 2 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-6xl md:text-8xl text-white tracking-tight mix-blend-difference origin-bottom-left"
              >
                Hi, I'm Bhavya.
              </motion.h3>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.15 }}
              className="space-y-8 text-xl md:text-3xl font-light text-[#f3f6f5]/70 leading-snug"
            >
              <div className="overflow-hidden py-1">
                <motion.p variants={textRevealVariant} className="text-white mix-blend-difference hover-target origin-bottom-left">
                  I'm a UI/UX and visual designer focused on making digital experiences look better, function seamlessly, and communicate clearly.
                </motion.p>
              </div>
              <div className="overflow-hidden py-1">
                <motion.p variants={textRevealVariant} className="hover-target origin-bottom-left">
                  I love taking rough concepts and shaping them into products people actually connect with. Lately, I've been diving deep into user behavior, exploring how intentional design makes everyday experiences easier.
                </motion.p>
              </div>
              <div className="overflow-hidden py-1">
                <motion.p variants={textRevealVariant} className="hover-target origin-bottom-left">
                  Outside the screen, you'll find me traveling, taking photos, or watching cricket. Always open to meeting new people and collaborating on interesting projects.
                </motion.p>
              </div>
              <div className="overflow-hidden py-1 mt-4">
                <motion.p variants={textRevealVariant} className="text-teal-400 font-medium hover-target origin-bottom-left">
                  P.S. I'm currently taking on freelance projects. Let's connect!
                </motion.p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Elevated Kinetic Skills Marquee */}
        <div className="relative py-24 border-y border-white/5 overflow-hidden mt-32">
          <div className="absolute left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#030505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#030505] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 whitespace-nowrap animate-scroll items-center hover-target cursor-ew-resize">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="flex items-center gap-12 group">
                <span className="text-6xl md:text-8xl font-serif uppercase tracking-tighter transition-all duration-500"
                      style={{ 
                        WebkitTextStroke: '1.5px rgba(243, 246, 245, 0.2)', 
                        color: 'transparent' 
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.WebkitTextStroke = '0px';
                        e.currentTarget.style.color = '#4ecdc4';
                        e.currentTarget.style.textShadow = '0 0 30px rgba(78,205,196,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.WebkitTextStroke = '1.5px rgba(243, 246, 245, 0.2)';
                        e.currentTarget.style.color = 'transparent';
                        e.currentTarget.style.textShadow = 'none';
                      }}
                >
                  {skill}
                </span>
                <span className="text-teal-500/30 text-4xl font-serif italic group-hover:rotate-180 transition-transform duration-700">*</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}