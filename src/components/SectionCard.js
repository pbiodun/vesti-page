import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const SectionCard = ({
  wrapperStyle,
  textDivStyles,
  photo,
  hContent,
  pContent,
  imgStyle,
  link,
}) => {
  return (
    <div
      className={`flex flex-col gap-24 justify-between items-center container mx-auto ${wrapperStyle}`}
    >
      <div
        className={`w-[50%] mx-auto flex flex-col justify-end ${imgStyle} rounded-[20px] pt-16 px-16`}
      >
        <img className="w-full" src={photo} alt="pics" />
      </div>
      <div className={`w-[50%] ${textDivStyles}`}>
        <h1 className="text-headcol text-4xl font-fontReg pb-10">{hContent}</h1>
        <p className="text-[#2B5219] text-base font-fontLight pb-10">
          {pContent}
        </p>
        <Link to={link}>
          <div className="flex text-vestigreen text-lg font-fontReg hover:font-fontSemi items-center">
            <p>Learn more</p>
            <BsArrowUpRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SectionCard;
