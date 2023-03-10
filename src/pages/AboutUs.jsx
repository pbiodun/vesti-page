import CurlyL from "../assets/images/curlybgleft.png";
import CurlyR from "../assets/images/curlybgright.png";
import About from "../views/About";
import VestiValues from "../views/VestiValues";
import WorkWithUs from "../views/WorkWithUs";
import MeetTheTeam from "../views/MeetTheTeam";
import FaqSection from "../views/FaqSection";
import DownloadApp from "../views/DownloadApp";

const AboutUs = () => {
  const src =
    "https://res.cloudinary.com/dco1l9izr/video/upload/v1678541158/Vesti%20video/New_User_Welcome_Video_Email_and_In-app_cthdue.mp4";
  return (
    <>
      <div className="bg-secondary pb-16 w-full pt-24 lg:pt-36 lg:pb-32 relative overflow-hidden">
        <img src={CurlyL} alt="shape" className="absolute left-0" />
        <img src={CurlyR} alt="shape" className="absolute right-0" />

        {/* <div className="">
          <WebBanner
            title={
              <h1 className="text-4xl lg:text-4xl xl:text-5xl font-fontSemi pb-5 text-[#ffffff]">
                We are <span className="text-[#67A948]">Vesti</span>
              </h1>
            }
            details="Our goal is to accelerate and improve the movement and finances of people immigrating to the countries of their dreams"
            buttonText="Get started in minutes"
            image=""
            imgWidth="45%"
          />
        </div> */}
        <div className="container mx-auto">
          <div className="flex flex-col gap-12 justify-center items-center">
            <div className="lg:w-[30%] w-80% z-30 text-center">
              <h1 className="text-white font-fontReg text-4xl pb-5">
                We are <span className="text-[#67A948]">Vesti</span>
              </h1>
              <p className="text-base font-fontLight text-[#ffffff]">
                Our goal is to accelerate and improve the movement and finances
                of people immigrating to the countries of their dreams
              </p>
            </div>
            <div className="z-30 lg:container">
              <div className="lg:container">
                <video controls width="">
                  <source src={src} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <VestiValues />
      <WorkWithUs />
      <MeetTheTeam />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default AboutUs;
