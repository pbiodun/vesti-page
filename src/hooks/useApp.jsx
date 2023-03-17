import { useContext } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import { COUNTRY } from "../constant";
// import useGeoLocation from "react-ipgeolocation";

export const useApp = () => {
  const { country, setCountry } = useContext(AppContext);
  const navigate = useNavigate();

  // const geoLocation = useGeoLocation();

  const selectCountry = (country) => {
    setCountry(country);
    localStorage.setItem("country", JSON.stringify(country));

    if (country.title === COUNTRY.GL) {
      navigate("/");
    }
    // else {
    //   navigate(`/${country.title.toLowerCase()}`);
    // }
    // else if (geoLocation && geoLocation.country === country.title) {
    //   setTimeout(selectCountry, navigate(`/${country.title.toLowerCase()}`));
    // }
    else {
      navigate(`/${country.title.toLowerCase()}`);
    }
  };

  return {
    country,
    setCountry: selectCountry,
  };
};

// country.title === COUNTRY.NG ||
