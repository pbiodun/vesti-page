import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import NigeriaFlag from "../assets/logo-icons/ng-flag.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Nav = () => {
  return (
    <div className="bg-[#060E42]  w-full py-5 lg:py-5 border-none fixed top-0 left-0 right-0 z-50 text-white font-fontReg">
      <div className="container flex mx-auto justify-between items-center">
        <div className="w-[70px] lg:w-[100px]">
          <Link to="/">
            <img src={VestiLogo} alt="Vesti-Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <div className="">
            <ul className="flex items-center font-light">
              <li className="pr-1">Products</li>
              <IoIosArrowDown />
              <li className="px-[30px]">Company</li>
              <li className="">Migration Fries</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex items-center text-lg font-light">
              <li className="pl-[50px]">Sign In</li>
              <li className="px-[50px]">
                <Button
                  link="#"
                  width="100%"
                  styles="p-3"
                  CTA="Create an account"
                />
              </li>
              <li>
                <img
                  className="w-[40px] pr-2"
                  src={NigeriaFlag}
                  alt="nig-flag"
                />
              </li>
              <IoIosArrowDown />
            </ul>
          </div>
        </div>
        <div className="flex lg:hidden">
          <GiHamburgerMenu className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
