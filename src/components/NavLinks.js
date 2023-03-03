import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLinks = ({ addStyle }) => {
  return (
    <>
      <ul className={`${addStyle} lg:gap-10 font-fontReg`}>
        <li className="flex items-center">
          <div className="flex items-center">
            <p className="pr-1">Products</p>
            <IoIosArrowDown />
          </div>
        </li>
        <li>
          <Link
            to="/about-us"
            onClick={() => (window.location.href = `/about-us`)}
            className="hover:text-vestigreen hover:font-fontSemi"
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to="/migration-fries"
            onClick={() => (window.location.href = `/migration-fries`)}
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
