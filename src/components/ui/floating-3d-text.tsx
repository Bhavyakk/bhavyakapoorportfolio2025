import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface Floating3DTextProps {
  text: string;
  className?: string;
}

export function Floating3DText({ text, className = "" }: Floating3DTextProps) {
  const { x, y } = useMousePosition();
  
  const calculateTransform = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = (y - centerY) / 50;
    const rotateY = (centerX - x) / 50;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transform: calculateTransform(),
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Shadow layers for 3D effect */}
      <div className="absolute inset-0 text-purple-500/30 blur-sm transform translate-x-2 translate-y-2">
        {text}
      </div>
      <div className="absolute inset-0 text-cyan-500/20 blur-md transform translate-x-4 translate-y-4">
        {text}
      </div>
      
      {/* Main text */}
      <div className="relative z-10 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
        {text}
      </div>
      
      {/* Highlight layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-0 hover:opacity-70 transition-opacity duration-300">
        {text}
      </div>
    </motion.div>
  );
}