import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ModernLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function ModernLoader({ isVisible, onComplete }: ModernLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 110); // 5.5 seconds total (100 steps × 55ms)

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(onComplete, 200);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0 }
          }}
        >
          {/* Option 1: Minimal Progress Bar */}
          <div className="w-80 max-w-[80vw]">
            <motion.div
              className="text-white text-2xl font-semibold font-['Manrope'] text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              BHAVYA KAPOOR
            </motion.div>
            
            <div className="relative">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.div
                className="text-white/60 text-sm font-medium mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}%
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Option 2: Animated Logo Loader
export function LogoLoader({ isVisible, onComplete }: ModernLoaderProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onComplete, 5500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          <div className="text-center">
            {/* Animated initials */}
            <motion.div
              className="text-8xl font-bold text-white mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              BK
            </motion.div>
            
            {/* Expanding rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 2, 3],
                  opacity: [1, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                style={{
                  width: "200px",
                  height: "200px",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-100px",
                  marginTop: "-100px"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Option 3: Typewriter Effect Loader
export function TypewriterLoader({ isVisible, onComplete }: ModernLoaderProps) {
  const [text, setText] = useState("");
  const fullText = "BHAVYA KAPOOR";
  
  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
        }
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          <div className="text-center">
            <div className="text-6xl font-bold text-white font-['Manrope']">
              {text}
              <motion.span
                className="text-purple-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </div>
            <motion.div
              className="text-lg text-white/60 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Product Designer • Social Media Strategist
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Option 4: Geometric Loader
export function GeometricLoader({ isVisible, onComplete }: ModernLoaderProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onComplete, 5500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          <div className="relative">
            {/* Rotating squares */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border-2 border-gradient-to-r from-purple-400 to-cyan-400"
                style={{
                  borderImage: "linear-gradient(45deg, #a855f7, #22d3ee) 1",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-40px",
                  marginTop: "-40px",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* Center text */}
            <motion.div
              className="text-white text-xl font-semibold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              BK
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}