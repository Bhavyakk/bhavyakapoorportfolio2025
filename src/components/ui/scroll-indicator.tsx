import { useScroll } from "@/hooks/use-scroll";

export function ScrollIndicator() {
  const { scrollProgress } = useScroll();

  return (
    <div
      className="scroll-indicator"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
  );
}
