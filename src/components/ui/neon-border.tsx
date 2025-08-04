import { motion } from "framer-motion";
import { useState } from "react";

interface NeonBorderProps {
  children: React.ReactNode;
  color?: "purple" | "cyan" | "blue";
  className?: string;
}

export function NeonBorder({ children, color = "purple", className = "" }: NeonBorderProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorVariants = {
    purple: {
      border: "border-purple-500/50",
      shadow: "shadow-purple-500/50",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
    },
    cyan: {
      border: "border-cyan-500/50", 
      shadow: "shadow-cyan-500/50",
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.5)]"
    },
    blue: {
      border: "border-blue-500/50",
      shadow: "shadow-blue-500/50", 
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]"
    }
  };

  return (
    <motion.div
      className={`relative border-2 rounded-lg transition-all duration-300 ${colorVariants[color].border} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered 
          ? `0 0 20px rgba(${color === 'purple' ? '168,85,247' : color === 'cyan' ? '34,211,238' : '59,130,246'}, 0.8)`
          : `0 0 10px rgba(${color === 'purple' ? '168,85,247' : color === 'cyan' ? '34,211,238' : '59,130,246'}, 0.3)`
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg opacity-30">
        <div 
          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${
            color === 'purple' ? 'from-purple-500 via-pink-500 to-purple-500' :
            color === 'cyan' ? 'from-cyan-500 via-teal-500 to-cyan-500' :
            'from-blue-500 via-indigo-500 to-blue-500'
          } animate-pulse`}
          style={{
            background: `conic-gradient(${
              color === 'purple' ? '#a855f7, #ec4899, #a855f7' :
              color === 'cyan' ? '#22d3ee, #14b8a6, #22d3ee' :
              '#3b82f6, #6366f1, #3b82f6'
            })`,
            filter: 'blur(1px)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 bg-black/80 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
}