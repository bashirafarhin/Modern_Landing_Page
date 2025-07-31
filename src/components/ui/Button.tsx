"use client";

import React from "react";
import cn from "../../lib/utils/cn";

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
      className={cn(
        "font-semibold border px-2 py-1 hover:scale-105 rounded-md whitespace-nowrap hover:cursor-pointer transition-colors duration-300 ease-in-out",
        disabled ? "cursor-not-allowed" : "",
        className
      )}
    >
      {children}
    </button>
  );
}
