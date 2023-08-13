"use client";

import Converter from "@/components/Converter";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MarketList from "@/components/MarketList";
import Security from "@/components/Security";
import Button from "@/components/shared/Button";
import FlexWrapper from "@/components/shared/FlexWrapper";
import { faqs } from "@/data/faqs";
import { SaboDetails } from "@/data/saboDetails";
import Image from "next/image";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      <section className="bg-custom-white w-full justify-center items-center flex">
        <div className="text-center 2md:max-w-[80%] w-full flex flex-col justify-center items-center pt-9 pb-52 2md:py-44 2xl:px-64 2md:px-10 px-8">
          <h3 className="font-bold text-custom-green-500 text-[56px] 2md:text-[88px] leading-none tracking-tight">
            Taking your Finances Global with Sabo
          </h3>
          <p className="font-medium text-custom-green-400 2md:text-lg text-sm w-4/5 mt-10 mb-11">
            A payment platform built by africans for africans in the diaspora
            facing the challenges of sending money to their loved ones or paying
            bills back at home.
          </p>
          <Button />
        </div>
      </section>

      <Converter />

      <section className="bg-white w-full justify-center items-center flex 2md:py-[186px] py-[71px]">
        <div className="2xl:px-64 2md:px-10 px-8">
          <p className="2md:mb-20 mb-24 2md:text-[32px] text-2xl leading-10 font-medium 2md:w-2/3">
            A payment platform built by africans for africans in the diaspora
            facing the challenges of sending money to their loved ones or paying
            bills back at home.
          </p>
          <FlexWrapper cardItems={SaboDetails} />
        </div>
      </section>

      <Features />

      <MarketList />

      <Security />

      <Faqs faqs={faqs} />

      <section className="bg-white justify-center items-center flex">
        <div className="w-full flex flex-col items-center justify-center pt-[88px] text-center 2xl:px-64 2md:px-10 px-8">
          <div className="w-full max-w-[620px] 2md:mb-24 mb-16 flex flex-col justify-center items-center">
            <h3 className="font-bold text-custom-black text-5xl 2md:text-[64px] leading-none tracking-tight">
              Be among the first to go global with Sabo
            </h3>
            <p className="font-medium text-custom-neutral my-4 w-4/5 2md:w-1/2 mx-auto leading-none">
              Create international accounts and send money across borders with
              ease.
            </p>

            <Button />
          </div>

          <div className="2md:flex hidden w-[600px] h-[650px] relative">
            <div className="absolute -bottom-20 z-30 left-6">
              <div className="w-[327px] h-[650px] relative">
                <Image src={"/images/send-money.png"} alt={""} fill />
              </div>
            </div>

            <div className="absolute -bottom-[100px] right-6 z-0">
              <div className="w-[327px] h-[650px] relative">
                <Image src={"/images/home.png"} alt={""} fill />
              </div>
            </div>
          </div>

          <div className="2md:hidden flex justify-center items-center relative w-[285px] h-[565px]">
            <div className="w-fit h-fit absolute -bottom-40">
              <Image
                src={"/images/home-straight.png"}
                alt={""}
                width={285}
                height={565}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
