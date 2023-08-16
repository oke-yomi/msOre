"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <header className="h-14 w-full px-8 py-2">
      <nav className="flex justify-between items-center h-full">
        <Link href={"/"}>
          <h3 className="inline-block font-semibold text-custom-purple-500 text-2xl">
            Ms<span className="text-custom-green-400">Ore</span>Foods
          </h3>
        </Link>

        <ul className="md:flex items-center hidden">
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className={`ml-4 capitalize text-lg hover:text-custom-purple-500`}
            >
              <Link
                href={link.href}
                className={`${
                  pathname === link.title
                    ? "underline underline-offset-2 text-custom-purple-500"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="w-fit h-fit md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose size={32} color="#1E1E1E" />
          ) : (
            <FaBarsStaggered size={32} color="#1E1E1E" />
          )}
        </div>
      </nav>

      {open && (
        <div
          className={`md:hidden block bg-white w-[250px] h-screen fixed z-50 top-0 shadow-3xl transition transform duration-500 ease-in ${
            open ? "left-0 opacity-100" : "left-[-100%] opacity-0"
          }`}
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <ul className="px-5 py-10 mt-8">
              {NavLinks.map((link, index) => (
                <li key={index} className="ml-4 capitalize text-lg mb-2">
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.title
                        ? "underline underline-offset-2 text-custom-purple-500"
                        : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

const NavLinks = [
  {
    title: "recipes",
    href: "/recipes",
  },
  {
    title: "restaurants",
    href: "/restaurants",
  },
];
