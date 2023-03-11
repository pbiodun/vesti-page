// import { BsArrowUpRight } from "react-icons/bs";
import ActiveCard from "../components/ActiveCard";
// import PathwayImage from "../assets/images/pathway-image.png";
// import CardImage from "../assets/images/mycards-image.png";
// import WalletImage from "../assets/images/wallets-image.png";

const Pathways = () => {
  return (
    <div className="w-full py-20">
      <div className=" container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="col-span-1">
            <h1 className="font-fontSemi lg:w-[85%] text-[#14290A] text-4xl pb-12 ">
              Everything you need, less of what you don't.
            </h1>
            <div className="w-full">
              <div className="">
                <ActiveCard
                  title="Pathways software for global migration"
                  desc="Vesti gives humans the power to move overseas to 110 Countries."
                  click="hover:border-l-4 hover:border-l-lime-700 hover:opacity-100"
                  learnMore
                />
              </div>
              <ActiveCard
                title="Cards"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700 opacity-50 hover:opacity-100"
              />
              <ActiveCard
                title="Wallets/Virtual Accounts"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700 opacity-50 hover:opacity-100"
              />
              {/* <ActiveCard
                title="Bill Payment"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700 opacity-50 hover:opacity-100"
              /> */}
            </div>
          </div>
          <div className="bg-[#EAEAEA] col-span-1 rounded-[20px] flex flex-col gap-10">
            {/* <div className="w-[60%] h-[60%] left-[25%]">
              <img className="relative" src={PathwayImage} alt="sliding" />
              <img className="absolute top-0" src={CardImage} alt="sliding" />
              <img className="absolute top-0" src={WalletImage} alt="sliding" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathways;
