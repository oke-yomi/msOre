import React from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import Button from "./shared/Button";
import LockImg from "/svgs/lock.svg";
import Image from "next/image";
import FlexWrapper from "./shared/FlexWrapper";
import { SaboSecurity } from "@/data/saboSecurity";

const Security = () => {
  return (
    <>
      <section className="bg-[#F6F6EC]">
        <div className="w-full 2xl:px-64 2md:px-10 px-8 2md:py-[270px] py-[121px]">
          <div className="flex justify-between items-center gap-1">
            <div className="2md:w-1/2 w-full">
              <h3 className="text-custom-green-500 font-bold text-5xl text-[64px] leading-none tracking-tight">
                We love to give precedence to your financial security
              </h3>
              <p className="font-medium 2md:text-lg text-sm text-custom-neutral my-8">
                A payment platform built by africans for africans in the
                diaspora facing the challenges of sending money to their loved
                ones or paying bills back at home.
              </p>

              <Button />
            </div>

            <div className="w-1/2 justify-center items-center 2md:flex hidden">
              <Image
                src="/images/lock-img.png"
                alt={""}
                width={432}
                height={433}
              />
            </div>
          </div>

          <div className="2md:mt-[100px] mt-[84px]">
            <FlexWrapper iconBgColor="#E6E6CB" cardItems={SaboSecurity} />
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-[#E6E6CB] 2md:bg-[#F6F6EC]">
        <div className="w-full 2xl:px-64 2md:px-10 px-8 py-[103px] pb-80">
          <div className="flex items-center 2md:justify-end gap-1">
            <div className="2md:w-1/2 w-3/4">
              <h2 className="font-semibold text-custom-black">
                SOME OF OUR TESTIMONIES
              </h2>

              <div className="mt-4 w-full max-w-xl">
                <p className="font-semibold text-custom-black 2md:text-[32px] text-[28px] leading-9 tracking-tight">
                  Receiving my tuition money tuition from home has always been a
                  struggle. It was nice to know Sabo had my back in keeping me
                  in school and focusing on my studies. Life savers!
                </p>

                <p className="mt-9 font-semibold text-lg text-custom-black">
                  Adaeze Osakwe
                </p>
                <p className="font-medium text-lg text-[#969696]">
                  University of California
                </p>
              </div>

              <div className="flex items-center mt-10 gap-4">
                <button className="">
                  <IoChevronBackCircleOutline size={63} color="#0F242A" />
                </button>
                <button className="w-fit h-fit">
                  <IoChevronForwardCircleOutline size={64} color="#6E6D6D" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
