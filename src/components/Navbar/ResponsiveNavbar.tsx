import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const ResponsiveNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { push } = useRouter();

  return (
    <div className="flex lg:hidden px-3 h-16 relative justify-between items-center text-black">
      <Image
        className="cursor-pointer"
        onClick={() => push("/")}
        src="/byw-logo.png"
        alt="Byw Logo"
        width={100}
        height={24}
        priority
      />

      <HiMenu
        className="relative z-50 cursor-pointer"
        onClick={() => setShowMenu((prev) => !prev)}
        color="#888"
        size={25}
      />

      {showMenu && (
        <div className="flex flex-col bg-black border border-[#888] rounded-md absolute translate-y-20 right-0">
          <button
            className="text-[#888] px-4 py-1 rounded-md text-right"
            onClick={() => push("/price")}
          >
            Pricing
          </button>
          <button
            className="text-[#888] px-4 py-1 rounded-md text-right"
            onClick={() => push("/contact")}
          >
            Contact
          </button>
          <button
            className="text-[#888] px-4 py-1 rounded-md text-right"
            onClick={() => push("/")}
          >
            Login
          </button>
          <button className="text-[#888] px-4 py-1 rounded-md text-right">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
