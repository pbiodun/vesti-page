import Vector from "../assets/logo-icons/Vector.png";
import DoubleStrip from "../assets/logo-icons/doublestrip.png";
import Person from "../assets/logo-icons/person-icon.png";
import Badge from "../assets/logo-icons/kycbadge-icon.svg";
import Transact from "../assets/logo-icons/begintrans-icon.png";

const OpenAccount = () => {
  return (
    <div className="w-full bg-[#F7FFF3] py-20 relative">
      <div className="container mx-auto">
        <img src={Vector} alt="shape" className="absolute top-0 left-0" />
        <div className="container flex flex-col justify-center items-center">
          <div className="mx-auto w-[50%] lg:w-[30%]">
            <h1 className="text-2xl lg:text-3xl  text-center text-headcol font-semibold">
              How to open a free Vesti account
            </h1>
            <img src={DoubleStrip} alt="dashes" />
          </div>
          <div className="grid lg:grid-cols-3 py-12 items-center justify-between">
            <div className="flex">
              <div>
                <img src={Person} alt="person-icon" />
              </div>
              <div className="px-5">
                <h1 className="text-headcol text-lg font-semibold">
                  Register in minutes
                </h1>
                <p className="text-[#2B5219] font-extralight text-sm">
                  Sign up online, or in our app with your email address
                </p>
              </div>
            </div>
            <div className="flex md:py-6 sm:py-4 xs:py-3">
              <div>
                <img src={Badge} alt="person-icon" />
              </div>
              <div className="px-5">
                <h1 className="text-headcol text-lg font-semibold">
                  Complete KYC verification
                </h1>
                <p className="text-[#2B5219] font-extralight text-sm">
                  Verify your identity using your government-issued ID
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src={Transact} alt="person-icon" />
              </div>
              <div className="px-5">
                <h1 className="text-headcol text-lg font-semibold">
                  Start Transacting
                </h1>
                <p className="text-[#2B5219] font-extralight text-sm">
                  We have one of the best rates that you can count on.
                </p>
              </div>
            </div>
          </div>
          <div className="pb-4 md:pb-10 sm:pb-20">
            <button className="bg-vestigreen text-white text-sm text-center px-11 py-3 rounded-[10px]">
              Get started in minutes
            </button>
          </div>
        </div>
        <img src={Vector} alt="shape" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default OpenAccount;
