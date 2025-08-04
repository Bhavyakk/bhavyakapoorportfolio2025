import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

interface SpaceshipLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function SpaceshipLoader({ isVisible, onComplete }: SpaceshipLoaderProps) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0, ease: "easeInOut" }
          }}
        >


          {/* Moving spaceship */}
          <motion.div
            className="fixed z-10 bottom-10 left-0"
            initial={{ x: -100, y: 0, rotate: -45 }}
            animate={{ 
              x: window.innerWidth + 100,
              y: -window.innerHeight - 100,
              rotate: [-45, -40, -50, -45],
            }}
            transition={{ 
              x: { duration: 5.5, ease: "easeInOut" },
              y: { duration: 5.5, ease: "easeInOut" },
              rotate: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
            }}
            onAnimationComplete={() => {
              // Spaceship completed, trigger loader exit
            }}
          >
            {/* Spaceship body */}
            <div className="relative">
              {/* Main rocket */}
              <Rocket className="w-16 h-16 text-white transform rotate-45" />
              
              {/* Rocket trail */}
              <motion.div
                className="absolute -left-8 top-1/2 transform -translate-y-1/2"
                animate={{
                  opacity: [0.8, 0.4, 0.8],
                  scaleX: [1, 1.5, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-12 h-2 bg-gradient-to-r from-purple-400 via-teal-400 to-transparent rounded-full blur-sm" />
                <div className="w-8 h-1 bg-gradient-to-r from-purple-300 via-teal-300 to-transparent rounded-full blur-sm mt-1" />
              </motion.div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full blur-lg opacity-50 animate-pulse" />
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex justify-center pb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="text-white text-xl font-semibold font-['Manrope']">Loading Portfolio</div>
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}