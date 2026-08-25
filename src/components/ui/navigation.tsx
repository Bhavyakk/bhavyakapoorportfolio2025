import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import { MagneticButton } from "./magnetic-button";
import { toggleRoomLight } from "./light-bulb-intro";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLit, setIsLit] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  // Start attention animations after intro completes
  useEffect(() => {
    if (hasInteracted) return;

    const pulseTimer = setTimeout(() => {
      setPulseActive(true);
    }, 3000);

    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 4000);

    const hideHintTimer = setTimeout(() => {
      setShowHint(false);
    }, 8000);

    const showHintAgain = setTimeout(() => {
      if (!hasInteracted) setShowHint(true);
    }, 12000);

    const hideAgain = setTimeout(() => {
      setShowHint(false);
    }, 16000);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(hintTimer);
      clearTimeout(hideHintTimer);
      clearTimeout(showHintAgain);
      clearTimeout(hideAgain);
    };
  }, [hasInteracted]);

  // Hide nav on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLightClick = () => {
    setIsLit(!isLit);
    setHasInteracted(true);
    setShowHint(false);
    setPulseActive(false);
    toggleRoomLight();
  };

  const navLinks = ["home", "about", "education", "projects", "contact"];

  // Bulb wiggle animation variants
  const bulbWiggle = !hasInteracted && pulseActive
    ? {
        rotate: [0, -12, 12, -8, 8, -4, 0],
        scale: [1, 1.15, 1.1, 1.15, 1.1, 1.05, 1],
      }
    : {};

  const bulbWiggleTransition = !hasInteracted && pulseActive
    ? {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut" as const,
      }
    : {};

  return (
    <>
      {/* Bulb attention pulse keyframes */}
      <style>{`
        @keyframes bulb-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        @keyframes bulb-ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          70% {
            transform: scale(2.8);
            opacity: 0;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        .bulb-pulse-ring {
          animation: bulb-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .bulb-pulse-ring-slow {
          animation: bulb-ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Desktop Navigation */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center mix-blend-difference"
      >
        <div className="bg-transparent px-8 py-4 flex items-center space-x-8">
          {navLinks.map((section) => (
            <MagneticButton
              key={section}
              className="relative text-sm font-medium text-[#f3f6f5] uppercase tracking-[0.2em] transition-colors duration-300 hover-target"
              onClick={() => scrollToSection(section)}
              strength={0.2}
            >
              {section}
            </MagneticButton>
          ))}

          {/* Minimalist Ambient Light Toggle Switch — with attention animations */}
          <div className="relative">
            <MagneticButton
              className="p-2 rounded-full text-white/70 hover:text-amber-300 transition-colors duration-300 hover-target relative z-10"
              onClick={handleLightClick}
              strength={0.3}
              title="Toggle Ambient Spotlight"
            >
              {/* Pulsing glow rings to draw attention */}
              {!hasInteracted && pulseActive && (
                <>
                  <span className="absolute inset-0 rounded-full bg-amber-400/30 bulb-pulse-ring" />
                  <span className="absolute inset-0 rounded-full bg-amber-300/20 bulb-pulse-ring-slow" />
                </>
              )}
              <motion.span
                animate={bulbWiggle}
                transition={bulbWiggleTransition}
                className="inline-flex"
              >
                <Lightbulb
                  size={18}
                  className={`transition-all duration-300 ${isLit ? "text-amber-300 fill-amber-300/30 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" : "opacity-50"}`}
                />
              </motion.span>
            </MagneticButton>

            {/* "try me" hint tooltip */}
            <AnimatePresence>
              {showHint && !hasInteracted && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-amber-400/90 text-black text-[10px] font-bold tracking-widest uppercase shadow-lg pointer-events-none z-30 whitespace-nowrap"
                >
                  try me ✨
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400/90 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          {/* Mobile Light Toggle Button — with attention animations */}
          <div className="relative">
            <motion.button
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
              }}
              animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onClick={handleLightClick}
              className="relative p-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white transition-all shadow-2xl hover-target mix-blend-difference z-10"
              title="Toggle Ambient Spotlight"
            >
              {/* Pulsing glow rings for mobile */}
              {!hasInteracted && pulseActive && (
                <>
                  <span className="absolute inset-0 rounded-full bg-amber-400/30 bulb-pulse-ring" />
                  <span className="absolute inset-0 rounded-full bg-amber-300/20 bulb-pulse-ring-slow" />
                </>
              )}
              <motion.span
                animate={bulbWiggle}
                transition={bulbWiggleTransition}
                className="inline-flex"
              >
                <Lightbulb
                  size={18}
                  className={`transition-all duration-300 ${isLit ? "text-amber-300 fill-amber-300/30" : "opacity-50"}`}
                />
              </motion.span>
            </motion.button>

            {/* "try me" hint for mobile */}
            <AnimatePresence>
              {showHint && !hasInteracted && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-amber-400/90 text-black text-[9px] font-bold tracking-widest uppercase shadow-lg pointer-events-none z-30 whitespace-nowrap"
                >
                  try me ✨
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400/90 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white transition-all shadow-2xl hover-target mix-blend-difference"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Sidebar */}
        <motion.div
          className={`fixed inset-0 z-40 bg-[#030505]/90 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <motion.div
          className={`fixed top-0 right-0 h-full w-72 bg-[#030505] border-l border-white/5 z-50 transition-transform duration-500 ease-[0.22,1,0.36,1] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24 h-full flex flex-col space-y-8">
            {navLinks.map((section, i) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="text-left text-4xl font-serif text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-tighter hover-target"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
