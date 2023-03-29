import NigeriaFlag from "../assets/logo-icons/ng-flag.png";
import ZambiaFlag from "../assets/logo-icons/zm-flag.png";
import MexicoFlag from "../assets/logo-icons/mx-flag.png";
import GhanaFlag from "../assets/logo-icons/gh-flag.png";
import Globe from "../assets/logo-icons/globe.svg";
import { useApp } from "../hooks/useApp";

const DATA = [
  { title: "GL", img: Globe },
  { title: "NG", img: NigeriaFlag },
  { title: "GH", img: GhanaFlag },
  { title: "ZM", img: ZambiaFlag },
  { title: "MX", img: MexicoFlag },
];

const CountryDropdown = ({ hide }) => {
  const { setCountry } = useApp();
  const selectCountry = (country) => {
    setCountry(country);
    hide();
  };

  return (
    <div className="">
      <div className="bg-[#F6F8FF] lg:w-[100px] min-h-[15vh] lg:absolute lg:top-[60px] lg:right-0 rounded-sm p-[10px] border-solid border-1 border-headcol">
        <div className="flex flex-col gap-4 text-headcol text-base font-fontLight">
          {DATA.map((country, i) => (
            <div
              key={i}
              onClick={() => selectCountry(country)}
              className="flex flex-row items-center gap-4 cursor-pointer opacity-80 hover:opacity-100 hover:font-fontBold"
            >
              <img className="" src={country.img} alt="ng-flag" />
              <p className="">{country.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
