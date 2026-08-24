import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

interface LightBulbIntroProps {
  onComplete?: () => void;
}

export function LightBulbIntro({ onComplete }: LightBulbIntroProps) {
  const [stage, setStage] = useState<"dark" | "flicker1" | "off1" | "flicker2" | "on" | "done">("dark");
  const [isLightOn, setIsLightOn] = useState(false);
  const [userToggledOff, setUserToggledOff] = useState(false);

  // Cord spring animation for pull effect
  const cordY = useSpring(0, { stiffness: 300, damping: 15 });

  // Web Audio API synthesized switch sound
  const playSwitchSound = (pitch = 160) => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    // Intro flicker sequence
    const t1 = setTimeout(() => {
      setStage("flicker1");
      playSwitchSound(180);
    }, 450);

    const t2 = setTimeout(() => {
      setStage("off1");
    }, 650);

    const t3 = setTimeout(() => {
      setStage("flicker2");
      playSwitchSound(260);
    }, 900);

    const t4 = setTimeout(() => {
      setStage("on");
      setIsLightOn(true);
      playSwitchSound(340);
    }, 1250);

    const t5 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handlePullCord = () => {
    cordY.set(20);
    setTimeout(() => cordY.set(0), 150);

    const newState = !isLightOn;
    setIsLightOn(newState);
    setUserToggledOff(!newState);
    playSwitchSound(newState ? 360 : 120);
  };

  // Glow intensity scale 0 to 1
  const getGlowOpacity = () => {
    if (userToggledOff && !isLightOn) return 0;
    if (stage === "dark" || stage === "off1") return 0;
    if (stage === "flicker1") return 0.3;
    if (stage === "flicker2") return 0.7;
    return 1;
  };

  const glowOpacity = getGlowOpacity();

  return (
    <>
      {/* Intro Black Screen Overlay during flickering phase */}
      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === "on" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#030505] pointer-events-none overflow-hidden"
          />
        )}
      </AnimatePresence>

      {/* Volumetric Light Beam Cone (Cast smoothly from bulb position down onto hero) */}
      <div className="fixed inset-0 z-[15] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: glowOpacity * (isLightOn ? 1 : 0) }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-6 sm:right-16 md:right-28 w-[500px] sm:w-[700px] h-[900px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255, 215, 140, 0.28) 0%, rgba(45, 212, 191, 0.12) 35%, rgba(3, 5, 5, 0) 70%)",
            maskImage: "radial-gradient(circle at 50% 0%, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 0%, black 0%, transparent 80%)",
          }}
        />
      </div>

      {/* Hanging Edison Bulb Assembly (Top-Right / Fixed Ceiling Cord) */}
      <div className="fixed top-0 right-6 sm:right-16 md:right-28 z-[110] pointer-events-none flex flex-col items-center">
        {/* Animated Cord Pulling Spring Container */}
        <motion.div style={{ y: cordY }} className="flex flex-col items-center relative">
          
          {/* Braided Ceiling Cord */}
          <div className="w-[3px] h-20 sm:h-28 bg-gradient-to-b from-zinc-800 via-zinc-600 to-zinc-400 relative shadow-sm">
            {/* Cord Texture Stripes */}
            <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]" />
          </div>

          {/* Brass Socket Screw Threads & Cap */}
          <div className="w-7 h-8 bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-900 rounded-t-sm shadow-md flex flex-col items-center justify-between border-t border-amber-400/40 relative z-20">
            {/* Screw thread rings */}
            <div className="w-8 h-1 bg-amber-900/80 rounded-full mt-1 border-b border-amber-500/30" />
            <div className="w-8 h-1 bg-amber-900/80 rounded-full border-b border-amber-500/30" />
            <div className="w-8.5 h-1.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 rounded-full shadow-inner" />
          </div>

          {/* Edison Glass Bulb & Interactive Trigger */}
          <button
            onClick={handlePullCord}
            title={isLightOn ? "Turn Lights Off (Click string/bulb)" : "Turn Lights On"}
            className="relative pointer-events-auto group cursor-pointer focus:outline-none -mt-0.5"
          >
            {/* SVG High-Fidelity Edison Vintage Bulb */}
            <svg
              width="64"
              height="88"
              viewBox="0 0 64 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
            >
              {/* Outer Glass Silhouette (ST64 Teardrop shape) */}
              <path
                d="M20 2C20 2 12 12 12 32C12 52 24 68 32 68C40 68 52 52 52 32C52 12 44 2 44 2H20Z"
                fill={isLightOn ? "rgba(255, 238, 190, 0.2)" : "rgba(255, 255, 255, 0.04)"}
                stroke={isLightOn ? "rgba(255, 220, 140, 0.85)" : "rgba(255, 255, 255, 0.25)"}
                strokeWidth="1.75"
                className="transition-colors duration-300"
              />

              {/* Glass Reflection Curves */}
              <path
                d="M17 18C15 26 15 38 18 48"
                stroke="white"
                strokeOpacity={isLightOn ? "0.45" : "0.15"}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M45 16C46.5 22 46.5 30 45 38"
                stroke="white"
                strokeOpacity={isLightOn ? "0.25" : "0.08"}
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Internal Filament Support Anchors */}
              <path d="M28 2V24M36 2V24" stroke="#71717A" strokeWidth="1" strokeLinecap="round" />
              <circle cx="28" cy="24" r="1.5" fill="#A1A1AA" />
              <circle cx="36" cy="24" r="1.5" fill="#A1A1AA" />

              {/* Coiled Spiral Tungsten Filament Loop */}
              <path
                d="M28 24C28 24 24 34 32 36C40 38 36 24 36 24"
                stroke={glowOpacity > 0 && isLightOn ? "rgb(255, 210, 110)" : "rgba(255, 255, 255, 0.3)"}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-150"
              />

              {/* Tip Nipple of Glass Bulb */}
              <path d="M30 68C30 68 32 71 34 68" stroke="rgba(255, 220, 140, 0.6)" strokeWidth="1.5" />
            </svg>

            {/* Radial Warm Golden Bulb Aura */}
            <motion.div
              animate={{
                opacity: glowOpacity * (isLightOn ? 1 : 0),
                scale: glowOpacity > 0 ? [0.92, 1.06, 1] : 0.7,
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 210, 110, 0.95) 0%, rgba(45, 212, 191, 0.45) 40%, rgba(0,0,0,0) 75%)",
              }}
            />

            {/* Core Intense Filament Flare */}
            {glowOpacity > 0 && isLightOn && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.7, 1, 0.85], scale: [0.85, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, repeatType: "reverse" }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-100 shadow-[0_0_35px_12px_rgba(255,225,130,1)] pointer-events-none"
              />
            )}
          </button>

          {/* Hanging Pull-String Cord with Brass Ring Switch */}
          <button
            onClick={handlePullCord}
            title="Pull to toggle lights"
            className="pointer-events-auto flex flex-col items-center -mt-1 group cursor-pointer"
          >
            {/* Fine Nylon Pull String */}
            <div className="w-[1.5px] h-14 sm:h-20 bg-gradient-to-b from-amber-200/60 via-zinc-400/50 to-amber-300/80 group-hover:scale-x-125 transition-transform" />
            
            {/* Brass Pull Bead & Ring Handle */}
            <div className="w-4 h-4 rounded-full border-2 border-amber-400 bg-gradient-to-b from-amber-300 to-amber-700 shadow-lg group-hover:bg-amber-200 group-hover:border-amber-200 transition-all group-hover:scale-125 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-950" />
            </div>
          </button>

        </motion.div>
      </div>

      {/* Dark Studio Room Mask if user explicitly toggled lights OFF */}
      <AnimatePresence>
        {userToggledOff && !isLightOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.94 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#030505] pointer-events-none flex flex-col items-center justify-center gap-3"
          >
            <p className="text-white/40 text-xs sm:text-sm tracking-[0.35em] uppercase select-none font-mono">
              [ Pull string or click bulb to turn lights on ]
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
