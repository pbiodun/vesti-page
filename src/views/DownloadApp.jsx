import AppleStore from "../assets/logo-icons/applestore.svg";
import PlayStore from "../assets/logo-icons/playstore.svg";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff] border-none">
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-14">
          <h1 className="text-6xl text-center lg:w-[45%] leading-[60px] pb-8 font-fontSemi">
            Also available to download on both
          </h1>
          <div className="grid grid-cols-2 gap-4 p-5">
            <Link to="#">
              <img
                className="cursor-pointer"
                src={PlayStore}
                alt="play-store"
              />
            </Link>
            <Link to="#">
              <img
                className="cursor-pointer"
                src={AppleStore}
                alt="apple-store"
              />
            </Link>
            {/* <img src={AppleStore} alt="apple-store" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
