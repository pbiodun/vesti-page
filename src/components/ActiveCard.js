import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ActiveCard = ({ title, desc, learnMore, click }) => {
  return (
    <>
      <div
        className={`py-5 border-[#67A948]-500 cursor-pointer pl-4 ${click} border-l-4 `}
      >
        <h1 className="text-[#14290A] text-xl mb-2">{title}</h1>
        <p className="text-[#2B5219] font-extralight text-sm">{desc}</p>
        {learnMore && (
          <div className="mt-[20px] flex items-center text-[#67A948] text-xl">
            <button>Learn more</button>
            <BsArrowUpRight />
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveCard;
