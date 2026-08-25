import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import profileImage from "../../assets/bhavya-profile-new.jpg";
import { ScrollSectionWrapper } from "@/components/ui/scroll-section-wrapper";

// Line-by-line text reveal component
function RevealParagraph({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  const words = children.split(" ");
  
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.02,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image-specific scroll for parallax zoom
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const skills = [
    "UI/UX Design", "AI Video Specialist", "Figma", "Design Research", 
    "Branding", "Interaction Design", "Prototyping"
  ];

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Split-screen parallax — text and image at different rates
  const yText = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  
  // Image parallax zoom on scroll
  const imageScale = useTransform(imageScrollProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const imageY = useTransform(imageScrollProgress, [0, 1], [-30, 30]);

  return (
    <ScrollSectionWrapper 
      id="about" 
      sectionNumber="02"
      className="py-20 md:py-32 bg-[#030505]"
      parallaxSpeed={[-100, 300]}
    >
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

        {/* Scroll Revealed Bio & Image — split-screen parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          
          <motion.div 
            style={{ y: yText }}
            className="lg:col-span-7 space-y-12 will-change-transform"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-6xl md:text-8xl text-white tracking-tight mix-blend-difference mb-8"
            >
              Hi, I'm Bhavya.
            </motion.h3>
            
            <div className="space-y-6 text-lg md:text-3xl font-light leading-relaxed">
              <RevealParagraph className="text-white mix-blend-difference hover-target">
                I work as a Freelance Visual, UI/UX Designer & AI Video Specialist, with a strong interest in social media, AI content creation, and branding projects. Over the past 2 years, I've worked across B2C web and mobile products, AI video production, branding, and marketing creatives.
              </RevealParagraph>
              <RevealParagraph className="text-[#f3f6f5]/60 hover-target">
                I enjoy the process of taking a rough idea and shaping it into something people can actually use and connect with.
              </RevealParagraph>
              <RevealParagraph className="text-[#f3f6f5]/60 hover-target">
                Outside of work, you'll find me traveling, taking landscape photos, or watching cricket. Always up for meeting new people, learning something new, or working on an interesting project.
              </RevealParagraph>
            </div>

            {/* Animated accent line */}
            <div ref={lineRef} className="pt-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isLineInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="h-[1px] bg-gradient-to-r from-teal-400/60 via-teal-400/20 to-transparent origin-left w-full max-w-md"
              />
            </div>
          </motion.div>

          <motion.div 
            ref={imageRef}
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative will-change-transform"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm hover-target group">
              <div className="absolute inset-0 bg-teal-500/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply" />
              <motion.img 
                src={profileImage} 
                alt="Bhavya Kapoor" 
                loading="lazy"
                decoding="async"
                style={{ scale: imageScale, y: imageY }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 will-change-transform"
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
    </ScrollSectionWrapper>
  );
}