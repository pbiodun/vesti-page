import Convenient from "../assets/logo-icons/finger-icon.png";
import Speed from "../assets/logo-icons/speed-icon.png";
import Rates from "../assets/logo-icons/rates-icon.png";

const VestiValues = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-[#14290A] font-fontReg text-4xl pb-3">
          Vesti's Values
        </h1>
        <p className="lg:w-[55%] text-[#2B5219] text-xl leading-[35px] pb-12 font-fontLight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          inventore quae amet tempore dolore facilis.
        </p>
      </div>

      {/* Vesti Values in Cards */}
      <div className="pb-24 grid gap-y-10 gap-x-10 xl:grid-cols-3 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10 md:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-5">
        <div className="flex flex-col bg-[#F7FFF3] rounded-xl p-10">
          <div>
            <img src={Convenient} alt="convenient" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] font-semibold text-lg pb-1 font-fontReg">
              Trust
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              A physical card you can use in over 90 countries.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F6F7FF] rounded-xl p-10">
          <div>
            <img src={Speed} alt="speed" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Transparency
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Make trasanctions in both Naira and USD
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#FBF3FF] rounded-xl p-10">
          <div>
            <img src={Rates} alt="rates" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Innovation
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Our rates are really affordable to cater to everyone’s needs
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F7FFF3] rounded-xl p-10">
          <div>
            <img src={Convenient} alt="convenient" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Accountability
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              A physical card you can use in over 90 countries.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F6F7FF] rounded-xl p-10">
          <div>
            <img src={Speed} alt="speed" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Security
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Make trasanctions in both Naira and USD
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#FBF3FF] rounded-xl p-10">
          <div>
            <img src={Rates} alt="rates" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Customer-based
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Our rates are really affordable to cater to everyone’s needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestiValues;
