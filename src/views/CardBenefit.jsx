import Convenient from "../assets/logo-icons/finger-icon.png";
import Speed from "../assets/logo-icons/speed-icon.png";
import Rates from "../assets/logo-icons/rates-icon.png";
// import Padlock from "../assets/logo-icons/padlock-icon.png";

const CardBenefit = () => {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto lg:w-[80%] font-fontReg">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl">
            Vesti Dollar Virtual Card Benefits
          </h1>
          <p className="text-[#2B5219] text-2xl">
            Payments are now easier with the Vesti Dollar Virtual Card
          </p>
        </div>

        {/* Offerings Listed in Cards */}
        <div className="grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-[100px] gap-7">
          <div className="flex">
            <div>
              <img src={Convenient} alt="convenient" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-fontSemi text-lg pb-1">
                Widely Accepted
              </h3>
              <p className="text-[#2B5219] text-base">
                The Vesti Virtual Card is accepted on over 100 platforms.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Speed} alt="speed" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-fontSemi text-lg pb-1">
                Fast Transactions
              </h3>
              <p className="text-[#2B5219] text-base">
                You don't have to wait hours to confirm your transactions.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Rates} alt="rates" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-fontSemi text-lg pb-1">
                Fair Rates
              </h3>
              <p className="text-[#2B5219] text-base">
                We have the most affordable rates on the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBenefit;
