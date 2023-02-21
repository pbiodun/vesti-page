import Lady from "../assets/images/ladyimage.png";
import { BsArrowUpRight } from "react-icons/bs";

const VestiGCard = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-20">
        <div className="lg:w-[45%]">
          <img className="" src={Lady} alt="techstars" />
        </div>
        <div className="lg:w-[45%] lg:pt-0 pt-10">
          <h1 className="text-[#14290A] text-3xl font-semibold pb-12">
            What is the{" "}
            <span className="text-[#67A948]">Vesti GlobalGeng Mastercard</span>{" "}
            and who is it for?
          </h1>
          <p className="text-base font-extralight text-[#2B5219] pb-8 lg:w-[90%]">
            We Introduced the Vesti Card to cater to the need of migrants
            everywhere. Commercial banking prioritizes mainstream services like
            grocery shopping, auto loans, and known merchants, using advanced
            analytics and data mining, Vesti Cards are positioned to serve
            migrants in transit and those already settled.{" "}
          </p>
          <div className="flex items-center text-[#67A948] text-xl font-semibold">
            <button>Request for card</button>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestiGCard;
