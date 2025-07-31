"use client";

import React from "react";
import Link from "next/link";
import SignInButton from "./SignInButton";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex flex-col items-center justify-between gap-6 text-xl lg:text-9xl md:text-7xl sm:text-4xl leading-[82px]">
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <h1>{link.name}</h1>
        </Link>
      ))}
      <SignInButton />
    </nav>
  );
}
