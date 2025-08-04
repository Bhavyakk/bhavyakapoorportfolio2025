import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

export function GlitchText({ text, className = "", glitchOnHover = false }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setGlitchText(prev => 
        prev.split('').map((char, index) => {
          if (Math.random() < 0.3) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return text[index] || char;
        }).join('')
      );
      
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setGlitchText(text);
        setIsGlitching(false);
      }
    }, 50);
  };

  useEffect(() => {
    if (!glitchOnHover) {
      const timer = setInterval(triggerGlitch, 3000 + Math.random() * 2000);
      return () => clearInterval(timer);
    }
  }, [glitchOnHover]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
      style={{
        filter: isGlitching ? 'hue-rotate(90deg) saturate(1.5)' : 'none',
        textShadow: isGlitching ? 
          '2px 0 #ff0000, -2px 0 #00ff00, 0 2px #0000ff' : 
          'none'
      }}
    >
      {glitchText}
      
      {/* Data stream overlay */}
      {isGlitching && (
        <span className="absolute inset-0 opacity-60 text-cyan-400 animate-pulse">
          {glitchText}
        </span>
      )}
    </motion.span>
  );
}