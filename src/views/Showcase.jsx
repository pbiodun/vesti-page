import FeaturedLogos from "../assets/logo-icons/feat-logos.png";
import GlobalPageImage from "../assets/images/gpphone.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="bg-secondary w-full pt-12 lg:pt-28 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="col-span-1 pt-20">
            <h1 className="text-4xl font-fontSemi lg:text-4xl xl:text-5xl pb-5 lg:w-[80%] lg:font-fontBold !leading-[50px] lg:!leading-[60px]">
              <span className="text-[#67A948]">Legal</span> and{" "}
              <span className="text-[#67A948]">financial</span> operating system
              for 1Billion Immigrants
            </h1>
            <p className="text-lg pb-12 lg:w-[80%] font-fontLight">
              Millions of people moving to new countries use Vesti for accessing
              legal and financial services like bank accounts, debit and credit
              cards.
            </p>
            <Link to="https://app.wevesti.com/auth">
              <Button className="font-fontLight text-base capitalize p-5 mb-16 w-[90%] sm:w-[60%] lg:w-[50%] bg-vestigreen hover:bg-headcol">
                Get started in minutes
              </Button>
            </Link>
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
