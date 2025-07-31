import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <i className="flex items-center">
          <p className="text-[1rem] font-bold lg:text-2xl">ADDmyBRAND</p>
          {/* <span>.com</span> */}
        </i>
      </Link>
    </div>
  );
};

export default Logo;
