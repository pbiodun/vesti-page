import WebBanner from "../components/WebBanner";
import WalletPhone from "../assets/images/walletsvcs.png";
import WalletsBenefit from "../views/WalletsBenefit";
// import DescriptionCard from "../components/DescriptionCard";
// import WalletScreen from "../assets/images/wallet-screen.png";
import ToCreateCard from "../components/ToCreateCard";
import Vector from "../assets/logo-icons/Vector.png";
import Vector1 from "../assets/logo-icons/Vector1.png";
// import AppsDownload from "../views/AppsDownload";
import DownloadApp from "../views/DownloadApp";
import CardAds from "../components/CardAds";
import Phone from "../assets/images/phone-notif1.png";

const WalletsPage = () => {
  return (
    <>
      <div className="bg-secondary w-full pt-40">
        <WebBanner
          title={
            <p className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 text-[#ffffff] !leading-[60px]">
              Vesti's{" "}
              <span className="text-[#67A948]">Multi-Currency Wallet</span>
            </p>
          }
          details="Talking about convenience? This is the card for you! It is a Physical Debit Card that can be used at anytime and anywhere in the world."
          buttonText="Get started in minutes"
          link="#"
          image={WalletPhone}
          imgWidth="60%"
        />
      </div>
      <WalletsBenefit />
      <div className="container pb-24 mx-auto ">
        <CardAds
          title="AVAILABLE TO REQUEST"
          mainDesc="Your Comfort is Guaranteed With The Vesti GlobalGeng Card"
          details="Vesti gives humans the power to move overseas to 110 Countries."
          learnMore
          image={Phone}
        />
      </div>
      {/* <div className="container grid lg:grid-cols-2 mx-auto gap-10 pb-24">
        <DescriptionCard
          title="Naira Wallet"
          desc="You can easily view and manage all transactions made with your Virtual card right from the Vesti App"
          classname="bg-[#D9D9D9]"
          image={WalletScreen}
        />
        <DescriptionCard
          title="Dollar Wallet"
          desc="Mistakenly put up your details on an unsafe platform? Don’t worry! You can easily delete your card and create a new one."
          classname="bg-[#E7EAFE]"
          image={WalletScreen}
          //   link="/virtual-card"
        />
      </div> */}
      <div className="w-full bg-[#F7FFF3] relative mb-24">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <div className="container mx-auto py-24">
          <ToCreateCard
            classname="mx-auto w-[100%] lg:w-[40%] flex flex-col justify-center items-center"
            title="What Can You Do With Wallets"
            head1="Register in minutes"
            desc1="Sign up online, or in our app with your email address"
            head2="Complete KYC verification"
            desc2="Verify your identity using your government-issued ID"
            head3="Order Your Card"
            desc3="We have one of the best rates that you can count on."
            buttonText="Get started in minutes"
          />
        </div>
        <img src={Vector1} alt="shape" className="absolute bottom-0 right-0" />
      </div>
      {/* <AppsDownload /> */}
      <DownloadApp />
    </>
  );
};

export default WalletsPage;
