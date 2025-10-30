import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade" | "slide-left" | "slide-right" | "scale" | "rotate";
  delay?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "fade",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    switch (animation) {
      case "fade":
        return "animate-fade-in";
      case "slide-left":
        return "animate-slide-in-left";
      case "slide-right":
        return "animate-slide-in-right";
      case "scale":
        return "animate-scale-in";
      case "rotate":
        return "animate-rotate-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
