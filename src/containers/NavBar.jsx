import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import NigeriaFlag from "../assets/logo-icons/ng-flag.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="bg-[#060E42]  w-full py-5 lg:py-5 border-none fixed top-0 left-0 right-0 z-50 text-white">
      <div className="container flex mx-auto justify-between items-center">
        <div className="w-[70px] lg:w-[100px]">
          <img src={VestiLogo} alt="Vesti-Logo" />
        </div>
        <div className="hidden lg:flex items-center">
          <div className="">
            <ul className="flex items-center font-light">
              <li>Products</li>
              <IoIosArrowDown />
              <li className="mx-[30px]">Company</li>
              <li className="">Migration Fries</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex items-center text-lg font-light">
              <li className="ml-[70px]">Sign In</li>
              <li className="mx-[50px]">
                <button className="bg-[#67A948] p-3 w-48 rounded-xl text-base">
                  Create an account
                </button>
              </li>
              <li>
                <img className="w-[40px]" src={NigeriaFlag} alt="nig-flag" />
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
