import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/use-mouse-position';
import { useEffect, useState } from 'react';

export function AuroraOverlay() {
  const { x, y } = useMousePosition();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isInArsenal, setIsInArsenal] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    const checkArsenalHover = () => {
      const elementAtMouse = document.elementFromPoint(x, y);
      setIsInArsenal(!!elementAtMouse?.closest('[data-arsenal]'));
    };
    
    checkArsenalHover();
  }, [x, y]);

  const gradientX = (x / windowSize.width) * 100;
  const gradientY = (y / windowSize.height) * 100;

  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {/* Main Aurora Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: isInArsenal ? 0 : 0.3,
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, 
            rgba(111, 97, 239, 0.4) 0%, 
            rgba(139, 95, 230, 0.3) 25%, 
            rgba(57, 210, 192, 0.2) 50%, 
            rgba(45, 212, 191, 0.1) 75%, 
            transparent 100%)`,
        }}
        animate={{
          opacity: isInArsenal ? 0 : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Aurora Layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `conic-gradient(from ${gradientX}deg at ${gradientX}% ${gradientY}%, 
            rgba(168, 85, 247, 0.3) 0deg, 
            rgba(6, 182, 212, 0.2) 60deg, 
            rgba(16, 185, 129, 0.2) 120deg, 
            rgba(245, 158, 11, 0.1) 180deg, 
            rgba(239, 68, 68, 0.1) 240deg, 
            rgba(168, 85, 247, 0.3) 360deg)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Light Orbs - Reduced */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            background: `radial-gradient(circle, ${
              ['#6F61EF', '#39D2C0', '#A855F7', '#06B6D4'][i % 4]
            }40, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              -50 + Math.sin(i) * 100,
              50 + Math.cos(i) * 100,
              -50 + Math.sin(i) * 100,
            ],
            y: [
              -30 + Math.cos(i) * 80,
              30 + Math.sin(i) * 80,
              -30 + Math.cos(i) * 80,
            ],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Scanning Lines Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${gradientX}deg, 
            transparent 0%, 
            rgba(111, 97, 239, 0.1) 45%, 
            rgba(57, 210, 192, 0.2) 50%, 
            rgba(111, 97, 239, 0.1) 55%, 
            transparent 100%)`,
        }}
        animate={{
          background: [
            `linear-gradient(0deg, transparent 0%, rgba(111, 97, 239, 0.1) 45%, rgba(57, 210, 192, 0.2) 50%, rgba(111, 97, 239, 0.1) 55%, transparent 100%)`,
            `linear-gradient(90deg, transparent 0%, rgba(111, 97, 239, 0.1) 45%, rgba(57, 210, 192, 0.2) 50%, rgba(111, 97, 239, 0.1) 55%, transparent 100%)`,
            `linear-gradient(180deg, transparent 0%, rgba(111, 97, 239, 0.1) 45%, rgba(57, 210, 192, 0.2) 50%, rgba(111, 97, 239, 0.1) 55%, transparent 100%)`,
            `linear-gradient(270deg, transparent 0%, rgba(111, 97, 239, 0.1) 45%, rgba(57, 210, 192, 0.2) 50%, rgba(111, 97, 239, 0.1) 55%, transparent 100%)`,
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}