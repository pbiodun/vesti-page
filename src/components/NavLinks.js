import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";
import { useState } from "react";

const NavLinks = ({ addStyle, open, setOpen }) => {
  const [show, setShow] = useState(true);
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const toggleProducts = () => {
    setShow(!show);
  };

  return (
    <>
      <ul className={`${addStyle} lg:gap-10 font-fontReg text-base`}>
        <li className="group">
          <NavLink
            onClick={toggleProducts}
            className="flex items-center relative cursor-pointer hover:text-vestigreen"
          >
            <p className="pr-1">Products</p>
            <IoIosArrowDown />
          </NavLink>
          <div className={`pl-6 lg:hidden ${show ? "visible" : "hidden"}`}>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  onClick={() => setOpen()}
                  to="/globalgeng-card"
                  className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
                >
                  GlobalGeng Card
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen()}
                  to="/virtual-card"
                  className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
                >
                  Virtual Dollar Card
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen()}
                  to="/wallets"
                  className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
                >
                  Vesti Wallets
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen()}
                  to="/migration-services"
                  className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
                >
                  Migration Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden lg:group-hover:block absolute">
            <ProductsDropdown setOpen={setOpen} />
          </div>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen()}
            to="/about-us"
            className={`lg:pb-8 hover:text-vestigreen hover:font-fontSemi ${
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
            onClick={() => setOpen()}
            to="/migration-fries"
            className={`lg:pb-8 hover:text-vestigreen hover:font-fontSemi ${
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
