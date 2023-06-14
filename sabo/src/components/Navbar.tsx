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
      <div className="flex items-center justify-between font-medium px-8 2md:px-24 py-4 relative">
        <div className="z-50 p-5 2md:w-auto w-full flex justify-between">
          <Link href="/" as="image">
            <Image src="/logo.svg" width={89} height={26} alt="Logo" priority />
          </Link>

          <div className="2md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
          </div>
        </div>

        <ul className="2md:flex hidden items-center gap-8">
          <ProductLinks />
        </ul>

        {/* mobile links */}
        <ul
          className={`2md:hidden bg-white absolute w-full h-screen top-0 py-40 px-8 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ProductLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
