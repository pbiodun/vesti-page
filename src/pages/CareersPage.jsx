import CareersBanner from "../views/CareersBanner";
import ActiveCard from "../components/ActiveCard";
import VestiValues from "../views/VestiValues";
import Vector from "../assets/logo-icons/Vector.png";
import Vector1 from "../assets/logo-icons/Vector1.png";
import VestiOffer from "../components/VestiOffer";
import FaqSection from "../views/FaqSection";
import DownloadApp from "../views/DownloadApp";
import Button from "../components/Button";

const CareersPage = () => {
  return (
    <div>
      <CareersBanner />
      <div className="w-full py-20">
        <div className=" container relative mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-52">
            <div className="col-span-1">
              <h1 className="text-[#14290A] font-semibold text-4xl pb-10 font-fontSemi">
                Life at Vesti
              </h1>
              <ActiveCard
                title="Wallets"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
              <ActiveCard
                title="Cards"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
              <ActiveCard
                title="Pathways to other countries"
                desc="Vesti gives humans the power to move overseas to 110 Countries."
                click="hover:border-l-4 hover:border-l-lime-700"
              />
            </div>
            <div className="bg-[#EAEAEA] col-span-1 h-full rounded-[20px] flex justify-center items-end">
              {/* <div className="bg-[#16216B] h-full rounded-[20px]"></div> */}
            </div>
          </div>
        </div>
      </div>
      <VestiValues />
      <div className="w-full bg-[#F7FFF3] relative mb-24">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <div className="container mx-auto py-24">
          <VestiOffer
            classname="mx-auto w-[50%] lg:w-[40%] flex flex-col"
            title="What We Offer"
            head1="Great Work Culture"
            desc1="Sign up online, or in our app with your email address"
            head2="Learning & Development"
            desc2="Verify your identity using your government-issued ID"
            head3="Work Tools"
            desc3="We have one of the best rates that you can count on."
            head4="Distributed Team"
            desc4="Sign up online, or in our app with your email address"
            head5="Health Insurance"
            desc5="Verify your identity using your government-issued ID"
            head6="Paid Time Off"
            desc6="We have one of the best rates that you can count on."
            buttonText="See all Available Roles"
            link="#"
          />
        </div>
        <img src={Vector1} alt="shape" className="absolute bottom-0 right-0" />
      </div>
      <div className="w-full bg-secondary mb-24">
        <div className="container mx-auto text-center py-14 lg:w-[60%]">
          <h1 className="text-[#7F8CE5] text-lg font-fontSemi">
            COME WORK WITH US
          </h1>
          <p className="text-[#ffffff] pt-2 pb-10 text-3xl leading-[40px] font-fontReg">
            Didn’t find a role that fits? We still want to hear from you. Send
            us an email at{" "}
            <span className="text-[#67A948]">wevestijobs@gmail.com</span>
          </p>
          <Button
            link="#"
            CTA="View open roles"
            styles="p-4 mx-auto"
            width="40%"
          />
        </div>
      </div>
      <FaqSection />
      <DownloadApp />
    </div>
  );
};

export default CareersPage;
