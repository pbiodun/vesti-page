import VestiLogo from "../assets/logo-icons/vesti-logo.png";
import TwitterLogo from "../assets/logo-icons/twitter-logo.svg";
import LinkedinLogo from "../assets/logo-icons/linkedin-logo.svg";
import FacebookLogo from "../assets/logo-icons/facebook-logo.svg";
import InstagramLogo from "../assets/logo-icons/instagram-logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#060E42] text-[#ffffff] border-none">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-12 pb-20">
          <div>
            <div className="pr-[40px]">
              <img className="w-[150px]" src={VestiLogo} alt="vesti-logo" />
            </div>
            <div className="pt-5">
              <ul className="flex">
                <li className="pl-4">
                  <img src={TwitterLogo} alt="twitter-icon" />
                </li>
                <li className="pl-4">
                  <img src={LinkedinLogo} alt="linkedin-icon" />
                </li>
                <li className="pl-4">
                  <img src={FacebookLogo} alt="facebook-icon" />
                </li>
                <li className="pl-4">
                  <img src={InstagramLogo} alt="instagram-icon" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium pb-3">PRODUCTS</li>
              <li className="text-sm font-light pb-2">Global Geng Card</li>
              <li className="text-sm font-light pb-2">Wallets</li>
              <li className="text-sm font-light pb-2">Founders' card</li>
              <li className="text-sm font-light">Pathways</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium pb-3">COMPANY</li>
              <li className="text-sm font-light pb-2">About Us</li>
              <li className="text-sm font-light">Careers</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium pb-3">LEGAL</li>
              <li className="text-sm font-light pb-2">AML</li>
              <li className="text-sm font-light pb-2">FAQ</li>
              <li className="text-sm font-light pb-2">Disclosures</li>
              <li className="text-sm font-light pb-2">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium pb-3">CONTACT</li>
              <li className="text-sm font-light pb-2">help@wevesti.com</li>
              <li className="text-sm font-light pb-2">support@wevesti.com</li>
              <li className="text-sm font-light">info@wevesti.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium pb-3">NIGERIA (LAGOS)</li>
              <li className="text-sm font-light pb-2">
                30 Furo Ezimora street, Lekki Phase 1
              </li>
              <li className="text-base font-medium py-4">DALLAS TEXAS (USA)</li>
              <li className="text-sm font-light">
                1301, S Bowen rd, Ste 450, Arlington, Tx 76013.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pb-7 text-sm font-light">
          <p>Copyrights &copy; Vesti 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
