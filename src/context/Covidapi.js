import axios from "axios";

export const FetchApi = async () => {
  const res = await axios.get("https://covid19.mathdro.id/api");
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await res;
  return { confirmed, recovered, deaths, lastUpdate };
};

export const FetchCountryApi = async ({ country }) => {
  if (country) {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await res;
    return { confirmed, recovered, deaths, lastUpdate };
  }
  return FetchApi();
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`https://covid19.mathdro.id/api/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
