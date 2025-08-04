import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Detect white sections (About and Education) based on scroll position
  // Hero section: 0-1vh (black), About: 1-2vh (light), Education: 2-3vh (white), Projects: 3-4vh (black), Contact: 4+vh (black)
  const isOverWhiteSection = scrollY > window.innerHeight * 0.8 && scrollY < window.innerHeight * 3;

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-6 right-6 z-50 transition-all duration-300 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-pill mx-auto max-w-4xl px-4 md:px-8 py-4 md:py-6 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-2xl">
          {/* Navigation Links */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {["home", "about", "education", "experience", "projects", "contact"].map((section) => (
              <motion.button
                key={section}
                className={`transition-all duration-300 capitalize text-sm md:text-lg font-medium ${
                  isOverWhiteSection 
                    ? "text-black hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-400 hover:bg-clip-text" 
                    : "text-white hover:text-purple-400"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 right-6 z-50 p-3 rounded-lg bg-black/20 backdrop-blur-lg border border-white/30 text-white hover:bg-black/30 transition-all duration-300 shadow-2xl"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Sidebar */}
        <motion.div
          className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <motion.div
          className={`fixed top-0 right-0 h-full w-80 bg-black/20 backdrop-blur-xl border-l border-white/20 z-50 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <X size={24} />
          </button>
          
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {["home", "about", "education", "experience", "projects", "contact"].map((section) => (
                <motion.button
                  key={section}
                  className="block w-full text-left text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-300 capitalize"
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(section)}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
