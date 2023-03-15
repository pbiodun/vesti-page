import { useState } from "react";
import PathwayImage from "../assets/images/pathway-image.png";
import CardImage from "../assets/images/mycards-image.png";
import WalletImage from "../assets/images/wallets-image.png";
import ActiveCard from "../components/ActiveCard";

const GetStartedDescription = [
  {
    id: 0,
    title: "Pathways software for global migration",
    desc: "Vesti gives humans the power to move overseas to 110 Countries.",
    image: PathwayImage,
    learnMore: "/",
  },
  {
    id: 1,
    title: "GlobalGeng Virtual & Physical Cards",
    desc: "Vesti gives humans the power to move overseas to 110 Countries.",
    image: CardImage,
  },
  {
    id: 2,
    title: "Multi-Currency Wallet & Virtual Accounts",
    desc: "Invest and sit back. You can follow your investment status at any time and invest in limited time special offers",
    image: WalletImage,
  },
];

const PathwaySlides = () => {
  const [activeTrx, setActiveTrx] = useState(0);

  return (
    <div className="w-full">
      <div className="container mx-auto py-20 grid grid-rows-2 gap-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-44 ">
        <div className="col-span-1">
          <h3 className="text-headcol font-fontReg text-3xl pb-10">
            Everything you need, less of what you don't
          </h3>
          <div className="">
            {GetStartedDescription.map((item, index) => (
              <ActiveCard
                title={item.title}
                index={index}
                desc={item.desc}
                activeTrx={activeTrx}
                onClick={() => setActiveTrx(index)}
                learnMore={item.learnMore}
              />
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#F7FFF3] relative mt-auto h-full rounded-2xl overflow-hidden">
            <img
              src={GetStartedDescription[activeTrx].image}
              className="absolute left-[15%] bottom-0 flex w-[70%] sm:w-[50%] sm:left-[25%] md:w-[40%] md:left-[30%] lg:left-[20%] lg:w-[60%]"
              alt="slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwaySlides;
