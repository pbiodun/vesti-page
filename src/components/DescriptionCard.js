import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DescriptionCard = ({ title, desc, link, classname, image }) => {
  return (
    <>
      <div
        className={`col-span-1 relative overflow-hidden ${classname} mb-10 rounded-3xl`}
      >
        <div className="h-full flex flex-col mx-auto items-center justify-between">
          <div className="py-10 px-10 lg:px-20">
            <h1 className="text-[#20082B] text-3xl font-semibold">{title}</h1>
            <p className="text-base text-[#3F1951] font-extralight">{desc}</p>
            <div className="mt-[20px] flex items-center text-[#57266E] text-xl">
              <Link to={link}>Learn more</Link>
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-[75%] lg:w-[50%]">
            <img src={image} alt="phone-screen" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionCard;
