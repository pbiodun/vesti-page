import WebBanner from "../components/WebBanner";
import HoldPhone from "../assets/images/holdphone.png";
import WalletsBenefit from "../views/WalletsBenefit";
import DescriptionCard from "../components/DescriptionCard";
import WalletScreen from "../assets/images/wallet-screen.png";
import ToCreateCard from "../components/ToCreateCard";
import Vector from "../assets/logo-icons/Vector.png";
import AppsDownload from "../views/AppsDownload";
import DownloadApp from "../views/DownloadApp";

const WalletsPage = () => {
  return (
    <>
      <div className="bg-secondary pb-16 w-full pt-32">
        <WebBanner
          title={
            <p className="text-4xl lg:text-4xl xl:text-5xl font-bold pb-5 text-[#ffffff]">
              Vesti <span className="text-[#67A948]">Wallets</span>
            </p>
          }
          details="Talking about convenience? This is the card for you! It is a Physical Debit Card that can be used at anytime and anywhere in the world."
          buttonText="Get started in minutes"
          image={HoldPhone}
        />
      </div>
      <WalletsBenefit />
      <div className="container grid lg:grid-cols-2 mx-auto gap-10 pb-24">
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
      </div>
      <div className="w-full bg-[#F7FFF3] relative mb-24">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <div className="container mx-auto py-24">
          <ToCreateCard
            classname="mx-auto w-[50%] lg:w-[40%] flex flex-col"
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
        <img src={Vector} alt="shape" className="absolute bottom-0 right-0" />
      </div>
      <AppsDownload />
      <DownloadApp />
    </>
  );
};

export default WalletsPage;
