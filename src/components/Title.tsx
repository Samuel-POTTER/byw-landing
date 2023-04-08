import useGradient from "@/hooks/useGradient";
import React from "react";

interface ITitleProps {
  title: string;
  index: number;
  current: number;
}

const Title = ({ title, index, current }: ITitleProps) => {
  const { showGradient } = useGradient();

  const classes = [
    "bg-gradient-to-r from-[#51c26f] to-[#f2e901] text-transparent bg-clip-text",
    "bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-transparent bg-clip-text",
    "bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-transparent bg-clip-text",
  ];

  return (
    <div
      className={`font-extrabold tracking-tighter text-center text-5xl md:text-8xl lg:text-9xl py-2 ${
        current === index
          ? `${classes[index]} animate-gradient ${
              showGradient ? " show-gradient" : ""
            }`
          : "text-white animate-gradient-out"
      }`}
    >
      {title}.
    </div>
  );
};

export default Title;
