import { BsArrowUpRight } from "react-icons/bs";
import VestiCard from "../assets/images/cards.png";

const CardAd = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row lg:justify-between bg-[#3E6F26] rounded-[30px]">
          <div className="p-8 lg:pl-16">
            <div className="rounded-[30px] bg-[#060E42] w-[171px]">
              <p className="text-xs text-white font-normal text-center mb-4">
                AVAILABLE TO REQUEST
              </p>
            </div>
            <h1 className="text-white text-4xl w-[360px]">
              Introducing the new Vesti GlobalGeng Mastercard.
            </h1>
            <p className="text-base font-extralight text-white mt-6">
              Vesti gives humans the power to move overseas to 110 Countries.
            </p>
            <div className="mt-[20px] flex items-center text-[#ffffff] text-xl">
              <button>Learn more</button>
              <BsArrowUpRight />
            </div>
          </div>
          <div>
            <img src={VestiCard} alt="vesti-mastercard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAd;
