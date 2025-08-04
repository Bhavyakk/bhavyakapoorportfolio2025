import { motion } from "framer-motion";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Mini Navigation */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                className="text-white/60 hover:text-white transition-colors duration-300 capitalize text-sm"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-white/60 text-sm">© 2025 Bhavya Kapoor</p>
        </motion.div>
      </div>
    </footer>
  );
}
