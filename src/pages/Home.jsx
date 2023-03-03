import CardAd from "../views/CardAd";
import Offerings from "../views/Offerings";
import Pathways from "../views/Pathways";
import Showcase from "../views/Showcase";
import WalletCard from "../views/WalletCard";
import OpenAccount from "../views/OpenAccount";
import Testimonials from "../views/Testimonials";
import FaqSection from "../views/FaqSection";
import DownloadApp from "../views/DownloadApp";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import VestiCard from "../assets/images/cards.png";

const Home = () => {
  return (
    <>
      <Showcase />
      <WalletCard />
      <CardAd
        leftSide={
          <div className="p-8 lg:pl-16">
            <div className="rounded-[30px] bg-[#060E42] w-[30%]">
              <p className="text-xs text-white font-medium text-center p-1 font-fontReg">
                AVAILABLE TO REQUEST
              </p>
            </div>
            <h1 className="text-white text-4xl w-[60%] pt-6 font-fontSemi">
              Introducing the new Vesti GlobalGeng Mastercard.
            </h1>
            <p className="text-base font-extralight text-white pt-6 font-fontReg w-[60%]">
              Vesti gives humans the power to move overseas to 110 Countries.
            </p>
            <div
              className="pt-5 flex items-center text-[#ffffff] font-fontReg text-xl hover:text-headcol w-[22.5%]"
              onClick={() => (window.location.href = `/globalgeng-card`)}
            >
              <Link to="/globalgeng-card">Learn more</Link>
              <BsArrowUpRight />
            </div>
          </div>
        }
        image={VestiCard}
        addStyle="flex flex-col lg:flex-row lg:justify-between items-center bg-[#67A948] rounded-[30px]"
      />
      <Pathways />
      <Offerings />
      <OpenAccount />
      <Testimonials
        title={
          <>
            <h1 className="text-3xl text-headcol font-semibold text-center">
              What our users are <span className="text-vestigreen">saying</span>
            </h1>
            <p className="text-center text-[#2B5219] text-lg font-medium">
              Think lifting a feather is effortless? Try payment with Vesti.
            </p>
          </>
        }
      />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default Home;
