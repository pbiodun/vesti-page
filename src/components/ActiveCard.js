import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ActiveCard = ({
  title,
  desc,
  learnMore,
  click,
  onClick,
  addStyles,
  index,
  activeTrx,
}) => {
  return (
    <>
      <div
        className={`${addStyles} ${
          activeTrx === index &&
          "transition duration-300 ease-in-out border-l-vestigreen opacity-100"
        } opacity-50 py-8 cursor-pointer pl-4 ${click} border-l-4`}
        onClick={() => onClick()}
      >
        <h1 className="text-[#14290A] text-xl mb-2 font-fontReg">{title}</h1>
        <p className="text-[#2B5219] font-fontLight text-sm">{desc}</p>
        {learnMore && (
          <div className="pt-3 flex items-center text-[#67A948] hover:text-headcol text-base font-fontReg w-full">
            <Link to="#">Learn more</Link>
            <BsArrowUpRight />
          </div>
        )}
      </div>
    </>
  );
};

export default ActiveCard;
