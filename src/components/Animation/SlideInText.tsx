"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SlideInProps {
  lines: string[];
  className?: string;
}

export default function SlideInText({ lines, className }: SlideInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const targets = containerRef.current.querySelectorAll(".slide-line");

      gsap.from(targets, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
        opacity: 0,
        x: -200,
        ease: "power3.out",
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={`space-y-2 ${className}`}>
      {lines.map((line, idx) => (
        <p key={idx} className="relative m-0 slide-line">
          {line}
        </p>
      ))}
    </div>
  );
}
