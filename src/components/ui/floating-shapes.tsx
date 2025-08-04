import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  type: 'circle' | 'square' | 'triangle' | 'diamond' | 'hexagon';
  opacity: number;
  speed: number;
}

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const colors = ['#6F61EF', '#8B5FE6', '#39D2C0', '#2DD4BF', '#A855F7', '#06B6D4'];
    const types: Shape['type'][] = ['circle', 'square', 'triangle', 'diamond', 'hexagon'];
    
    const newShapes: Shape[] = [];
    for (let i = 0; i < 12; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 2 + 0.5
      });
    }
    setShapes(newShapes);
  }, []);

  const getShapeStyle = (shape: Shape) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - shape.x, 2) + Math.pow(mousePosition.y - shape.y, 2)
    );
    const influence = Math.max(0, 1 - distance / 300);
    
    return {
      position: 'fixed' as const,
      left: shape.x,
      top: shape.y,
      width: shape.size,
      height: shape.size,
      opacity: shape.opacity + influence * 0.3,
      filter: `blur(${influence * 2}px)`,
      transform: `rotate(${shape.rotation}deg) scale(${1 + influence * 0.3})`,
    };
  };

  const renderShape = (shape: Shape) => {
    const baseProps = {
      style: getShapeStyle(shape),
      animate: {
        x: [0, Math.sin(shape.id) * 50, 0],
        y: [0, Math.cos(shape.id) * 30, 0],
        rotate: [shape.rotation, shape.rotation + 360, shape.rotation],
      },
      transition: {
        duration: 20 + shape.speed * 10,
        repeat: Infinity,
        ease: "linear",
      },
    };

    switch (shape.type) {
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            {...baseProps}
            className="rounded-full border-2 pointer-events-none z-[2]"
            style={{
              ...baseProps.style,
              borderColor: shape.color,
              background: `radial-gradient(circle, ${shape.color}20, transparent)`,
            }}
          />
        );
      
      case 'square':
        return (
          <motion.div
            key={shape.id}
            {...baseProps}
            className="border-2 pointer-events-none z-[2]"
            style={{
              ...baseProps.style,
              borderColor: shape.color,
              background: `linear-gradient(45deg, ${shape.color}20, transparent)`,
            }}
          />
        );
      
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            {...baseProps}
            className="pointer-events-none z-[2]"
            style={{
              ...baseProps.style,
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}40`,
            }}
          />
        );
      
      case 'diamond':
        return (
          <motion.div
            key={shape.id}
            {...baseProps}
            className="border-2 pointer-events-none z-[2]"
            style={{
              ...baseProps.style,
              borderColor: shape.color,
              background: `conic-gradient(from 45deg, ${shape.color}30, transparent)`,
              transform: `${baseProps.style.transform} rotate(45deg)`,
            }}
          />
        );
      
      case 'hexagon':
        return (
          <motion.div
            key={shape.id}
            {...baseProps}
            className="pointer-events-none z-[2]"
            style={{
              ...baseProps.style,
              background: shape.color + '30',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[2]">
      {shapes.map(renderShape)}
    </div>
  );
}