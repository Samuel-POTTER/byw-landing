import Navbar from "@/components/Navbar/Navbar";
import PriceCard from "@/components/PriceCard/PriceCard";
import React from "react";

const Price = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute h-2/3 rounded-full w-2/3 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-slate-800/20 blur-3xl" />
      <Navbar />
      <div className="absolute flex flex-col items-center space-y-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <h1 className="text-center text-7xl top-1/2 font-bold w-4/5">
          Find a plan to power your projects
        </h1>
        <div className="flex gap-4">
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
