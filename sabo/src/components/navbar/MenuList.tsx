"use client";

import React from "react";

interface Props {
  submenu: boolean | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  name: string;
  children?: React.ReactNode;
}

const MenuList = ({
  submenu,
  onMouseEnter,
  onMouseLeave,
  onClick,
  name,
  children,
}: Props) => {
  return (
    <>
      <h1
        className={`font-semibold 2md:text-sm text-base py-2 px-5 flex justify-start 2md:justify-between items-center rounded-[30px] w-fit cursor-pointer ${
          submenu ? "bg-custom-lightgreen" : "bg-white"
        }`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {name}

        {children}
      </h1>
    </>
  );
};

export default MenuList;
