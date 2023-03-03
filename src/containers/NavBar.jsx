import VestiLogo from "../assets/logo-icons/vesti-logo.png";
// import NigeriaFlag from "../assets/logo-icons/ng-flag.png";
import GlobeIcon from "../assets/logo-icons/globe.svg";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import NavLinks from "../components/NavLinks";
import MobileNav from "../components/MobileNav";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#060E42] w-full py-7 lg:py-5 fixed top-0 left-0 right-0 z-50 text-white font-fontReg">
        <div className="container flex mx-auto justify-between items-center">
          <div
            className="w-[70px] lg:w-[100px]"
            onClick={() => (window.location.href = `/`)}
          >
            <Link to="/">
              <img src={VestiLogo} alt="Vesti-Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:gap-16">
            {/* NavLinks */}
            <NavLinks addStyle="flex" />
            <div className="">
              <ul className="flex items-center text-lg font-fontLight lg:gap-8">
                <li>
                  <Link
                    to="https://app.wevesti.com/auth"
                    className="hover:text-vestigreen hover:font-fontSemi"
                  >
                    Sign In
                  </Link>
                </li>
                <li className="">
                  <Button
                    link="https://app.wevesti.com/register"
                    width="100%"
                    styles="p-3"
                    CTA="Create an account"
                  />
                </li>
                <li>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] pr-1"
                      src={GlobeIcon}
                      alt="globe-icon"
                    />
                    <IoIosArrowDown />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex lg:hidden cursor-pointer text-3xl font-fontBold"
            onClick={() => setOpen(!open)}
          >
            {open ? <TfiClose /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`lg:hidden transition delay-150 duration-300 ease-linear ${
            open ? "visible" : "hidden"
          }`}
        >
          <MobileNav />
        </div>
        {/* End of the Mobile Nav */}
      </nav>
    </>
  );
};

export default NavBar;
