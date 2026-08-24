import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowUp, Volume2, VolumeX, Sparkles } from "lucide-react";
import { soundEngine } from "@/utils/sound-engine";

// 1. Live IST Clock Widget
export function LiveClock() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] sm:text-xs font-mono text-white/70 backdrop-blur-md hover-target select-none">
      <span className="text-base">🇮🇳</span>
      <span className="text-white/40">DEL</span>
      <span className="w-1 h-1 rounded-full bg-teal-400/50" />
      <span className="text-teal-300 font-medium tracking-wider">{timeStr || "10:50 PM"}</span>
    </div>
  );
}

// 2. Pulsing Availability Status Badge
export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] sm:text-xs text-emerald-300 font-medium backdrop-blur-md hover-target select-none shadow-[0_0_15px_rgba(16,185,129,0.15)]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="tracking-wide">Available for Select Projects</span>
    </div>
  );
}

// 3. One-Click Copy Email Chip
export function CopyEmailChip({ email = "bhavya.kapoorr@gmail.com" }: { email?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    soundEngine.playClick(400);
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-teal-400/40 text-xs text-white/80 transition-all duration-300 group hover-target cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-teal-400 group-hover:rotate-12 transition-transform" />
        <span className="font-mono text-white/90">{email}</span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
        )}
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.9 }}
            className="absolute left-1/2 -translate-x-1/2 -top-9 px-3 py-1 rounded-md bg-teal-500 text-black text-[11px] font-bold tracking-wider uppercase shadow-lg pointer-events-none z-30 whitespace-nowrap"
          >
            Copied to Clipboard! ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 4. Interactive Audio Equalizer Button
export function AudioEqualizer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const nextState = soundEngine.toggleAmbient();
    setIsPlaying(nextState);
  };

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Ambient Sound" : "Enable Ambient Sound"}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/70 text-xs transition-all hover-target cursor-pointer"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-[2px] h-3.5 w-4">
            <span className="w-[2px] bg-teal-400 rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
            <span className="w-[2px] bg-teal-400 rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
            <span className="w-[2px] bg-teal-400 rounded-full animate-[bounce_1s_infinite_200ms] h-4/5" />
            <span className="w-[2px] bg-teal-400 rounded-full animate-[bounce_1s_infinite_400ms] h-1/2" />
          </div>
          <span className="text-[10px] font-mono uppercase text-teal-300">AUDIO ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-white/40" />
          <span className="text-[10px] font-mono uppercase text-white/40">AUDIO OFF</span>
        </>
      )}
    </button>
  );
}

// 5. Scroll Progress Ring & Back-to-Top Button
export function ScrollProgressRing() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    soundEngine.playClick(320);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            title="Back to top"
            className="relative w-12 h-12 rounded-full bg-[#030505]/80 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-teal-400 transition-colors shadow-2xl hover-target group cursor-pointer"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-teal-400 transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 6. Monospace Section Badge Indicator
export function SectionBadge({ number, title }: { number: string; title: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-teal-400 uppercase tracking-widest mb-3 select-none">
      <span className="text-white/40">{number}</span>
      <span className="text-white/20">//</span>
      <span>{title}</span>
    </div>
  );
}
