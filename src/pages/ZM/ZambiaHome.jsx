import WebBanner from "../../components/WebBanner";
import ZambiaPhone from "../../assets/images/zambia-image.png";
import FeaturedLogos from "../../assets/logo-icons/feat-logos.png";
import DescriptionCard from "../../components/DescriptionCard";
import FinServicsImg from "../../assets/images/finsvcs1.png";
import VirtualCard from "../../assets/images/virtual-card.png";
// import Pathways from "../../views/Pathways";
import OpenAccount from "../../views/OpenAccount";
import Offerings from "../../views/Offerings";
import FaqSection from "../../views/FaqSection";
import DownloadApp from "../../views/DownloadApp";
import PathwaySlides from "../../views/PathwaySlides";
import Typed from "react-typed";

const ZambiaHome = () => {
  return (
    <>
      <div className="bg-secondary w-full pt-28">
        <WebBanner
          title={
            <h1 className="text-[#fff] font-fontSemi text-5xl w-[77%] pb-5 !leading-[60px]">
              The Neobank for <span className="text-[#67A948]">Zambians</span>{" "}
              moving to the{" "}
              <span className="text-[#67A948]">
                <Typed
                  strings={["USA", "UK", "Canada"]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
              </span>
            </h1>
          }
          details="Millions of people moving to new countries use Vesti for accessing financial services like bank accounts, debit and credit cards."
          buttonText="Get started in minutes"
          link="#"
          image={ZambiaPhone}
          imgWidth="50%"
          featured={
            <div>
              <img src={FeaturedLogos} alt="featured" />
            </div>
          }
        />
      </div>
      <div className="container pt-24 pb-12 mx-auto ">
        <div className="grid lg:grid-cols-2 mx-auto gap-10">
          <DescriptionCard
            title="Wallets"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#D9D9D9]"
            textCol="#57266E"
            h1Col="text-[#20082B]"
            pCol="text-[#3F1951]"
            image={FinServicsImg}
            link="/"
          />
          <DescriptionCard
            title="Virtual Cards"
            desc="Vesti gives humans the power to move overseas to 110 Countries."
            classname="bg-[#E7EAFE]"
            textCol="#303D94"
            h1Col="text-[#060E42]"
            pCol="text-[#16216B]"
            image={VirtualCard}
            link="/migration-services"
          />
        </div>
      </div>
      <PathwaySlides />
      <div className="pb-24">
        <OpenAccount />
      </div>
      <Offerings />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default ZambiaHome;
