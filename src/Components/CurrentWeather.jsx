import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const CurrentWeatherWrapper = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const WrappedBox = styled('div')({
  padding: "4px",
  margin: "4px"
});

const WrappedFlexBox = styled('div')({
  padding: "4px",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

export default function CurrentWeather({ weather, location }) {
  return <CurrentWeatherWrapper>
    <WrappedFlexBox>
      <WrappedBox>
        <img src={weather?.condition?.icon} alt="weather" />
      </WrappedBox>
      <WrappedFlexBox>
        <Typography fontSize={36} fontWeight={"bold"}>{weather?.temp_c}</Typography>
        <Typography>℃</Typography>
      </WrappedFlexBox>
      <WrappedFlexBox style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography fontSize={12} fontWeight={600}>Precipitation: {weather?.precip_in}%</Typography>
        <Typography fontSize={12} fontWeight={600}>Humidity: {weather?.humidity}%</Typography>
        <Typography fontSize={12} fontWeight={600}>Wind: {weather.wind_kph} km/h</Typography>
      </WrappedFlexBox>
    </WrappedFlexBox>
    <WrappedFlexBox>
      <WrappedFlexBox style={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Typography fontSize={24} fontWeight={600}>{`${location?.name} ${location?.region}, ${location?.country}`}</Typography>
        <Typography fontSize={16} fontWeight={600}>{weather?.last_updated_epoch ? new Date(weather?.last_updated_epoch * 1000)?.toDateString()
          : "Wed, 1:00 PM"}</Typography>
        <Typography fontSize={16} fontWeight={600}>{weather?.condition?.text}</Typography>
      </WrappedFlexBox>
    </WrappedFlexBox>
  </CurrentWeatherWrapper>;
}

