import React from "react";

export interface BrandItem {
  name: string;
  logo: string | null;
}

export const BRAND_LOGOS: BrandItem[] = [
  { name: "Nike", logo: null },
  { name: "Spotify", logo: null },
  { name: "Adobe", logo: null },
  { name: "Airbnb", logo: null },
  { name: "Figma", logo: null },
  { name: "Notion", logo: null },
  { name: "Slack", logo: null },
  { name: "Stripe", logo: null },
];

export function BrandMarquee() {
  // Render logo list twice for seamless infinite scrolling loop
  const doubleLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="w-full mt-12 md:mt-16 pt-4 pb-2 relative z-10 select-none">
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
      `}</style>

      {/* Label: WORKED WITH */}
      <div className="max-w-6xl mx-auto px-6 mb-4">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
          WORKED WITH
        </span>
      </div>

      {/* Marquee Strip: Full-bleed edge to edge */}
      <div className="marquee-container w-full overflow-hidden py-1">
        <div className="marquee-track flex items-center gap-8 sm:gap-16 pr-8 sm:pr-16">
          {doubleLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              ) : (
                <div className="h-8 sm:h-10 px-5 sm:px-6 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs sm:text-sm font-medium tracking-wide text-white/60 hover:text-white hover:border-teal-400/40 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(78,205,196,0.15)] transition-all duration-300 cursor-pointer whitespace-nowrap">
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
