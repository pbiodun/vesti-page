import BgPattern from "../assets/images/pattern-bg.svg";
import DownloadApp from "../views/DownloadApp";
import FaqSection from "../views/FaqSection";
import Testimonials from "../views/Testimonials";

const TestimonialPage = () => {
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
              <span className="text-vestigreen">Real Stories</span> from Real
              People
            </h1>
            <p className="text-xl font-fontLight w-[60%] lg:w-[40%] mx-auto">
              We place huge value in feedback from our users and we are proud to
              receive their testimonies on how we've been of help.
            </p>
          </div>
        </div>
      </div>
      <Testimonials
        title={
          <div>
            <h1 className="text-4xl text-headcol font-fontSemi pb-2">
              People are sharing their testimonies
            </h1>
            <p className="text-2xl text-[#2B5219] tracking-wide font-fontReg">
              Read what people that have used and are using Vesti are saying
            </p>
          </div>
        }
      />
      <FaqSection />
      <DownloadApp />
    </>
  );
};

export default TestimonialPage;
