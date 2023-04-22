import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { push } = useRouter();

  return (
    <div className="h-16 text-black absolute px-6 md:px-72 w-screen z-50 flex justify-between items-center">
      <Image
        className="cursor-pointer"
        onClick={() => push("/")}
        src="/byw-logo.png"
        alt="Byw Logo"
        width={100}
        height={24}
        priority
      />
      <div>
        <button
          className="text-[#888] px-4 py-1 rounded-md"
          onClick={() => push("/price")}
        >
          Pricing
        </button>
        <button
          className="text-[#888] px-4 py-1 rounded-md"
          onClick={() => push("/contact")}
        >
          Contact
        </button>
        <button
          className="text-[#888] px-4 py-1 rounded-md"
          onClick={() => push("/")}
        >
          Login
        </button>
      </div>
      <button className="bg-white text-black px-4 py-1 rounded-md">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
