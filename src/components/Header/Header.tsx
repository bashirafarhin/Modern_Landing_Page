import React from "react";
import SignInButton from "./SignInButton";
import Logo from "@/components/ui/Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="top-3 inset-x-0 z-50">
      <div
        className="mx-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:max-w-screen-xl
                   px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between
                   shadow-md border border-zinc-700 rounded-lg backdrop-blur-md"
      >
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Navbar isMobile={false} />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <SignInButton />
          </div>

          <div className="block md:hidden">
            <Navbar isMobile={true} />
          </div>
        </div>
      </div>
    </header>
  );
}
