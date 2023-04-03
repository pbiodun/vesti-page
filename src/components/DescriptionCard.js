import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DescriptionCard = ({
  title,
  desc,
  link,
  classname,
  textCol,
  h1Col,
  pCol,
  image,
}) => {
  return (
    <>
      <div
        className={`col-span-1 relative overflow-hidden ${classname} mb-10 rounded-3xl`}
      >
        <div className="h-full flex flex-col mx-auto items-center justify-between">
          <div className="py-10 px-10 lg:px-20">
            <h1 className={`${h1Col} text-3xl font-fontReg`}>{title}</h1>
            <p
              className={`text-base ${pCol} font-fontReg pt-3 w-[100%] lg:w-[80%]`}
            >
              {desc}
            </p>
            <div
              className={`mt-[20px] flex items-center text-[${textCol}] text-lg font-fontReg hover:text-blue-gray-900`}
            >
              <Link to={link}>Learn more</Link>
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-[75%] lg:w-[60%]">
            <img className="w-full" src={image} alt="phone-screen" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionCard;
