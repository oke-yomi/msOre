import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

interface Props {
  bgColor?: string;
  fontSize?: string;
}

const Button = ({ bgColor = "#CFF335", fontSize = "16px" }: Props) => {
  return (
    <button
      className="flex rounded-[30px] px-5 py-3 gap-2 items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-1 justify-center">
        <FaApple size={35} color="#1E1E1E" />
        <FaGooglePlay size={30} color="#1E1E1E" />
      </div>

      <p className={`text-custom-black font-medium`} style={{ fontSize }}>
        Download now
      </p>
    </button>
  );
};

export default Button;
