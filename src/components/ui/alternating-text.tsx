import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlternatingTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  switchInterval?: number;
}

export function AlternatingText({ 
  texts, 
  className = "", 
  delay = 0, 
  switchInterval = 3000 
}: AlternatingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Start animation after delay
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  // Switch between texts
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, switchInterval);

    return () => clearInterval(interval);
  }, [isVisible, texts.length, switchInterval]);

  if (!isVisible) {
    return <span className={className} style={{ opacity: 0 }}>{texts[0]}</span>;
  }

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-gradient bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent inline-block"
        >
          {texts[currentTextIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}