import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Users, Clock, Target, Lightbulb, Palette, Code2 } from "lucide-react";

interface CaseStudyStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  color: "blue" | "purple" | "cyan";
  steps: CaseStudyStep[];
  metrics?: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
}

export function CaseStudyCard({
  title,
  subtitle,
  challenge,
  solution,
  image,
  tags,
  color,
  steps,
  metrics,
  liveUrl
}: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorVariants = {
    blue: "from-blue-400 to-cyan-400",
    purple: "from-purple-400 to-pink-400", 
    cyan: "from-cyan-400 to-teal-400"
  };

  return (
    <motion.div
      className="group bg-gray-900/90 backdrop-blur-md border border-gray-700/30 hover:border-gray-500/50 transition-all duration-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      layout
    >
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/10 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Challenge & Solution Overview */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Challenge
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{challenge}</p>
          </div>
          
          <div>
            <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Solution
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Metrics (if provided) */}
        {metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
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

        {/* Process Steps - Expandable */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-700/50">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Design Process
            </h4>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${colorVariants[color]} flex items-center justify-center flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">{step.title}</h5>
                    <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-gray-500 text-xs flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Show Less" : "View Process"}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>

          {liveUrl && (
            <motion.button
              onClick={() => window.open(liveUrl, '_blank')}
              className={`bg-gradient-to-r ${colorVariants[color]} text-black py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code2 className="w-4 h-4" />
              View Work
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}