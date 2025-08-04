import { useEffect } from "react";

export function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if not typing in input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'h':
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'a':
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'p':
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'c':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'escape':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return null;
}