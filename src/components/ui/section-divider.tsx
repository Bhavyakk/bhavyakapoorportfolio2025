import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "zigzag" | "curve" | "geometric";
  color?: "purple" | "cyan" | "gradient";
  flip?: boolean;
}

export function SectionDivider({ 
  variant = "wave", 
  color = "gradient",
  flip = false 
}: SectionDividerProps) {
  const colorClasses = {
    purple: "fill-purple-500",
    cyan: "fill-cyan-500", 
    gradient: "fill-purple-500"
  };

  const renderShape = () => {
    switch (variant) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1200 120"
            className={`w-full h-12 ${flip ? "rotate-180" : ""}`}
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className={colorClasses[color]}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        );
      
      case "zigzag":
        return (
          <svg
            viewBox="0 0 1200 120"
            className={`w-full h-12 ${flip ? "rotate-180" : ""}`}
          >
            <motion.path
              d="M0,0L60,60L120,0L180,60L240,0L300,60L360,0L420,60L480,0L540,60L600,0L660,60L720,0L780,60L840,0L900,60L960,0L1020,60L1080,0L1140,60L1200,0V120H0V0Z"
              className={colorClasses[color]}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        );
        
      case "curve":
        return (
          <svg
            viewBox="0 0 1200 120"
            className={`w-full h-12 ${flip ? "rotate-180" : ""}`}
          >
            <motion.path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className={colorClasses[color]}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        );
        
      case "geometric":
        return (
          <svg
            viewBox="0 0 1200 120"
            className={`w-full h-12 ${flip ? "rotate-180" : ""}`}
          >
            <motion.path
              d="M0,0L200,60L400,20L600,80L800,40L1000,60L1200,20V120H0V0Z"
              className={colorClasses[color]}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {color === "gradient" && (
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>
      )}
      {renderShape()}
    </div>
  );
}