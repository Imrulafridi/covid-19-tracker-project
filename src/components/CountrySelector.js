import React, { useEffect, useState, useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../context/Covidapi";
import { GlobalContext } from "../context/GlobalContext";

const CountrySelector = () => {
  const [countries, setcountries] = useState([]);
  const { handleCountryChange, loading } = useContext(GlobalContext);

  useEffect(() => {
    async function FetchAPi() {
      setcountries(await fetchCountries());
    }
    FetchAPi();
  }, []);

  if (loading) {
    return "Loading...";
  }

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
