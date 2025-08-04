import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  opacity: number;
}

export function MorphingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const initialShapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      color: `hsl(${Math.random() * 60 + 260}, 70%, 60%)`, // Purple to blue range
      shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
      opacity: Math.random() * 0.3 + 0.1
    }));
    setShapes(initialShapes);

    const interval = setInterval(() => {
      setShapes(prev => prev.map(shape => ({
        ...shape,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        opacity: Math.random() * 0.3 + 0.1
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseClasses = "absolute blur-sm";
    
    switch (shape.shape) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity
            }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} rounded-lg`}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              opacity: shape.opacity
            }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{ 
            left: `${shape.x}%`, 
            top: `${shape.y}%`,
            scale: 0,
            rotate: 0
          }}
          animate={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
}