import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorMode = "default" | "hover" | "view";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run cursor logic on devices with a fine pointer (e.g., mouse)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    // Hide default cursor
    document.body.style.cursor = 'none';

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const viewTarget = target.closest('[data-cursor="view"]');
      if (viewTarget) {
        setCursorMode("view");
        return;
      }

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-target")
      ) {
        setCursorMode("hover");
      } else {
        setCursorMode("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ originX: 0.5, originY: 0.5 }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: cursorMode === "hover" ? 1.6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
        mass: 0.5
      }}
    >
      <AnimatePresence mode="wait">
        {cursorMode === "view" ? (
          <motion.div
            key="view"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-20 h-20 -ml-10 -mt-10 rounded-full border border-teal-400 bg-teal-500/10 backdrop-blur-sm"
          >
            <span className="text-white text-xs font-medium tracking-widest uppercase">
              View
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="-ml-1 -mt-1" // offset the tip of the arrow to exact cursor location
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 text-white"
            >
              <path d="M3 3L10.07 19.97L13.58 13.58L19.97 10.07L3 3Z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}