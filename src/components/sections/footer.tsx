import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-[#030505] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest font-medium">
            <span>© 2025</span>
            <span className="w-1 h-1 rounded-full bg-teal-500/50" />
            <span className="text-white/80">Bhavya Kapoor</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-colors duration-300 hover-target"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-colors duration-300">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>

        </div>
      </div>
    </footer>
  );
}
