import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, Users, ExternalLink, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import nasaSpaceAppsCertificate from "../../assets/nasa-space-apps-certificate-final.jpg";
import { ScrollSectionWrapper } from "@/components/ui/scroll-section-wrapper";

export function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 400]);

  const timelineItems = [
    {
      id: 1,
      type: "education",
      date: "2021 — 2025",
      title: "Computer Science",
      organization: "Chandigarh University",
      description: "Explored design and tech side by side — from building interfaces to leading student initiatives. Focused on the intersection of human-computer interaction and scalable engineering.",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      id: 2,
      type: "achievement",
      date: "2023",
      title: "Global Nominee",
      organization: "NASA Space Apps",
      description: "Achieved top 10% global ranking among 100+ regional teams in NASA's premier hackathon challenge.",
      icon: <Trophy className="w-8 h-8" />,
      certificateImage: nasaSpaceAppsCertificate
    },
    {
      id: 3,
      type: "leadership",
      date: "2023 — 2024",
      title: "Founding Member",
      organization: "CAC Club",
      description: "Led branding initiatives as a founding member. Orchestrated visual identity and marketing strategies for large-scale university events.",
      icon: <Users className="w-8 h-8" />,
      certificateImage: "/cac-certificate.jpg"
    }
  ];

  const handleCertificateClick = (item: any) => {
    if (item.certificateImage) {
      setSelectedCertificate(item);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <ScrollSectionWrapper 
      id="education" 
      sectionNumber="03"
      className="py-24 md:py-40 bg-[#030505]"
      parallaxSpeed={[-50, 200]}
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Timeline drawing animation */}
        <motion.div
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className="absolute left-[30px] md:left-[33.33%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-500 via-teal-400/50 to-transparent hidden md:block"
        />

        <div className="space-y-32 md:space-y-64 mt-16 md:mt-0 relative">
          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
            >
              <div className="w-full md:w-1/3 flex flex-col gap-6 items-start relative z-10">
                <motion.div 
                  initial={{ boxShadow: "0 0 0px rgba(42, 157, 143, 0)" }}
                  whileInView={{ boxShadow: ["0 0 0px rgba(42, 157, 143, 0)", "0 0 30px rgba(42, 157, 143, 0.8)", "0 0 0px rgba(42, 157, 143, 0)"] }}
                  transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1], repeat: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="text-teal-500 mix-blend-difference bg-[#030505] p-2 rounded-full"
                >
                  {item.icon}
                </motion.div>
                
                {/* Floating Date Badge with Parallax lag */}
                <motion.h3 
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, index * 60 - 30]) }}
                  className="font-serif text-5xl md:text-7xl text-white/20 tracking-tighter mix-blend-difference will-change-transform"
                >
                  {item.date}
                </motion.h3>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-8">
                <h4 className="font-serif text-5xl sm:text-6xl md:text-8xl text-white leading-[1.1] md:leading-[0.9] tracking-tighter mix-blend-difference">
                  {item.title}
                </h4>
                <div className="flex flex-col gap-4">
                  <span className="text-xl md:text-2xl font-light tracking-widest uppercase text-teal-400">
                    {item.organization}
                  </span>
                  <p className="text-2xl md:text-3xl text-[#f3f6f5]/60 font-light leading-relaxed max-w-2xl hover-target">
                    {item.description}
                  </p>
                </div>

                {item.certificateImage && (
                  <motion.button
                    onClick={() => handleCertificateClick(item)}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-4 text-white uppercase tracking-[0.2em] font-medium mt-8 hover-target group w-fit"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-colors duration-500">
                      <ExternalLink className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
                    </div>
                    <span className="group-hover:text-teal-400 transition-colors duration-500">View Certificate</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Minimal Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black/80" onClick={closeModal} />
            
            <motion.div
              className="relative w-full max-w-5xl bg-transparent flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 mb-8 bg-[#030505]/50 backdrop-blur-md rounded-t-2xl">
                <div>
                  <h3 className="font-serif text-3xl md:text-5xl text-white">{selectedCertificate.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors text-white backdrop-blur-md hover-target"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="overflow-y-auto px-6 pb-6">
                <img
                  src={selectedCertificate.certificateImage}
                  alt={`${selectedCertificate.title} Certificate`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollSectionWrapper>
  );
}