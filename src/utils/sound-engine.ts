// Web Audio API Sound Engine with automatic Autoplay Policy unlocking

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isUnlocked: boolean = false;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      // Register global interaction unlocker to bypass browser autoplay restriction
      const unlockEvents = ["pointerdown", "click", "keydown", "touchstart"];
      const unlockHandler = () => {
        this.initContext();
        if (this.ctx && this.ctx.state === "suspended") {
          this.ctx.resume();
        }
        this.isUnlocked = true;
        unlockEvents.forEach((evt) => window.removeEventListener(evt, unlockHandler));
      };

      unlockEvents.forEach((evt) => window.addEventListener(evt, unlockHandler, { passive: true }));
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    return this.ctx;
  }

  // Toggle master mute
  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isAmbientPlaying) {
      this.stopAmbient();
    }
  }

  public getIsMuted() {
    return this.isMuted;
  }

  // Tactile UI Click Sound
  public playClick(pitch = 300) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Graceful fallback
    }
  }

  // Electric Spark / Light Flicker Sound
  public playSpark(frequency = 220) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Graceful fallback
    }
  }

  // Soft Ambient Synth Hum (Equalizer)
  public toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    try {
      this.stopAmbient();

      // Dual oscillator lush warm synth pad (A2 = 110Hz & E3 = 164.81Hz)
      this.ambientOsc1 = ctx.createOscillator();
      this.ambientOsc2 = ctx.createOscillator();
      this.ambientGain = ctx.createGain();

      this.ambientOsc1.type = "sine";
      this.ambientOsc1.frequency.setValueAtTime(110, ctx.currentTime);

      this.ambientOsc2.type = "triangle";
      this.ambientOsc2.frequency.setValueAtTime(164.81, ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 1.5);

      this.ambientOsc1.connect(this.ambientGain);
      this.ambientOsc2.connect(this.ambientGain);
      this.ambientGain.connect(ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
      this.isAmbientPlaying = true;
    } catch {
      // Graceful fallback
    }
  }

  public stopAmbient() {
    if (!this.ctx || !this.isAmbientPlaying) return;
    try {
      if (this.ambientGain) {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        if (this.ambientOsc1) {
          this.ambientOsc1.stop();
          this.ambientOsc1.disconnect();
          this.ambientOsc1 = null;
        }
        if (this.ambientOsc2) {
          this.ambientOsc2.stop();
          this.ambientOsc2.disconnect();
          this.ambientOsc2 = null;
        }
        this.isAmbientPlaying = false;
      }, 500);
    } catch {
      this.isAmbientPlaying = false;
    }
  }

  public getIsAmbientPlaying() {
    return this.isAmbientPlaying;
  }
}

export const soundEngine = new SoundEngine();
