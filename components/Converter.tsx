"use client";

import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";

interface CurrencyRate {
  flag: string;
  symbol: string;
  rate: number;
}

const currencyRates: { [currency: string]: CurrencyRate } = {
  USD: {
    flag: "/images/usd-flag.png",
    symbol: "$",
    rate: 850,
  },
  GBP: {
    flag: "/images/gbp-flag.png",
    symbol: "£",
    rate: 1100,
  },
  CAD: {
    flag: "/images/cad-flag.png",
    symbol: "$",
    rate: 550,
  },
  NGN: {
    flag: "/images/ngn-flag.png",
    symbol: "₦",
    rate: 1,
  },
};

const Converter = () => {
  const [amountOne, setAmountOne] = useState<string | number>("0");
  const [amountTwo, setAmountTwo] = useState<string | number>("0");
  const [currencyOne, setCurrencyOne] = useState("NGN");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [rates, setRates] = useState(currencyRates);

  let baseFeeNGN = 10.0;

  const handleAmountChangeOne = (amountOneStr: string) => {
    const amountOneValue = parseFloat(amountOneStr);
    const rateOne = rates[currencyOne].rate;
    const rateTwo = rates[currencyTwo].rate;
    if (!isNaN(amountOneValue)) {
      setAmountTwo(Number((amountOneValue * rateTwo) / rateOne).toFixed(2));
      setAmountOne(amountOneValue);
    } else {
      setAmountTwo("0");
      setAmountOne("0");
    }
  };

  const handleAmountChangeTwo = (amountTwoStr: string) => {
    const amountTwoValue = parseFloat(amountTwoStr);
    const rateOne = rates[currencyOne].rate;
    const rateTwo = rates[currencyTwo].rate;
    if (!isNaN(amountTwoValue)) {
      setAmountOne(Number((amountTwoValue * rateOne) / rateTwo).toFixed(2));
      setAmountTwo(amountTwoValue);
    } else {
      setAmountOne("0");
      setAmountTwo("0");
    }
  };

  const handleCurrencyChangeOne = (currencyOne: string) => {
    const rateOne = rates[currencyOne].rate;
    const amountOneNum = Number(amountOne);
    setAmountTwo((amountOneNum * rates[currencyTwo].rate) / rateOne);
    setCurrencyOne(currencyOne);
  };

  const handleCurrencyChangeTwo = (currencyTwo: string) => {
    const rateTwo = rates[currencyTwo].rate;
    const amountTwoNum = Number(amountTwo);
    setAmountOne((amountTwoNum * rates[currencyOne].rate) / rateTwo);
    setCurrencyTwo(currencyTwo);
  };

  const calculateFee = (selectedCurrency: string) => {
    const selectedRate = rates[selectedCurrency].rate;

    if (amountOne == 0) {
      return (baseFeeNGN = 0);
    }
    return (baseFeeNGN * selectedRate).toFixed(2);
  };

  return (
    <section className="h-[582px] bg-custom-yellow-300 w-full flex justify-center items-center relative 2xl:px-64 2md:px-10 px-8">
      <div
        className="min-h-fit w-fit 2md:w-[504px] 2md:h-[438px] absolute rounded-[25px] -top-[88px] p-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #F35012, #F89772 30%)",
        }}
      >
        <div className="w-full h-full bg-custom-white rounded-[25px] px-8 py-7">
          <div className="">
            <CurrencyInput
              amount={Number(amountOne)}
              currencyRates={rates}
              currency={currencyOne}
              onAmountChange={handleAmountChangeOne}
              onCurrencyChange={handleCurrencyChangeOne}
              text="You're sending"
            />

            <div className="mt-4">
              <CurrencyInput
                text="Recipient gets"
                amount={Number(amountTwo)}
                currencyRates={rates}
                currency={currencyTwo}
                onAmountChange={handleAmountChangeTwo}
                onCurrencyChange={handleCurrencyChangeTwo}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="py-[10px] px-5 text-custom-green-500 font-semibold bg-[#F1FCC5] rounded-[38px]">
                  {currencyRates[currencyOne].symbol}1 ={" "}
                  {currencyRates[currencyTwo].symbol}
                  {(rates[currencyTwo].rate / rates[currencyOne].rate).toFixed(
                    2
                  )}
                </p>
                <p className="py-[10px] px-5 text-custom-green-500 font-semibold bg-[#DDEFF3] rounded-[38px]">
                  Fee = {currencyRates[currencyOne].symbol}{" "}
                  {calculateFee(currencyOne)}
                </p>
              </div>

              <div className="mt-4 rounded-[25px] px-[15px] py-[14px] bg-custom-offwhite flex items-center justify-between">
                <p className="font-medium text-custom-green-400 text-lg">
                  Total amount to be sent
                </p>

                <p className="font-semibold text-custom-green-500 text-2xl">
                  {currencyRates[currencyOne].symbol}{" "}
                  {(
                    Number(amountOne) + Number(calculateFee(currencyOne))
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Converter;
