import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, Zap, Code, Palette, Target, X, FileText } from 'lucide-react';

interface ExperienceItem {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  isActive: boolean;
  color: string;
  certificateImage?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "Oct 2024 – Present",
    title: "Design Intern",
    company: "Salvation Health-Tech Pvt. Ltd. (Duuet)",
    location: "Remote",
    description: "Revamping key app flows and building comprehensive design systems. Creating 50+ wireframes and prototypes while ensuring visual consistency during developer handoff.",
    isActive: true,
    color: "from-emerald-400 to-cyan-500"
  },
  {
    id: 2,
    period: "Jun 2023 – Apr 2024",
    title: "UI/UX Intern",
    company: "Chandigarh University",
    location: "Punjab, India",
    description: "Designed UI for internal platforms and hackathons used by 500+ students. Delivered assets and design files for 20+ events under short timelines.",
    isActive: false,
    color: "from-purple-500 to-pink-500",
    certificateImage: "/chandigarh-internship-certificate.jpg"
  }
];

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (experience: ExperienceItem) => {
    if (experience.certificateImage) {
      setSelectedCertificate(experience);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              style={{
                top: `${10 + i * 12}%`,
                left: '0%',
                right: '0%',
              }}
              animate={{
                scaleX: [0, 1, 0],
                x: ['-100%', '0%', '100%'],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 font-medium text-sm mb-6 border border-cyan-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4" />
            Career Evolution
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

        </motion.div>

        {/* Futuristic Experience Grid */}
        <div className="relative z-10">
          {/* Energy Connection Line */}
          <motion.div 
            className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-purple-500/0 via-cyan-400 to-purple-500/0 transform -translate-y-1/2 hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative group"
                initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {/* Clean Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 p-8 overflow-hidden"
                >
                  {/* Subtle Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${experience.color} opacity-5`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Status Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {experience.isActive ? (
                          <motion.div
                            className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30"
                            animate={{ 
                              boxShadow: [
                                "0 0 20px rgba(16, 185, 129, 0.3)",
                                "0 0 40px rgba(16, 185, 129, 0.6)",
                                "0 0 20px rgba(16, 185, 129, 0.3)",
                              ]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-emerald-400 rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                            ACTIVE
                          </motion.div>
                        ) : (
                          <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            COMPLETED
                          </div>
                        )}
                        
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center`}
                        >
                          {index === 0 ? <Palette className="w-4 h-4 text-white" /> : <Code className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                      
                      <motion.div
                        className="text-cyan-400 text-sm font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        #{String(experience.id).padStart(2, '0')}
                      </motion.div>
                    </div>

                    {/* Period */}
                    <motion.div 
                      className="text-cyan-400 text-sm font-mono mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-2`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {experience.title}
                    </motion.h3>

                    {/* Company */}
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {experience.company}
                    </motion.h4>
                    
                    {/* Location */}
                    <motion.div 
                      className="flex items-center gap-2 text-gray-400 text-sm mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                    >
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {experience.description}
                    </motion.p>
                    
                    {/* Certificate Button */}
                    {experience.certificateImage && (
                      <motion.div 
                        className="mt-6 flex justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        <motion.button
                          onClick={() => handleCertificateClick(experience)}
                          className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FileText className="w-3 h-3" />
                          Certificate
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-150"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedCertificate.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
                    <p className="text-white/90">{selectedCertificate.company}</p>
                    <p className="text-white/70 text-sm">{selectedCertificate.period}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                {/* Certificate Image */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Internship Certificate</h4>
                  <img
                    src={selectedCertificate.certificateImage}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="w-full h-auto rounded-lg border border-gray-200 shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}