"use client";

import Faqs from "@/components/Faqs";
import FlexWrapper from "@/components/FlexWrapper";
import Footer from "@/components/Footer";
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
              alt="image"
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

      <Faqs faqs={faqs} />

      <section className="px-8 2md:px-24 2md:py-14 py-16 overflow-hidden">
        <div className="w-full  ">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h3 className="font-bold text-[40px] 2md:text-[56px] 2md:mb-6 mb-4 leading-none tracking-tighter px-9">
              Take your Finances Global with Sabo
            </h3>

            <p className="text-custom-textgray text-sm 2md:text-lg mb-7">
              A payment platform built by africans for africans in the diaspora
              to send money to their loved ones or paying bills back at home.
            </p>

            <button>Download now</button>
          </div>

          <div className="hidden 2md:block w-full h-[760px] relative">
            <Image
              src="/images/phone-bg.png"
              width={1400}
              height={477}
              alt=""
              className="absolute bottom-0 left-0 right-0"
            />
            <Image
              src="/images/phone.png"
              width={400}
              height={800}
              alt=""
              className="absolute top-36 left-1/2 translate-x-[-50%]"
            />
          </div>
          <div className="block 2md:hidden relative w-full h-[437px]">
            <Image
              src="/images/phone.png"
              width={234}
              height={457}
              alt=""
              className="mx-auto absolute top-20 left-1/2 translate-x-[-50%]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const faqs = [
  {
    question: "How does Sabo work",
    answer:
      "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
  },
  {
    question: "How does Sabo work",
    answer:
      "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
  },
  {
    question: "How does Sabo work",
    answer:
      "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
  },
  {
    question: "How does Sabo work",
    answer:
      "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
  },
];
