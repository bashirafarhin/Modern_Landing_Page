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

type SmoothScrollProviderProps = PropsWithChildren<{
  options?: Record<string, any>;
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
      ) as HTMLElement;
      scrollRef.current = el;

      if (!el) return;

      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locoScrollInstance = new LocomotiveScroll({
        el,
        smooth: true,
        ...options,
      });

      setScroll(locoScrollInstance);

      // Setup ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (value !== undefined) {
            locoScrollInstance?.scrollTo(value, {
              duration: 0,
              disableLerp: true,
            });
          }
          // return locoScrollInstance?.scroll?.instance?.scroll?.y ?? 0;
          return (locoScrollInstance as any)?.scroll?.instance?.scroll?.y ?? 0;
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

      // Update ScrollTrigger on scroll
      locoScrollInstance.on("scroll", ScrollTrigger.update);

      // Refresh ScrollTrigger on load
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
