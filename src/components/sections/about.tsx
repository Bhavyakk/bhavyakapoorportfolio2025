import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
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

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-[#030505]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32">
          <motion.h2 
            style={{ y }}
            className="font-serif text-[15vw] md:text-[10vw] leading-[0.9] text-white/5 uppercase tracking-tighter hover-target hover:text-white/40 transition-colors duration-700"
          >
            Behind the<br/><span className="text-white">Pixels</span>
          </motion.h2>
        </div>

        {/* Scroll Revealed Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          
          <div className="lg:col-span-7 space-y-12">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-4xl md:text-6xl text-white tracking-tight mix-blend-difference mb-8"
            >
              Hi, I'm Bhavya.
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.2 }}
              className="space-y-6 text-base md:text-xl font-light text-[#f3f6f5]/60 leading-relaxed"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white mix-blend-difference hover-target"
              >
                I'm a UI/UX and visual designer focused on making digital experiences look better, function seamlessly, and communicate clearly.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hover-target"
              >
                I love taking rough concepts and shaping them into products people actually connect with. Lately, I've been diving deep into user behavior, exploring how intentional design makes everyday experiences easier.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hover-target"
              >
                Outside the screen, you'll find me traveling, taking photos, or watching cricket. Always open to meeting new people and collaborating on interesting projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-teal-400 font-medium pt-4 hover-target"
              >
                P.S. I'm currently taking on freelance projects. Let's connect!
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm hover-target group">
              <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply" />
              <img 
                src={profileImage} 
                alt="Bhavya Kapoor" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 text-white font-serif text-2xl mix-blend-difference">
                <MapPin className="w-6 h-6 text-teal-400" />
                <span>India</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Kinetic Skills Marquee */}
        <div className="relative py-20 border-y border-white/10 overflow-hidden">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#030505] to-transparent z-10" />
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#030505] to-transparent z-10" />
          
          <div className="flex gap-16 whitespace-nowrap animate-scroll items-center hover-target cursor-ew-resize">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-4xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-100/20 to-white/10 hover:from-teal-400 hover:to-emerald-400 transition-colors duration-500 uppercase tracking-tighter mix-blend-difference">
                  {skill}
                </span>
                <span className="text-teal-500/50 text-3xl font-serif italic">*</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}