import { BsArrowUpRight } from "react-icons/bs";

const CardAds = ({ title, mainDesc, details, learnMore, image }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between bg-[#67A948] rounded-[30px]">
        <div className="lg:w-[50%] p-8 lg:pl-16">
          <div className="rounded-[30px] bg-[#060E42] w-[50%] lg:w-[30%] md:w-[30%] sm:w-[35%] p-1">
            <p className="text-xs text-white font-normal text-center">
              {title}
            </p>
          </div>
          <h1 className="text-white text-4xl lg:w-[90%] pt-4 leading-[50px] font-semibold">
            {mainDesc}
          </h1>
          <p className="text-base font-extralight text-white lg:w-[70%] pt-6">
            {details}
          </p>
          <div className="mt-[20px] flex items-center text-[#ffffff] text-xl">
            {learnMore && (
              <div className="mt-[10px] flex items-center text-[#ffffff] text-xl">
                <button>Learn more</button>
                <BsArrowUpRight />
              </div>
            )}
          </div>
        </div>
        <div className="lg:pt-20 lg:pr-20 mx-auto md:mx-auto sm:mx-auto">
          <img src={image} alt="vesti" />
        </div>
      </div>
    </>
  );
};

export default CardAds;
