import { motion } from "framer-motion";

interface QuantumLoaderProps {
  size?: number;
  color?: string;
}

export function QuantumLoader({ size = 40, color = "#818cf8" }: QuantumLoaderProps) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 border-2 rounded-full"
        style={{ borderColor: `${color}40` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle ring */}
      <motion.div
        className="absolute inset-2 border-2 rounded-full"
        style={{ borderColor: `${color}60`, borderTopColor: color }}
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner ring */}
      <motion.div
        className="absolute inset-4 border-2 rounded-full"
        style={{ borderColor: `${color}80`, borderRightColor: color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: color }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      
      {/* Quantum particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: color,
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * (size / 2 - 5)],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * (size / 2 - 5)],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}