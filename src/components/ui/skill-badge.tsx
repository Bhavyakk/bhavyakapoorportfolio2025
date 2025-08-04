import { motion } from "framer-motion";
import { Palette, Figma, Layers, Search, Award, Smartphone, Image } from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  level: number;
  icon: string;
  color: "cyan" | "purple" | "blue";
  delay?: number;
}

const iconMap = {
  Palette,
  Figma,
  Layers,
  Search,
  Award,
  Smartphone,
  Image,
};

export function SkillBadge({ skill, level, icon, color, delay = 0 }: SkillBadgeProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  
  const colorClasses = {
    cyan: "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:border-cyan-200",
    purple: "hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-200",
    blue: "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200"
  };

  const progressColors = {
    cyan: "bg-[hsl(180,100%,50%)]",
    purple: "bg-[hsl(270,77%,70%)]",
    blue: "bg-[hsl(217,91%,60%)]"
  };

  return (
    <motion.div
      className={`relative bg-white/40 backdrop-blur-md p-6 rounded-xl text-center transition-all duration-200 border border-white/30 overflow-hidden shadow-xl ${colorClasses[color]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative z-10">
        <div className="mb-4 p-3 mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          {IconComponent && <IconComponent className="w-8 h-8 text-gray-600" />}
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">{skill}</h4>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className={`h-3 rounded-full transition-all duration-500 ${progressColors[color]}`}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ delay: delay + 0.5, duration: 0.8 }}
          />
        </div>
      </div>
    </motion.div>
  );
}