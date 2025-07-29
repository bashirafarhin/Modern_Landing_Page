import React, { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  speed?: number; // in seconds
  className?: string;
  dir?: "left" | "right";
};

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 30,
  className = "",
  dir = "left",
}) => {
  const animationClass =
    dir === "left" ? "animate-marquee" : "animate-marquee-reverse";
  const reverseAnimationClass =
    dir === "left" ? "animate-marquee2" : "animate-marquee2-reverse";

  return (
    <div className={`relative flex overflow-x-hidden ${className}`}>
      <div
        className={`flex ${animationClass} whitespace-nowrap`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((child, idx) => (
          <div key={idx} className="my-auto mx-4">
            {child}
          </div>
        ))}
      </div>

      <div
        className={`absolute top-0 flex ${reverseAnimationClass} whitespace-nowrap`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((child, idx) => (
          <div key={`copy-${idx}`} className="my-auto mx-4">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
