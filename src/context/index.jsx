import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  country: "",
  setCountry: () => "",
});

const AppProvider = ({ children }) => {
  const [country, setCountry] = useState("NG");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");

    if (savedCountry) {
      setCountry(savedCountry);
    }
  }, []);

  return (
    <AppContext.Provider value={{ country, setCountry }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
