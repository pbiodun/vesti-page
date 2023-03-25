import GGCard from "../assets/images/ggmastercard.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const GlobalGCard = () => {
  return (
    <div className="relative bg-secondary py-24 lg:pt-36 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20 justify-between items-center lg:flex-row">
          <div className="lg:w-[45%]">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 lg:w-[100%] lg:!leading-[60px] sm:!leading-[40px]">
              The Vesti <span className="text-[#67A948]">GlobalGeng</span>{" "}
              Mastercard
            </h1>
            <p className="text-lg pb-12 lg:w-[90%] md:w-[80%] font-fontLight">
              Talking about convenience? This is the card for you! It is a
              Physical Debit Card that can be used at anytime and anywhere in
              the world.
            </p>
            <div className="pb-10">
              <Link to="https://app.wevesti.com/register">
                <Button className="capitalize w-[80%] sm:w-[60%] lg:w-[50%] bg-vestigreen hover:bg-headcol p-5 text-base">
                  Create your card
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <img className="w-full" src={GGCard} alt="featured" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalGCard;
