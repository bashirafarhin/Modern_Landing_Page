"use client";

import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  PropsWithChildren,
} from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type LocomotiveScroll from "locomotive-scroll";

type SmoothScrollContextType = {
  scroll: LocomotiveScroll | null;
};

type LocomotiveScrollOptions = {
  el: HTMLElement;
  smooth?: boolean;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal";
  smoothMobile?: boolean;
  multiplier?: number;
  class?: string;
  [key: string]: unknown;
};

type SmoothScrollProviderProps = PropsWithChildren<{
  options?: Partial<LocomotiveScrollOptions>;
}>;

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  options = {},
}) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let locoScrollInstance: LocomotiveScroll | null = null;

    const initSmoothScroll = async () => {
      const el = document.querySelector(
        "[data-scroll-container]"
      ) as HTMLElement | null;

      if (!el) return;
      scrollRef.current = el;

      const LocomotiveScroll = (await import("locomotive-scroll"))
        .default as typeof import("locomotive-scroll").default;

      locoScrollInstance = new LocomotiveScroll({
        el,
        smooth: true,
        ...options,
      });

      setScroll(locoScrollInstance);

      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (value !== undefined) {
            locoScrollInstance?.scrollTo(value, {
              duration: 0,
              disableLerp: true,
            });
          }

          // @ts-expect-error: Accessing undocumented internal scroll property
          return locoScrollInstance?.instance?.scroll?.y ?? 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: el.style.transform ? "transform" : "fixed",
      });

      locoScrollInstance.on("scroll", () => ScrollTrigger.update());

      ScrollTrigger.addEventListener("refresh", () =>
        locoScrollInstance?.update()
      );
      ScrollTrigger.refresh();
    };

    initSmoothScroll();

    return () => {
      locoScrollInstance?.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        locoScrollInstance?.update()
      );
    };
  }, [options]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
