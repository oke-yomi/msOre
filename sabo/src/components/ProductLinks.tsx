"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const ProductLinks = () => {
  const [heading, setHeading] = useState("");

  const links = [
    {
      name: "Products",
      submenu: true,
      sublinks: [
        {
          Head: "Sabo Marketplace",
          description:
            "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
          link: "/",
        },
        {
          Head: "Sabo for businesses",
          description:
            "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
          link: "/",
        },
        {
          Head: "Gift card exchange",
          description:
            "A payment platform built by africans for africans in the diaspora facing the challenges of sending money to their loved ones or paying bills back at home.",
          link: "/",
        },
      ],
    },
    { name: "Help" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="text-left 2md:cursor-pointer group mb-4 2md:mb-0">
            <h1
              className={`font-semibold 2md:text-sm text-base py-2 px-5 flex justify-start 2md:justify-between items-center rounded-[30px] w-fit ${
                link.submenu ? "bg-custom-lightgreen" : "bg-white"
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}

              {link.submenu && (
                <span className="ml-2 inline">
                  {heading !== link.name ? (
                    <AiOutlineCaretDown size={12} color="#4B4B4B" />
                  ) : (
                    <AiOutlineCaretUp size={12} color="#4B4B4B" />
                  )}
                </span>
              )}
            </h1>

            {link.submenu && (
              <div className="">
                <div className="absolute top-20 hidden group-hover:2md:block hover:2md:block w-full left-0 right-0">
                  <div className="bg-white p-5 px-8 2md:px-24 flex justify-between items-center flex-wrap">
                    <div className="hidden lg:block">
                      <Image
                        src="/images/big-coins.png"
                        width={348}
                        height={400}
                        alt="image"
                      />
                    </div>

                    <div className="flex gap-16 py-16">
                      {link.sublinks?.map((mysublink, index) => (
                        <div key={index} className="w-52">
                          <Image
                            src="/icons/home-icon.svg"
                            width={26}
                            height={20}
                            alt=""
                          />

                          <p className="font-semibold mt-4">{mysublink.Head}</p>
                          <p className="text-custom-textgray text-xs mt-2 font-medium">
                            {mysublink.description}
                          </p>

                          <button className="mt-4 bg-[#cae5ec] px-4 py-[10.5px] rounded-[30px] text-[#235462] font-semibold text-sm">
                            Coming soon
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile menus */}
          <div className={`${heading === link.name ? "2md:hidden" : "hidden"}`}>
            <div className="flex gap-10 py-5 px-5 items-center flex-wrap">
              {link.sublinks?.map((mysublink, index) => (
                <div key={index} className="w-4/5 max-w-[208px]">
                  <Image
                    src="/icons/home-icon.svg"
                    width={26}
                    height={20}
                    alt=""
                  />

                  <p className="font-semibold mt-4">{mysublink.Head}</p>
                  <p className="text-custom-textgray text-xs mt-2 font-medium">
                    {mysublink.description}
                  </p>

                  <button className="mt-4 bg-[#cae5ec] px-4 py-[10.5px] rounded-[30px] text-[#235462] font-semibold text-sm">
                    Coming soon
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductLinks;
