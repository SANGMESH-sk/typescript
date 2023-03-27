import React from 'react'
import WeatherSummary from './WeatherSummary';
import { styled } from '@mui/system';


export default function FutureWeather({ forcast }) {

    const FutureWeatherWrapper = styled('div')({
        color: 'darkslategray',
        padding: 8,
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    });
    return (
        <FutureWeatherWrapper>
            {forcast?.forecastday?.map((weather) => <WeatherSummary weather={weather}></WeatherSummary>)}
        </FutureWeatherWrapper>
    )
}
