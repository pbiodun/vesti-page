import GGCard from "../assets/images/ggmastercard.png";

const GlobalGCard = () => {
  return (
    <div className="relative bg-secondary py-24 lg:pt-36 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="justify-center items-center">
            <p className="text-4xl lg:text-4xl xl:text-5xl font-semibold pb-5 lg:w-[55%]">
              The Vesti <span className="text-[#67A948]">GlobalGeng</span>{" "}
              Mastercard
            </p>
            <p className="text-lg font-light mb-12 lg:w-[55%]">
              Talking about convenience? This is the card for you! It is a
              Physical Debit Card that can be used at anytime and anywhere in
              the world.
            </p>
            <button className="bg-[#67A948] p-4 rounded-xl lg:w-[35%]">
              Create your card
            </button>
          </div>
          <div className="">
            <img className="w-full" src={GGCard} alt="featured" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalGCard;
