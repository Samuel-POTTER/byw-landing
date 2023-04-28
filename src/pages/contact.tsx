import Navbar from "@/components/Navbar/Navbar";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ResponsiveNavbar />
      <div className="absolute h-full md:h-2/3 rounded-full w-2/3 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-purple-900/20 blur-3xl" />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-6 z-10 text-center md:text-right">
          Talk to our team
        </h1>
        <p className="text-[#888] text-2xl text-center md:text-right font-light z-10">
          We&apos;ll help you find the right plan and pricing for your business.
        </p>
        <form className="border rounded-md flex z-40 bg-black flex-col items-center justify-center mt-8 border-[#888]/50 p-4">
          <div>
            <label htmlFor="email" className="block text-sm text-[#888]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="md:w-96 h-12 px-4 mt-2 border border-[#888]/50 bg-inherit rounded-lg focus:outline-none focus:border-[#7928CA]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mt-6 text-[#888]">
              How can we help you
            </label>
            <textarea
              name="message"
              id="message"
              className="md:w-96 h-40 resize-none px-4 mt-2 border border-[#888]/50 bg-inherit rounded-lg focus:outline-none focus:border-[#7928CA]"
            />
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-6 py-2 mt-6 bg-[#7928CA] rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
