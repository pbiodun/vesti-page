import FeaturedLogos from "../assets/logo-icons/feat-logos.png";
import GlobalPageImage from "../assets/images/gpphone.png";
import Button from "../components/Button";

const Showcase = () => {
  return (
    <div className="bg-secondary w-full pt-12 lg:pt-28 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="col-span-1 pt-16">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold pb-5 w-[95%] font-fontBold !leading-[60px]">
              <span className="text-[#67A948]">Legal</span> and{" "}
              <span className="text-[#67A948]">financial</span> operating system
              for 1 billion Immigrants
            </h1>
            <p className="text-lg font-light pb-12 w-[80%] font-fontLight">
              Millions of people moving to new countries use Vesti for accessing
              financial services like bank accounts, debit and credit cards.
            </p>

            <Button
              link="https://app.wevesti.com/auth"
              width="50%"
              styles="mb-[70px] p-3"
              CTA="Get started in minutes"
            />

            <img src={FeaturedLogos} alt="featured" />
          </div>
          <div className="col-span-1">
            <img
              className="w-full"
              src={GlobalPageImage}
              alt="globalpage-phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
