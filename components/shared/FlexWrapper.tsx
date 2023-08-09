"use client";

import React from "react";
import { PiHeart } from "react-icons/pi";

interface CardItem {
  title: string;
  description: string;
}

interface Props {
  cardItems: CardItem[];
  iconBgColor?: string;
}

const FlexWrapper = ({ cardItems, iconBgColor = "#F6F6EC" }: Props) => {
  return (
    <div className="flex flex-col 2md:flex-row justify-between items-center gap-20">
      {cardItems.map((card, index) => (
        <div key={index} className="2md:max-w-[395px] w-full">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <PiHeart size={32} color="#292D32" />
          </div>
          <h3 className="font-semibold text-2xl text-custom-black my-6">
            {card.title}
          </h3>
          <p className=" 2md:text-lg text-custom-grey font-medium">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlexWrapper;
