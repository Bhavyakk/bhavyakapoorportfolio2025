import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Lightbulb } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "./magnetic-button";
import { toggleRoomLight } from "./light-bulb-intro";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLit, setIsLit] = useState(true);

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
    toggleRoomLight();
  };

  const navLinks = ["home", "about", "education", "projects", "contact"];

  return (
    <>
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

          {/* Minimalist Ambient Light Toggle Switch */}
          <MagneticButton
            className="p-2 rounded-full text-white/70 hover:text-amber-300 transition-colors duration-300 hover-target"
            onClick={handleLightClick}
            strength={0.3}
            title="Toggle Ambient Spotlight"
          >
            <Lightbulb
              size={18}
              className={`transition-transform duration-300 ${isLit ? "text-amber-300 fill-amber-300/30 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" : "opacity-50"}`}
            />
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          {/* Mobile Light Toggle Button */}
          <motion.button
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={handleLightClick}
            className="p-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white transition-all shadow-2xl hover-target mix-blend-difference"
            title="Toggle Ambient Spotlight"
          >
            <Lightbulb
              size={18}
              className={`transition-transform duration-300 ${isLit ? "text-amber-300 fill-amber-300/30" : "opacity-50"}`}
            />
          </motion.button>

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
