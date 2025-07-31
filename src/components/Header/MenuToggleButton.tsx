"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuToggleButton({ isOpen, setIsOpen }: Props) {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="w-12 h-12 rounded-full bg-gray-500 relative flex justify-center items-center z-50"
      aria-label="Toggle Menu"
    >
      {/* Top bar */}
      <span
        className={`block h-0.5 w-6 bg-[#e0eeee] absolute transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "rotate-45" : "-translate-y-1.5"
        }`}
      />
      {/* Bottom bar */}
      <span
        className={`block h-0.5 w-6 bg-[#e0eeee] absolute transition-all duration-300 ease-in-out origin-center ${
          isOpen ? "-rotate-45" : "translate-y-1.5"
        }`}
      />
    </button>
  );
}
