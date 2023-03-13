import DoubleStrip from "../assets/logo-icons/doublestrip.png";
import Person from "../assets/logo-icons/person-icon.png";
import Badge from "../assets/logo-icons/kycbadge-icon.svg";
import Transact from "../assets/logo-icons/begintrans-icon.png";

const ToCreateCard = ({
  title,
  head1,
  desc1,
  head2,
  desc2,
  head3,
  desc3,
  classname,
}) => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className={classname}>
          <h1 className="text-2xl lg:text-3xl text-center text-headcol font-fontReg w-[90%]">
            {title}
          </h1>
          <img src={DoubleStrip} alt="dashes" />
        </div>
        <div className="grid lg:grid-cols-3 py-12 gap-y-10 font-fontReg">
          <div className="flex">
            <div>
              <img src={Person} alt="person-icon" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontReg">{head1}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc1}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Badge} alt="badge" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontReg">{head2}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc2}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src={Transact} alt="transact" />
            </div>
            <div className="px-5">
              <h1 className="text-headcol text-lg font-fontReg">{head3}</h1>
              <p className="text-[#2B5219] font-fontLight text-sm">{desc3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToCreateCard;
