"use client";

import React from "react";
import clsc from "../../utils/clsc";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsc(
        "font-semibold border px-2 py-1 hover:scale-105 rounded-md whitespace-nowrap hover:cursor-pointer border-zinc- transition-colors duration-300 ease-in-out",
        disabled ? "bg-gray-400 text-white cursor-not-allowed" : "",
        className
      )}
    >
      {children}
    </button>
  );
}
