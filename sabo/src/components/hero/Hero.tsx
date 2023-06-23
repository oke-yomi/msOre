"use client";

import React from "react";
import Converter from "./Converter";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="px-8 2md:px-24 py-32 flex flex-col 2md:flex-row text-custom-black gap-[85px] justify-between">
      <div className="max-w-[641px]">
        <h3 className="font-bold text-[70px] md:text-[56px] leading-none tracking-tighter mb-4 2md:mb-8">
          Take your Finances Global with Sabo
        </h3>
        <p className="text-custom-textgray font-medium 2md:text-lg text-base mb-8">
          A payment platform built by africans for africans in the diaspora
          facing the challenges of sending money to their loved ones or paying
          bills back at home.
        </p>
        <button className="flex gap-3 items-center bg-custom-darkgreen py-2 px-6 rounded-[30px]">
          <div className="flex gap-2 items-center">
            <FaApple size={35} color="#1E1E1E" />
            <FaGooglePlay size={30} color="#1E1E1E" />
          </div>

          <p className="text-custom-black">Download now</p>
        </button>
      </div>

      <Converter />
    </div>
  );
};

export default Hero;

{
  /* <div className="relative w-full 2md:w-[470px] h-80 mr-7">
        <div className="absolute top-0 left-0 bg-white border border-custom-neutral w-full h-full z-30 rounded-2xl">
        </div>

        // extra boxes
        <div className="absolute top-[14px] left-[14px] bg-white border border-custom-neutral w-full h-full z-20 rounded-2xl hidden md:block" />
        <div className="absolute top-[28px] left-[28px] bg-white border border-custom-neutral w-full h-full z-10 rounded-2xl hidden md:block" />
      </div> */
}
