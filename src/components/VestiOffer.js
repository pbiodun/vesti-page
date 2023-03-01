import DoubleStrip from "../assets/logo-icons/doublestrip.png";
import Person from "../assets/logo-icons/person-icon.png";
import Badge from "../assets/logo-icons/kycbadge-icon.svg";
import Transact from "../assets/logo-icons/begintrans-icon.png";
import { Link } from "react-router-dom";

const VestiOffer = ({
  title,
  head1,
  desc1,
  head2,
  desc2,
  head3,
  desc3,
  head4,
  desc4,
  head5,
  desc5,
  head6,
  desc6,
  buttonText,
  classname,
  link,
}) => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className={classname}>
          <h1 className="text-2xl lg:text-3xl  text-center text-headcol font-fontSemi">
            {title}
          </h1>
          <img src={DoubleStrip} alt="dashes" />
        </div>
        <div className="grid lg:grid-cols-3 gap-12 py-12 items-center justify-between">
          <div className="flex">
            <div>
              <img src={Person} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head1}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc1}</p>
            </div>
          </div>
          <div className="flex md:py-6 sm:py-4 xs:py-3">
            <div>
              <img src={Badge} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head2}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc2}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Transact} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head3}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc3}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Transact} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head4}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc4}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Transact} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head5}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc5}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Transact} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontSemi">{head6}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc6}</p>
            </div>
          </div>
        </div>
        <div className="pb-4 md:pb-10 sm:pb-20">
          <Link
            to={link}
            className="bg-vestigreen font-fontReg hover:bg-headcol text-white text-sm text-center px-11 py-3 rounded-[10px]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default VestiOffer;
