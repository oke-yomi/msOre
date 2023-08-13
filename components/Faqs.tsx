"use client";

import Image from "next/image";
import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type AccordionProps = {
  faqs: FAQ[];
};

const Faqs = ({ faqs }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white justify-center items-center flex">
      <div className="w-full 2md:flex 2xl:px-64 2md:px-10 px-8 2md:py-[270px] py-[156px] justify-between items-center">
        <div className="2md:w-1/2">
          <h3 className="font-bold text-custom-black text-5xl 2md:text-[52px] leading-none tracking-tight 2md:w-[483px] w-full">
            You’ve got some money questions?; we’ve got them answered.
          </h3>
          <p className="font-medium text-xl text-custom-neutral mt-4">
            Some questions that we have been asked frequently.
          </p>
        </div>

        {/* faqs */}
        <div className="2md:w-1/2 w-full mt-12 2md:mt-0">
          <ul className="w-full">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-4 rounded-[50px] p-1`}
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundImage:
                    activeIndex === index
                      ? "repeating-linear-gradient(45deg, #91CAD9, #F35012 30%, #F35012 45%)"
                      : "",
                }}
              >
                <div
                  className={`${
                    activeIndex === index
                      ? "border-[#353535]"
                      : "border-[#B3B2B2]"
                  } border py-7 px-10 rounded-[50px] bg-white`}
                >
                  <div className="flex justify-between items-center gap-1 mb-2">
                    <p
                      className={`${
                        activeIndex === index
                          ? "font-semibold text-custom-black text-xl"
                          : "font-medium text-custom-neutral text-lg"
                      } `}
                    >
                      {faq.question}
                    </p>

                    <span className="">
                      {activeIndex === index ? (
                        <Image
                          src="/svgs/chevron-up.svg"
                          width={32}
                          height={32}
                          alt=""
                        />
                      ) : (
                        <Image
                          src="/svgs/chevron-down.svg"
                          width={32}
                          height={32}
                          alt=""
                        />
                      )}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className="">
                      <p className="font-medium text-custom-neutral text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
