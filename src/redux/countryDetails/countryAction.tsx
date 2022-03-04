import {
  countryInfoService,
  getWeatherInfoService,
} from "../../services/countryService";
import { COUNTRYINFO, WEATHERINFO } from "./countryTypes";

export const countryInfoAction = (countryName: any) => {
  return async (dispatch: any) => {
    const res = await countryInfoService(countryName);
    dispatch({ type: COUNTRYINFO, payload: res?.data });
  };
};

export const getWeatherInfoAction = (countryCapital: any) => {
  console.log(countryCapital);
  return async (dispatch: any) => {
    const res = await getWeatherInfoService(countryCapital);
    dispatch({ type: WEATHERINFO, payload: res?.data });
  };
};
