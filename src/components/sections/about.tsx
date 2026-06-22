import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
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

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-14 hover-target group hover:bg-white/[0.05] transition-colors duration-500"
          >
            <h3 className="font-serif text-5xl md:text-7xl text-white tracking-tight mb-8 mix-blend-difference">
              Hi, I'm Bhavya.
            </h3>
            <div className="space-y-6 text-lg md:text-2xl font-light text-[#f3f6f5]/70 leading-relaxed">
              <p className="text-white mix-blend-difference">
                I'm a UI/UX and visual designer focused on making digital experiences look better, function seamlessly, and communicate clearly.
              </p>
              <p>
                I love taking rough concepts and shaping them into products people actually connect with. Lately, I've been diving deep into user behavior, exploring how intentional design makes everyday experiences easier.
              </p>
              <p>
                Outside the screen, you'll find me traveling, taking photos, or watching cricket. Always open to meeting new people and collaborating on interesting projects.
              </p>
            </div>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto hover-target group"
          >
            <img 
              src={profileImage} 
              alt="Bhavya Kapoor" 
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border border-teal-500/20 rounded-[2rem] p-8 flex flex-col justify-center items-center hover-target group hover:border-teal-500/40 transition-colors duration-500"
          >
             <div className="text-7xl font-serif text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-500">3+</div>
             <div className="text-xs md:text-sm font-mono text-white/60 uppercase tracking-widest text-center">Years Experience</div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center items-center hover-target group hover:bg-white/[0.05] transition-colors duration-500"
          >
             <MapPin className="w-12 h-12 text-white/40 mb-4 group-hover:text-white transition-colors duration-500" />
             <div className="text-2xl font-serif text-white mb-1">Based in India</div>
             <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Working Globally</div>
          </motion.div>

          {/* Freelance Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex items-center gap-6 hover-target group hover:bg-white/[0.05] transition-colors duration-500"
          >
             <div className="relative flex h-8 w-8 flex-shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
               <span className="relative inline-flex rounded-full h-8 w-8 bg-emerald-500 border-2 border-[#030505]"></span>
             </div>
             <div>
               <div className="text-3xl font-serif text-white mb-2 mix-blend-difference">Available for Freelance</div>
               <div className="text-sm font-mono text-white/50 uppercase tracking-wider">Let's build something together</div>
             </div>
          </motion.div>

        </div>

        {/* Kinetic Skills Marquee */}
        <div className="relative py-20 border-y border-white/10 overflow-hidden">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#030505] to-transparent z-10" />
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#030505] to-transparent z-10" />
          
          <div className="flex gap-16 whitespace-nowrap animate-scroll items-center hover-target cursor-ew-resize">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="flex items-center gap-8 group">
                <span className="text-4xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/10 group-hover:from-teal-400 group-hover:to-emerald-400 transition-colors duration-500 uppercase tracking-tighter mix-blend-difference">
                  {skill}
                </span>
                <span className="text-teal-500/50 text-3xl font-serif italic group-hover:rotate-180 transition-transform duration-700">*</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}