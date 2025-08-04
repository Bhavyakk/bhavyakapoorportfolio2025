import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronRight, Target, Lightbulb, ExternalLink } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  outcome: string;
  image?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    challenge: string;
    solution: string;
    image: string;
    tags: string[];
    color: "blue" | "purple" | "cyan";
    liveUrl?: string;
    role?: string;
    company?: string;
    duration?: string;
    timeline?: string;
    team?: string;
    keyActivities?: {
      title: string;
      description: string;
    }[];
    process: ProcessStep[];
    metrics?: {
      label: string;
      value: string;
    }[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [activeStep, setActiveStep] = useState(0);

  const colorVariants = {
    blue: "from-blue-400 to-cyan-400",
    purple: "from-purple-400 to-pink-400", 
    cyan: "from-cyan-400 to-teal-400"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-200 text-xl">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                {/* Project Details */}
                {(project.role || project.company || project.duration || project.timeline || project.team) && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                    {project.role && (
                      <div>
                        <div className="text-gray-400 text-sm font-medium mb-1">Role</div>
                        <div className="text-white font-medium">{project.role}</div>
                      </div>
                    )}
                    {project.company && (
                      <div>
                        <div className="text-gray-400 text-sm font-medium mb-1">Company</div>
                        <div className="text-white font-medium">{project.company}</div>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <div className="text-gray-400 text-sm font-medium mb-1">Duration</div>
                        <div className="text-white font-medium">{project.duration}</div>
                      </div>
                    )}
                    {project.timeline && (
                      <div>
                        <div className="text-gray-400 text-sm font-medium mb-1">Timeline</div>
                        <div className="text-white font-medium">{project.timeline}</div>
                      </div>
                    )}
                    {project.team && (
                      <div>
                        <div className="text-gray-400 text-sm font-medium mb-1">Team</div>
                        <div className="text-white font-medium">{project.team}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-5 h-5 text-red-400" />
                      <h3 className="text-red-400 font-semibold text-lg">Challenge</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="w-5 h-5 text-green-400" />
                      <h3 className="text-green-400 font-semibold text-lg">Solution</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${colorVariants[project.color]} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Activities */}
                {project.keyActivities && project.keyActivities.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-white text-2xl font-bold mb-6">Key Activities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.keyActivities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                        >
                          <h4 className={`font-semibold mb-2 bg-gradient-to-r ${colorVariants[project.color]} bg-clip-text text-transparent`}>
                            {activity.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {activity.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}



                {/* Design Process */}
                <div className="mb-8">
                  <h3 className="text-white text-2xl font-bold mb-6">Design Process</h3>
                  
                  {/* Process Navigation */}
                  {project.process && project.process.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.process.map((step, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            activeStep === index 
                              ? `bg-gradient-to-r ${colorVariants[project.color]} text-black` 
                              : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          {index + 1}. {step.title}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Active Step Content */}
                  {project.process && project.process.length > 0 && project.process[activeStep] && (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/5 rounded-xl p-6 border border-white/10"
                    >
                      <div className="flex gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colorVariants[project.color]} flex items-center justify-center flex-shrink-0`}>
                          {project.process[activeStep].icon}
                        </div>
                        <div>
                          <h4 className="text-white text-xl font-semibold mb-2">{project.process[activeStep].title}</h4>
                          <p className="text-gray-300">{project.process[activeStep].description}</p>
                        </div>
                      </div>
                      
                      {/* Process Image */}
                      {project.process[activeStep].image && (
                        <div className="mb-6">
                          <img
                            src={project.process[activeStep].image}
                            alt={`${project.process[activeStep].title} process`}
                            className="w-full h-48 md:h-64 object-cover rounded-lg border border-white/20"
                          />
                        </div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-white font-medium mb-3">Key Activities</h5>
                          <ul className="space-y-3">
                            {project.process[activeStep].details && project.process[activeStep].details.map((detail, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-3">
                                <ChevronRight className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-3">Outcome</h5>
                          <p className="text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10 leading-relaxed">
                            {project.process[activeStep].outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action Button */}
                {project.liveUrl && (
                  <motion.button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className={`w-full bg-gradient-to-r ${colorVariants[project.color]} text-black py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Full Project
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}