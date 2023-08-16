import Link from "next/link";
import React from "react";

interface IBtnWithLink {
  link: string;
  btnText: string;
}

interface IBtn {
  btnText: string;
  onClick: () => void;
}

const ButtonWithLink = ({ link, btnText }: IBtnWithLink) => {
  return (
    <Link
      href={link}
      className="border-none bg-custom-purple-500 px-3 py-2 rounded-3xl text-custom-white cursor-pointer shadow-md"
    >
      {btnText}
    </Link>
  );
};

const ButtonWithAction = ({ btnText, onClick }: IBtn) => {
  return (
    <button className="border-none bg-custom-green-400 px-3 py-2 rounded-lg text-custom-white cursor-pointer shadow-md" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default ButtonWithLink;
export { ButtonWithAction };
