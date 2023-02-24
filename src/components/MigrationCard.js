import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const MigrationCard = ({ date, title, desc }) => {
  return (
    <div className="bg-[#F7F8FA] py-5 px-7 w-full rounded-[20px] border border-[#4F4F4F]">
      <div className="flex items-center text-[#4F4F4F] text-sm">
        <h1 className="text-[#67A948]">MIGRATION</h1>
        <GoPrimitiveDot />
        <p>{date}</p>
      </div>
      <h1 className="text-[#14290A] text-xl py-3 font-semibold">{title}</h1>
      <p className="text-[#2B5219] text-sm">{desc}</p>
      <div className="flex items-center text-[#67A948] text-base font-semibold pt-4">
        <Link to="">Continue reading </Link>
        <BsArrowUpRight />
      </div>
    </div>
  );
};

export default MigrationCard;
