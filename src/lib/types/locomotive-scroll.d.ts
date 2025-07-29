declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options?: any);
    init(): void;
    update(): void;
    start(): void;
    stop(): void;
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
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    destroy(): void;
  }
}