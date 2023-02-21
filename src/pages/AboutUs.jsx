import WebBanner from "../components/WebBanner";
import Curly from "../assets/images/curlybgleft.png";
import CurlyR from "../assets/images/curlybgright.png";
import About from "../views/About";
import VestiValues from "../views/VestiValues";
import WorkWithUs from "../views/WorkWithUs";
import MeetTheTeam from "../views/MeetTheTeam";
import FaqSection from "../views/FaqSection";
import DownloadApp from "../views/DownloadApp";

const AboutUs = () => {
  return (
    <>
      <div className="bg-secondary pb-16 w-full pt-24 lg:pt-36 lg:pb-32 relative overflow-hidden">
        <img src={Curly} alt="shape" className="absolute left-0" />
        <img src={CurlyR} alt="shape" className="absolute right-0" />
        <div className="z-40">
          <WebBanner
            title={
              <p className="text-4xl lg:text-4xl xl:text-5xl font-bold pb-5 text-[#ffffff]">
                We are <span className="text-[#67A948]">Vesti</span>
              </p>
            }
            details="Our goal is to accelerate and improve the movement and finances of people immigrating to the countries of their dreams"
            buttonText="Get started in minutes"
            image=""
          />
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
