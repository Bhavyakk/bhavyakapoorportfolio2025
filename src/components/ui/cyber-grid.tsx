import { useEffect, useRef } from 'react';

export function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        const opacity = 0.1 + 0.05 * Math.sin(time * 0.001 + y * 0.01);
        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const opacity = 0.1 + 0.05 * Math.sin(time * 0.001 + x * 0.01);
        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw intersection points
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const opacity = 0.2 + 0.3 * Math.sin(time * 0.002 + x * 0.01 + y * 0.01);
          if (opacity > 0.3) {
            ctx.fillStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 16;
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
    />
  );
}