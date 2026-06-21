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
    cyan: "hover:border-teal-500/40 hover:bg-teal-900/20",
    purple: "hover:border-teal-400/40 hover:bg-teal-900/20",
    blue: "hover:border-emerald-500/40 hover:bg-emerald-900/20"
  };

  const progressColors = {
    cyan: "bg-gradient-to-r from-teal-400 to-cyan-400",
    purple: "bg-gradient-to-r from-teal-500 to-teal-300",
    blue: "bg-gradient-to-r from-emerald-500 to-teal-400"
  };

  return (
    <motion.div
      className={`relative bg-white/5 backdrop-blur-md p-6 rounded-xl text-center transition-all duration-200 border border-white/10 overflow-hidden shadow-xl ${colorClasses[color]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative z-10">
        <div className="mb-4 p-3 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          {IconComponent && <IconComponent className="w-8 h-8 text-teal-400" />}
        </div>
        <h4 className="font-semibold text-lg mb-3 text-white/90">{skill}</h4>
        <div className="w-full bg-white/10 rounded-full h-3">
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