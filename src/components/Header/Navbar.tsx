"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  isMobile: boolean;
};

const navLinks = [
  { name: "About", href: "#" },
  { name: "Careers", href: "#" },
  { name: "History", href: "#" },
  { name: "Services", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar({ isMobile }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isMobile) {
    // Desktop View
    return (
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Mobile View
  return (
    <>
      <button
        className="mt-2"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={26} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900 flex flex-col items-center justify-center gap-6 px-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="absolute top-6 right-6"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {/* <SignInButton /> */}
            Sign in
          </div>
        </div>
      )}
    </>
  );
}
