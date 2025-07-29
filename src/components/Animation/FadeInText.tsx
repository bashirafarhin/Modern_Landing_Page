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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // triggers as soon as any pixel is visible
        rootMargin: "90% 0px 0px 0px", // triggers when the top of the element hits 30% from the top
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <p
      ref={ref}
      data-scroll
      className={clsx(
        "transition-colors duration-700 ease-in-out text-8xl font-bold",
        reverse ? (inView ? activeClassName : className) : className,
        !reverse && inView && activeClassName
      )}
    >
      {text}
    </p>
  );
};

export default FadeInText;
