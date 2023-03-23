import BgPattern from "../assets/images/pattern-bg.svg";
import Button from "../components/Button";
import DownloadApp from "../views/DownloadApp";
import FaqContent from "../views/FaqContent";

const Faqs = () => {
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
              <span className="text-vestigreen">Frequently</span> Asked
              Questions
            </h1>
            <p className="text-xl font-fontLight">
              We answered questions so you don’t have to ask them
            </p>
          </div>
        </div>
      </div>
      <FaqContent />
      <div className="pb-24 pt-16">
        <div className="container w-[90%] mx-auto bg-secondary rounded-3xl text-[#ffffff] flex flex-col lg:flex-row items-center justify-center gap-x-24 gap-y-10 p-16">
          <div className="font-fontReg text-3xl flex flex-col gap-y-3 lg:w-[70%] w-full lg:tracking-wide">
            <p>Can't find a question you need an answer to?</p>
            <p>
              Contact support at{" "}
              <span className="text-[#67A948]"> help@gmail.com</span>
            </p>
          </div>
          <div className="font-fontLight text-lg text-center lg:w-[30%] w-full">
            <Button link="" CTA="Contact Support" styles="p-4" width="100%" />
          </div>
        </div>
      </div>

      <DownloadApp />
    </>
  );
};

export default Faqs;
