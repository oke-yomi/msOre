"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCaretDown } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleDownload = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="">
      <nav className="w-full max-w-[1440px] bg-white fixed top-0 left-2/4 translate-x-[-50%] z-50">
        <div className="justify-between px-8 mx-auto  2md:items-center 2md:flex 2md:px-24">
          <div>
            <div className="flex items-center justify-between py-6 2md:py-11 2md:block">
              {/* Logo */}
              <Link href="/" as="image">
                <Image
                  src="/logo.svg"
                  width={89}
                  height={26}
                  alt="Logo"
                  priority
                />
              </Link>

              {/* Hamburger button for mobile */}
              <div className="2md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose size={24} />
                  ) : (
                    <RxHamburgerMenu size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 2md:block 2md:pb-0 2md:mt-0 ${
                navbar ? "p-12 2md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen 2md:h-auto items-center justify-center 2md:flex">
                {/* download */}
                <li className="text-custom-gray py-2 2md:px-6 text-center 2md:hover:text-green-600  pb-2 2md:pb-0 transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:text-custom-green hover:font-medium">
                  <Link
                    href="http://theinsync.substack.com"
                    onClick={() => setNavbar(!navbar)}
                    target="_blank"
                    className="hover:border-b-2 2md:hover:border-b-0 border-custom-green"
                  >
                    Blog
                  </Link>
                </li>
                {/* blog */}
                <li className="text-custom-gray py-2 2md:px-6 text-center 2md:hover:text-green-600  pb-2 2md:pb-0 transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:text-custom-green hover:font-medium">
                  <Link
                    href="http://theinsync.substack.com"
                    onClick={() => setNavbar(!navbar)}
                    target="_blank"
                    className="hover:border-b-2 2md:hover:border-b-0 border-custom-green"
                  >
                    Blog
                  </Link>
                </li>
                {/* contact */}
                <li className="text-custom-gray py-2 2md:px-6 text-center 2md:hover:text-green-600  pb-2 2md:pb-0 transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:text-custom-green hover:font-medium">
                  <Link
                    href="#contact"
                    onClick={() => setNavbar(!navbar)}
                    className="hover:border-b-2 2md:hover:border-b-0 border-custom-green"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* language */}
                <li className="flex items-center 2md:items-start justify-center">
                  <button className="flex items-start justify-center text-[#838383] bg-gray-100 p-2 rounded-xl text-center">
                    EN
                    <RxCaretDown color="#838383" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
