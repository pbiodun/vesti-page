import { Link } from "react-router-dom";

const GetCard = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-14">
          <h1 className="text-5xl text-center lg:w-[30%] leading-[60px] pb-8 font-semibold">
            Get your Vesti Virtual Card
          </h1>
          <div className="bg-vestigreen text-white text-sm text-center px-11 py-3 rounded-[10px] cursor-pointer">
            <Link to="#">Create your card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCard;
