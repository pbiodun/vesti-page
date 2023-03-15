import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import GlobeIcon from "../assets/logo-icons/globe.svg";
import { IoIosArrowDown } from "react-icons/io";

const MobileNav = () => {
  return (
    <>
      <div className="w-full bg-white mx-auto">
        <div className="text-secondary font-fontReg py-10">
          <ul className="flex flex-col gap-y-5 items-center justify-center">
            <li className="">
              <div className="flex items-center">
                <img
                  className="w-[40px] pr-1"
                  src={GlobeIcon}
                  alt="globe-icon"
                />
                <IoIosArrowDown />
              </div>
            </li>
            <li>
              <NavLinks addStyle="flex flex-col gap-y-5 justify-center items-center" />
            </li>

            <li>
              <Link
                to="https://app.wevesti.com/auth"
                className="hover:text-vestigreen hover:font-fontLight"
              >
                Sign In
              </Link>
            </li>
          </ul>
          <Button
            link="https://app.wevesti.com/auth"
            CTA="Create an account"
            styles="p-2 mt-5 mx-auto text-sm"
            width="50%"
          />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
