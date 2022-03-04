import { COUNTRYINFO, WEATHERINFO } from "./countryTypes";

const initialState = {
  countryInformation: [],
  weatherInformation: {},
};
export const countryStore = (
  state = initialState,
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case COUNTRYINFO:
      return {
        ...state,
        countryInformation: payload,
      };
    case WEATHERINFO:
      return {
        ...state,
        weatherInformation: payload,
      };
    default:
      return state;
  }
};
