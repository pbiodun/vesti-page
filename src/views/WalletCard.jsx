// import { BsArrowUpRight } from "react-icons/bs";
import FinServicsImg from "../assets/images/finsvcs1.png";
import VirtualCard from "../assets/images/virtual-card.png";
import DescriptionCard from "../components/DescriptionCard";

const WalletCard = () => {
  return (
    <div className="w-full">
      <div className="container pt-24 pb-12 mx-auto ">
        <div className="grid lg:grid-cols-2 mx-auto gap-10">
          <DescriptionCard
            title="Financial Services"
            desc="Vesti money is the neobank for immigrants moving to the US/UK/EU"
            classname="bg-[#FBF3FF]"
            textCol="#57266E"
            h1Col="text-[#20082B]"
            pCol="text-[#3F1951]"
            image={FinServicsImg}
            link="/financial-services"
          />
          <DescriptionCard
            title="Migration Services"
            desc="Vesti Pathways software gives immigrants all the support they need to move anywhere on the planet"
            classname="bg-[#E7EAFE]"
            textCol="#303D94"
            h1Col="text-[#060E42]"
            pCol="text-[#16216B]"
            image={VirtualCard}
            link="/migration-services"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
