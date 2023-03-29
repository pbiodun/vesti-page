import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

const NavLinks = ({ addStyle }) => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <ul className={`${addStyle} lg:gap-10 font-fontReg text-base`}>
        <li className="group">
          <NavLink className="flex items-center relative cursor-pointer hover:text-vestigreen">
            <p className="pr-1">Products</p>
            <IoIosArrowDown />
          </NavLink>
          <div className="hidden group-hover:block absolute">
            <ProductsDropdown />
          </div>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={`lg:pb-7 hover:text-vestigreen hover:font-fontSemi ${
              splitLocation[1] === "about-us" &&
              `lg:border-b-[6px] lg:border-[#67A948] text-vestigreen`
            }`}
            // className="hover:text-vestigreen hover:font-fontSemi"
          >
            Company
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/migration-fries"
            className={`lg:pb-7 hover:text-vestigreen hover:font-fontSemi ${
              splitLocation[1] === "migration-fries" &&
              `lg:border-b-[6px] lg:border-[#67A948] text-vestigreen`
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
