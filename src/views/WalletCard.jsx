// import { BsArrowUpRight } from "react-icons/bs";
import WalletScreen from "../assets/images/wallet-screen.png";
import VirtualCard from "../assets/images/virtual-card.png";
import DescriptionCard from "../components/DescriptionCard";

const WalletCard = () => {
  return (
    <div className="w-full">
      <div className="container pt-24 pb-12 mx-auto ">
        <div className="grid lg:grid-cols-2 mx-auto gap-10">
          <DescriptionCard
            title="Financial Services"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#D9D9D9]"
            textCol="#57266E"
            h1Col="text-[#20082B]"
            pCol="text-[#3F1951]"
            image={WalletScreen}
            link="#"
          />
          <DescriptionCard
            title="Migration Services"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#E7EAFE]"
            textCol="#303D94"
            h1Col="text-[#060E42]"
            pCol="text-[#16216B]"
            image={VirtualCard}
            link="/virtual-card"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
