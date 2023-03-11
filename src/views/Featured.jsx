import Techstars from "../assets/logo-icons/techstars.svg";
import Techcity from "../assets/logo-icons/techcity.svg";
import Bloomberg from "../assets/logo-icons/bloomberg.svg";

const Featured = () => {
  return (
    <div className="w-full bg-[#F9F8F9]">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-11 gap-6">
        <div className="sm:pb-10 md:pb-10 lg:pb-0">
          <p className="text-2xl font-fontSemi">As featured in</p>
        </div>
        <div className="flex flex-wrap justify-center opacity-50 gap-8">
          <img className="" src={Techstars} alt="techstars" />
          <img className="" src={Techcity} alt="techcity" />
          <img className="" src={Bloomberg} alt="bloomberg" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
