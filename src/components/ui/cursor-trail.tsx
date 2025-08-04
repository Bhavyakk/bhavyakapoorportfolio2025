import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CursorTrail() {
  const mousePosition = useMousePosition();
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    let currentX = 0;
    let currentY = 0;
    let isInArsenal = false;

    const checkArsenalHover = () => {
      const elementAtMouse = document.elementFromPoint(mousePosition.x, mousePosition.y);
      isInArsenal = !!elementAtMouse?.closest('[data-arsenal]');
    };

    const updateTrail = () => {
      checkArsenalHover();
      
      if (isInArsenal) {
        trail.style.opacity = '0';
      } else {
        trail.style.opacity = '1';
        currentX += (mousePosition.x - currentX) * 0.1;
        currentY += (mousePosition.y - currentY) * 0.1;
        
        trail.style.left = currentX + "px";
        trail.style.top = currentY + "px";
      }
      
      requestAnimationFrame(updateTrail);
    };

    updateTrail();
  }, [mousePosition]);

  return <div ref={trailRef} className="cursor-trail" />;
}
