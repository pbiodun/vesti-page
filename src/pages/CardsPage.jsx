import WebBanner from "../components/WebBanner";
import WalletCard from "../assets/images/phones.png";
import NairaCard from "../assets/images/naira-card.png";
import DownloadApp from "../views/DownloadApp";
import FaqSection from "../views/FaqSection";
import OpenAccount from "../views/OpenAccount";
import SectionCard from "../components/SectionCard";

const CardsPage = () => {
  return (
    <>
      <div className="bg-secondary w-full pt-40">
        <WebBanner
          title={
            <p className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 text-[#ffffff] !leading-[60px]">
              Introducing the{" "}
              <span className="text-[#67A948]">Vesti Cards</span>
            </p>
          }
          details="Get all the benefits of our variety of cards - spend online, at major airports in-stores, and abroad while saving on currency conversion fees, with the extra layer of security of the our digital cards."
          buttonText="Create New Card now"
          link="https://app.wevesti.com/bank"
          image={NairaCard}
          imgWidth="40%"
        />
      </div>
      {/* Offerings Listed in Cards */}
      <div className="container mx-auto lg:w-[80%] py-24">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl font-fontReg">
            Our Card Offerings.
          </h1>
          <p className="text-[#2B5219] text-2xl font-fontLight">
            Spend safely online, in-store and abroad choosing from a variety of
            our cards.
          </p>
        </div>
      </div>
      <SectionCard
        link="/globalgeng-card"
        wrapperStyle="pb-24 lg:flex-row"
        imgStyle="bg-[#FBF3FF]"
        photo={WalletCard}
        hContent="The Vesti GlobalGeng Naira Debit Card"
        pContent="We Introduced the Vesti Card to cater to the need of migrants everywhere. Commercial banking prioritizes mainstream services like grocery shopping, auto loans, and known merchants, using advanced analytics and data mining, Vesti Cards are positioned to serve migrants in transit and those already settled."
      />
      <SectionCard
        link="/virtual-card"
        wrapperStyle="pb-24 lg:flex-row-reverse"
        imgStyle="bg-[#F8FEF5]"
        photo={WalletCard}
        hContent="The Vesti GlobalGeng Virtual Dollar Card"
        pContent="Get a Virtual Dollar Card on us. Thousands of people choose the Virtual Dollar Card to make Immigration payments, application fees, tuition and other utilities. Issued in partnership with Stripe."
      />
      <SectionCard
        link="#"
        wrapperStyle="pb-24 lg:flex-row"
        imgStyle="bg-[#E7EAFF]"
        photo={WalletCard}
        hContent="Dreamer's Card (Coming Soon)"
        pContent="Need the comfort of a high profile pyhsical card, and the lifestyle that comes with it? Then this is your card."
      />
      <OpenAccount />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default CardsPage;
