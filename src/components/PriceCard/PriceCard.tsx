import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

interface IPriceCardProps {
  planType: string;
  price: number;
  pricePurpose: string;
  features: string[];
}

const PriceCard = ({
  planType,
  price,
  pricePurpose,
  features,
}: IPriceCardProps) => {
  return (
    <div className="p-10 border-2 border-[#888]/50 text-[#888] relative rounded-md flex-1 bg-black">
      <div className="text-lg font-bold text-white">{planType}</div>
      <div className="font-bold tracking-tight text-3xl text-white">
        ${price}{" "}
        <span className="text-[#888] text-lg font-normal">
          {price === 0 ? "" : "per user/ month"}
        </span>
      </div>
      <p className="text-sm">{pricePurpose}</p>
      <ul className="space-y-4 mt-8">
        {features.map((feature, index) => (
          <li key={index} className="flex space-x-2">
            <AiFillCheckCircle className="w-6 h-6" color={"#fff"} />
            <div>{feature}</div>
          </li>
        ))}
      </ul>
      <button className="px-4 w-full mt-6 border border-white flex justify-between items-center text-white text-left py-1 rounded-md">
        <div>Start</div>
        <FiArrowRight />
      </button>
    </div>
  );
};

export default PriceCard;
