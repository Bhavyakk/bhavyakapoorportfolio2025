import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function SpotlightEffect() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is over arsenal section
      const elementAtMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isInArsenal = !!elementAtMouse?.closest('[data-arsenal]');
      
      if (isInArsenal) {
        setIsVisible(false);
        return;
      }
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: isVisible 
          ? `radial-gradient(600px circle at ${mouseXSpring.get()}px ${mouseYSpring.get()}px, rgba(139, 92, 246, 0.15), transparent 40%)`
          : "transparent",
      }}
    />
  );
}