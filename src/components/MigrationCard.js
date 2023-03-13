import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const MigrationCard = ({ date, title, desc, link }) => {
  return (
    <div className="bg-[#F7F8FA] py-5 px-7 w-full rounded-[20px] border border-[#c3bebe]">
      <div className="flex items-center text-[#4F4F4F] text-sm">
        <h1 className="text-[#67A948] font-fontReg">MIGRATION</h1>
        <GoPrimitiveDot />
        <p className="font-fontReg">{date}</p>
      </div>
      <h1 className="text-[#14290A] text-base py-3 font-fontReg">{title}</h1>
      <div
        className="text-[#2B5219] text-sm font-fontLight"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div className="flex items-center text-[#67A948] text-base font-fontReg pt-4">
        <Link to={link}>Continue reading </Link>
        <BsArrowUpRight />
      </div>
    </div>
  );
};

export default MigrationCard;
