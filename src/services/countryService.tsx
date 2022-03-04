import axios from "axios";

export const countryInfoService = (countryName: string) => {
  return axios.get(`https://restcountries.com/v2/name/${countryName}`);
};

export const getWeatherInfoService = (countryCapital: string) => {
  return axios.get(
    `http://api.weatherstack.com/current?access_key=3665a9ffa81ec1b7ca0f1f177f86ae6e&query=${countryCapital}`
  );
};
