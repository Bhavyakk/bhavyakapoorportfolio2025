import { motion } from "framer-motion";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: "purple" | "cyan" | "rainbow";
  speed?: number;
}

export function AnimatedBorder({ 
  children, 
  className = "", 
  color = "purple",
  speed = 3
}: AnimatedBorderProps) {
  const colorClasses = {
    purple: "from-purple-500 to-pink-500",
    cyan: "from-cyan-500 to-blue-500",
    rainbow: "from-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-cyan-500 to-blue-500"
  };

  return (
    <div className={`relative p-0.5 rounded-2xl ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses[color]} opacity-75`}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Inner content with background */}
      <div className="relative bg-black rounded-2xl">
        {children}
      </div>
    </div>
  );
}