import CardBg from "../assets/images/card-bg.png";
import Button from "../components/Button";

const VirtualVisaCard = () => {
  return (
    <div className="relative bg-secondary pt-12 lg:pt-36 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="pt-16">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 lg:w-[70%] !leading-[60px]">
              The Vesti <span className="text-[#67A948]">Virtual</span>{" "}
              <span className="text-[#67A948]">Dollar</span> Card
            </h1>
            <p className="text-lg pb-12 lg:w-[60%] font-fontReg">
              Talking about convenience? This is the card for you! It is a
              Physical Debit Card that can be used at anytime and anywhere in
              the world.
            </p>
            <Button link="#" CTA="Create your card" styles="p-4" width="35%" />
          </div>
          <div className="">
            <img className="" src={CardBg} alt="featured" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualVisaCard;
