import Woman from "../assets/images/womanthinking.png";
import Hands from "../assets/images/handsinhands.png";
import Mentor from "../assets/images/mentor.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto lg:w-[90%] py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[45%] pb-8 lg:pb-0">
            <img className="w-full" src={Woman} alt="woman-thinking" />
          </div>
          <div className="lg:w-[45%]">
            <h1 className="text-[#14290A] font-semibold text-4xl pb-3 font-fontReg">
              What is Vesti?
            </h1>
            <p className="text-[#2B5219] text-xl font-fontLight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              unde porro eos? Beatae facilis laudantium eaque ab atque a sit
              perferendis, reprehenderit cupiditate cumque dolores alias! Quos
              dolore nostrum maiores. Cumque tenetur adipisci vitae? Ducimus
              dicta quisquam ad repudiandae illum?
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-24">
          <div className="lg:w-[45%] pb-8 lg:pb-0">
            <h1 className="text-[#14290A] text-4xl pb-3 font-fontReg">
              Our Mission
            </h1>
            <p className="text-[#2B5219] text-xl font-fontLight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              unde porro eos? Beatae facilis laudantium eaque ab atque a sit
              perferendis, reprehenderit cupiditate cumque dolores alias! Quos
              dolore nostrum maiores. Cumque tenetur adipisci vitae? Ducimus
              dicta quisquam ad repudiandae illum?
            </p>
          </div>
          <div className="lg:w-[45%]">
            <img className="w-full" src={Hands} alt="woman-thinking" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[45%] pb-8 lg:pb-0">
            <img className="w-full" src={Mentor} alt="woman-thinking" />
          </div>
          <div className="lg:w-[45%]">
            <h1 className="text-[#14290A] text-4xl pb-3 font-fontReg">
              Our Vision
            </h1>
            <p className="text-[#2B5219] text-xl font-fontLight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              unde porro eos? Beatae facilis laudantium eaque ab atque a sit
              perferendis, reprehenderit cupiditate cumque dolores alias! Quos
              dolore nostrum maiores. Cumque tenetur adipisci vitae? Ducimus
              dicta quisquam ad repudiandae illum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
