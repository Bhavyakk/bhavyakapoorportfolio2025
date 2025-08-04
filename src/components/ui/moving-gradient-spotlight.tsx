import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MovingGradientSpotlight() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Static subtle gradient overlay - No animations */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}