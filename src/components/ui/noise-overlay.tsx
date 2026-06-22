export function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full mix-blend-overlay opacity-[0.05]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          className="pointer-events-none"
        />
      </svg>
    </div>
  );
}
