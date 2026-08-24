import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightBulbIntroProps {
  onComplete?: () => void;
}

export function LightBulbIntro({ onComplete }: LightBulbIntroProps) {
  const [stage, setStage] = useState<"dark" | "flicker1" | "off1" | "flicker2" | "on" | "done">("dark");
  const [isLightOn, setIsLightOn] = useState(false);
  const [userToggledOff, setUserToggledOff] = useState(false);

  // Play audio click using Web Audio API
  const playClickSound = (pitch = 120) => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "square";
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext might be blocked before user interaction, swallow gracefully
    }
  };

  useEffect(() => {
    // Light bulb flicker timeline on open
    const timer1 = setTimeout(() => {
      setStage("flicker1");
      playClickSound(180);
    }, 500);

    const timer2 = setTimeout(() => {
      setStage("off1");
    }, 700);

    const timer3 = setTimeout(() => {
      setStage("flicker2");
      playClickSound(240);
    }, 950);

    const timer4 = setTimeout(() => {
      setStage("on");
      setIsLightOn(true);
      playClickSound(320);
    }, 1300);

    const timer5 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const toggleLight = () => {
    playClickSound(isLightOn ? 100 : 300);
    setIsLightOn(!isLightOn);
    setUserToggledOff(isLightOn);
  };

  // Determine current light brightness percentage based on flicker stage
  const getGlowIntensity = () => {
    if (userToggledOff && !isLightOn) return 0;
    if (stage === "dark" || stage === "off1") return 0;
    if (stage === "flicker1") return 0.35;
    if (stage === "flicker2") return 0.75;
    return 1; // "on" or "done"
  };

  const glowIntensity = getGlowIntensity();

  return (
    <>
      {/* Intro Black Screen Overlay during flickering phase */}
      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: stage === "on" ? 0 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[#030505] pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient spotlight cone during intro */}
            <motion.div
              animate={{
                opacity: glowIntensity,
                scale: glowIntensity > 0 ? [0.95, 1.05, 1] : 0,
              }}
              transition={{ duration: 0.15 }}
              className="absolute top-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,230,170,0.35) 0%, rgba(45,212,191,0.15) 40%, rgba(3,5,5,0) 70%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Hanging Light Bulb & Interactive Cord fixed at top right/center */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-24 z-[110] pointer-events-none">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center relative"
        >
          {/* Wire Cord */}
          <div className="w-[2px] h-24 sm:h-32 bg-gradient-to-b from-white/10 via-white/30 to-white/60 relative">
            {/* Hanging Cord Pull Socket */}
            <button
              onClick={toggleLight}
              title="Click to toggle light"
              className="pointer-events-auto absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-teal-400/30 border border-white/20 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-125"
            >
              <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:animate-ping" />
            </button>
          </div>

          {/* Metal Socket Holder */}
          <div className="w-6 h-5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 rounded-t-sm border-t border-zinc-500 shadow-md relative z-10">
            <div className="w-8 h-1 bg-zinc-600 -ml-1 mt-3 rounded-full" />
          </div>

          {/* Interactive Light Bulb */}
          <button
            onClick={toggleLight}
            title={isLightOn ? "Turn Lights Off" : "Turn Lights On"}
            className="relative pointer-events-auto group cursor-pointer outline-none focus:outline-none"
          >
            {/* Bulb Outer Glass Silhouette */}
            <svg
              width="54"
              height="72"
              viewBox="0 0 54 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
            >
              {/* Glass body background */}
              <path
                d="M15 0H39V12C39 12 48 18 48 33C48 45 37.5 54 27 54C16.5 54 6 45 6 33C6 18 15 12 15 12V0Z"
                fill={isLightOn ? "rgba(255, 245, 220, 0.25)" : "rgba(255, 255, 255, 0.05)"}
                stroke={isLightOn ? "rgba(255, 235, 180, 0.8)" : "rgba(255, 255, 255, 0.3)"}
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />

              {/* Glowing Inner Filament */}
              <path
                d="M21 16L24 30L27 20L30 30L33 16"
                stroke={glowIntensity > 0 ? "rgb(255, 215, 120)" : "rgba(255, 255, 255, 0.2)"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-150"
              />

              {/* Base contact point */}
              <rect x="20" y="54" width="14" height="6" rx="1" fill="#4B5563" />
              <path d="M23 60H31L29 65H25L23 60Z" fill="#1F2937" />
            </svg>

            {/* Dynamic Radial Bulb Glow Aura */}
            <motion.div
              animate={{
                opacity: glowIntensity * (isLightOn ? 1 : 0),
                scale: glowIntensity > 0 ? [0.95, 1.08, 1] : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-2xl pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,220,130,0.9) 0%, rgba(45,212,191,0.5) 45%, rgba(0,0,0,0) 75%)",
              }}
            />

            {/* Bright Center Filament Core Sparkle */}
            {glowIntensity > 0 && isLightOn && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.6, 1, 0.8], scale: [0.8, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-100 shadow-[0_0_25px_8px_rgba(255,225,140,1)] pointer-events-none"
              />
            )}
          </button>
        </motion.div>
      </div>

      {/* Dark Room Mask overlay if user explicitly toggled the light OFF */}
      <AnimatePresence>
        {userToggledOff && !isLightOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.92 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#030505] pointer-events-none flex items-center justify-center"
          >
            <p className="text-white/30 text-xs sm:text-sm tracking-[0.3em] uppercase select-none font-mono">
              [ Click the bulb to turn lights back on ]
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
