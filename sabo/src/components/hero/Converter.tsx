"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyInput from "./CurrencyInput";

const API_KEY = process.env.NEXT_PUBLIC_APILAYER_KEY;
const API = "33485caac36e98ea81e6acddb024cd50-";
// const URL = `https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`;
const URL = `http://data.fixer.io/api/latest?cbase=USD&access_key=${API}`;

type CurrencyRate = {
  currency: string;
  rate: number;
};

const Converter = () => {
  const [amountOne, setAmountOne] = useState<number>(0);
  const [amountTwo, setAmountTwo] = useState<number>(0);
  const [currencyOne, setCurrencyOne] = useState<string>("USD");
  const [currencyTwo, setCurrencyTwo] = useState<string>("NGN");
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // setCurrencyRates(res.data.rates);

        const rates = Object.entries(res.data.rates).map(
          ([currency, rate]) => ({
            currency,
            rate: Number(rate),
          })
        );
        console.log("rates", rates);
        setCurrencyRates(rates);
      })
      .catch((err) => {
        console.log("err", err);
        setCurrencyRates([]);
      });
  }, []);

  const rateOne = currencyRates?.find(
    (cr) => cr.currency === currencyOne
  )?.rate;

  const rateTwo = currencyRates?.find(
    (cr) => cr.currency === currencyTwo
  )?.rate;

  const handleAmountOneChange = (amountOne: number) => {
    if (rateOne && rateTwo) {
      setAmountTwo((amountOne * rateTwo) / rateOne);
    }

    setAmountOne(amountOne);
  };

  const handleAmountTwoChange = (amountTwo: number) => {
    if (rateOne && rateTwo) {
      setAmountOne((amountTwo * rateOne) / rateTwo);
    }

    setAmountTwo(amountTwo);
  };

  const handleCurrencyOneChange = (currencyOne: string) => {
    if (rateOne && rateTwo) {
      setAmountTwo((amountOne * rateTwo) / rateOne);
    }

    setCurrencyOne(currencyOne);
  };

  const handleCurrencyTwoChange = (currencyTwo: string) => {
    if (rateOne && rateTwo) {
      setAmountOne((amountTwo * rateOne) / rateTwo);
    }

    setCurrencyTwo(currencyTwo);
  };

  const currencies = currencyRates
    ? currencyRates.map((item) => item.currency)
    : [];

  // if (!currencyRates) return <p>Something went wrong!!!</p>;

  // if (currencyRates.length === 0) return <p>Loading...</p>;

  return (
    <>
      <div className="relative w-full 2md:w-[470px] min-h-80 h-96 mr-7">
        <div className="absolute top-0 left-0 bg-white border border-[#B3B2B2] w-full h-full z-30 rounded-2xl  p-6">
          <>
            <CurrencyInput
              amount={amountOne}
              currency={currencyOne}
              currencies={currencies}
              onAmountChange={handleAmountOneChange}
              onCurrencyChange={handleCurrencyOneChange}
              title="You're sending"
              mode="sender"
            />

            <div className="mt-3 mb-7 text-[#B58D0D] bg-[#FBEEC6] w-fit rounded-[30px] px-4 py-2">
              USD 1 = NGN 750
            </div>

            <CurrencyInput
              amount={amountTwo}
              currency={currencyTwo}
              currencies={currencies}
              onAmountChange={handleAmountTwoChange}
              onCurrencyChange={handleCurrencyTwoChange}
              title="Recipient gets"
              mode="reciever"
            />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-[#969696] text-[12.6px]">Transfer fee</p>
                <p className="font-semibold text-custom-black">500.00 NGN</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#969696] text-[12.6px]">
                  Total transfer fee
                </p>
                <p className="font-semibold text-custom-black">
                  750,500.00 NGN
                </p>
              </div>
            </div>
          </>
        </div>
        {/* extra boxes */}
        <div className="absolute top-[14px] left-[14px] bg-white border border-[#B3B2B2] w-full h-full z-20 rounded-2xl hidden md:block" />
        <div className="absolute top-[28px] left-[28px] bg-white border border-[#B3B2B2] w-full h-full z-10 rounded-2xl hidden md:block" />
      </div>
    </>
  );
};

export default Converter;
