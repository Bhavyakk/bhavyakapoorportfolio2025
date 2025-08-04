import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      originalX: number;
      originalY: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }

      getRandomColor() {
        const colors = [
          '#6F61EF', '#8B5FE6', '#39D2C0', '#2DD4BF', 
          '#A855F7', '#06B6D4', '#10B981', '#F59E0B'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        // Mouse attraction/repulsion
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          
          // Repel particles away from mouse
          this.vx -= Math.cos(angle) * force * 0.1;
          this.vy -= Math.sin(angle) * force * 0.1;
          
          // Increase opacity when near mouse
          this.opacity = Math.min(1, this.opacity + force * 0.02);
        } else {
          // Return to original position slowly
          this.vx += (this.originalX - this.x) * 0.001;
          this.vy += (this.originalY - this.y) * 0.001;
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Apply friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Update life
        this.life++;
        if (this.life > this.maxLife) {
          this.life = 0;
          this.color = this.getRandomColor();
        }

        // Pulsing effect
        this.opacity += Math.sin(this.life * 0.05) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Draw main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw inner glow
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create particles (reduced for performance)
    const particles: Particle[] = [];
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Wave effect particles
    const waveParticles: Array<{
      x: number;
      y: number;
      phase: number;
      amplitude: number;
      frequency: number;
      color: string;
      opacity: number;
    }> = [];

    for (let i = 0; i < 25; i++) {
      waveParticles.push({
        x: (i / 25) * canvas.width,
        y: canvas.height / 2,
        phase: Math.random() * Math.PI * 2,
        amplitude: Math.random() * 100 + 50,
        frequency: Math.random() * 0.02 + 0.01,
        color: ['#6F61EF', '#39D2C0', '#A855F7'][Math.floor(Math.random() * 3)],
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    // Animation loop with performance throttling
    let animationId: number;
    let lastTime = 0;
    const animate = (currentTime: number) => {
      // Throttle to ~30fps for better performance
      if (currentTime - lastTime >= 33) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw wave effect
      waveParticles.forEach(wave => {
        wave.phase += wave.frequency;
        const waveY = wave.y + Math.sin(wave.phase) * wave.amplitude;
        
        ctx.save();
        ctx.globalAlpha = wave.opacity;
        ctx.fillStyle = wave.color;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(wave.x, waveY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouseX, mouseY);
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 80) * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationId);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ background: 'transparent' }}
    />
  );
}