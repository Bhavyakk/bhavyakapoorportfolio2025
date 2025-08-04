import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@/hooks/use-mouse-position';

interface HoverInfoItem {
  id: string;
  content: string;
  icon: string;
  color: string;
}

const personalInfo: HoverInfoItem[] = [
  {
    id: 'figma',
    content: 'Figma power user',
    icon: '🎨',
    color: '#FF6B6B'
  },
  {
    id: 'coffee',
    content: 'Coffee lover ☕',
    icon: '☕',
    color: '#4ECDC4'
  },
  {
    id: 'ui',
    content: 'Designed 50+ UI screens for mobile apps',
    icon: '📱',
    color: '#45B7D1'
  },
  {
    id: 'research',
    content: 'User research enthusiast',
    icon: '🔍',
    color: '#96CEB4'
  },

  {
    id: 'social',
    content: 'Social media strategist',
    icon: '📈',
    color: '#DDA0DD'
  },
  {
    id: 'music',
    content: 'Bollywood music while designing',
    icon: '🎵',
    color: '#FFB6C1'
  },
  {
    id: 'canva',
    content: 'Canva pro for quick mockups',
    icon: '✨',
    color: '#98D8C8'
  },
  {
    id: 'pizza',
    content: 'Pizza lover',
    icon: '🍕',
    color: '#FF8C69'
  }
];

export function HoverInfo() {
  const { x, y } = useMousePosition();
  const [currentInfo, setCurrentInfo] = useState<HoverInfoItem | null>(null);
  const [lastShowTime, setLastShowTime] = useState(0);
  const [isInArsenal, setIsInArsenal] = useState(false);

  useEffect(() => {
    // Check if mouse is over arsenal area
    const elementAtMouse = document.elementFromPoint(x, y);
    const arsenalSection = elementAtMouse?.closest('[data-arsenal]');
    setIsInArsenal(!!arsenalSection);
  }, [x, y]);

  useEffect(() => {
    // Don't show info when in arsenal area
    if (isInArsenal) {
      setCurrentInfo(null);
      return;
    }
    
    const now = Date.now();
    
    // Show info every 2-3 seconds when mouse is moving
    if (now - lastShowTime > 2500) {
      const randomInfo = personalInfo[Math.floor(Math.random() * personalInfo.length)];
      setCurrentInfo(randomInfo);
      setLastShowTime(now);
      
      // Hide after 2 seconds
      setTimeout(() => {
        setCurrentInfo(null);
      }, 2000);
    }
  }, [x, y, isInArsenal, lastShowTime]);

  // Don't render if in arsenal area
  if (isInArsenal) {
    return null;
  }

  return (
    <AnimatePresence>
      {currentInfo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed pointer-events-none z-50"
          style={{
            left: Math.min(x + 20, window.innerWidth - 250),
            top: Math.min(y - 10, window.innerHeight - 80),
          }}
        >
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-gray-200 max-w-[240px]"
            style={{
              borderLeft: `4px solid ${currentInfo.color}`,
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">{currentInfo.icon}</span>
              <span className="text-sm font-medium text-gray-800 leading-tight">
                {currentInfo.content}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}