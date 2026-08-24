import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightBulbIntroProps {
  onComplete?: () => void;
}

export function LightBulbIntro({ onComplete }: LightBulbIntroProps) {
  const [stage, setStage] = useState<"dark" | "flicker1" | "off1" | "flicker2" | "on" | "done">("dark");
  const [isLightOn, setIsLightOn] = useState(false);

  // Web Audio API synthesized switch sound effect
  const playFlickerSound = (pitch = 180) => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    // 3-Stage Cinematic Light Flicker Intro
    const t1 = setTimeout(() => {
      setStage("flicker1");
      playFlickerSound(200);
    }, 450);

    const t2 = setTimeout(() => {
      setStage("off1");
    }, 650);

    const t3 = setTimeout(() => {
      setStage("flicker2");
      playFlickerSound(280);
    }, 900);

    const t4 = setTimeout(() => {
      setStage("on");
      setIsLightOn(true);
      playFlickerSound(360);
    }, 1250);

    const t5 = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 2100);

    // Listen for custom light toggle events from Nav
    const handleToggle = () => {
      setIsLightOn((prev) => !prev);
      playFlickerSound(300);
    };

    window.addEventListener("toggle-room-light", handleToggle);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener("toggle-room-light", handleToggle);
    };
  }, [onComplete]);

  // Determine current light brightness multiplier
  const getGlowIntensity = () => {
    if (stage === "dark" || stage === "off1") return 0;
    if (stage === "flicker1") return 0.3;
    if (stage === "flicker2") return 0.7;
    return isLightOn ? 1 : 0.15;
  };

  const glowIntensity = getGlowIntensity();

  return (
    <>
      {/* Dark Room Intro Screen during flicker sequence */}
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

      {/* Cinematic Studio Spotlight Beam (Top-center cast over Hero typography) */}
      <div className="fixed inset-0 z-[15] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: glowIntensity }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[900px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255, 230, 160, 0.22) 0%, rgba(45, 212, 191, 0.1) 40%, rgba(3, 5, 5, 0) 75%)",
            maskImage: "radial-gradient(circle at 50% 0%, black 10%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 0%, black 10%, transparent 80%)",
          }}
        />

        {/* Ambient Top Ceiling Glow Sparkle */}
        <motion.div
          animate={{ opacity: glowIntensity * 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255, 225, 140, 0.4) 0%, rgba(45, 212, 191, 0.2) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </>
  );
}

// Global helper to trigger light toggle from anywhere
export function toggleRoomLight() {
  window.dispatchEvent(new Event("toggle-room-light"));
}
