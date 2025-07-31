"use client";

import React, { useState } from "react";
import MenuToggleButton from "./MenuToggleButton";
import FullScreenMenu from "./FullScreenMenu";
import Logo from "../ui/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-6 py-3 backdrop-blur-md flex justify-between items-center">
        <Logo />
        <MenuToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <FullScreenMenu isOpen={isOpen} />
    </>
  );
}
