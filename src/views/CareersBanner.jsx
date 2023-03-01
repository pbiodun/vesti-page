import Techstars1 from "../assets/logo-icons/techstars1.svg";
import Techcity1 from "../assets/logo-icons/techcity1.svg";
import Bloomberg1 from "../assets/logo-icons/bloomberg1.svg";
import Button from "../components/Button";

const CareersBanner = () => {
  return (
    <div className="w-full bg-secondary">
      <div className="py-32 container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="lg:w-[45%]">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="dummy"
          />
        </div>
        <div className="lg:w-[45%]">
          <h1 className="text-[#ffffff] font-semibold text-5xl pb-4 font-fontSemi">
            Careers at Vesti
          </h1>
          <p className="text-[#fff] text-xl pb-12 font-fontReg">
            Vesti is on a mission to become the foremost financial answer to any
            and every immigrant
          </p>
          <Button link="#" CTA="See Open Roles" styles="p-4" width="50%" />

          {/* // <button className="bg-[#67A948] p-4 rounded-xl w-72 text-[#ffffff]">
          //   See Open Roles
          // </button> */}

          <div className="pt-16 flex flex-wrap items-center opacity-50">
            <img className="" src={Techstars1} alt="techstars" />
            <img className="px-8" src={Techcity1} alt="techcity" />
            <img className="" src={Bloomberg1} alt="bloomberg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersBanner;
