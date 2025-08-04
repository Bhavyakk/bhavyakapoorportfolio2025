import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Force hide all system cursors immediately
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if we're in the arsenal section - disable custom cursor effects
      const arsenalSection = target.closest('[data-arsenal]');
      if (arsenalSection) {
        setIsHovering(false);
        return;
      }
      
      // Force cursor none on the target element
      if (target && target.style) {
        target.style.cursor = 'none';
      }
      
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition, true);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mousedown', handleMouseDown, true);
    document.addEventListener('mouseup', handleMouseUp, true);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition, true);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mousedown', handleMouseDown, true);
      document.removeEventListener('mouseup', handleMouseUp, true);
    };
  }, []);

  // Check if mouse is currently over arsenal area
  const [isInArsenal, setIsInArsenal] = useState(false);
  
  useEffect(() => {
    const checkArsenal = () => {
      const elementAtMouse = document.elementFromPoint(position.x, position.y);
      const arsenalSection = elementAtMouse?.closest('[data-arsenal]');
      setIsInArsenal(!!arsenalSection);
    };
    
    checkArsenal();
  }, [position.x, position.y]);

  // Don't render cursor if in arsenal area
  if (isInArsenal) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        display: 'block',
        visibility: 'visible'
      }}
    />
  );
}