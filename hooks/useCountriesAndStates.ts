import axios from "axios";
import { useEffect, useState } from "react";

export interface ICountry {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
}

export interface IState {
  state_name: string;
}

export const useCountriesAndStates = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [bearrerToken, setBearrerToken] = useState("");

  const getStates = async (country: string) => {
    if (country.length === 0 || country === "") return setStates([]);
    const response = await axios.get<IState[]>(
      `https://www.universal-tutorial.com/api/states/${country}`,
      {
        headers: {
          Authorization: `Bearer ${bearrerToken}`,
          Accept: "application/json",
        },
      }
    );
    setStates(response.data);
  };

  useEffect(() => {
    console.log(process.env.COUNTRIES_API_KEY);
    
    axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
          "api-token": process.env.COUNTRIES_API_KEY || "",
          "user-email": process.env.COUNTRIES_API_EMAIL || "",
        },
      })
      .then((res) => {
        setBearrerToken(res.data.auth_token);
        axios
          .get<ICountry[]>("https://www.universal-tutorial.com/api/countries", {
            headers: {
              Authorization: `Bearer ${res.data.auth_token}`,
              Accept: "application/json",
            },
          })
          .then((res) => {
            setCountries(res.data);
          });
      }).catch(console.log);
  }, []);

  return {
    countries,
    states,
    getStates,
  };
};
