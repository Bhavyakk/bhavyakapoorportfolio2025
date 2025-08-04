import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: "cyan" | "purple" | "blue";
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  color,
  delay = 0
}: ProjectCardProps) {
  const colorClasses = {
    cyan: "text-[hsl(180,100%,50%)]",
    purple: "text-[hsl(270,77%,70%)]",
    blue: "text-[hsl(217,91%,60%)]"
  };

  return (
    <motion.div
      className="glass-morphism p-6 rounded-2xl group relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative overflow-hidden rounded-xl mb-6 border border-white/10 group-hover:border-purple-400/30 transition-all duration-300">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Image overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className={`text-xl font-bold mb-3 ${colorClasses[color]}`}>
        {title}
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="glass-morphism border-[hsl(0,0%,100%,0.2)]"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Enhanced Action Buttons */}
      <div className="flex gap-3 mt-4 relative z-10">
        {liveUrl && liveUrl !== "#" && (
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked, opening URL:', liveUrl);
              window.open(liveUrl, '_blank', 'noopener,noreferrer');
            }}
            className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 flex-1 justify-center overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <ExternalLink className="w-4 h-4 relative z-10" />
            <span className="relative z-10">View Project</span>
          </motion.button>
        )}
        {githubUrl && githubUrl !== "#" && (
          <motion.button
            onClick={() => {
              window.open(githubUrl, '_blank');
            }}
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            Code
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
