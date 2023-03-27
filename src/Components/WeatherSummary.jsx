import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';


export default function WeatherSummary({ weather }) {

    const weekdays = new Array(7);
    weekdays[0] = "Monday";
    weekdays[1] = "Tuesday";
    weekdays[2] = "Wednesday";
    weekdays[3] = "Thursday";
    weekdays[4] = "Friday";
    weekdays[5] = "Saturday";
    weekdays[6] = "Sunday";
    const WeatherSummaryWrapper = styled('div')({
        color: 'darkslategray',
        padding: "8px 16px",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        margin: "4px 8px"
    });

    const day = new Date(weather?.date_epoch * 1000).getDay();

    return (

        <WeatherSummaryWrapper>
            <Typography>{weekdays[day]}</Typography>
            <img src={weather?.day?.condition?.icon} alt="weather" />
            <Typography display={"flex"}>
                <Typography margin={"2px"} fontWeight={"600"}>{weather?.day?.maxtemp_c}°</Typography>
                <Typography margin={"2px"} color="darkslategray">{weather?.day?.mintemp_c}°</Typography>
            </Typography>
        </WeatherSummaryWrapper>
    )
}
