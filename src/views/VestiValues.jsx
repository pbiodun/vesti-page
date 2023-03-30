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
          Our Values: Guiding Our Purpose and Success
        </p>
      </div>

      {/* Vesti Values in Cards */}
      <div className="pb-24 grid gap-y-10 gap-x-10 xl:grid-cols-4 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-10 md:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-5">
        <div className="flex flex-col bg-[#F7FFF3] rounded-xl p-10">
          <div>
            <img src={Convenient} alt="convenient" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Excellence
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Striving for excellence, always exceeding expectations.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#F6F7FF] rounded-xl p-10">
          <div>
            <img src={Speed} alt="speed" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Connectedness
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Connectedness fuels our innovation, always open to ideas.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#FBF3FF] rounded-xl p-10">
          <div>
            <img src={Rates} alt="rates" />
          </div>
          <div className="pt-5">
            <h3 className="text-[#14290A] text-lg pb-1 font-fontReg">
              Trust and Integrity
            </h3>
            <p className="text-[#2B5219] text-base pb-4 font-fontLight">
              Trust and integrity, always guiding us.
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
              We hold ourselves accountable, always improving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestiValues;
