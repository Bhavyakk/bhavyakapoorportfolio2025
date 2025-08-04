import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 8;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = Math.random() * 8 + 4 + "s";
      
      container.appendChild(particle);
      particles.push(particle);
    }

    // Throttled animation for better performance
    let lastTime = 0;
    const animateParticles = (currentTime: number) => {
      if (currentTime - lastTime >= 32) { // ~30fps instead of 60fps
        particles.forEach((particle, index) => {
          const speed = 0.15 + Math.random() * 0.2; // Slower movement
          const currentTop = parseFloat(particle.style.top);
          const newTop = currentTop - speed;
          
          if (newTop < -2) {
            particle.style.top = "102%";
            particle.style.left = Math.random() * 100 + "%";
          } else {
            particle.style.top = newTop + "%";
          }
        });
        lastTime = currentTime;
      }
      
      requestAnimationFrame(animateParticles);
    };

    requestAnimationFrame(animateParticles);

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
    />
  );
}
