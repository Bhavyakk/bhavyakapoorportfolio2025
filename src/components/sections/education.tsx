import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { GraduationCap, Award, Users, Trophy, X, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import hackOOctoCertificate from "@assets/hack-o-octo-certificate.jpg";
import nasaSpaceAppsCertificate from "../../assets/nasa-space-apps-certificate-final.jpg";

export function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Global Nominee - Top 10%",
      subtitle: "NASA Space Apps Challenge 2023 (100+ regional teams)",
      color: "from-blue-500 to-purple-600",
      certificateUrl: "", // Add certificate URL here
      certificateImage: nasaSpaceAppsCertificate,
      description: "Achieved top 10% global ranking among 100+ regional teams in NASA's premier hackathon challenge."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Founding Member/ Branding Executive",
      subtitle: "CAC, Chandigarh University (2023–24)",
      color: "from-teal-500 to-cyan-600",
      certificateUrl: "", // Add certificate URL here
      certificateImage: "/cac-certificate.jpg",
      description: "Led branding initiatives as a founding member of the official club \"CAC\" at Chandigarh University."
    }
  ];

  const handleCertificateClick = (highlight: any) => {
    setSelectedCertificate(highlight);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <AnimatedText
              text="Education & Achievements"
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
              delay={0}
            />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
            >
              Building bridges between academic knowledge and creative innovation
            </motion.p>
          </div>

          {/* Education Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Education Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">B.E. in Computer Science</h3>
                    <p className="text-gray-600 font-medium">Chandigarh University</p>
                    <p className="text-gray-500 text-sm">2021-2025</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Explored design and tech side by side — from building interfaces to leading student initiatives.
                </p>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Highlights</h4>
              
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div 
                    className="bg-white/30 backdrop-blur-md rounded-xl p-6 border border-white/40 transition-all duration-200 shadow-lg cursor-pointer"
                    onClick={() => handleCertificateClick(highlight)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${highlight.color} rounded-lg flex items-center justify-center text-white`}>
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 text-lg mb-1">{highlight.title}</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{highlight.subtitle}</p>
                        <p className="text-blue-600 text-xs mt-2 font-medium">Click to view certificate</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            {/* Backdrop - Simplified */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={closeModal}
            />

            {/* Modal Content - Optimized */}
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
                    {selectedCertificate.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
                    <p className="text-white/90">{selectedCertificate.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content - Scrollable - Optimized */}
              <div className="p-6 overflow-y-auto max-h-[70vh]" style={{ willChange: 'scroll-position' }}>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                {/* Certificate Image */}
                {selectedCertificate.certificateImage ? (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Certificate</h4>
                    <img
                      src={selectedCertificate.certificateImage}
                      alt={`${selectedCertificate.title} Certificate`}
                      className="w-full h-auto rounded-lg border border-gray-200 shadow-lg"
                      loading="lazy"
                      style={{ willChange: 'auto' }}
                    />
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 text-center mb-6">
                    <div className="flex flex-col items-center gap-4">
                      <Award className="w-16 h-16 text-gray-400" />
                      <div>
                        <p className="text-gray-600 font-medium">Certificate Available</p>
                        <p className="text-gray-500 text-sm">Upload your certificate to display it here</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                {selectedCertificate.certificateUrl && (
                  <motion.button
                    onClick={() => window.open(selectedCertificate.certificateUrl, '_blank')}
                    className={`w-full bg-gradient-to-r ${selectedCertificate.color} text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-3`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.1 }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}