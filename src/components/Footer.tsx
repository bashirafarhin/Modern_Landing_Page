"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="max-w-6xl p-2 lg:p-4 flex flex-col items-center space-y-2 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
          <Logo />
          <div className="flex gap-4 text-sm flex-wrap">
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
      </footer>
      <div className="w-full  overflow-hidden">
        <p className="font-bold text-center leading-none text-[12vw]">
          ADDMYBRAND
        </p>
      </div>
    </div>
  );
};

export default Footer;
