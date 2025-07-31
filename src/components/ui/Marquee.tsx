"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  direction?: "forwards" | "reverse";
  speed?: number;
};

const Marquee: React.FC<MarqueeProps> = ({
  items,
  className = "",
  direction = "forwards",
  speed = 20,
}) => {
  const trackStyle: React.CSSProperties = {
    animation: `marquee-move-text ${speed}s linear infinite ${direction}`,
    paddingLeft: "4.8rem",
    gap: "4.8rem",
  };

  return (
    <div className={clsx("overflow-clip", className)}>
      <div className="flex w-max marquee-text-track" style={trackStyle}>
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            aria-hidden={index >= items.length}
            className="whitespace-nowrap m-auto"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
