import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import TwitterLogo from "../assets/logo-icons/twitter-logo.svg";
import LinkedinLogo from "../assets/logo-icons/linkedin-logo.svg";
import FacebookLogo from "../assets/logo-icons/facebook-logo.svg";
import InstagramLogo from "../assets/logo-icons/instagram-logo.svg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState({ value: false, name: "" });

  const toggleShow = (name) => {
    setShow({ value: !show.value, name: name === show.name ? "" : name });
  };

  return (
    <div className="bg-[#060E42] text-[#ffffff] border-none">
      <div className="container mx-auto pt-14 font-fontLight">
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 pb-20">
          <div>
            <div className="pr-[40px] cursor-pointer">
              <Link to="/">
                <img className="w-[150px]" src={VestiLogo} alt="vesti-logo" />
              </Link>
            </div>
            <div className="pt-5">
              <ul className="flex">
                <Link
                  to="https://www.twitter.com/Vestiofficial"
                  className="pl-4"
                >
                  <img src={TwitterLogo} alt="twitter-icon" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/vestiofficial"
                  className="pl-4"
                >
                  <img src={LinkedinLogo} alt="linkedin-icon" />
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php?id=100088055724008&mibextid=ZbWKwL"
                  className="pl-4"
                >
                  <img src={FacebookLogo} alt="facebook-icon" />
                </Link>
                <Link
                  to="https://www.instagram.com/Vestiofficial"
                  className="pl-4"
                >
                  <img src={InstagramLogo} alt="instagram-icon" />
                </Link>
              </ul>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col">
              <li className="text-base font-fontSemi pb-3">PRODUCTS</li>
              {/* <RiArrowDropUpLine /> */}
              <div>
                <div
                  className="text-sm font-fontLight pb-1 hover:font-fontSemi flex items-center cursor-pointer"
                  onClick={() => toggleShow("financial")}
                >
                  <p>Financial Services</p>
                  {show.value && show.name === "financial" ? (
                    <RiArrowDropUpLine className="text-2xl" />
                  ) : (
                    <RiArrowDropDownLine className="text-2xl" />
                  )}
                </div>
                <div
                  className={`text-xs pl-2 ${
                    show.name !== "financial" && "hidden"
                  }`}
                >
                  <ul className="flex flex-col gap-y-2">
                    <li>
                      <Link
                        to="/globalgeng-card"
                        className="text-xs font-fontLight hover:text-vestigreen hover:font-fontSemi"
                      >
                        GlobalGeng Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/virtual-card"
                        className="text-xs font-fontLight hover:text-vestigreen hover:font-fontSemi"
                      >
                        Virtual Dollar Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wallets"
                        className="text-xs font-fontLight hover:text-vestigreen hover:font-fontSemi"
                      >
                        Vesti Wallets
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi pt-2">
                <Link to="/migration-services">Migration Services</Link>
              </li>
              {/* <div>
                <div
                  className="text-sm font-fontLight pb-1 hover:font-fontSemi flex items-center cursor-pointer"
                  onClick={() => toggleShow("migration")}
                >
                  <p>Migration Services</p>
                  {show.value && show.name === "migration" ? (
                    <RiArrowDropUpLine className="text-2xl" />
                  ) : (
                    <RiArrowDropDownLine className="text-2xl" />
                  )}
                </div>
                <div
                  className={`text-xs pl-2 ${
                    show.name !== "migration" && "hidden"
                  }`}
                >
                  <ul className="flex flex-col gap-y-2">
                    <li className="hover:text-vestigreen hover:font-fontSemi">
                      Migration Pathways
                    </li>
                    <li className="hover:text-vestigreen hover:font-fontSemi">
                      Migration Fees
                    </li>
                    <li className="hover:text-vestigreen hover:font-fontSemi">
                      Migration Loans
                    </li>
                    <li className="hover:text-vestigreen hover:font-fontSemi">
                      Credit Score
                    </li>
                  </ul>
                </div>
              </div> */}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="text-base font-fontSemi pb-3">COMPANY</li>
              <Link
                to="/about-us"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="text-sm pb-2 font-fontLight hover:text-vestigreen hover:font-fontSemi"
              >
                Careers
              </Link>
              <Link
                to="/news-room"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                News Room
              </Link>
              <Link
                to="/team"
                className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
              >
                Team
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="text-base font-medium pb-3 font-fontSemi">
                LEGAL
              </li>
              <Link
                to="/aml"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                AML
              </Link>
              <Link
                to="/faqs"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                FAQ
              </Link>
              <Link
                to="/tos"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                Disclosures
              </Link>
              <Link
                to="/privacy-policy"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                Privacy Policy
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="text-base font-medium pb-3 font-fontSemi">
                CONTACT
              </li>
              <li className="text-sm font-fontLight pb-2">help@wevesti.com</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="text-base pb-3 font-fontSemi">LAGOS, (NIGERIA)</li>
              <li className="text-sm font-light pb-2">
                30 Furo Ezimora street, Lekki Phase 1
              </li>
              <li className="text-base py-4 font-fontSemi">
                DALLAS TEXAS (USA)
              </li>
              <li className="text-sm font-fontLight">
                1301, S Bowen rd, Ste 450, Arlington, Tx 76013.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pb-7 text-sm font-fontLight">
          <p>Copyrights &copy; Vesti 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
