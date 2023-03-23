import Convenient from "../assets/logo-icons/finger-icon.png";
import Speed from "../assets/logo-icons/speed-icon.png";
import Padlock from "../assets/logo-icons/padlock-icon.png";

const Offerings = () => {
  const OfferingData = [
    {
      title: "Convenient",
      content: "You can easily make payments from the comfort of your home",
      icon: Convenient,
    },
    {
      title: "Speedy",
      content: "Our payment channels and processes are swift and effective",
      icon: Speed,
    },
    {
      title: "Secure",
      content:
        "We use state-of-the-art data encryption when handling financial details.",
      icon: Padlock,
    },
  ];

  return (
    <div className="w-full pb-24">
      <div className="container mx-auto lg:w-[80%]">
        <div className="text-center pb-10">
          <h1 className="text-[#14290A] text-4xl font-fontReg">
            International fee payments{" "}
            <span className="text-[#67A948]">simplified!</span>
          </h1>
          <p className="text-[#2B5219] text-[22px] font-fontReg">
            Think lifting a feather is effortless? Try payment with Vesti.
          </p>
        </div>

        {/* Offerings Listed in Cards */}
        <div className="grid lg:grid-cols-3 lg:gap-x-16 gap-20 md:grid-cols-2 md:gap-10 sm:gap-y-10">
          {OfferingData.map((data, i) => (
            <div className="flex">
              <div>
                <img key={i} src={data.icon} alt="convenient" />
              </div>
              <div className="pl-5 md:pl-3 w-full">
                <h3 className="text-[#14290A] font-fontReg text-lg pb-1 ">
                  {data.title}
                </h3>
                <p className="text-[#2B5219] text-base font-fontLight">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
