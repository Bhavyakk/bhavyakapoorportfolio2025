import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: "blue" | "purple" | "cyan";
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const colorVariants = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    hover: "hover:shadow-blue-500/25",
    border: "border-blue-500/30",
    tag: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  purple: {
    gradient: "from-purple-500 to-pink-500", 
    hover: "hover:shadow-purple-500/25",
    border: "border-purple-500/30",
    tag: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  cyan: {
    gradient: "from-cyan-500 to-teal-500",
    hover: "hover:shadow-cyan-500/25", 
    border: "border-cyan-500/30",
    tag: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
  }
};

export function EnhancedProjectCard({ title, description, image, tags, color, liveUrl, githubUrl, index }: ProjectCardProps) {
  const variants = colorVariants[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className={`relative bg-gray-900/50 backdrop-blur-sm border ${variants.border} rounded-2xl overflow-hidden transition-all duration-500 ${variants.hover} hover:scale-[1.02] cursor-pointer`}>
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${variants.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
        
        {/* Image Container with Improved Loading */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          
          {/* Preview Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="flex items-center space-x-4"
            >
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${variants.gradient} text-white rounded-full font-medium hover:scale-105 transition-transform`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${variants.tag} transition-all duration-300 hover:scale-105`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Button */}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group/link"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm font-medium">Explore Project</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}