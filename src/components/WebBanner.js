const WebBanner = ({ title, details, buttonText, image }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[45%]">
            {title}
            <p className="lg:w-[80%] text-lg font-light pb-12 text-[#ffffff]">
              {details}
            </p>
            <button className="bg-[#67A948] p-4 rounded-xl w-72 mb-[70px] text-[#ffffff]">
              {buttonText}
            </button>
          </div>
          <div className="lg:w-[45%]">
            <img className="w-full" src={image} alt="phone-hand" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebBanner;
