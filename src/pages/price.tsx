import Navbar from "@/components/Navbar/Navbar";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";
import PriceCard from "@/components/PriceCard/PriceCard";
import React from "react";

const Price = () => {
  return (
    <div className="relative h-screen p-4 xl:p-0">
      <div className="absolute h-2/3 rounded-full w-2/3 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-slate-800/20 blur-3xl" />
      <Navbar />
      <ResponsiveNavbar />
      <div className="md:absolute flex flex-col items-center space-y-10 xl:left-1/2 xl:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
        <h1 className="text-center xl:text-7xl text-4xl top-1/2 font-bold w-4/5">
          Find a plan to power your projects
        </h1>
        <div className="md:flex space-y-4 pb-4 xl:pb-0 px-3 xl:px-0 md:space-y-0 gap-4">
          <PriceCard
            planType="Hobby"
            price={0}
            features={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            ]}
            pricePurpose="For personal or non-commercial projects."
          />
          <PriceCard
            planType="Pro"
            price={20}
            features={[
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            ]}
            pricePurpose="For advanced features."
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
