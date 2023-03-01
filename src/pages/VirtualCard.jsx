import DescriptionCard from "../components/DescriptionCard";
import CardBenefit from "../views/CardBenefit";
import NewCardAd from "../views/NewCardAd";
import VirtualVisaCard from "../views/VirtualVisaCard";
import Phone1 from "../assets/images/Phoneheight.png";
import Phone2 from "../assets/images/Phoneheight1.png";
import CreateCard from "../views/CreateCard";
import AppsDownload from "../views/AppsDownload";
import Featured from "../views/Featured";
import GetCard from "../views/GetCard";

const VirtualCard = () => {
  return (
    <>
      <VirtualVisaCard />
      <CardBenefit />
      <NewCardAd />
      <div className="container pt-24 pb-12 mx-auto">
        <div className="grid lg:grid-cols-2 mx-auto gap-10">
          <DescriptionCard
            title="Transactions"
            desc="You can easily view and manage all transactions made with your Virtual card right from the Vesti App."
            classname="bg-[#D9D9D9]"
            textCol="#57266E"
            h1Col="text-[#20082B]"
            pCol="text-[#3F1951]"
            image={Phone1}
          />
          <DescriptionCard
            title="User Controls"
            desc="Mistakenley put up your details on an unsafe platform? Don’t worry! You can easily delete your card and create a new one."
            classname="bg-[#E7EAFE]"
            textCol="#303D94"
            h1Col="text-[#060E42]"
            pCol="text-[#16216B]"
            image={Phone2}
          />
        </div>
      </div>
      <CreateCard />
      <AppsDownload />
      <Featured />
      <GetCard />
    </>
  );
};

export default VirtualCard;
