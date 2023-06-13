"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#f2f2f2]">
      <div className="px-8 2md:px-24 2md:pt-28 pt-[72px] pb-10 border-b border-[#DEDEDE] flex flex-col 2md:flex-row gap-24 justify-between">
        <div className="">
          <Link href="/" as="image">
            <Image
              src="/logo-dark.svg"
              width={100}
              height={29}
              alt="Logo"
              priority
            />
          </Link>

          <p className="mt-4 mb-16 2md:text-sm text-xs text-custom-textgray w-full max-w-[473px]">
            A payment platform built by africans for africans in the diaspora
            facing the challenges of sending money to their loved ones or paying
            bills back at home.
          </p>

          <Image
            src="/images/big-coins.png"
            width={112}
            height={124}
            alt="image"
            className="hidden 2md:block"
          />
        </div>

        <div className="flex gap-16">
          <div className="">
            <p className="font-semibold mb-6">Products</p>
            <Link
              href={""}
              className="cursor-pointer block text-custom-textgray mb-3"
            >
              P2p Market Place
            </Link>
            <Link
              href={""}
              className="cursor-pointer block text-custom-textgray mb-3"
            >
              Sabo for Business
            </Link>
          </div>
          <div className="">
            <p className="font-semibold mb-6">Support</p>
            <Link
              href={""}
              className="cursor-pointer block text-custom-textgray mb-3"
            >
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* lower footer */}
      <div className="px-8 2md:px-24 flex flex-col-reverse 2md:flex-row justify-between items-center py-16 gap-7">
        <p className="text-custom-textgray text-xs">
          ©2023 Sabo Technologies. All rights reserved.
        </p>
        <div className=" flex items-center gap-4">
          <Link href={""} className="text-custom-textgray cursor-pointer">
            Terms.
          </Link>
          <Link href={""} className="text-custom-textgray cursor-pointer">
            Privacy.
          </Link>
          <Link href={""} className="text-custom-textgray cursor-pointer">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
