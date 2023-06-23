"use client";

import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

interface Props {
  amount: number;
  currency: string;
  currencies: string[];
  onCurrencyChange: (currency: string) => void;
  onAmountChange: (amount: number) => void;
  title: string;
  mode: string;
}

const CurrencyInput = ({
  amount,
  currencies,
  currency,
  onCurrencyChange,
  onAmountChange,
  title,
  mode,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(amount);

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 8) {
      return "";
    }
  };

  return (
    <div className="flex border border-[#B3B2B2] rounded-[18px] justify-between items-center py-[7.2px] pr-[6px] pl-[19px] gap-2">
      <div className="flex-1">
        <p className="text-[#969696] text-[10px]">{title}</p>
        <input
          className="border-none outline-none w-full text-[21px] text-[#353535] no-scrollbar"
          placeholder="0.00"
          value={amount}
          // type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="relative flex flex-col items-center w-fit h-fit">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${
            mode === "sender" ? "bg-[#DEDEDE]" : "bg-[#B0EAB0]"
          } font-bold text-custom-black p-[14.4px] w-full flex gap-1 items-center justify-center rounded-[18px] border-4 border-transparent active:border-white duration-300 active:text-white"`}
        >
          {currency}
          {!isOpen ? (
            <AiOutlineCaretDown size={22} color="#1E1E1E" />
          ) : (
            <AiOutlineCaretUp size={22} color="#1E1E1E" />
          )}
        </button>

        {isOpen && (
          <div className="bg-white border-2 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full h-28 overflow-y-scroll z-10 no-scrollbar">
            {currencies.map((curr) => (
              <div
                key={curr}
                onClick={() => {
                  onCurrencyChange(curr);
                  setIsOpen(false);
                }}
                className="w-full cursor-pointer hover:bg-blue-300 rounded-lg p-1"
              >
                <p className="text-sm">{curr}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ------- */}
      {/* <select
        value={currency}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onCurrencyChange(e.target.value)
        }
        className="p-[14.4px] border rounded-[18px]"
      >
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default CurrencyInput;
