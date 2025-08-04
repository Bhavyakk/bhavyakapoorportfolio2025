import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

export function GlassCard({ 
  children, 
  className = "", 
  intensity = "medium" 
}: GlassCardProps) {
  const { x, y } = useMousePosition();

  const intensityClasses = {
    light: "bg-white/5 backdrop-blur-sm border-white/10",
    medium: "bg-white/10 backdrop-blur-md border-white/20", 
    strong: "bg-white/20 backdrop-blur-lg border-white/30"
  };

  const calculateTilt = () => {
    if (typeof window === 'undefined') return { rotateX: 0, rotateY: 0 };
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = (y - centerY) / 100;
    const rotateY = (centerX - x) / 100;
    
    return { rotateX, rotateY };
  };

  const { rotateX, rotateY } = calculateTilt();

  return (
    <motion.div
      className={`relative rounded-2xl border ${intensityClasses[intensity]} shadow-2xl ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}