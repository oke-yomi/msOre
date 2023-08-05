import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6EC] z-10 relative">
      <div className="w-full 2xl:px-64 2md:px-10 px-8 2md:pt-24 pt-14">
        <div className="2md:mb-12 mb-7 w-full">
          <Image src={"/logo.svg"} alt={"Logo"} width={88} height={48} />
        </div>

        <div className="flex flex-col 2md:flex-row 2md:justify-between items-start mb-7">
          <div className="2md:w-1/2 w-full mb-16 2md:mb-0">
            <div className="w-full 2md:max-w-md">
              <h3 className="font-bold text-custom-green-500 text-[40px] leading-none tracking-tight">
                Taking your Finances Global with Sabo
              </h3>
              <p className="font-medium text-custom-grey text-sm my-6">
                A payment platform built by africans for africans in the
                diaspora facing the challenges of sending money to their loved
                ones or paying bills back at home.
              </p>
              <Button bgColor="#FFF" fontSize="14px" />
            </div>
          </div>

          <div className="2md:w-1/2 w-full">
            <div className="flex gap-16 2md:justify-end">
              <div className="">
                <p className="font-semibold mb-3 text-custom-green-500">
                  Products
                </p>
                <Link
                  href={""}
                  className="cursor-pointer block text-custom-grey text-sm mb-2"
                >
                  P2p Market Place
                </Link>
                <Link
                  href={""}
                  className="cursor-pointer block font-medium text-custom-grey text-sm mb-2"
                >
                  Sabo for Business
                </Link>
              </div>
              <div className="">
                <p className="font-semibold mb-3 text-custom-green-500">
                  Support
                </p>
                <Link
                  href={""}
                  className="cursor-pointer block font-medium text-custom-grey text-sm mb-2"
                >
                  Help
                </Link>
              </div>
            </div>

            <div className="flex gap-1 2md:justify-end justify-center 2md:mt-44 mt-24">
              <AiFillTwitterCircle color="#0F242A" size={48} />
              <FaFacebookSquare color="#0F242A" size={48} />
            </div>
          </div>
        </div>

        <div className="2md:border-t-2 border-[#E6E6CB] pb-8 flex text-custom-grey font-medium">
          <div className="w-full py-12 flex flex-col-reverse 2md:flex-row 2md:justify-between justify-center items-center gap-2">
            <p className="text-sm">
              ©2023 Sabo Technologies. All rights reserved.
            </p>

            <div className=" flex items-center gap-4">
              <Link href={""} className=" cursor-pointer">
                Terms.
              </Link>
              <Link href={""} className="cursor-pointer">
                Privacy.
              </Link>
              <Link href={""} className="cursor-pointer">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
