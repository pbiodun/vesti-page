import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import GlobeIcon from "../assets/logo-icons/globe.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import CountryDropdown from "./CountryDropdown";
import { useApp } from "../hooks/useApp";
import { useState } from "react";

const MobileNav = () => {
  const { country } = useApp();

  const [showCountry, setShowCountry] = useState(false);

  const toggleCountry = () => {
    setShowCountry(!showCountry);
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-white mx-auto">
        <div className="text-secondary font-fontReg py-10 px-6">
          <ul className="flex flex-col gap-y-5">
            <li>
              <div className="flex flex-col" onClick={toggleCountry}>
                <div className="flex items-center">
                  <img
                    className="w-[35px] pr-1"
                    src={`${!country.img ? GlobeIcon : country.img}`}
                    alt="globe-icon"
                  />
                  {showCountry ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <div>
                  {showCountry ? (
                    <CountryDropdown hide={() => setShowCountry(false)} />
                  ) : null}
                </div>
              </div>
            </li>
            <li>
              <NavLinks addStyle="flex flex-col gap-y-5" />
            </li>

            <li>
              <Link
                to="https://app.wevesti.com/auth"
                className="hover:text-vestigreen hover:font-fontLight"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link to="https://app.wevesti.com/auth">
                <Button className="bg-vestigreen normal-case p-3 w-[60%]">
                  Create an account
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
