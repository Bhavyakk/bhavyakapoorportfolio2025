import { motion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
  variant?: "subtle" | "vibrant" | "cosmic";
}

export function AnimatedGradient({ 
  className = "", 
  variant = "subtle" 
}: AnimatedGradientProps) {
  const gradientVariants = {
    subtle: {
      background: [
        "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
        "linear-gradient(90deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))",
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
        "linear-gradient(180deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))"
      ]
    },
    vibrant: {
      background: [
        "linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
        "linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))",
        "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
        "linear-gradient(180deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))"
      ]
    },
    cosmic: {
      background: [
        "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2))",
        "linear-gradient(90deg, rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))",
        "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
        "linear-gradient(180deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))"
      ]
    }
  };

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={{
        background: gradientVariants[variant].background
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}