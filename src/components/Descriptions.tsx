import Image from "next/image";
import React from "react";
import { BiBarChartAlt2, BiFilterAlt } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import Icon from "./Icon/Icon";
import FeatureDetails from "./FeatureDetails/FeatureDetails";
import Features from "./Features/Features";

const Descriptions = () => {
  return (
    <figure className="space-y-6">
      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] bg-gradient-to-b from-black to-[#51c26f]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#51c26f] to-[#f2e901]">
          <span>1</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#51c26f] to-[#f2e901]">
          Select
        </span>
        <div className="space-y-14 mt-12 text-center">
          <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Your fixtures in a few clicks
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[#888] md:w-2/3 lg:w-1/2 text-xl">
              We provide you all information you need to bet smarter
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-20 md:mt-28 place-items-center">
          <Image
            src="/fixtures-desktop.png"
            alt="fixtures-desktop"
            width={550}
            height={300}
          />
          <Features />
        </div>
      </div>

      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] relative z-50 bg-gradient-to-b from-black to-[#7928CA]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
          <span>2</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
          Bet (coming soon)
        </span>
        <div className="space-y-14 mt-12 flex flex-col items-center text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-center w-2/3">
            Maximize your chances of winning with our BYW betting system
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[#888] lg:w-1/3 w-2/3 text-center text-xl">
              It allow you to select several options, to generate all the
              combinations
              <span className="text-[#FF0080]">combinations</span>, and finally
              to bet <span className="text-[#FF0080]">minimizing</span> the{" "}
              <span className="text-[#FF0080]">risks</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col flex items-center">
        <div className="w-px h-[100px] bg-gradient-to-b from-black to-[#FF4D4D]" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-center text-black bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
          <span>3</span>
        </div>
        <span className="font-bold text-[2rem] mt-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
          Manage (coming soon)
        </span>
        <div className="space-y-14 mt-12 flex flex-col items-center text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-center w-2/3">
            Stay focus on your bankroll management
          </div>
          <p className="text-[#888] lg:w-1/3 w-2/3 text-center text-xl">
            Record almost automatically all your bets, track your results, and
            analyze your performance to fine-tune your betting strategy.
          </p>
        </div>
      </div>
    </figure>
  );
};

export default Descriptions;
