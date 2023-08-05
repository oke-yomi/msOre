"use client";

import Image from "next/image";
import React from "react";

interface CurrencyRate {
  flag: string;
  symbol: string;
  rate: number;
}

interface CurrencyProps {
  amount: number;
  currencyRates: { [currency: string]: CurrencyRate };
  currency: string;
  text: string;
  onAmountChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
}

const CurrencyInput = ({
  amount,
  currencyRates,
  currency,
  onAmountChange,
  onCurrencyChange,
  text,
}: CurrencyProps) => {
  const selectedCurrency = currencyRates[currency];

  return (
    <div className="w-full flex items-center justify-between gap-10">
      <div className="flex-1">
        <p className="font-medium text-custom-green-400 text-[17px]">{text}</p>
        <div className="font-semibold text-[30px] text-custom-green-500 w-full flex items-center">
          <span className="mr-1">{selectedCurrency.symbol}</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="font-semibold text-[30px] text-custom-green-500 w-full outline-none bg-inherit"
          />
        </div>
      </div>

      <div className="bg-[#F6F6Fc] py-[10px] px-3 rounded-[63px] flex gap-1">
        <Image src={selectedCurrency.flag} alt={""} width={30} height={30} />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="outline-none bg-inherit"
        >
          {Object.entries(currencyRates).map(([currencyKey, currencyRate]) => (
            <option key={currencyKey} value={currencyKey}>
              {currencyKey}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
