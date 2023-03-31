import WebBanner from "../components/WebBanner";
import WalletCard from "../assets/images/phones.png";
import { FinBenefits } from "../views/WalletsBenefit";
import DownloadApp from "../views/DownloadApp";
import FaqSection from "../views/FaqSection";
import Testimonials from "../views/Testimonials";
import OpenAccount from "../views/OpenAccount";
import SectionCard from "../components/SectionCard";

const FinancialServices = () => {
  return (
    <>
      <div className="bg-secondary w-full pt-40">
        <WebBanner
          title={
            <p className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 text-[#ffffff] !leading-[60px]">
              Vesti's <span className="text-[#67A948]">Financial Services</span>
            </p>
          }
          details="Millions of people moving to new countries use Vesti for accessing financial services like bank accounts, debit and 
          credit cards."
          buttonText="Get started in minutes"
          link="https://app.wevesti.com/register"
          image={WalletCard}
          imgWidth="50%"
        />
      </div>
      {/* Offerings Listed in Cards */}
      <div className="container mx-auto lg:w-[80%] py-24">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl font-fontReg">
            Wide Range of Services
          </h1>
          <p className="text-[#2B5219] text-2xl font-fontLight">
            Bank with peace of mind with the quality of services we offer
          </p>
        </div>
        <FinBenefits />
      </div>
      <SectionCard
        link=""
        wrapperStyle="pb-24 lg:flex-row"
        imgStyle="bg-[#FBF3FF]"
        photo={WalletCard}
        hContent="Vesti's Multicurrency Wallet"
        pContent="We Introduced the Vesti Card to cater to the need of migrants everywhere. Commercial banking prioritizes mainstream services like grocery shopping, auto loans, and known merchants, using advanced analytics and data mining, Vesti Cards are positioned to serve migrants in transit and those already settled."
      />
      <SectionCard
        link=""
        wrapperStyle="pb-24 lg:flex-row-reverse"
        imgStyle="bg-[#F8FEF5]"
        photo={WalletCard}
        hContent="Vesti's GlobalGeng Virtual Dollar Card"
        pContent="We Introduced the Vesti Card to cater to the need of migrants everywhere. Commercial banking prioritizes mainstream services like grocery shopping, auto loans, and known merchants, using advanced analytics and data mining, Vesti Cards are positioned to serve migrants in transit and those already settled."
      />
      <SectionCard
        link=""
        wrapperStyle="pb-24 lg:flex-row"
        imgStyle="bg-[#E7EAFF]"
        photo={WalletCard}
        hContent="Vesti's GlobalGeng Physical Naira Card"
        pContent="We Introduced the Vesti Card to cater to the need of migrants everywhere. Commercial banking prioritizes mainstream services like grocery shopping, auto loans, and known merchants, using advanced analytics and data mining, Vesti Cards are positioned to serve migrants in transit and those already settled."
      />
      <OpenAccount />
      <Testimonials
        title={
          <>
            <h1 className="text-3xl text-headcol font-fontSemi text-center">
              What our users are <span className="text-vestigreen">saying</span>
            </h1>
            <p className="text-center text-[#2B5219] text-lg font-fontReg">
              Few out of 1000+ stories of Vesti Users
            </p>
          </>
        }
      />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default FinancialServices;
