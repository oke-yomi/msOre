import React from "react";

const Button = () => {
  return (
    <button className="flex gap-3 items-center bg-custom-darkgreen py-2 px-6 rounded-[30px]">
      <div className="flex gap-2 items-center">
        <FaApple size={35} color="#1E1E1E" />
        <FaGooglePlay size={30} color="#1E1E1E" />
      </div>

      <p className="text-custom-black">Download now</p>
    </button>
  );
};

export default Button;
