/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ButtonWithLink from "../Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="relative w-full h-[85vh]">
        <Image
          src={"/images/Hero-img.jpg"}
          alt={""}
          fill
          className="object-cover top-0 left-0 absolute"
        />
        <div className="w-full h-full backdrop-brightness-[0.19] text-white px-7">
          <div className="md:w-1/2 flex justify-center items-center md:px-16 py-20 px-7">
            <div className="w-full">
              <h5 className="font-semibold text-custom-purple-500 text-3xl">
                Let us help you find your next meal!
              </h5>

              <p className="mt-5">
                Hungry? Don't Know what you should cook today? {"\n"} We've got
                your back! {"\n"} Filter out your favourite meals and {"\n"} try
                out some new and amazing dishes
              </p>

              <div className="flex gap-5 flex-wrap items-center mt-4">
                <Link
                  href={"/recipes"}
                  className="border-none bg-custom-green-400 px-3 py-2 rounded-lg text-custom-white cursor-pointer shadow-md transition ease-in-out hover:translate-y-1 hover:scale-95 delay-150"
                >
                  View recipes
                </Link>

                <Link
                  href={"/restaurants"}
                  className="border-none text-custom-white underline cursor-pointer transition ease-in-out hover:translate-x-1 delay-150"
                >
                  Discover restaurants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
