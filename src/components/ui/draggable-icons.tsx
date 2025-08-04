import { useState, useRef, useEffect, useCallback } from 'react';
import canvaLogo from '@assets/image_1754042352795.png';
import figmaLogo from '@assets/62c6bc3deee9410fe137d920_1754042977168.png';
import framerLogo from '@assets/image_1754042514731.png';
import vscodeLogo from '@assets/image_1754045083793.png';
import sketchLogo from '@assets/image_1754045128018.png';

interface DesignApp {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  x: number;
  y: number;
  rotation: number;
}

const designApps = [
  { id: 'figma', name: 'Figma', icon: 'figma-logo', bgColor: '' },
  { id: 'canva', name: 'Canva', icon: 'logo', bgColor: 'bg-gradient-to-br from-cyan-400 to-purple-600' },
  { id: 'framer', name: 'Framer', icon: 'framer-logo', bgColor: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
  { id: 'vscode', name: 'VS Code', icon: 'vscode-logo', bgColor: 'bg-white' },
  { id: 'sketch', name: 'Sketch', icon: 'sketch-logo', bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { id: 'photoshop', name: 'Photoshop', icon: '🖼️', bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
  { id: 'illustrator', name: 'Illustrator', icon: '✏️', bgColor: 'bg-gradient-to-br from-orange-500 to-red-500' },
];

export function DraggableIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [apps, setApps] = useState<DesignApp[]>([]);
  const [draggedApp, setDraggedApp] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Initialize apps with non-overlapping positions
  useEffect(() => {
    const initializeApps = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const appSize = 48;
      const minSpacing = 20; // Minimum space between icons
      
      const positions: {x: number, y: number}[] = [];
      
      const isPositionValid = (newX: number, newY: number) => {
        return positions.every(pos => {
          const distance = Math.sqrt(
            Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2)
          );
          return distance >= (appSize + minSpacing);
        });
      };

      const initializedApps = designApps.map((app, index) => {
        let x, y;
        let attempts = 0;
        
        // Try to find a non-overlapping position
        do {
          x = Math.random() * (containerRect.width - appSize - 40) + 20;
          y = Math.random() * (containerRect.height - appSize - 40) + 20;
          attempts++;
        } while (!isPositionValid(x, y) && attempts < 50);
        
        // If we couldn't find a good spot, use a grid fallback
        if (attempts >= 50) {
          const cols = Math.floor((containerRect.width - 40) / (appSize + minSpacing));
          const row = Math.floor(index / cols);
          const col = index % cols;
          x = 20 + col * (appSize + minSpacing);
          y = 20 + row * (appSize + minSpacing);
        }
        
        positions.push({x, y});
        
        // Very subtle random rotations
        const rotation = (Math.random() - 0.5) * 10; // -5 to +5 degrees
        
        return {
          ...app,
          x,
          y,
          rotation,
        };
      });

      setApps(initializedApps);
    };

    const timer = setTimeout(initializeApps, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, app: DesignApp) => {
    e.preventDefault();
    setDraggedApp(app.id);
    
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const dragStateRef = useRef<{ x: number, y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!draggedApp || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    // Keep apps within screen bounds
    const constrainedX = Math.max(0, Math.min(newX, containerRect.width - 48));
    const constrainedY = Math.max(0, Math.min(newY, containerRect.height - 48));

    // Store the latest position
    dragStateRef.current = { x: constrainedX, y: constrainedY };

    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Update position using requestAnimationFrame for smooth performance
    rafRef.current = requestAnimationFrame(() => {
      if (dragStateRef.current) {
        setApps(prev => 
          prev.map(app => 
            app.id === draggedApp 
              ? { ...app, x: dragStateRef.current!.x, y: dragStateRef.current!.y }
              : app
          )
        );
      }
    });
  }, [draggedApp, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setDraggedApp(null);
    dragStateRef.current = null;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  // Add global mouse event listeners for dragging
  useEffect(() => {
    if (draggedApp) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedApp, handleMouseMove, handleMouseUp]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-2">My Design Arsenal</h3>
      </div>
      
      <div 
        ref={containerRef}
        data-arsenal
        className="relative w-full bg-gray-50 overflow-hidden rounded-3xl border border-gray-200"
        style={{ 
          minHeight: '12vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        {/* Subtle grid texture like desktop */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(180deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />

        {apps.map((app) => (
          <div
            key={app.id}
            className={`absolute cursor-grab select-none w-12 h-12 will-change-transform ${
              draggedApp === app.id 
                ? 'cursor-grabbing z-50 scale-105 transition-none' 
                : 'z-10 hover:scale-105 transition-all duration-200'
            }`}
            style={{ 
              left: `${app.x}px`, 
              top: `${app.y}px`,
              transform: `rotate(${app.rotation}deg)`,
              transformOrigin: 'center center'
            }}
            onMouseDown={(e) => handleMouseDown(e, app)}
          >
            <div className="relative group w-full h-full">
              {/* App icon */}
              <div className={`w-full h-full ${app.bgColor} rounded-2xl flex items-center justify-center shadow-lg overflow-hidden ${
                draggedApp === app.id ? 'transition-none' : 'hover:shadow-xl transition-all duration-300'
              }`}>
                {app.icon === 'logo' ? (
                  <img 
                    src={canvaLogo} 
                    alt={app.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : app.icon === 'figma-logo' ? (
                  <img 
                    src={figmaLogo} 
                    alt={app.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : app.icon === 'framer-logo' ? (
                  <img 
                    src={framerLogo} 
                    alt={app.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : app.icon === 'vscode-logo' ? (
                  <img 
                    src={vscodeLogo} 
                    alt={app.name}
                    className="w-full h-full object-contain rounded-2xl p-1"
                  />
                ) : app.icon === 'sketch-logo' ? (
                  <img 
                    src={sketchLogo} 
                    alt={app.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-lg select-none">{app.icon}</span>
                )}
              </div>

              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}