import React from "react";
import SignInButton from "./SignInButton";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="w-[80vw] py-3 px-8 flex justify-between items-center fixed top-2 z-50 shadow-md border-b border-l border-r border-zinc-700 bg-transparent backdrop-blur-lg rounded-3xl">
      <Logo />
      <SignInButton />
    </header>
  );
}
