"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SlideInProps {
  lines: string[];
  className?: string;
  direction?: "left" | "right"; // NEW prop
}

export default function SlideInText({
  lines,
  className,
  direction = "left",
}: SlideInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const targets = containerRef.current.querySelectorAll(".slide-line");

      gsap.from(targets, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
        },
        opacity: 0,
        x: direction === "left" ? -200 : 200, // <-- Change direction
        ease: "power3.out",
        stagger: 0.2,
      });
    }
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={`m-auto text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold space-y-2 ${className}`}
      // className={`text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold space-y-2 uppercase ${className}`}
    >
      {lines.map((line, idx) => (
        <p key={idx} className="relative m-0 slide-line">
          {line}
        </p>
      ))}
    </div>
  );
}
