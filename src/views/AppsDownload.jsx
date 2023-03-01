import AppleStore from "../assets/logo-icons/applestore.svg";
import PlayStore from "../assets/logo-icons/playstore.svg";
import { Link } from "react-router-dom";

const AppsDownload = () => {
  return (
    <div className="container mx-auto pb-24">
      <div className="bg-[#060E42] text-[#ffffff] rounded-3xl mx-auto p-12 lg:py-16 lg:px-28 flex flex-col lg:flex-row items-center">
        <div className="sm:pb-10 md:pb-5">
          <h1 className="text-3xl leading-[40px] w-[100%] lg:w-[90%] font-fontSemi">
            What are you waiting for? Download the Vesti app & get started now.
          </h1>
        </div>
        <div className="flex">
          <Link to="https://play.google.com/store/apps/details?id=com.vesti.app&pli=1">
            <img
              className="cursor-pointer pr-4"
              src={PlayStore}
              alt="play-store"
            />
          </Link>
          <Link to="https://apps.apple.com/ca/app/vesti-app/id1564444402">
            <img
              className="cursor-pointer"
              src={AppleStore}
              alt="apple-store"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppsDownload;
