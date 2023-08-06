"use client";

import Image from "next/image";
import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const MarketList = () => {
  return (
    <section className="bg-custom-yellow-500 2xl:px-64 2md:px-10 px-8 2md:py-[186px] py-[89px]">
      <div className="">
        <div className="w-full relative">
          <h3 className="font-bold text-custom-green-500 text-5xl 2md:text-[80px] leading-none tracking-tight mb-[52px] 2md:max-w-[967px]">
            Exchange your way with Sabo P2P Marketplace{" "}
          </h3>

          <div className="mt-16">
            <Image
              src={"/images/man-1.png"}
              alt={""}
              width={1428}
              height={668}
            />
          </div>

          <div className="mt-12 w-full 2md:max-w-[573px]">
            <p className="font-semibold text-custom-black text-2xl mb-4">
              Buying international currency
            </p>

            <p className="text-medium text-custom-grey">
              With Sabo real-time insights and expert guidance, you can stay on
              top of your finance and achieve your financial objectives.
            </p>
          </div>

          <div className="mt-14 2md:mt-0 2md:absolute bottom-10 right-0">
            <div className="2md:flex items-center mt-16 gap-4">
              <button className="">
                <IoChevronBackCircleOutline size={63} color={"#0F242A"} />
              </button>
              <button className="w-fit h-fit">
                <IoChevronForwardCircleOutline size={64} color={"#6E6D6D"} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-36 2md:mt-64 w-full 2md:max-w-[733px]">
          <h3 className="text-custom-black text-4xl 2md:text-[52px] font-bold">
            Join our Marketlist
          </h3>
          <p className="font-medium my-9 2md:mt-7 2md:mb-12 text-custom-green-400 2md:text-xl">
            A payment platform built by africans for africans in the diaspora
            facing the challenges of sending money to their loved ones or paying
            bills back at home.
          </p>

          <div className="bg-white rounded-[50px] flex justify-between items-center p-2 w-[394px] h-[70px] overflow-hidden gap-2">
            <input
              type="text"
              className="placeholder:text-[#787878] font-medium flex-1 outline-none py-[18px] px-6"
              placeholder="Enter your email address"
            />
            <button className="">
              <BsFillArrowUpRightCircleFill size={54} color="#F35012" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketList;
