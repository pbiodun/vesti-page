import CardAds from "../components/CardAds";
import GGBenefits from "../views/GGBenefits";
import GlobalGCard from "../views/GlobalGCard";
import VestiGCard from "../views/VestiGCard";
import Phone from "../assets/images/phone-notif1.png";
import ToCreateCard from "../components/ToCreateCard";
import Featured from "../views/Featured";
import GetCard from "../views/GetCard";

const GlobalGengCard = () => {
  return (
    <>
      <GlobalGCard />
      <VestiGCard />
      <GGBenefits />
      <div className="container pb-12 mx-auto ">
        <CardAds
          title="AVAILABLE TO REQUEST"
          mainDesc="Your Comfort is Guaranteed With The Vesti GlobalGeng Card"
          details="Vesti gives humans the power to move overseas to 110 Countries."
          learnMore
          image={Phone}
        />
      </div>
      <div className="container mx-auto">
        <ToCreateCard
          title="How to request"
          head1="Register in minutes"
          desc1="Sign up online, or in our app with your email address"
          head2="Complete KYC verification"
          desc2="Verify your identity using your government-issued ID"
          head3="Order Your Card"
          desc3="We have one of the best rates that you can count on."
          buttonText="Get started in minutes"
          classname="mx-auto w-[70%] lg:w-[30%] flex flex-col justify-center items-center"
        />
      </div>
      <Featured />
      <GetCard />
    </>
  );
};

export default GlobalGengCard;
