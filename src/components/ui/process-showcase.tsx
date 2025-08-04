import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Users, Search, Palette, TestTube, Target, Lightbulb, ArrowRight } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  outcome: string;
}

interface ProcessShowcaseProps {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  image: string;
  finalImage?: string;
  tags: string[];
  color: "blue" | "purple" | "cyan";
  liveUrl?: string;
  process: ProcessStep[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export function ProcessShowcase({
  title,
  subtitle,
  challenge,
  solution,
  image,
  finalImage,
  tags,
  color,
  liveUrl,
  process,
  metrics
}: ProcessShowcaseProps) {
  const [activeStep, setActiveStep] = useState(0);

  const colorVariants = {
    blue: "from-blue-400 to-cyan-400",
    purple: "from-purple-400 to-pink-400", 
    cyan: "from-cyan-400 to-teal-400"
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/30 rounded-2xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-lg">{subtitle}</p>
        </div>
      </div>

      <div className="p-8">
        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-red-400" />
              <h4 className="text-red-400 font-semibold">Challenge</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{challenge}</p>
          </div>
          
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-5 h-5 text-green-400" />
              <h4 className="text-green-400 font-semibold">Solution</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold bg-gradient-to-r ${colorVariants[color]} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-gray-400 text-xs font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Design Process */}
        <div className="mb-8">
          <h4 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
            <Palette className="w-6 h-6" />
            Design Process
          </h4>
          
          {/* Process Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {process.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeStep === index 
                    ? `bg-gradient-to-r ${colorVariants[color]} text-black` 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 rounded-xl p-6 border border-white/10"
          >
            <div className="flex gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${colorVariants[color]} flex items-center justify-center flex-shrink-0`}>
                {process[activeStep].icon}
              </div>
              <div>
                <h5 className="text-white text-lg font-semibold mb-2">{process[activeStep].title}</h5>
                <p className="text-gray-300 text-sm mb-4">{process[activeStep].description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="text-white font-medium mb-3">Key Activities</h6>
                <ul className="space-y-2">
                  {process[activeStep].details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="text-white font-medium mb-3">Outcome</h6>
                <p className="text-gray-300 text-sm bg-white/5 p-4 rounded-lg border border-white/10">
                  {process[activeStep].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Design Preview */}
        {finalImage && (
          <div className="mb-8">
            <h4 className="text-white text-xl font-bold mb-4">Final Design</h4>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={finalImage}
                alt={`${title} - Final Design`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        )}

        {/* Action Button */}
        {liveUrl && (
          <motion.button
            onClick={() => window.open(liveUrl, '_blank')}
            className={`w-full bg-gradient-to-r ${colorVariants[color]} text-black py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/25`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Project
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </div>
  );
}