import { createContext, useEffect, useState } from "react";
import { FetchApi, FetchCountryApi } from "./Covidapi";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [apidata, setapidata] = useState();
  const [country, setcountry] = useState("");

  useEffect(() => {
    async function FetchData() {
      setloading(true);
      const data = await FetchApi();

      setapidata(data);
      setloading(false);
    }

    FetchData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await FetchCountryApi({ country });

    setapidata(data);
    setcountry(country);
  };

  return (
    <GlobalContext.Provider
      value={{
        apidata,
        handleCountryChange,
        country,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
