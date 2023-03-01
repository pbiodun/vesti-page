import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ActiveCard = ({ title, desc, learnMore, click }) => {
  return (
    <>
      <div
        className={`py-5 border-[#67A948]-500 cursor-pointer pl-4 ${click} border-l-4 `}
      >
        <h1 className="text-[#14290A] text-xl mb-2 font-fontSemi">{title}</h1>
        <p className="text-[#2B5219] font-fontLight text-sm">{desc}</p>
        {learnMore && (
          <div className="pt-[20px] flex items-center text-[#67A948] hover:text-headcol text-xl font-fontSemi w-[22%]">
            <Link to="#">Learn more</Link>
            <BsArrowUpRight />
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveCard;
