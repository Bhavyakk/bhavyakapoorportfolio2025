import { motion } from "framer-motion";
import { 
  Figma, 
  Palette, 
  Smartphone, 
  Monitor, 
  Zap, 
  Target, 
  Users, 
  TrendingUp,
  Lightbulb,
  Heart
} from "lucide-react";

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

export function FloatingIcons() {
  const icons = [
    { Icon: Figma, color: "text-purple-400" },
    { Icon: Palette, color: "text-pink-400" },
    { Icon: Smartphone, color: "text-cyan-400" },
    { Icon: Monitor, color: "text-blue-400" },
    { Icon: Zap, color: "text-yellow-400" },
    { Icon: Target, color: "text-red-400" },
    { Icon: Users, color: "text-green-400" },
    { Icon: TrendingUp, color: "text-orange-400" },
    { Icon: Lightbulb, color: "text-amber-400" },
    { Icon: Heart, color: "text-rose-400" }
  ];

  const floatingIcons: FloatingIcon[] = icons.map((icon, index) => ({
    id: index,
    Icon: icon.Icon,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    color: icon.color
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.color} opacity-20`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
}