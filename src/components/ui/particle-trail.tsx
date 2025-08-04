import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  color: string;
}

export function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is over arsenal section
      const elementAtMouse = document.elementFromPoint(e.clientX, e.clientY);
      const isInArsenal = !!elementAtMouse?.closest('[data-arsenal]');
      
      if (isInArsenal) return; // Don't create particles in arsenal area
      
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 4 + 2,
        color: `hsl(${Math.random() * 60 + 260}, 70%, 60%)`
      };

      setParticles(prev => [...prev.slice(-20), newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0,
            y: particle.y - 50
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}