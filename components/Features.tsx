"use client";

import React, { useRef, useState } from "react";
import Button from "./shared/Button";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import BgSvg from "./shared/BgSvg";
import Image from "next/image";

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const carouselWidth = carouselRef.current?.offsetWidth;
    const numFeatures = featuresData.length;
    setCurrentIndex((curr) => (curr + 1) % numFeatures);
    carouselRef.current?.scrollTo({
      left: (carouselWidth || 0) * ((currentIndex + 1) % numFeatures),
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const carouselWidth = carouselRef.current?.offsetWidth;
    const numFeatures = featuresData.length;
    setCurrentIndex((curr) => (curr - 1 + numFeatures) % numFeatures);
    carouselRef.current?.scrollTo({
      left:
        (carouselWidth || 0) * ((currentIndex - 1 + numFeatures) % numFeatures),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white w-full py-36 overflow-hidden transition-all ease-in-out delay-150">
      <div className="2md:flex gap-5 items-center justify-between px-8 2md:px-0">
        <div className="2md:w-1/2 w-full 2md:px-5 2xl:px-32 flex justify-center items-center">
          <div className="w-full 2md:max-w-xl mb-[72px] 2md:mb-0">
            <h3 className="text-custom-black font-bold text-[68px] leading-none tracking-tight">
              Going beyond just remittances
            </h3>
            <p className="font-medium text-lg text-custom-neutral mt-8 mb-10">
              A payment platform built by africans for africans in the diaspora
              facing the challenges of sending money to their loved ones or
              paying bills back at home.
            </p>

            <Button />

            <div className="hidden 2md:flex items-center mt-16 gap-4">
              <button className="" onClick={handlePrev}>
                <IoChevronBackCircleOutline
                  size={63}
                  color={currentIndex === 0 ? "#0F242A" : "#6E6D6D"}
                />
              </button>
              <button className="w-fit h-fit" onClick={handleNext}>
                <IoChevronForwardCircleOutline
                  size={64}
                  color={currentIndex === 1 ? "#0F242A" : "#6E6D6D"}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="2md:w-1/2 w-full relative overflow-hidden"
          ref={carouselRef}
        >
          <div
            className="flex flex-col 2md:flex-row 2md:gap-8 gap-11 items-center 2md:items-start"
            style={{
              transform: `translateX(-${currentIndex * 500}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl w-[329px] 2md:w-[500px] relative transition-all"
              >
                <div
                  className="relative h-[375px] rounded-t-3xl overflow-hidden"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <BgSvg color={feature.svgColor} />
                </div>

                <div className="absolute top-20 2md:top-16 left-1/2 transform -translate-x-1/2 ">
                  <Image
                    src={feature.ImgSrc}
                    alt={""}
                    width={280}
                    height={590}
                  />
                </div>

                {/* className="flex flex-col justify-center items-center absolute left-0 right-0 w-[500px]" */}
                <div className="bg-[#F6F6EC] z-20 relative w-[329px] 2md:w-[500px] h-[295px] px-[58px] pt-[42px] pb-[94px] rounded-b-3xl">
                    <h4 className="font-semibold text-[28px] text-custom-black mb-6 leading-none tracking-tight">
                      {feature.heading}
                    </h4>
                    <p className="font-medium text-custom-grey">
                      {feature.body}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

export const featuresData = [
  {
    heading: "Multi-currency Wallet Creation.",
    body: "With Sabo real-time insights and expert guidance, you can stay on top of your finance and achieve your financial objectives.",
    ImgSrc: "/images/add-wallet.png",
    bgColor: "#CFF335",
    svgColor: "#DDEEF3",
  },
  {
    heading: "Easy Currency Conversion",
    body: "With Sabo real-time insights and expert guidance, you can stay on top of your finance and achieve your financial objectives.",
    ImgSrc: "/images/convert-money.png",
    bgColor: "#36869B",
    svgColor: "#F89772",
  },
];
