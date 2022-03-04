import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { countryInfoAction } from "../redux/countryDetails/countryAction";
const CountryForm = () => {
  const [countryName, setCountryName] = useState<string>("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const checkCountryDetail = () => {
    dispatch(countryInfoAction(countryName));
    history("/countrydetail");
  };
  return (
    <div>
      <h1>Country Detail Application</h1>
      <TextField
        placeholder="Enter Country"
        data-testId="NameInput"
        onChange={handleCountry}
      />
      <Button
        type="submit"
        variant="contained"
        color="info"
        disabled={countryName === ""}
        onClick={checkCountryDetail}
      >
        Submit
      </Button>
    </div>
  );
};
export default CountryForm;
