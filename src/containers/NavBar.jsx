import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import GlobeIcon from "../assets/logo-icons/globe.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import {  } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import NavLinks from "../components/NavLinks";
import MobileNav from "../components/MobileNav";
import CountryDropdown from "../components/CountryDropdown";
import { useApp } from "../hooks/useApp";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { country } = useApp();

  const [showCountry, setShowCountry] = useState(false);

  const toggleCountry = () => {
    setShowCountry(!showCountry);
  };

  return (
    <>
      <nav className="bg-[#060E42] w-full py-7 lg:py-5 fixed top-0 left-0 right-0 z-50 text-white font-fontReg">
        <div className="container flex mx-auto justify-between items-center">
          <div className="w-[70px] lg:w-[100px]">
            <Link to="/">
              <img src={VestiLogo} alt="Vesti-Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:gap-10">
            {/* NavLinks */}
            <NavLinks addStyle="flex" />
            <div className="">
              <ul className="flex items-center text-base font-fontReg lg:gap-10">
                <li>
                  <Link
                    to="https://app.wevesti.com/auth"
                    className="hover:text-vestigreen hover:font-fontSemi"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Button
                    link="https://app.wevesti.com/register"
                    width="100%"
                    styles="p-3 px-8"
                    CTA="Create an account"
                  />
                </li>
                <li>
                  <div
                    className="flex items-center relative"
                    onClick={toggleCountry}
                  >
                    <img
                      className="w-[40px] pr-1"
                      src={`${!country.img ? GlobeIcon : country.img}`}
                      alt="globe-icon"
                    />
                    {/* <p>{country.title}</p> */}
                    {showCountry ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    {showCountry ? (
                      <CountryDropdown hide={() => setShowCountry(false)} />
                    ) : null}
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
          className={`lg:hidden relative mt-10 transition delay-150 duration-300 ease-linear ${
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
