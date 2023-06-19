"use client";

import Image from "next/image";
import React from "react";

interface CardItem {
  title: string;
  description: string;
}

interface Props {
  cardItems: CardItem[];
}

const FlexWrapper = ({ cardItems }: Props) => {
  return (
    <div className="flex flex-col 2md:flex-row justify-between items-center gap-32">
      {cardItems.map((card, index) => (
        <div key={index} className="2md:max-w-80 w-full">
          <Image
            src="/images/small-coins.png"
            width={60}
            height={70}
            alt="coins"
          />
          <h3 className="font-semibold 2md:text-[28px] text-2xl mb-3 2md:mb-4 mt-4">
            {card.title}
          </h3>
          <p className="2md:text-base text-sm text-custom-textgray">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlexWrapper;
