"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cardsData } from "../../data/cardsData";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return;

    const container = containerRef.current;
    const cards = cardsRef.current;

    const totalScrollWidth = cards.scrollWidth;
    const viewportWidth = window.innerWidth;

    const horizontalScrollLength = totalScrollWidth - viewportWidth;

    // GSAP animation
    gsap.to(cards, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen h-screen">
      <h1 className="text-center pt-30 font-bold text-[3rem]">Our Projects</h1>
      <div ref={cardsRef} className="flex gap-4 px-10">
        {cardsData.map((data, idx) => (
          <Card
            key={idx}
            title={data.title}
            imgUrl={data.img}
            link={data.link}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
