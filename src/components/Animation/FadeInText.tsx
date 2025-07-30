"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface FadeInTextProps {
  text: string;
  className?: string; // initial color
  activeClassName?: string; // color when in view
  threshold?: number;
  reverse?: boolean; // reverse animation toggle
}

const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  className = "text-gray-400",
  activeClassName = "golden",
  threshold = 0.6,
  reverse = false,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "90% 0px 0px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // using the saved reference
    };
  }, [threshold]);

  return (
    <p
      ref={ref}
      data-scroll
      className={clsx(
        "transition-colors duration-700 ease-in-out text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold",
        reverse ? (inView ? activeClassName : className) : className,
        !reverse && inView && activeClassName
      )}
    >
      {text}
    </p>
  );
};

export default FadeInText;
