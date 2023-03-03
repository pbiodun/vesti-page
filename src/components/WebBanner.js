import { Link } from "react-router-dom";

const WebBanner = ({
  title,
  details,
  buttonText,
  featured,
  image,
  imgWidth,
  link,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[45%] z-30">
            {title}
            <p className="lg:w-[90%] text-lg font-fontLight pb-12 text-[#ffffff]">
              {details}
            </p>
            <div className="bg-[#67A948] w-[50%] font-fontReg text-center hover:bg-headcol p-4 rounded-xl mb-[70px] text-[#ffffff]">
              <Link to={link}>{buttonText}</Link>
            </div>
            {featured}
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
