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
            title="Wallets"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#D9D9D9]"
            image={WalletScreen}
          />
          <DescriptionCard
            title="Virtual Card"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#E7EAFE]"
            image={VirtualCard}
            link="/virtual-card"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
