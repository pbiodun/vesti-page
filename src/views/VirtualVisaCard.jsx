import CardBg from "../assets/images/card-bg.png";

const VirtualVisaCard = () => {
  return (
    <div className="relative bg-secondary pt-12 lg:pt-36 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="pt-16">
            <p className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-5 lg:w-[60%]">
              The Vesti <span className="text-[#67A948]">Virtual</span>{" "}
              <span className="text-[#67A948]">Dollar</span> Card
            </p>
            <p className="text-lg font-light mb-12 lg:w-[80%]">
              Talking about convenience? This is the card for you! It is a
              Physical Debit Card that can be used at anytime and anywhere in
              the world.
            </p>
            <button className="bg-[#67A948] p-4 rounded-xl w-[35%]">
              Create your card
            </button>
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
