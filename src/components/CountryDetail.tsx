import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfoAction } from "../redux/countryDetails/countryAction";
const CountryDetail = () => {
  const dispatch = useDispatch();
  const countryDetails = useSelector((state: any) => {
    return state?.countryInformation;
  });
  const weatherInformation = useSelector((state: any) => {
    return state?.weatherInformation?.current;
  });

  const checkWeather = (countryInfo: any) => {
    dispatch(getWeatherInfoAction(countryInfo));
  };
  return (
    <div>
      <h1>Country Details</h1>
      <Grid container>
        {countryDetails?.map((countryInfo: any, index: number) => {
          return (
            <Grid item md={4}>
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={countryInfo?.flag}
                  alt="green"
                  height="140"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {countryInfo?.capital}
                  </Typography>
                  <Typography variant="body2">
                    {countryInfo?.population}
                  </Typography>
                  {countryInfo?.latlng.map((latlng: any) => {
                    return (
                      <div>
                        <Typography variant="body2">{latlng}</Typography>
                      </div>
                    );
                  })}
                  <Button
                    color="inherit"
                    variant="contained"
                    onClick={() => {
                      checkWeather(countryInfo?.capital);
                    }}
                  >
                    Capital Weather
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div>
        {weatherInformation && (
          <Card sx={{ maxWidth: 345 }}>
            {weatherInformation?.weather_icons?.map((icons: string) => {
              return (
                <CardMedia
                  component="img"
                  image={icons}
                  alt="green"
                  height="140"
                />
              );
            })}
            <CardContent>
              <Typography variant="h5" component="div">
                {weatherInformation?.temperature}
              </Typography>
              <Typography variant="body2">
                {weatherInformation?.wind_speed}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
export default CountryDetail;
