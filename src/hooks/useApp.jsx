import { useContext } from "react";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import { COUNTRY } from "../constant";

export const useApp = () => {
  const { country, setCountry } = useContext(AppContext);
  const navigate = useNavigate();

  const selectCountry = (country) => {
    setCountry(country);
    localStorage.setItem("country", JSON.stringify(country));

    if (country.title === COUNTRY.NG) {
      navigate("/");
    } else {
      navigate(`/${country.title.toLowerCase()}`);
    }
  };

  return {
    country,
    setCountry: selectCountry,
  };
};
