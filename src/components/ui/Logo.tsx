import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <i className="flex items-center">
          <p className="text-2xl font-bold">ADmyBRAND</p>
          <span>.com</span>
        </i>
      </Link>
    </div>
  );
};

export default Logo;
