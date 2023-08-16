import React from "react";

interface ITextProps {
  text: string;
}

const MainText = ({ text }: ITextProps) => {
  return (
    <h4 className="font-medium text-2xl text-custom-purple-500">{text}</h4>
  );
};

export default MainText;
