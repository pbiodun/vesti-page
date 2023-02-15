import Convenient from "../assets/logo-icons/finger-icon.png";
import Speed from "../assets/logo-icons/speed-icon.png";
import Rates from "../assets/logo-icons/rates-icon.png";
import Padlock from "../assets/logo-icons/padlock-icon.png";

const Offerings = () => {
  return (
    <div className="w-full pb-24">
      <div className="container mx-auto lg:w-[80%]">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl">
            International fee payments{" "}
            <span className="text-[#67A948]">simplified!</span>
          </h1>
          <p className="text-[#2B5219] text-2xl">
            Think lifting a feather is effortless? Try payment with Vesti.
          </p>
        </div>

        {/* Offerings Listed in Cards */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-10 md:grid-cols-2 md:grid-rows-2 md:gap-5">
          <div className="flex">
            <div>
              <img src={Convenient} alt="convenient" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Convenient
              </h3>
              <p className="text-[#2B5219] text-base">
                You can easily make payments from the comfort of your home
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Speed} alt="speed" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Speedy
              </h3>
              <p className="text-[#2B5219] text-base">
                Our payment channels and processes are swift and effective
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Rates} alt="rates" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Fair Rates
              </h3>
              <p className="text-[#2B5219] text-base">
                We have one of the best rates that you can count on.
              </p>
            </div>
          </div>
          <div className="sm:hidden lg:block"></div>
          <div className="flex">
            <div>
              <img src={Padlock} alt="lock" />
            </div>
            <div className="pl-5 md:pl-3">
              <h3 className="text-[#14290A] font-semibold text-lg pb-1">
                Secure
              </h3>
              <p className="text-[#2B5219] text-base">
                We use state-of-the-art data encryption when handling financial
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
