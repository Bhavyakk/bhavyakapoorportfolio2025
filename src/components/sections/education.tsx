import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, Users, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
import nasaSpaceAppsCertificate from "../../assets/nasa-space-apps-certificate-final.jpg";

export function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timelineItems = [
    {
      id: 1,
      type: "education",
      date: "2021 — 2025",
      title: "B.E. in Computer Science",
      organization: "Chandigarh University",
      description: "Explored design and tech side by side — from building interfaces to leading student initiatives. Focused on the intersection of human-computer interaction and scalable engineering.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "text-teal-400",
      bgGlow: "bg-teal-500/20"
    },
    {
      id: 2,
      type: "achievement",
      date: "2023",
      title: "Global Nominee - Top 10%",
      organization: "NASA Space Apps Challenge",
      description: "Achieved top 10% global ranking among 100+ regional teams in NASA's premier hackathon challenge.",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-emerald-400",
      bgGlow: "bg-emerald-500/20",
      certificateImage: nasaSpaceAppsCertificate
    },
    {
      id: 3,
      type: "leadership",
      date: "2023 — 2024",
      title: "Founding Member & Branding Executive",
      organization: "CAC, Chandigarh University",
      description: "Led branding initiatives as a founding member of the official club 'CAC'. Orchestrated visual identity and marketing strategies for large-scale university events.",
      icon: <Users className="w-5 h-5" />,
      color: "text-teal-200",
      bgGlow: "bg-teal-200/20",
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
    <section id="education" className="py-32 bg-noise relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex justify-between items-end border-b border-white/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-white"
          >
            Journey.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block text-gray-500 uppercase tracking-widest text-sm font-medium"
          >
            Education & Milestones
          </motion.p>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-500/0 via-teal-500/20 to-teal-500/0 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-500/0 via-teal-500/20 to-teal-500/0 md:hidden" />

          <div className="space-y-12 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  
                  {/* Left Content (or top on mobile) */}
                  <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isEven ? 'md:justify-end md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <div 
                      className={`group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500 w-full ${item.certificateImage ? 'cursor-pointer' : ''}`}
                      onClick={() => handleCertificateClick(item)}
                    >
                      {/* Ambient Glow on hover */}
                      <div className={`absolute inset-0 rounded-3xl ${item.bgGlow} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                      
                      <div className="relative z-10">
                        <span className="text-sm font-medium text-gray-500 mb-2 block">{item.date}</span>
                        <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-teal-300 transition-colors">{item.title}</h3>
                        <p className={`font-medium mb-4 ${item.color}`}>{item.organization}</p>
                        <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                        
                        {item.certificateImage && (
                          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest font-medium group-hover:text-white transition-colors">
                            <span>View Certificate</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#030505] border-2 border-white/10 flex items-center justify-center z-10 relative">
                      <div className={`absolute inset-0 rounded-full ${item.bgGlow} blur-md`} />
                      <div className={`relative z-10 ${item.color}`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modern Minimal Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={closeModal} />
            
            <motion.div
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <div>
                  <h3 className="font-serif text-2xl text-white">{selectedCertificate.title}</h3>
                  <p className="text-gray-500 text-sm">{selectedCertificate.organization}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto bg-noise">
                <img
                  src={selectedCertificate.certificateImage}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="w-full h-auto rounded-lg shadow-2xl border border-white/5"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}