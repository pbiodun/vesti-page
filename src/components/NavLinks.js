import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

const NavLinks = ({ addStyle }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <ul className={`${addStyle} lg:gap-10 font-fontReg text-base`}>
        <li
          className=""
          onClick={() => {
            setOpen(!open);
          }}
        >
          <NavLink
            className="flex items-center relative cursor-pointer hover:text-vestigreen"
            // onClick={toggleDropdown}
            onMouseOverCapture={toggleDropdown}
            // onMouseEnter={() => setShowDropdown(true)}
            // onMouseLeave={() => setShowDropdown(false)}
          >
            <p className="pr-1">Products</p>
            <IoIosArrowDown />
            {/* {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
          </NavLink>
          {showDropdown ? <ProductsDropdown /> : null}
          {/* {showDropdown && <ProductsDropdown />} */}
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={`pb-7 hover:text-vestigreen hover:font-fontSemi ${
              splitLocation[1] === "about-us" &&
              `border-b-[6px] border-[#67A948]`
            }`}
            // className="hover:text-vestigreen hover:font-fontSemi"
          >
            Company
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/migration-fries"
            className={`pb-7 hover:text-vestigreen hover:font-fontSemi ${
              splitLocation[1] === "migration-fries" &&
              `border-b-[6px] border-[#67A948]`
            }`}
            // className="hover:text-vestigreen hover:font-fontSemi"
          >
            Migration Fries
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
