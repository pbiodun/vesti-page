import BgPattern from "../assets/images/pattern-bg.svg";
import DownloadApp from "../views/DownloadApp";
import VestiNews from "../views/VestiNews";

const NewsRoom = () => {
  return (
    <>
      <div className="bg-secondary w-full py-36 lg:pt-64 relative overflow-hidden">
        <img
          src={BgPattern}
          alt="pattern"
          className="absolute right-[-100%] top-10 lg:right-0"
        />
        <div className="container mx-auto text-center">
          <div className="text-white ">
            <h1 className="font-fontSemi text-5xl pb-6 tracking-[0.05em]">
              {" "}
              <span className="text-vestigreen">News</span> Room
            </h1>
            <p className="text-xl font-fontLight w-[60%] lg:w-[40%] mx-auto">
              Take a look at all the platforms that Vesti has been featured in
            </p>
          </div>
        </div>
      </div>
      <VestiNews />
      <DownloadApp />
    </>
  );
};

export default NewsRoom;
