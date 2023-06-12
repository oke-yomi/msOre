"use client";

import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className=" flex flex-col 2md:flex-row gap-3 px-8 2md:pr-24 2md:pl-0">
      <div className="w-1/2 relative hidden 2md:block">
        <div className="h-64 w-[408px] absolute bottom-40 left-0">
          <Image
            src="/images/edge-design.png"
            width={320}
            height={200}
            alt="bg"
          />
        </div>
      </div>

      <div className="w-full 2md:w-1/2 py-48 text-center 2md:text-left">
        <h3 className="text-sm 2md:text-base">SOME OF OUR TESTIMONIES</h3>
        <p className="font-bold text-[32px] leading-none 2md:text-[40px] mt-4">
          Receiving my tuition money tuition from home has always been a
          struggle. It was nice to know Sabo had my back in keeping me in school
          and focusing on my studies. Life savers!
        </p>

        <div className=" mt-60 2md:mt-9">
          <p className="font-semibold text-lg">Adaeze Osakwe</p>
          <p className="text-lg text-custom-textgray">
            University of Carlifonia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
