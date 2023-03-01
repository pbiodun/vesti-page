import GGCard from "../assets/images/ggmastercard.png";
import Button from "../components/Button";

const GlobalGCard = () => {
  return (
    <div className="relative bg-secondary py-24 lg:pt-36 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="lg:w-[45%]">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 lg:w-[100%]">
              The Vesti <span className="text-[#67A948]">GlobalGeng</span>{" "}
              Mastercard
            </h1>
            <p className="text-lg pb-12 lg:w-[90%] font-fontLight">
              Talking about convenience? This is the card for you! It is a
              Physical Debit Card that can be used at anytime and anywhere in
              the world.
            </p>
            <Button link="#" CTA="Create your card" styles="p-4" width="50%" />
          </div>
          <div className="lg:w-[70%]">
            <img className="w-full" src={GGCard} alt="featured" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalGCard;
