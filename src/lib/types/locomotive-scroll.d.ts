declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    direction?: "vertical" | "horizontal";
    gestureDirection?: "vertical" | "horizontal";
    smoothMobile?: boolean;
    multiplier?: number;
    class?: string;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    init(): void;
    update(): void;
    start(): void;
    stop(): void;
    destroy(): void;

    scrollTo(
      target: HTMLElement | string | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;

    setScroll(x: number, y: number): void;

    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
  }
}
