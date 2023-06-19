"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ProductLinks from "./ProductLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white w-full max-w-[1440px] fixed z-50 left-[50%] translate-x-[-50%]">
      <div className="flex items-center justify-between font-medium px-8 2md:px-24 py-6 2md:py-[39px] relative">
        {/* Logo */}
        <>
          <div className="z-50 2md:w-auto w-full 2md:flex justify-between bg-white hidden">
            <Link href="/">
              <div className="w-16 2md:w-[89px] h-[18.5px] 2md:h-[25.75px] relative">
                <Image src="/logo.svg" fill alt="Logo" priority />
              </div>
            </Link>
          </div>

          {/* mobile logo */}
          <div className="2md:hidden w-full absolute left-0 right-0 top-0 px-8 py-6 z-50 bg-white">
            <div className="z-50 w-full flex justify-between">
              <Link href="/">
                <div className="w-16 2md:w-[89px] h-[18.5px] 2md:h-[25.75px] relative">
                  <Image src="/logo.svg" fill alt="Logo" priority />
                </div>
              </Link>

              <div className="2md:hidden" onClick={() => setOpen(!open)}>
                {open ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
              </div>
            </div>
          </div>
        </>

        {/* nav items */}
        <ul className="2md:flex hidden items-center gap-[14px]">
          <ProductLinks />
        </ul>

        {/* mobile links */}
        <ul
          className={`2md:hidden bg-white absolute w-full h-screen top-0 py-28 px-8 duration-500 ${
            open
              ? "left-0 right-0  overflow-y-scroll no-scrollbar"
              : "left-[-100%]"
          }`}
        >
          <ProductLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
