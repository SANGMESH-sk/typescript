import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

export default function SearchWeather({ setQuery, setWeatherData, query }) {

  async function fetchWeather() {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.weatherapi.com/v1/forecast.json?key=f67af558ca054bc2a9185808230102&q=${query}&days=5`,
      headers: {}
    };
    const response = await axios(config)
    setWeatherData(response?.data || {});
  }
  React.useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'  }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Weather"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={fetchWeather} />
      </IconButton>
    </Paper>
  );
}