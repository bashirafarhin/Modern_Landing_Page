"use client";

import Button from "@/components/ui/Button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full relative mx-auto rounded-xl p-4 text-white">
      {/* circle */}
      <div className="mx-auto absolute w-full max-w-3xl aspect-square rounded-full smoke-glow pointer-events-none overflow-hidden">
        <div className="smoke-blob bg-yellow-200 opacity-20" />
        <div className="smoke-blob bg-orange-300 opacity-20 delay-1000" />
        <div className="smoke-blob bg-yellow-100 opacity-10 delay-2000" />
      </div>

      {/* text */}
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col text-center">
        <h1 className="font-bold text-[6vw] sm:text-md">
          Welcome to Our Platform
        </h1>
        <div className="max-w-2xl my-3">
          <p className="font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            commodi exercitationem deleniti doloremque facilis. Velit eligendi
            itaque sunt laudantium cumque ratione quis atque placeat, eius
            inventore, rerum porro animi omnis.
          </p>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4">
          <Button className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5">
            Get Started
            <svg
              viewBox="0 0 24 24"
              className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              />
              <polyline
                points="12 5 19 12 12 19"
                className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              />
            </svg>
          </Button>

          <Button className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5">
            Partner With us
            <svg
              viewBox="0 0 24 24"
              className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              />
              <polyline
                points="12 5 19 12 12 19"
                className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              />
            </svg>
          </Button>
        </div>
      </div>
      {/*  */}

      <style jsx>{`
        .smoke-glow {
          animation: smokePulse 6s ease-in-out infinite;
          box-shadow: 0 0 40px 10px rgba(255, 140, 0, 0.3),
            inset 0 0 40px 10px rgba(255, 215, 0, 0.2);
          position: relative;
        }

        .smoke-blob {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(40px);
          animation: floatSmoke 12s ease-in-out infinite;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        @keyframes smokePulse {
          0%,
          100% {
            box-shadow: 0 0 40px 10px rgba(255, 140, 0, 0.3),
              inset 0 0 40px 10px rgba(255, 215, 0, 0.2);
            transform: rotate(0deg) scale(1);
          }
          50% {
            box-shadow: 0 0 80px 20px rgba(255, 215, 0, 0.5),
              inset 0 0 80px 20px rgba(255, 140, 0, 0.4);
            transform: rotate(2deg) scale(1.03);
          }
        }

        @keyframes floatSmoke {
          0% {
            transform: translate(-50%, -50%) translateX(0) translateY(0)
              scale(1);
          }
          25% {
            transform: translate(-50%, -50%) translateX(20px) translateY(-30px)
              scale(1.1);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-20px) translateY(20px)
              scale(0.95);
          }
          75% {
            transform: translate(-50%, -50%) translateX(30px) translateY(-10px)
              scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) translateX(0) translateY(0)
              scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
