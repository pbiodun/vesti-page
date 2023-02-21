import Convenient from "../assets/logo-icons/finger-icon.png";
import Speed from "../assets/logo-icons/speed-icon.png";
import Rates from "../assets/logo-icons/rates-icon.png";

const GGBenefits = () => {
  return (
    <div className="w-full pb-24">
      <div className="container mx-auto lg:w-[80%] flex-wrap">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl">Global Geng Card Benefits</h1>
          <p className="text-[#2B5219] text-2xl">
            These are a few of the Vesti GlobalGeng Mastercard.
          </p>
        </div>

        {/* Offerings Listed in Cards */}
        <div className="grid gap-y-10 gap-x-10 xl:grid-cols-3 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10 md:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-5">
          <div className="flex flex-col bg-[#F7FFF3] rounded-xl p-10">
            <div>
              <img src={Convenient} alt="convenient" />
            </div>
            <div className="pt-5">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Globally Accepted
              </h3>
              <p className="text-[#2B5219] text-base pb-4">
                A physical card you can use in over 90 countries.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#F6F7FF] rounded-xl p-10">
            <div>
              <img src={Speed} alt="speed" />
            </div>
            <div className="pt-5">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Multiple Currencies
              </h3>
              <p className="text-[#2B5219] text-base pb-4">
                Make trasanctions in both Naira and USD
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#FBF3FF] rounded-xl p-10">
            <div>
              <img src={Rates} alt="rates" />
            </div>
            <div className="pt-5">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Fair Rates
              </h3>
              <p className="text-[#2B5219] text-base pb-4">
                Our rates are really affordable to cater to everyone’s needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GGBenefits;
