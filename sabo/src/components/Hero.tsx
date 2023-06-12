"use client";

import React, { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";
import axios from "axios";

const API_KEY = "33485caac36e98ea81e6acddb024cd50";
const CURRENCY_API = `http://data.fixer.io/api/latest?base=USD&access_key=${API_KEY}`;

const Hero = () => {
  //   const [currencyRate, setCurrencyRate] = useState<string[] | null>([]);
  const [currencyRate, setCurrencyRate] = useState([]);

  useEffect(() => {
    axios
      .get(CURRENCY_API)
      .then((res) => {
        console.log(res.data.rates);
        // setCurrencyRate(res.data.rates);
      })
      .catch((err) => {
        console.log(err);
        // setCurrencyRate(null);
      });
  }, []);

  return (
    <div className="border border-red-500 flex flex-col 2md:flex-row text-custom-black gap-[85px] justify-between">
      <div className="max-w-[641px]">
        <h3 className="font-bold text-[70px] md:text-[56px] leading-none tracking-tighter mb-4 2md:mb-8">
          Take your Finances Global with Sabo
        </h3>
        <p className="text-custom-textgray font-medium 2md:text-lg text-base mb-8">
          A payment platform built by africans for africans in the diaspora
          facing the challenges of sending money to their loved ones or paying
          bills back at home.
        </p>
        <button>
          <p>download now</p>
        </button>
      </div>

      <div className="relative w-full 2md:w-[470px] h-80 mr-7">
        <div className="absolute top-0 left-0 bg-white border border-custom-neutral w-full h-full z-30 rounded-2xl">
          <CurrencyInput amount={"1"} currencies={currencyRate} />
          {/* <CurrencyInput amount={"1"} currencies={Object.keys(currencyRate)} /> */}
        </div>

        {/* extra boxes */}
        <div className="absolute top-[14px] left-[14px] bg-white border border-custom-neutral w-full h-full z-20 rounded-2xl hidden md:block" />
        <div className="absolute top-[28px] left-[28px] bg-white border border-custom-neutral w-full h-full z-10 rounded-2xl hidden md:block" />
      </div>
    </div>
  );
};

export default Hero;
