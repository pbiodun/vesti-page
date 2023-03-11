import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import TwitterLogo from "../assets/logo-icons/twitter-logo.svg";
import LinkedinLogo from "../assets/logo-icons/linkedin-logo.svg";
import FacebookLogo from "../assets/logo-icons/facebook-logo.svg";
import InstagramLogo from "../assets/logo-icons/instagram-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
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
              <Link
                to="/globalgeng-card"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                GlobalGeng Card
              </Link>

              <Link
                to="/wallets"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                Wallets
              </Link>

              <Link
                to="/virtual-card"
                className="text-sm font-fontLight pb-2 hover:text-vestigreen hover:font-fontSemi"
              >
                Founders' card
              </Link>

              <Link
                to="#"
                className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
              >
                Pathways
              </Link>
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
                to="/#"
                className="text-sm font-fontLight hover:text-vestigreen hover:font-fontSemi"
              >
                Vesti Blog
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
                to="#"
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
              <li className="text-sm font-fontLight pb-2">
                support@wevesti.com
              </li>
              <li className="text-sm font-fontLight">info@wevesti.com</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="text-base pb-3 font-fontSemi">NIGERIA (LAGOS)</li>
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
