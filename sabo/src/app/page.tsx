"use client";

import FlexWrapper from "@/components/FlexWrapper";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { SaboDetails, SaboSecurity } from "@/components/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-medium">
      {/* <Hero /> */}

      <section className="w-full hidden 2md:block">
        <Image
          src="/images/hero-pattern.png"
          width={1440}
          height={384}
          alt="bg"
        />
      </section>

      <section className="py-36 2md:py-8 px-8 2md:px-24">
        <p className="mb-16 text-xl 2md:text-[32px] 2md:max-w-[85%] w-full leading-10">
          A payment platform built by africans for africans in the diaspora
          facing the challenges of sending money to their loved ones or paying
          bills back at home.
        </p>

        <FlexWrapper cardItems={SaboDetails} />
      </section>

      <section className="py-10 2md:py-8 flex flex-col 2md:flex-row gap-3 px-8 2md:pl-24 2md:pr-0 justify-center items-center">
        <div className="2md:w-1/2 w-full">
          <h3 className="font-bold text-[40px] 2md:text-[56px] mb-6 2md:mb-9 leading-none tracking-tighter">
            Going beyond just remittances
          </h3>

          <p className="text-custom-textgray text-base 2md:text-lg mb-9">
            A payment platform built by africans for africans in the diaspora
            facing the challenges of sending money to their loved ones or paying
            bills back at home.
          </p>

          <button>Download now</button>
        </div>

        <div className="2md:w-1/2 w-full">
          <div className="hidden 2md:block">
            <Image src="/images/phone.svg" width={730} height={309} alt="bg" />
          </div>
          {/* smaller */}
          <div className="2md:hidden flex justify-center">
            <Image
              src="/images/phone-image.png"
              width={600}
              height={340}
              alt="bg"
            />
          </div>
        </div>
      </section>

      <section className="bg-custom-lightgreen">
        <Testimonials />

        <div className="2md:py-64 py-40">
          <div className="flex px-8 2md:px-24 justify-between items-center">
            <div className="2md:w-1/2 w-full text-center 2md:text-left">
              <h3 className="font-bold text-[40px] 2md:text-[56px] mb-6 2md:mb-9 leading-none tracking-tighter px-9 2md:px-0">
                We give precedence to your financial security
              </h3>

              <p className="text-custom-textgray text-base 2md:text-lg mb-9">
                A payment platform built by africans for africans in the
                diaspora facing the challenges of sending money to their loved
                ones or paying bills at home
              </p>

              <button>Download now</button>
            </div>
            <div className="w-1/2 2md:flex justify-center items-center hidden">
              <Image
                src="/images/big-coins.png"
                width={342}
                height={388}
                alt="image"
              />
            </div>
          </div>

          <div className="2md:mt-28 mt-24 px-8 2md:px-24">
            <FlexWrapper cardItems={SaboSecurity} />
          </div>
        </div>
      </section>

      <section className="">

      </section>
    </div>
  );
}
