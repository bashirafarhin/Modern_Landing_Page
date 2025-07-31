"use client";

import React from "react";
import Navbar from "./Navbar";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
}

export default function FullScreenMenu({ isOpen }: Props) {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen h-screen bg-black text-white z-40 transition-transform duration-500 ease-in-out",
        {
          "translate-y-0": isOpen,
          "-translate-y-full": !isOpen,
        }
      )}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <Navbar />
      </div>
    </div>
  );
}
