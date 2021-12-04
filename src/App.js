import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10 px;
  border-radius: 4px;
  width:380px;
  background: white;
  familyfont: Montserrat;
`;

const AppLabel = styled.span`
color:black;
font-size:25px;
font-weight: bold;
`;

function App() {
  const [city, updateCity]= useState();
  const [weather, updateWeather]= useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = 
          await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5571b63116f47df9e162e6fa2dc68b4e&lang=fr`,);
          // await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5571b63116f47df9e162e6fa2dc68b4e`,);
      updateWeather(response.data);
         };
         return (
          <Container>
            <AppLabel>Lebellois-Meteo</AppLabel>
            {city && weather ? (
              <WeatherComponent weather={weather} city={city} />
            ) : (
              <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
            )}
          </Container>
        );
}

export default App;
