"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const setNavbarOpen = () => {
    setOpen(true);
  };

  const setNavbarClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-custom-white flex justify-center items-center relative">
      <nav className="w-full 2xl:px-64 2md:px-10 px-8 py-[50px] 2md:flex hidden items-center justify-between">
        <Link href={"/"} className="">
          <Image src={"/logo.svg"} alt={"Logo"} width={99} height={54} />
        </Link>

        <div className="flex gap-4 justify-center items-center">
          <button className="bg-[#E6F995] rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold">
            Go global
          </button>
          <button className="bg-custom-white rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold flex justify-center items-center gap-1">
            Products <AiOutlineCaretDown size={12} color="#0F242A" />
          </button>
          <button className="bg-custom-white rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold">
            Help
          </button>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-custom-green-500 font-semibold mr-1">
            Nigeria -EN
          </p>
          <Image src={"/images/gbp-flag.png"} alt={""} width={24} height={24} />
        </div>
      </nav>

      {/* mobile view */}
      <nav className="2md:hidden w-full 2xl:px-64 2md:px-10 px-8 py-4 ">
        <div className="flex items-center justify-between">
          <button onClick={setNavbarOpen}>
            <HiBars3 size={20} color="#0F242A" />
          </button>

          <Link href={"/"} className="">
            <Image src={"/logo.svg"} alt={"Logo"} width={69} height={38} />
          </Link>

          <div className="flex items-center justify-center">
            <p className="text-custom-green-500 2md:text-base text-xs font-semibold mr-1">
              Nig -EN
            </p>
            <Image
              src={"/images/gbp-flag.png"}
              alt={""}
              width={19}
              height={19}
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-3 bg-custom-white absolute transition duration-700 ease-in-out bottom-0 px-10 py-12 ${
            open
              ? "top-0 left-0 right-0 h-screen z-50 opacity-100"
              : "-left-full opacity-0"
          }`}
        >
          <button
            onClick={setNavbarClose}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F6F6EC]"
          >
            <AiOutlineClose size={20} color="#0F242A" />
          </button>

          <button className="bg-[#E6F995] rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold w-fit">
            Go global
          </button>
          <button className="bg-custom-white rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold flex justify-center items-center gap-1 w-fit">
            Products
            <AiOutlineCaretDown size={12} color="#0F242A" />
          </button>
          <button className="bg-custom-white rounded-[30px] py-2 px-[18px] text-custom-green-500 font-semibold w-fit">
            Help
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
