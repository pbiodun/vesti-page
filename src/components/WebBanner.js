import { Link } from "react-router-dom";

const WebBanner = ({ title, details, buttonText, image, imgWidth, link }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[45%] z-30">
            {title}
            <p className="lg:w-[90%] text-lg font-fontLight pb-12 text-[#ffffff]">
              {details}
            </p>
            <Link
              to={link}
              className="bg-[#67A948] font-fontReg hover:bg-headcol p-4 rounded-xl w-72 mb-[70px] text-[#ffffff]"
            >
              {buttonText}
            </Link>
          </div>
          <div className={`lg:w-[${imgWidth}] z-30`}>
            <img className="w-full" src={image} alt="vesti-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebBanner;
