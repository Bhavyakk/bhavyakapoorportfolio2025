import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number; // characters per second
  showCursor?: boolean;
  keepCursorAfterComplete?: boolean;
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 15, // 15 characters per second
  showCursor = true,
  keepCursorAfterComplete = false
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            const startTimer = setTimeout(() => {
              setShowBlinkingCursor(true);
              let currentIndex = 0;
              
              const typeInterval = setInterval(() => {
                if (currentIndex <= text.length) {
                  setDisplayText(text.slice(0, currentIndex));
                  currentIndex++;
                } else {
                  clearInterval(typeInterval);
                  setIsComplete(true);
                  // Hide cursor after completion unless explicitly asked to keep it
                  if (!keepCursorAfterComplete) {
                    setTimeout(() => setShowBlinkingCursor(false), 1000);
                  }
                }
              }, 1000 / speed);

              return () => clearInterval(typeInterval);
            }, delay * 1000);

            return () => clearTimeout(startTimer);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [text, delay, speed, hasStarted, keepCursorAfterComplete]);

  return (
    <motion.div
      ref={elementRef}
      className={`${className} ${isComplete ? '' : 'min-h-[1.2em]'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span>{displayText}</span>
      {showCursor && showBlinkingCursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </motion.div>
  );
}
