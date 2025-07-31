"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FeatureData } from "../../../data/featuresData";
import Image from "next/image";

export type FeaturesSectionProps = {
  data: FeatureData[];
};

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  title,
  description,
  features,
  reverse,
  imgUrl,
}: FeatureData) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        cardRef.current,
        {
          x: reverse ? 200 : -200,
          y: 100,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        textRef.current,
        {
          x: reverse ? -200 : 200,
          y: 100,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert(); // cleanup
  }, [reverse]);

  return (
    <div
      className={`p-5 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Card */}
      <div
        ref={cardRef}
        className="w-full md:w-1/2 h-[400px] rounded-3xl shadow-2xl"
      >
        <div className="w-full h-full group-hover:p-10 transition-all duration-500 ease-in-out">
          <Image
            src={imgUrl}
            alt="Feature Image"
            width={800}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Text */}
      <div ref={textRef} className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="font-extralight">{description}</p>
        <ul className="list-disc list-inside font-extralight">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard;
