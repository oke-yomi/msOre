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
    <section className="px-8 2md:px-24 2md:py-44 py-[138px]">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-bold text-[40px] 2md:text-5xl mb-6 leading-none tracking-tighter px-9">
            Your money questions, answered here.
          </h3>

          <p className="text-custom-textgray text-sm 2md:text-xl">
            Some questions that we have been asked frequently.
          </p>
        </div>

        <ul className="w-full">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className={`cursor-pointer mb-4 rounded-[50px] p-[2px]`}
              onClick={() => toggleAccordion(index)}
              style={{
                backgroundImage:
                  activeIndex === index
                    ? "repeating-linear-gradient(45deg, green, yellow 30%, green 45%)"
                    : "",
              }}
            >
              <div
                className={`${
                  activeIndex === index
                    ? "border-[#353535]"
                    : "border-[#B3B2B2]"
                } border 2md:px-10 py-8 px-8 rounded-[50px] bg-white`}
              >
                <div className="flex justify-between items-center gap-1 2md:mb-6 mb-2">
                  <p className="flex-1 2md:text-xl text-lg font-semibold">
                    {faq.question}
                  </p>

                  <span className="">
                    {activeIndex === index ? (
                      <Image
                        src="/icons/chevron-up.svg"
                        width={32}
                        height={32}
                        alt=""
                      />
                    ) : (
                      <Image
                        src="/icons/chevron-down.svg"
                        width={32}
                        height={32}
                        alt=""
                      />
                    )}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="2md:w-4/5 w-11/12">
                    <p className="text-custom-textgray 2md:text-base text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
