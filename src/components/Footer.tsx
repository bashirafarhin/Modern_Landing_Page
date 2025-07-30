"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl p-2 lg:p-4 flex flex-col items-center space-y-2 mx-auto">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
        <Logo />
        <div className="flex gap-4 text-sm flex-wrap">
          <Link href="/">Partnership</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Events</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>

      <div className="bg-zinc-700 w-full h-[1px]"></div>

      {/* socials */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-between items-center">
        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} AddMyBrand. All rights reserved.
        </div>
      </div>

      {/* app name */}
      <div
        className="tracking-wider font-[stretch:150%] w-full text-center text-[8vw] scale-y-120 !leading-[0.9] my-5"
        style={{ fontWeight: 700 }}
      >
        ADDMYBRAND
      </div>
    </footer>
  );
};

export default Footer;
