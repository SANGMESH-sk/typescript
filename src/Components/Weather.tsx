
import React, { useState } from 'react';
import  './Weather.css'
interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
}
interface ForecastData {
  date: Date;
  temperature: number;
  description: string;
  icon: string;
}
const fetchWeatherData = async (city: string, apiKey: string): Promise<WeatherData> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data for ${city}. Status: ${response.status}`);
  }
  const data = await response.json();
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  return { temperature, description, icon };
};

const fetchForecastData = async (city: string, apiKey: string): Promise<ForecastData[]> => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    alert(`Please Enter Correct  city name ${city}. Status: ${response.status}`);
  }
  const data = await response.json();
  return data.list.slice(0, 5).map((item: any) => {
    const date = new Date(item.dt_txt);
    const temperature = Math.round(item.main.temp);
    const description = item.weather[0].description;
    const icon = item.weather[0].icon;

    return { date, temperature, description, icon };
  });
};

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const apiKey = '5f08515c03b0a9325e4244a388ea1ad6';

  const handleSearch = async () => {
    try {
      if(city.length>0){
        const [weather, forecast] = await Promise.all([
          fetchWeatherData(city, apiKey),
          fetchForecastData(city, apiKey),
        ]);
  
        setWeatherData(weather);
        setForecastData(forecast);

      }else{
        alert(" Enter city name");
      }
    } 
    catch (error) {
      console.error(error);
    }
  };

  return (  
    <div className="container">
       <h1 style={{color:'orange'}}> Search Your  city for Weather Updates</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          <h2>Current Weather for {city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/w/${weatherData.icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
      {forecastData.length > 0 && (
        <div>
          <h2>5-day Forecast for {city}</h2>
          <ul>
            {forecastData.map((data) => (
              <li key={data.date.toISOString()}>
                <p>{data.date.toLocaleDateString()}</p>
                <p>Temperature: {data.temperature}°C</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
     )
      }
      export default WeatherApp;
               
