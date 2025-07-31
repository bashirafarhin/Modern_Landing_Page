"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { cardsData } from "../../../data/cardsData";
import ProjectCard from "./ProjectCard";
import SlideInText from "../Animation/SlideInText";

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
    <div className="overflow-x-hidden">
      <section ref={containerRef} className="relative h-screen mx-auto w-full">
        <SlideInText lines={["Our Projects"]} className="p-8 text-center" />

        <div ref={cardsRef} className="flex gap-4 px-10 w-max mx-auto">
          {cardsData.map((data, idx) => (
            <ProjectCard
              key={idx}
              title={data.title}
              imgUrl={data.img}
              link={data.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
