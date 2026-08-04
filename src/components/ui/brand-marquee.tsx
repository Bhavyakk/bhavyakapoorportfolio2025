import React from "react";

export interface BrandItem {
  name: string;
  logo: string;
  className?: string;
}

// Custom height per logo to balance visual scale since the source PNGs have different padding/canvas sizes.
export const BRAND_LOGOS: BrandItem[] = [
  { name: "Meera", logo: "/logos/Logo.png", className: "h-5 sm:h-6" },
  { name: "twinmynd", logo: "/logos/2a07fe7d-a950-4770-b098-9fd307270aa5.png", className: "h-12 sm:h-14" },
  { name: "Duuet", logo: "/logos/c0902b36-8ca3-4886-a17d-18ec8320fdd2.png", className: "h-14 sm:h-16" },
  { name: "Zaprev", logo: "/logos/d10f52c0-5e2e-47fa-a9eb-a3d23f23b067.png", className: "h-14 sm:h-16" },
  { name: "OwlAI", logo: "/logos/ae4f3963-0585-47da-bea0-899a639a5e93.png", className: "h-14 sm:h-16" },
  { name: "RSK India", logo: "/logos/rsk..png", className: "h-11 sm:h-14" },
];

export function BrandMarquee() {
  // Render logo list twice for seamless infinite scrolling loop
  const doubleLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="w-full mt-4 md:mt-6 pt-1 pb-2 relative z-10 select-none">
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-container {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 40px,
            black calc(100% - 40px),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 40px,
            black calc(100% - 40px),
            transparent 100%
          );
        }

        @media (min-width: 640px) {
          .marquee-container {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 120px,
              black calc(100% - 120px),
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 120px,
              black calc(100% - 120px),
              transparent 100%
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
          .marquee-container {
            overflow-x: auto;
            scrollbar-width: thin;
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
        }

        .brand-logo-img {
          /* mix-blend-mode: screen makes white backgrounds transparent on dark bg */
          mix-blend-mode: screen;
          opacity: 0.75;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .brand-logo-img:hover {
          opacity: 1;
        }
      `}</style>

      {/* "Worked With" label */}
      <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/30 mb-3">
        Brands I've worked with
      </p>

      {/* Marquee Strip: Full-bleed edge to edge */}
      <div className="marquee-container w-full overflow-hidden py-1">
        <div className="marquee-track flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16">
          {doubleLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20"
            >
              <img
                src={item.logo}
                alt={item.name}
                className={`brand-logo-img w-auto object-contain cursor-pointer ${item.className || "h-8 sm:h-10"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
