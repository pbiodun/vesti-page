import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

const NavLinks = ({ addStyle }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <ul className={`${addStyle} lg:gap-10 font-fontReg text-base`}>
        <li
          className=""
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            className="flex items-center relative cursor-pointer hover:text-vestigreen"
            // onClick={toggleDropdown}
            onMouseOverCapture={toggleDropdown}
            // onMouseEnter={() => setShowDropdown(true)}
            // onMouseLeave={() => setShowDropdown(false)}
          >
            <p className="pr-1">Products</p>
            <IoIosArrowDown />
            {/* {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
          </div>
          {showDropdown ? <ProductsDropdown /> : null}
          {/* {showDropdown && <ProductsDropdown />} */}
        </li>
        <li>
          <Link
            to="/about-us"
            className="hover:text-vestigreen hover:font-fontSemi"
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to="/migration-fries"
            className="hover:text-vestigreen hover:font-fontSemi"
          >
            Migration Fries
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
