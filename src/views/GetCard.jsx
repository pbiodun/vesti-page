import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const GetCard = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff]">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl lg:text-5xl text-center w-[90%] sm:w-[50%] pb-8 lg:w-[35%] font-fontSemi">
            Get your Vesti Virtual Card
          </h1>
        </div>
        <div className="text-center">
          <Link to="https://app.wevesti.com/bank">
            <Button className="capitalize lg:w-[20%] bg-vestigreen hover:bg-headcol p-5 text-base">
              Create your card
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetCard;
