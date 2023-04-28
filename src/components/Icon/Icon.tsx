import React from "react";
import { BiBarChartAlt2, BiFilterAlt } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

export type IIconProps = IconBaseProps & {
  icon: "chart" | "filter" | "ai" | "safety";
};

const Icon = ({ icon, ...props }: IIconProps) => {
  switch (icon) {
    case "chart":
      return (
        <div className="w-10 h-10 rounded-md bg-[#444] flex items-center justify-center">
          <BiBarChartAlt2 color="#888" size={20} {...props} />
        </div>
      );
    case "filter":
      return (
        <div className="w-10 h-10 rounded-md bg-[#444] flex items-center justify-center">
          <BiFilterAlt color="#888" size={20} {...props} />
        </div>
      );
    case "ai":
      return (
        <div className="w-10 h-10 rounded-md bg-[#444] flex items-center justify-center">
          <GiBrain color="#888" size={20} {...props} />
        </div>
      );
    case "safety":
      return (
        <div className="w-10 h-10 rounded-md bg-[#444] flex items-center justify-center">
          <AiOutlineSafety color="#888" size={20} {...props} />
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-md bg-[#444] flex items-center justify-center">
          <BiBarChartAlt2 color="#888" size={20} {...props} />
        </div>
      );
  }
};

export default Icon;
