import { Link } from "react-router-dom";
import BgPattern from "../assets/images/pattern-bg.svg";
import GlobalPic from "../assets/images/globe-mig.png";
import UKLocation from "../assets/images/uk-loc.png";
import USLocation from "../assets/images/us-loc.png";
import FINLocation from "../assets/images/fin-loc.png";
import VestiCentral from "../assets/images/vesti-loc.png";
import Location4 from "../assets/images/ctry-loc.png";

const MigrationServiceHero = () => {
  return (
    <div className="bg-secondary w-full pt-28 lg:pt-20 relative overflow-hidden">
      <img
        src={BgPattern}
        alt="pattern"
        className="absolute right-[-100%] top-0 lg:right-0"
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[50%] z-30">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 text-[#ffffff]">
              Vesti <span className="text-[#67A948]">Migration Services</span>
            </h1>
            <p className="lg:w-[94%] text-lg font-fontLight pb-12 text-[#ffffff]">
              Vesti empowers immigrants to take control of their financial lives
              and achieve financial independence. From migration loans to
              migration advice, we have the tools and resources to help ease the
              burden of the migration process.
            </p>
            <div className="bg-[#67A948] sm:w-[60%] lg:w-[50%] font-fontReg text-center hover:bg-headcol p-4 rounded-xl mb-[70px] text-[#ffffff]">
              <Link to="">Get started in minutes</Link>
            </div>
          </div>
          <div className="lg:w-[50%] z-30 relative">
            <img className="w-full" src={GlobalPic} alt="global" />
            <img
              className="absolute top-16 left-4 lg:top-36 lg:left-24 md:top-40 md:left-28 sm:top-32 sm:left-20 w-28 animate-bounce"
              src={UKLocation}
              alt="global"
            />
            <img
              className="absolute top-10 left-28 lg:top-28 lg:left-72 md:top-32 md:left-72 sm:top-24 sm:left-64 w-28 animate-bounce"
              src={USLocation}
              alt="global"
            />
            <img
              className="absolute bottom-20 left-16 lg:bottom-44 lg:left-32 sm:bottom-48 sm:left-32 w-16 animate-bounce"
              src={FINLocation}
              alt="global"
            />
            <img
              className="absolute top-32 right-32 lg:top-64 lg:right-64 md:top-72 md:right-64 sm:top-60 sm:right-60 w-16"
              src={VestiCentral}
              alt="global"
            />
            <img
              className="absolute bottom-16 right-10 lg:bottom-36 lg:right-28 sm:bottom-44 sm:right-20 w-28 animate-bounce"
              src={Location4}
              alt="global"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationServiceHero;
